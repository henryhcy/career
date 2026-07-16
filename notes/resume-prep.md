# Resume & positioning

The **documents live in `../career-docs`** (Overleaf-synced) — never put `.tex` or PDFs in this
repo. Two of them: **`cv.tex`** (full detailed CV, the source of record) and **`resume.tex`**
(the one-page industry version derived from it). This file is the *strategy and checklist* that
drives those edits.

## The core move: academic CV → one-page industry resume

`resume.tex` currently mirrors the CV. Industry wants a **one-page, impact-first resume**, not a
multi-page CV.

- **Lead every bullet with an outcome and a number** — "cut inference latency 40%", "trained a
  model reaching 0.91 AUC on 2M records" — not "worked on…".
- Reverse-chronological. Sections: Education · Research/Experience · Projects · Skills ·
  Selected Publications.
- **Skills section mirrors the job-description keywords** — ATS parses it literally.

## Two framings (same facts, different emphasis)

Your two target role types read a resume differently. Keep both in `career-docs`:

| | Applied Scientist | ML Engineer |
|---|---|---|
| Lead with | Publications, novelty, experimental rigor, A/B / causal | Systems, deployment, scale, the portfolio project |
| Prove | You can do original research | You can ship research as real code |

Decide: one master resume with an emphasis toggle, or two variants (`resume-as.tex` /
`resume-mle.tex`). Either way, tailor keywords per role at apply time.

## Content checklist

- [ ] Cut to **one page**
- [ ] Quantify every bullet (metric or scale)
- [ ] **Selected** publications with venue; paper #3 as "under review at ___" (end Aug)
- [ ] Portfolio project with GitHub link, added once it's deployed (Aug)
- [ ] Skills aligned to target JDs: Python, PyTorch, SQL, PySpark, AWS/SageMaker, Docker, W&B
- [ ] **Fix the Google Scholar hyperlink** — `resume.tex` links bare `scholar.google.com`
      (open thread in next-session.md)
- [ ] **Confirm `resume.tex` compiles in Overleaf** — `fontawesome5` may need dropping (open thread)
- [ ] Two reviews: advisor/peer + someone already in industry

## LinkedIn & online presence

- [ ] Headline = target role + specialty (e.g., "ML PhD → Applied Scientist · health ML, data mining")
- [ ] About + Experience mirror the resume's quantified bullets
- [ ] "Open to work" (recruiters-only visibility) once the resume is final
- [ ] Pin the portfolio project / GitHub; keep Scholar + GitHub links consistent with the resume

## Referral one-pager

- [ ] A short blurb + attached resume you can hand to anyone offering a referral: 2–3 sentences —
      who you are, target role, why them, links to resume + portfolio. Used in the referral sweep
      (see [job-search-ops.md](job-search-ops.md)).

## Timing (see [roadmap.md](roadmap.md))

- **Resume final v1 by Jul 26** (gates the internship apps).
- **Refresh end of Aug** with paper #3 + the deployed project.
- Tailor skills/keywords per role at application time — not a rewrite, a swap.
