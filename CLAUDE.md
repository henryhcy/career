# Working in this repo

This is the hub of a two-repo job search setup. Read this before acting.

## The two repos

| Repo | Path | Holds |
| --- | --- | --- |
| `career` (this one) | `~/Downloads/career` | Tracker, company research, interview notes. The hub — work starts here. |
| `career-docs` | `~/Downloads/career-docs` | LaTeX sources for the resume and cover letters. Also symlinked as `./docs`. |

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
cd ~/Downloads/career-docs
git add -A && git commit -m "..."
git push overleaf main && git push origin main
```

Or just run `./bin/docs-sync` from this repo, which pulls Overleaf-side edits and
pushes everything to both remotes.

Auth is a token in the macOS keychain. Never ask for it, never print it, never
commit it. If a push fails with an auth error, say so and let Chengyang re-add it.

**Always pull from `overleaf` before editing** any file in `career-docs`. He edits
in the browser, so local is stale by default. Overleaf's bridge rejects
non-fast-forward pushes, so clobbering his edits is a real risk.

## The workflow this supports

Applying to a company usually touches both repos:

1. Log the role in `applications.md` under Active, same day.
2. Start `companies/<company>.md` from `companies/_template.md` for research.
3. Copy `docs/cover-letters/_template.tex` to `docs/cover-letters/<company>.tex`.
4. Commit and push `career-docs` to both remotes so it shows up in Overleaf.
5. Tell Chengyang to switch Overleaf's main document to compile the new letter.

## Conventions

- Styling lives only in `career-docs/shared/style.sty`. Never inline it in a document.
- One cover letter per company: `cover-letters/<company>.tex`, lowercase, hyphenated.
- Compiled PDFs are gitignored — download from Overleaf rather than committing them.
- `applications.md` status vocabulary is fixed: `applied` → `screen` → `interviewing` →
  `offer` / `rejected` / `withdrawn` / `ghosted`. Don't invent new statuses.
- Only one Overleaf main document compiles at a time; switching is manual in the UI.

## Don't put these in either repo

Both repos are private, but private is not secure. Keep out: offer letters, signed
agreements, ID numbers, and other people's personal contact details. Reference them
by name and keep the artifacts elsewhere.
