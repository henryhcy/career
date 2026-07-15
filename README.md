# Career

Private hub for my job search — the board, the tracker, company research, and prep.
Resume and cover letters live next door in
[career-docs](https://github.com/henryhcy/career-docs), synced with Overleaf.

```
career/                    <- you are here
  board/                   <- local web app: kanban + daily checks
  applications.json        <- source of truth
  applications.md          <- generated view, pretty on GitHub

career-docs/               <- LaTeX  <--git bridge-->  Overleaf
```

## Setting up a machine

```bash
git clone https://github.com/henryhcy/career.git
cd career && ./bin/bootstrap
```

Works on Windows (Git Bash), macOS, and Linux. `bootstrap` clones `career-docs`
beside this repo, adds the `overleaf` remote, picks the right credential helper,
and checks for Python 3. It's idempotent — re-run it to repair a broken setup.

The one thing it can't supply is the Overleaf token; that's a secret and stays out
of git. Generate one at Overleaf → Account Settings → Git Integration, and
bootstrap prints the command to store it in your OS keychain.

Requirements: git (with Git Bash on Windows) and Python 3. Nothing to `pip install`.

## The board

```bash
./bin/board          # http://127.0.0.1:4173, opens your browser
```

Drag cards between stages, click one to edit, tick off your daily checks. Every
change writes straight to `applications.json` / `habits.json` and regenerates
`applications.md` — so when you're done, commit:

```bash
git add -A && git commit -m "update pipeline" && git push
```

It binds to localhost only. Nothing about your job search goes on the network.

Cards go red once an application has been quiet for 10 days, so follow-ups surface
themselves rather than waiting for you to remember.

## Layout

| Path | What lives here |
| --- | --- |
| `applications.json` | Source of truth for the pipeline — the board writes this |
| `habits.json` | Daily checks and their history |
| `applications.md` | **Generated** — don't hand-edit; `bin/render` overwrites it |
| `board/` | The local web app (Python stdlib server + vanilla JS) |
| `companies/` | One note per company: research, contacts, comp, impressions |
| `notes/` | Interview prep, behavioral stories, technical review, retros |
| `bin/bootstrap` | Set up a new machine |
| `bin/board` | Open the board |
| `bin/docs-sync` | Sync `career-docs` between Overleaf and GitHub |
| `bin/render` | Regenerate `applications.md` from the JSON |

No documents live here — resume and cover letters are in `career-docs`, and
compiled PDFs get downloaded from Overleaf when you need to send one.

## Applying to somewhere

1. Add it on the board, same day. Status `lead` until you actually apply.
2. Start `companies/<company>.md` from the template for research and contacts.
3. Copy `../career-docs/cover-letters/_template.tex` to `<company>.tex`, then
   `./bin/docs-sync -m "add <company> letter"` to push it to Overleaf.
4. Write and compile the letter in Overleaf, download the PDF, send it.
5. Commit here so the tracker matches reality.

After every interview, write a retro in `notes/` while it's fresh — what was asked,
what I fumbled, what to tighten.

## A note on what goes in here

This repo is private, but private is not the same as secure. Keep offer letters,
signed agreements, government ID numbers, and anything with someone else's
personal contact details out of it. Reference them by name, store them elsewhere.
