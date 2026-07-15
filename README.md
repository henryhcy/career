# Career

Private working repo for my job search — applications, research, and prep.
This is the hub; I work here.

## The other half: career-docs

Resume and cover letter LaTeX sources live in a sibling repo,
[career-docs](https://github.com/henryhcy/career-docs), symlinked here as `docs/`.
That repo is git-synced with an Overleaf project, so I edit in the browser and the
changes come back down. `bin/docs-sync` keeps Overleaf and GitHub in lockstep.

```
career/          <- you are here: tracker, research, notes
  docs/  ------> career-docs/   <- LaTeX  <--git bridge-->  Overleaf
```

See [CLAUDE.md](CLAUDE.md) for how the pieces fit and the rules for touching them.

## Layout

| Path | What lives here |
| --- | --- |
| `applications.md` | Master tracker for every role I've applied to |
| `companies/` | One note per company: research, contacts, comp, impressions |
| `notes/` | Interview prep, behavioral stories, technical review, retros |
| `bin/docs-sync` | Syncs `career-docs` between Overleaf and GitHub |
| `docs/` | Symlink to `career-docs` (gitignored, local only) |

No documents live here — resume and cover letters are in `career-docs`, and
compiled PDFs get downloaded from Overleaf when you need to send one.

## How I use this

Applying to a company touches both repos:

1. Log the role in `applications.md` the same day, so the status column stays honest.
2. Start `companies/<company>.md` from the template for research and contacts.
3. Copy `docs/cover-letters/_template.tex` to `docs/cover-letters/<company>.tex`, then
   run `bin/docs-sync -m "add <company> letter"` to push it to Overleaf.
4. Write the letter in Overleaf, compile, download the PDF, send it.

After every interview, write a retro in `notes/` while it's fresh — what was asked,
what I fumbled, what to tighten.

## A note on what goes in here

This repo is private, but private is not the same as secure. Keep offer letters,
signed agreements, government ID numbers, and anything with someone else's
personal contact details out of it. Reference them by name, store them elsewhere.
