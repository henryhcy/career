# Open threads

Picking back up on the Windows machine. Start with `./bin/bootstrap`, then `./bin/board`.

## Where you left off (2026-08-05, Wed — week `fnd2`, day 3 of 7)

Closed **238 Product of Array Except Self** (the last Week-1 coding carry-over) and
**125 Valid Palindrome** (first of the Two Pointers set). Week `fnd2` now stands at **3/25**.

Pick up here:

- **`fnd2-exp` — experimentation, started but not done.** Wednesday's study block per the
  [drill cadence](interview-drills.md). Ran as a spoken-answer drill; first question was on the
  table and unanswered: *design the A/B test for a clinical note-summarization model — unit of
  randomization, primary metric, run length.* Then power analysis, sample size, novelty and
  network effects, and making **"failing to reject H₀ ≠ accepting H₀"** fluent.
- **Coding is blocked on missing infrastructure.** Solutions belong in an `ml-job-prep` repo
  (see "Where the code lives" below); that repo still does not exist. Create it before the next
  coding session.
- **`fnd2` is over-committed.** 17 of the 20 coding problems remain against 4 days left and a
  one-problem-a-day habit. [interview-drills.md](interview-drills.md) already calls this the
  heaviest week of Foundation and says to **cut coding volume before cutting a pillar**. Decide
  at the board rather than letting it roll a second time.

## Strategy pivot to May 2027 (added 2026-07-29)

Locked a **May 2027 graduation** and a **two-wave** plan: big-tech new-grad in fall 2026
(Track B) and strong-fit full-time in spring 2027 (Track A); **no internship**. Authoritative
now: [../target-roles.md](../target-roles.md), [../job-search-strategy.md](../job-search-strategy.md),
[../interview-prep-plan.md](../interview-prep-plan.md) (repo root).

Done in response:
- **`roadmap.json` rebuilt** around the new timeline (Foundation → Big-Tech Wave → Bridge →
  Strong-Fit Wave → Graduate); `done` reset (old task ids are gone).
- **CV/resume:** graduation → "Expected May 2027"; CV research interests reframed method-first;
  `profile.json` aligned (May 2027, internship closed, broader role list).
- **Old notes reconciled:** `roadmap.md` is now a pointer; `ml-job-prep-plan.md` carries a
  "superseded" banner (its 7 tracks/resources stay useful); `study-guide.md` points to the new
  roadmap (its techniques stay valid).
- **`notes/interview-drills.md`** (added 2026-07-29): detailed **8-week drill plan** for coding
  + system design + behavioral (Jul 27 – Sep 20), the granular layer under `roadmap.json`.

Still to reconcile / decide:
- ~~Board leads are the OLD target list.~~ **Done** (commit `237956e`) — the board now carries 21
  Applied-Scientist-framed leads built from `target-roles.md`, health-tech / clinical-NLP included
  (Abridge, Komodo, Insitro, Optum, Pfizer, Novartis, Genentech, AI2, Oracle Health, MSR Health Futures).
- Everything under "ML job prep plan is now live" below predates the pivot — treat as history.

## ML job prep plan is now live (added 2026-07-16)

The 7-track prep plan is integrated: [ml-job-prep-plan.md](ml-job-prep-plan.md) (schedule,
milestones), [roadmap.md](roadmap.md) (the whole search as checkable weeks),
[study-guide.md](study-guide.md) (the day-to-day LeetCode routine + review checklist for the
two daily habits), [interview-prep.md](interview-prep.md) (stories, technical review),
[amazon-lp.md](amazon-lp.md) (LP map), [resume-prep.md](resume-prep.md) (CV → industry resume,
LinkedIn), [job-search-ops.md](job-search-ops.md) (sourcing, referral sweep, application
hygiene). Seven target companies are on the board as leads; the daily habits now mirror the
build phase (LeetCode + study block). Coding prep is **LeetCode** (Premium — company tags +
frequency sort), not NeetCode.

The board's **Offer** stage was removed for now (pipeline is lead → applied → screen →
interviewing). Both `board/app.js` and `board/render.py` carry a comment on how to restore it.

Next actions:

- [x] **Concretize the two placeholder leads** — done; `quant-firms` and `health-ai-nyc` are gone
  from `applications.json`, replaced by named companies in the 21-lead rebuild.
- [ ] **Foundation phase (now, per `roadmap.json`)** — rebuild coding fluency, refresh ML
  breadth, lock the method-first narrative, warm referrals for both tracks. (The old "Jul 26
  internship apps" milestone is void — internship path closed by the May 2027 date.)
- [ ] **Start drafting STAR stories** — the five in interview-prep.md, then map to Amazon LPs.
- [ ] **Create the `ml-job-prep` code repo** when you write your first solution. Code does
  NOT go in `career` (prose-only) — see the "Where the code lives" section of the plan.
- [ ] **`profile.json`** (repo root) is the single source of truth for application autofill —
  used to populate Simplify/Indeed once and to copy from on forms. Still needs Chengyang to
  fill `workEligibility` (US work authorization + sponsorship). No Indeed API link is possible
  (deprecated for job seekers; scraping is against ToS) — autofill via Simplify is the path.

## Resume + CV (2026-07-16)

Two profile documents now live in `career-docs`, sharing `shared/style.sty`
(in sync across local / Overleaf / GitHub at commit `6acbff5`):

- **`cv.tex`** — the full, detailed CV (the source of record). Research Experience lists only
  peer-reviewed/published work — **CRAFT, TACO, SMILE-College** (MERMAID and FAIR-Q were removed
  from there as not peer-reviewed). **MERMAID stays in Publications** as an arXiv preprint; FAIR-Q
  is out entirely (not archived). Full work history (Cloudwalk + IBM), TA + research interests.
  Multi-page, 0.8in margins.
- **`resume.tex`** — the **one-page, Applied-Scientist-forward** industry resume, derived from
  the CV. Lean: CRAFT + TACO (1 bullet each), 3 publications, HALO (2 bullets), BU RA (1 bullet),
  skills. 0.6in margins.

Shared facts (both docs): Scholar URL fixed; GitHub in header; CRAFT finalized from the SDM 2026
paper (title, MedTempo, 5,347 / 3,166); skills gained scikit-learn, NumPy, pandas, RAG,
"multi-agent systems". Also added `career-docs/.gitattributes` (`* text=auto eol=lf`) to fix a
CRLF-normalization issue from the first sync.

**Plan:** get feedback on both from Chengyang's industry friends, then iterate.

## Needs Chengyang

- [ ] **Compile both in Overleaf** (switch the main document under Menu → Settings). Confirm
  `resume.tex` is one page; if it spills, next cut is the CRAFT bullet's tail or a skills line.
  Confirm `fontawesome5` (pulled in by `style.sty`, currently unused) doesn't error — drop it if it does.
- [ ] **Send both to industry friends for feedback**, then bring notes back to iterate.
- [ ] **Confirm the skill additions** (scikit-learn, NumPy, pandas, RAG, multi-agent systems).
- [ ] **CRAFT author list** — the paper PDF is **anonymized**, so both docs use
  "He, Chengyang, et al." Replace with the full author list (see the `TODO` in `resume.tex` /
  `cv.tex`).
- [ ] **Look at the board.** It was built and API-tested on a Mac but never viewed in
  a browser — there was no screenshot tool. Layout, spacing, and dark mode are
  unverified by eye.

## Unverified

- **First Windows run.** CI now exercises `bin/*` and the board on `windows-latest`
  under Git Bash, so the known platform traps are covered. A real run on Chengyang's
  machine is still the proof.

## Decided, don't relitigate

- **No virtualenv.** The board is Python stdlib only — nothing to isolate — and venvs
  hold absolute paths and platform-specific binaries, so one built on a Mac is inert
  on Windows. CI is what actually de-risks the environment.
- **No symlink** to `career-docs`. Windows needs developer mode for symlinks; a path
  that resolves on one machine and not the other is worse than none. Use
  `../career-docs`.
- **No git submodule.** The repos have independent lifecycles; a submodule would make
  every edit a two-step commit for no benefit.
- **JSON is the source of truth**, `applications.md` is generated. Markdown tables
  break on a pipe character in a note.

## Ideas not started

- **Devcontainer / Codespaces** — the real version of "an environment on GitHub":
  edit from any machine in a browser, Python preinstalled. Worth it only if Chengyang
  wants to work somewhere without a checkout.
- **Pipeline stats over time** — considered for the board and deliberately cut; only
  the daily habit checklist was wanted. Revisit once there's real data to plot.
- **Cover letter drafting from a job description** — the template has structural
  prompts but nothing generates drafts yet.
