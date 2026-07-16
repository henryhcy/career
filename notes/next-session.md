# Open threads

Picking back up on the Windows machine. Start with `./bin/bootstrap`, then `./bin/board`.

## ML job prep plan is now live (added 2026-07-16)

The 7-track prep plan is integrated: [ml-job-prep-plan.md](ml-job-prep-plan.md) (schedule,
milestones), [roadmap.md](roadmap.md) (the whole search as checkable weeks),
[study-guide.md](study-guide.md) (the day-to-day LeetCode routine + review checklist for the
two daily habits), [interview-prep.md](interview-prep.md) (stories, technical review),
[amazon-lp.md](amazon-lp.md) (LP map). Seven target companies are on the board as leads; the
daily habits now mirror the build phase (LeetCode + study block). Coding prep is **LeetCode**
(Premium — company tags + frequency sort), not NeetCode.

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

## Needs Chengyang

- [ ] **Google Scholar URL** — `career-docs/resume.tex` links to bare
  `scholar.google.com` as a placeholder. The CV had it hyperlinked but the PDF text
  extraction lost the target.
- [ ] **Confirm `resume.tex` compiles in Overleaf.** The preamble pulls in
  `fontawesome5`; if it errors, drop it. Also check Overleaf's main document is set
  to `resume.tex` (the default `main.tex` was deleted).
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
