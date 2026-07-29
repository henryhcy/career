# Working in this repo

This is the hub of a two-repo job search setup. Read this before acting.

## The two repos

| Repo | Path | Holds |
| --- | --- | --- |
| `career` (this one) | wherever it's cloned | Tracker, company research, interview notes. The hub — work starts here. |
| `career-docs` | `../career-docs`, a sibling | LaTeX sources for the resume and cover letters. |

Always refer to the docs repo as `../career-docs` — a sibling of this one. There is
no symlink; Windows can't create one without developer mode, and a path that works
on one of his machines but not the other is worse than no path.

Documents live in `career-docs`, never here — no `.tex`, no resume or cover letter
PDFs in this repo. This one is prose: what you applied to, what you learned, what to prep.

`career-docs` is **not** a submodule — it's an independent sibling repo. Don't try to
commit it from here; `cd` into it and commit there.

## career-docs is wired to Overleaf

`career-docs` has two git remotes holding identical commits on `main`:

- `overleaf` → `https://git.overleaf.com/6a580fd1b9cdc025e543a7f7` (where Chengyang edits and compiles)
- `origin` → `https://github.com/henryhcy/career-docs` (history and backup)

**Every change to `career-docs` must be pushed to both remotes**, or the two drift apart:

```bash
cd ../career-docs
git add -A && git commit -m "..."
git push overleaf main && git push origin main
```

Or just run `./bin/docs-sync` from this repo, which pulls Overleaf-side edits and
pushes everything to both remotes.

Auth is a token in the OS keychain. Never ask for it, never print it, never commit
it. If a push fails with an auth error, say so and point at `./bin/bootstrap`,
which prints the re-add command. Don't try to work around it.

## Chengyang works across several machines

**His main machine is Windows, using Git Bash.** He also uses a Mac. Everything in
`bin/` must run on both — bash that works under Git Bash, and Python that's
stdlib-only. Before adding tooling, check it against both:

- No symlinks (Windows blocks them without developer mode).
- No `pip install` / `npm install` — assume nothing beyond Python 3 and git.
- Keep `.gitattributes` pinning `eol=lf`. Git for Windows rewrites checkouts to
  CRLF by default, and a CRLF shebang makes bash fail with "bad interpreter".
- Prefer POSIX-portable shell. No `sed -i ''` (that's BSD-only and breaks on
  Windows and Linux), no macOS-only flags.

Assume this checkout may be fresh. Nothing may be set up locally yet.

- If `career-docs` is missing or the `overleaf` remote is absent, the fix is
  `./bin/bootstrap` — don't hand-patch it, and don't re-derive the setup by hand.
  That script is the single source of truth for local state that git can't carry.
- Anything worth keeping must be committed and pushed. Never leave findings,
  drafts, or decisions only in a local file or in chat — he won't have them
  tomorrow on another machine. If something is worth knowing later, it goes in
  a tracked file in one of these two repos.
- Keep this file current. It's the handoff between sessions and machines; if
  the setup changes, update it in the same commit.

**Always pull from `overleaf` before editing** any file in `career-docs`. He edits
in the browser, so local is stale by default. Overleaf's bridge rejects
non-fast-forward pushes, so clobbering his edits is a real risk.

## The workflow this supports

Applying to a company usually touches both repos:

1. Log the role in `applications.json`, same day. Never hand-edit `applications.md` —
   it's generated; run `./bin/render` after changing the JSON.
2. Start `companies/<company>.md` from `companies/_template.md` for research.
3. Copy `../career-docs/cover-letters/_template.tex` to `../career-docs/cover-letters/<company>.tex`.
4. Run `./bin/docs-sync -m "add <company> letter"` so it reaches Overleaf.
5. Tell Chengyang to switch Overleaf's main document to compile the new letter.

## The board

`./bin/board` serves `board/` on 127.0.0.1 and reads/writes the JSON in place, so
every click is a git-tracked change. Python 3 stdlib only — never add a dependency
to it. It binds to localhost deliberately; don't make it listen on 0.0.0.0.

| File | Role |
| --- | --- |
| `applications.json` | **Source of truth** for the pipeline |
| `habits.json` | Daily checks and their completion log |
| `roadmap.json` | Week-by-week plan + per-task done map; the board's Roadmap panel |
| `applications.md` | **Generated.** Never hand-edit — `./bin/render` overwrites it |
| `board/` | Server, renderer, and UI |

`roadmap.json` is the single source of truth for the weekly plan — rebuilt Jul 2026 around
the May-2027 two-wave strategy in `target-roles.md` / `job-search-strategy.md` /
`interview-prep-plan.md` (repo root). `notes/roadmap.md` is now just a pointer to it. The
board reads/writes the JSON; the client PUTs the whole object back, so `phases` round-trips
untouched and only `done` changes from the UI.

Status vocabulary is fixed. `lead` → `applied` → `screen` → `interviewing` are the
pipeline; `rejected` / `withdrawn` / `ghosted` are terminal. Don't invent new ones —
`board/app.js` and `board/render.py` both hardcode this list and would need updating
together. (`offer` was removed for now; both files carry a comment on how to restore
it, and the `--stage-offer` green stays defined in `style.css` for when it comes back.)

Board colors come from a validated palette: stages use an ordinal blue ramp and
terminal states are muted. Every colored chip carries a text label so color never
signals alone. Don't add ad-hoc hex values.

## Conventions

- Styling lives only in `career-docs/shared/style.sty`. Never inline it in a document.
- One cover letter per company: `cover-letters/<company>.tex`, lowercase, hyphenated.
- Compiled PDFs are gitignored — download from Overleaf rather than committing them.
- Only one Overleaf main document compiles at a time; switching is manual in the UI.

## Don't put these in either repo

Both repos are private, but private is not secure. Keep out: offer letters, signed
agreements, ID numbers, and other people's personal contact details. Reference them
by name and keep the artifacts elsewhere.
