"""Regenerate applications.md from applications.json.

applications.json is the source of truth. The markdown is a generated view so the
tracker still reads well on GitHub and in a diff.
"""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = ROOT / "applications.json"
MD_PATH = ROOT / "applications.md"

# Ordered pipeline. Terminal states are listed separately because they leave the funnel.
PIPELINE = ["lead", "applied", "screen", "interviewing", "offer"]
TERMINAL = ["rejected", "withdrawn", "ghosted"]
STATUSES = PIPELINE + TERMINAL


def load() -> dict:
    if not JSON_PATH.exists():
        return {"applications": []}
    with JSON_PATH.open(encoding="utf-8") as f:
        return json.load(f)


def _cell(value: str) -> str:
    # A literal pipe would split the row into extra columns.
    return (value or "").replace("|", "\\|").replace("\n", " ").strip() or "—"


def _row(app: dict, fields: list[str]) -> str:
    return "| " + " | ".join(_cell(app.get(f, "")) for f in fields) + " |"


def render(data: dict) -> str:
    apps = data.get("applications", [])
    by_status = {s: [a for a in apps if a.get("status") == s] for s in STATUSES}

    active = [a for a in apps if a.get("status") in PIPELINE and a.get("status") != "lead"]
    leads = by_status["lead"]
    closed = [a for a in apps if a.get("status") in TERMINAL]

    out: list[str] = []
    out.append("# Applications")
    out.append("")
    out.append("<!-- GENERATED FILE — do not edit by hand.")
    out.append("     Source of truth is applications.json. Regenerate with ./bin/render")
    out.append("     or by saving from the board (./bin/board). -->")
    out.append("")
    # No generation timestamp: it would rewrite this file every day even with no
    # data change, and git already records when things moved.
    out.append(f"_{len(active)} active · {len(leads)} leads · {len(closed)} closed._")
    out.append("")

    counts = " · ".join(f"**{len(by_status[s])}** {s}" for s in PIPELINE if by_status[s])
    if counts:
        out.append(counts)
        out.append("")

    out.append("## Active")
    out.append("")
    if active:
        out.append("| Company | Role | Status | Applied | Last touch | Next step |")
        out.append("| --- | --- | --- | --- | --- | --- |")
        for a in sorted(active, key=lambda a: PIPELINE.index(a.get("status", "applied")), reverse=True):
            out.append(_row(a, ["company", "role", "status", "applied", "lastTouch", "nextStep"]))
    else:
        out.append("_Nothing in flight._")
    out.append("")

    out.append("## Leads")
    out.append("")
    if leads:
        out.append("| Company | Role | Source | Deadline | Why interesting |")
        out.append("| --- | --- | --- | --- | --- |")
        for a in leads:
            out.append(_row(a, ["company", "role", "source", "nextStepDate", "notes"]))
    else:
        out.append("_No leads logged._")
    out.append("")

    out.append("## Closed")
    out.append("")
    if closed:
        out.append("| Company | Role | Outcome | Applied | Notes |")
        out.append("| --- | --- | --- | --- | --- |")
        for a in closed:
            out.append(_row(a, ["company", "role", "status", "applied", "notes"]))
    else:
        out.append("_Nothing closed yet._")
    out.append("")

    return "\n".join(out) + "\n"


def main() -> None:
    # Path.write_text gained `newline` only in 3.10; open() keeps this working on 3.7+.
    with MD_PATH.open("w", encoding="utf-8", newline="\n") as f:
        f.write(render(load()))
    print(f"wrote {MD_PATH.name}")


if __name__ == "__main__":
    main()
