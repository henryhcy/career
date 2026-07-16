# Open threads

Picking back up on the Windows machine. Start with `./bin/bootstrap`, then `./bin/board`.

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

- [ ] **Concretize the two placeholder leads** — `quant-firms` and `health-ai-nyc` are
  category placeholders; pick 2–3 real firms each (candidates listed in their card notes)
  and split them into real cards.
- [ ] **Jul 26 milestone** — 10–12 Fall internship apps, resume final. Amazon intern app is
  the first concrete deadline on the board.
- [ ] **Start drafting STAR stories** — the five in interview-prep.md, then map to Amazon LPs.
- [ ] **Create the `ml-job-prep` code repo** when you write your first solution. Code does
  NOT go in `career` (prose-only) — see the "Where the code lives" section of the plan.

## Resume conversion done (2026-07-16)

`resume.tex` was converted from academic-CV style to a **one-page, Applied-Scientist-forward**
industry resume (in sync across local / Overleaf / GitHub at commit `54c915e`):

- Scholar URL fixed (real profile); GitHub added to the header.
- Research now 2 lead projects: **TACO** (CHASE 2025) and **CRAFT** (Temporal Symptom Timeline
  Extraction — **accepted at SIAM SDM 2026**, added to Publications). **MERMAID was dropped**
  entirely (rejected, being reworked, memory contribution uncertain) — reversible.
- **FAIR-Q** also dropped for space. SMILE-College + the NL-querying paper stay in Publications.
- Bullets tightened to impact-first; HALO metrics kept (cut to 2 bullets for length).
- Skills reorganized; **added scikit-learn, NumPy, pandas, RAG, "multi-agent systems"** as
  near-certain given the work — Chengyang to confirm or cut.
- Also added `career-docs/.gitattributes` (`* text=auto eol=lf`): the repo had none, so a
  Windows clone had checked out CRLF and one sync baked CRLF into every file. Fixed + normalized.

## Needs Chengyang

- [ ] **Compile `resume.tex` in Overleaf and confirm it fits on one page.** If it spills,
  tell me and I'll trim (first cuts: MERMAID 2nd bullet, the Education focus line). Also confirm
  Overleaf's main document is set to `resume.tex`, and that `fontawesome5` (pulled in by
  `style.sty`, currently unused) doesn't error — drop it from the preamble if it does.
- [ ] **Confirm the skill additions** (scikit-learn, NumPy, pandas, RAG, multi-agent systems).
- [ ] **CRAFT author list** — title + details are now finalized from the SDM 2026 paper PDF
  ("CRAFT: LLM-Based Iterative Refinement for Temporal Reasoning over Clinical Narratives";
  MedTempo, 5,347 narratives / 3,166 labeled). The paper PDF is **anonymized**, so the
  Publications entry still uses "He, Chengyang, et al." — replace with the full author list
  (see the `TODO` in `resume.tex`).
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
