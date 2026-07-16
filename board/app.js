const PIPELINE = [
  { id: "lead", label: "Leads", color: "var(--stage-lead)" },
  { id: "applied", label: "Applied", color: "var(--stage-applied)" },
  { id: "screen", label: "Screen", color: "var(--stage-screen)" },
  { id: "interviewing", label: "Interviewing", color: "var(--stage-inter)" },
  // "offer" stage omitted for now. To restore: add
  //   { id: "offer", label: "Offer", color: "var(--stage-offer)" },
  // here AND in board/render.py PIPELINE, and bump the .board grid to repeat(5, …).
];
const TERMINAL = ["rejected", "withdrawn", "ghosted"];
const ALL_STATUSES = [...PIPELINE.map((s) => s.id), ...TERMINAL];

// An application with no contact in this many days is worth a nudge.
const STALE_DAYS = 10;
const HISTORY_DAYS = 14;

let state = { applications: [], habits: { habits: [], log: {} }, today: "" };
let editing = null;

const $ = (id) => document.getElementById(id);
const iso = (d) => d.toISOString().slice(0, 10);
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000);

function toast(msg, isError = false) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.toggle("error", isError);
  t.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove("show"), isError ? 4000 : 1200);
}

async function load() {
  const r = await fetch("/api/state");
  state = await r.json();
  render();
}

async function save(what) {
  const body = what === "applications"
    ? { applications: state.applications }
    : state.habits;
  try {
    const r = await fetch(`/api/${what}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(await r.text());
    toast("Saved");
  } catch (e) {
    // Never let a failed write look like a success — the file on disk is the point.
    toast(`Save failed: ${e.message}`, true);
  }
}

/* ---------- applications ---------- */

function staleness(app) {
  if (!app.lastTouch || !["applied", "screen", "interviewing"].includes(app.status)) return null;
  const d = daysBetween(app.lastTouch, state.today);
  return d >= STALE_DAYS ? d : null;
}

function cardEl(app) {
  const el = document.createElement("div");
  el.className = "card";
  el.draggable = true;
  el.dataset.id = app.id;

  const co = document.createElement("div");
  co.className = "co";
  co.textContent = app.company || "—";
  el.append(co);

  if (app.role) {
    const r = document.createElement("div");
    r.className = "role";
    r.textContent = app.role;
    el.append(r);
  }

  const bits = [];
  if (app.nextStep) bits.push(app.nextStep);
  const stale = staleness(app);
  const meta = document.createElement("div");
  meta.className = "meta";
  if (stale) {
    const s = document.createElement("span");
    s.className = "stale";
    s.textContent = `quiet ${stale}d`;
    meta.append(s);
    if (bits.length) meta.append(` · ${bits.join(" · ")}`);
  } else if (bits.length) {
    meta.textContent = bits.join(" · ");
  } else if (app.applied) {
    meta.textContent = app.applied;
  }
  if (meta.textContent || meta.children.length) el.append(meta);

  el.addEventListener("click", () => openDialog(app));
  el.addEventListener("dragstart", (e) => {
    el.classList.add("dragging");
    e.dataTransfer.setData("text/plain", app.id);
    e.dataTransfer.effectAllowed = "move";
  });
  el.addEventListener("dragend", () => el.classList.remove("dragging"));
  return el;
}

function renderTiles() {
  const tiles = $("tiles");
  tiles.textContent = "";
  for (const s of PIPELINE) {
    const n = state.applications.filter((a) => a.status === s.id).length;
    const t = document.createElement("div");
    t.className = "tile";
    const num = document.createElement("div");
    num.className = "n";
    num.textContent = n;
    const k = document.createElement("div");
    k.className = "k";
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.background = s.color;
    k.append(dot, document.createTextNode(s.label));
    t.append(num, k);
    tiles.append(t);
  }
}

function renderBoard() {
  const board = $("board");
  board.textContent = "";

  for (const s of PIPELINE) {
    const col = document.createElement("section");
    col.className = "col";
    col.dataset.status = s.id;

    const apps = state.applications.filter((a) => a.status === s.id);

    const h = document.createElement("h2");
    const bar = document.createElement("span");
    bar.className = "bar";
    bar.style.background = s.color;
    const count = document.createElement("span");
    count.className = "count";
    count.textContent = apps.length || "";
    h.append(bar, document.createTextNode(s.label), count);
    col.append(h);

    if (!apps.length) {
      const e = document.createElement("div");
      e.className = "empty";
      e.textContent = "—";
      col.append(e);
    }
    apps.forEach((a) => col.append(cardEl(a)));

    col.addEventListener("dragover", (e) => {
      e.preventDefault();
      col.classList.add("drag-over");
    });
    col.addEventListener("dragleave", () => col.classList.remove("drag-over"));
    col.addEventListener("drop", (e) => {
      e.preventDefault();
      col.classList.remove("drag-over");
      const app = state.applications.find((a) => a.id === e.dataTransfer.getData("text/plain"));
      if (!app || app.status === s.id) return;
      app.status = s.id;
      app.lastTouch = state.today; // moving a card is contact; keep staleness honest
      render();
      save("applications");
    });

    board.append(col);
  }

  const closed = state.applications.filter((a) => TERMINAL.includes(a.status));
  $("closed-wrap").style.display = closed.length ? "" : "none";
  $("closed-summary").textContent = `Closed (${closed.length})`;
  const list = $("closed-list");
  list.textContent = "";
  closed.forEach((a) => {
    const c = cardEl(a);
    c.draggable = false;
    list.append(c);
  });
}

/* ---------- habits ---------- */

function streakFor(id) {
  const log = state.habits.log || {};
  let n = 0;
  const d = new Date(state.today + "T00:00:00");
  // Today not yet ticked shouldn't read as a broken streak — start from yesterday.
  if (!(log[iso(d)] || []).includes(id)) d.setDate(d.getDate() - 1);
  for (;;) {
    if (!(log[iso(d)] || []).includes(id)) break;
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

function toggleHabit(id, on) {
  const log = (state.habits.log ||= {});
  const day = (log[state.today] ||= []);
  const i = day.indexOf(id);
  if (on && i === -1) day.push(id);
  if (!on && i !== -1) day.splice(i, 1);
  if (!day.length) delete log[state.today];
  render();
  save("habits");
}

function renderHabits() {
  const wrap = $("habits");
  wrap.textContent = "";
  const habits = state.habits.habits || [];
  const done = state.habits.log?.[state.today] || [];

  $("habit-sub").textContent = habits.length
    ? `${done.length} of ${habits.length} done today`
    : "Nothing tracked yet.";

  for (const h of habits) {
    const row = document.createElement("div");
    row.className = "habit" + (done.includes(h.id) ? " done" : "");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = `h-${h.id}`;
    cb.checked = done.includes(h.id);
    cb.addEventListener("change", () => toggleHabit(h.id, cb.checked));

    const label = document.createElement("label");
    label.htmlFor = cb.id;
    label.textContent = h.label;

    const n = streakFor(h.id);
    const streak = document.createElement("span");
    streak.className = "streak";
    streak.textContent = n ? `${n}d` : "";
    streak.title = n ? `${n} day streak` : "";

    const x = document.createElement("button");
    x.className = "x";
    x.textContent = "×";
    x.title = "Remove this check";
    x.addEventListener("click", () => {
      state.habits.habits = habits.filter((o) => o.id !== h.id);
      render();
      save("habits");
    });

    row.append(cb, label, streak, x);
    wrap.append(row);
  }
}

function renderHistory() {
  const wrap = $("history");
  wrap.textContent = "";
  const habits = state.habits.habits || [];
  if (!habits.length) return;

  const days = [];
  for (let i = HISTORY_DAYS - 1; i >= 0; i--) {
    const d = new Date(state.today + "T00:00:00");
    d.setDate(d.getDate() - i);
    days.push(iso(d));
  }

  for (const h of habits) {
    const row = document.createElement("div");
    row.className = "row";
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = h.label;
    name.title = h.label;
    row.append(name);
    for (const day of days) {
      const c = document.createElement("span");
      const on = (state.habits.log?.[day] || []).includes(h.id);
      c.className = "cell" + (on ? " on" : "") + (day === state.today ? " today" : "");
      c.title = `${h.label} — ${day}: ${on ? "done" : "not done"}`;
      row.append(c);
    }
    wrap.append(row);
  }

  const legend = document.createElement("div");
  legend.className = "legend";
  legend.textContent = `Last ${HISTORY_DAYS} days · filled = done · outlined = today`;
  wrap.append(legend);
}

/* ---------- dialog ---------- */

function openDialog(app) {
  editing = app;
  $("dlg-title").textContent = app ? "Edit application" : "Add application";
  $("del").style.display = app ? "" : "none";

  const sel = $("f-status");
  sel.textContent = "";
  for (const s of ALL_STATUSES) {
    const o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    sel.append(o);
  }

  const v = app || { status: "lead", applied: state.today, lastTouch: state.today };
  for (const f of ["company", "role", "status", "source", "applied", "lastTouch", "nextStep", "nextStepDate", "link", "notes"]) {
    $(`f-${f}`).value = v[f] || "";
  }
  $("dlg").showModal();
}

function submit(e) {
  e.preventDefault();
  const get = (f) => $(`f-${f}`).value.trim();
  const company = get("company");
  if (!company) return;

  const fields = {
    company,
    role: get("role"),
    status: get("status"),
    source: get("source"),
    applied: get("applied"),
    lastTouch: get("lastTouch"),
    nextStep: get("nextStep"),
    nextStepDate: get("nextStepDate"),
    link: get("link"),
    notes: get("notes"),
  };

  if (editing) {
    Object.assign(editing, fields);
  } else {
    const base = company.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "role";
    let id = base, n = 2;
    while (state.applications.some((a) => a.id === id)) id = `${base}-${n++}`;
    state.applications.push({ id, ...fields });
  }
  $("dlg").close();
  render();
  save("applications");
}

/* ---------- wiring ---------- */

function render() {
  $("today").textContent = new Date(state.today + "T00:00:00").toLocaleDateString(undefined, {
    weekday: "long", month: "long", day: "numeric",
  });
  renderTiles();
  renderBoard();
  renderHabits();
  renderHistory();
}

$("add").addEventListener("click", () => openDialog(null));
$("cancel").addEventListener("click", () => $("dlg").close());
$("form").addEventListener("submit", submit);
$("del").addEventListener("click", () => {
  if (!editing || !confirm(`Delete ${editing.company}? This can't be undone from here.`)) return;
  state.applications = state.applications.filter((a) => a.id !== editing.id);
  $("dlg").close();
  render();
  save("applications");
});

$("habit-add").addEventListener("click", () => {
  const input = $("habit-new");
  const label = input.value.trim();
  if (!label) return;
  const base = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "check";
  let id = base, n = 2;
  while ((state.habits.habits || []).some((h) => h.id === id)) id = `${base}-${n++}`;
  (state.habits.habits ||= []).push({ id, label });
  input.value = "";
  render();
  save("habits");
});
$("habit-new").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); $("habit-add").click(); }
});

load();
