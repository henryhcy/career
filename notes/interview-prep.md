# Interview prep

Timeline and study areas: [../interview-prep-plan.md](../interview-prep-plan.md) (authoritative).
Week-by-week drills: [interview-drills.md](interview-drills.md). Amazon LP map:
[amazon-lp.md](amazon-lp.md). This file is the drafting surface for stories, pitch, and
technical review.

> Reconciled 2026-07-30 with the May-2027 pivot. The old pointer to
> [ml-job-prep-plan.md](ml-job-prep-plan.md) is kept only for its resource lists — that plan is
> superseded and its "7 tracks" numbering no longer matches the six study areas in
> `interview-prep-plan.md`.

## Behavioral stories (STAR)

Keep each to a tight STAR shape, ~150 words. Reuse across companies and Amazon LPs — tailor
the framing, not the facts. Five core stories to draft (study area 6, behavioral):

| Story | Candidate anchor (draft the Situation yourself) | What it demonstrates | Drafted? |
| --- | --- | --- | --- |
| Technical challenge solved (paper #1) | TACO/SYMPCODER — unifying symptom extraction and linking in one prompt; 487 VAERS reports, five LLMs, two-stage LINK/MATCH eval | Dive Deep, problem-solving | [ ] |
| Dealing with ambiguity (research direction change) | Thesis template roster churn, 30 → 27 → 24 groups, and the 2026-07-28 redesign that retired six multi-cohort groups | Ownership, adaptability | [ ] |
| Conflict / disagreement (advisor, collaborator, reviewer) | _(interpersonal — only you have this one)_ | Earn Trust | [ ] |
| A failure and what you changed | The significance result: ~76% of gold-labeled cores fail to reach significance. You diagnosed the report→core dilution funnel, established that raising the instance budget T could not fix it, and proposed structural fixes instead of tuning. **Strongest story in the set** — a negative result you owned, explained, and redesigned around | Learn and Be Curious, self-awareness | [ ] |
| Delivering under deadline (paper crunch) | CRAFT through to SIAM SDM 2026 acceptance | Deliver Results, Bias for Action | [ ] |

Cross-functional/stakeholder stories draw on HALO/BIDMC: iterating entity schemas with
clinicians, and the Prodigy → Doccano migration ($1,700/yr saved, consistency preserved).

## My pitch

Two or three sentences on who I am and what I'm looking for. Rewrite until it sounds like
speech, not a resume.

- [ ] 3-minute thesis pitch for a smart non-specialist (problem → why it matters → approach → impact)
- [ ] 10-minute version for a technical audience
- [ ] One-liner: CS/ML PhD (data mining + health ML), graduating **May 2027**, targeting
      **Applied Scientist** roles (Research Scientist in health/applied groups as a secondary
      lane). One date everywhere — May 2027, no exceptions.

## Technical review

Mirrors the six study areas in [../interview-prep-plan.md](../interview-prep-plan.md).
Old resource lists (Karpathy Zero-to-Hero, LeetCode pattern sets, PySpark/SQL) still live in
[ml-job-prep-plan.md](ml-job-prep-plan.md) and remain useful — only the numbering changed.

**Weighting for an AS-heavy search:** areas 2, 3, and 5 carry more weight than they would in an
MLE loop; area 5 is a round MLE loops usually don't have at all. Area 1 still gates the screen,
so it doesn't shrink — the drill plan in [interview-drills.md](interview-drills.md) covers it.

- [ ] **1 — Coding / DSA:** LeetCode medium by pattern; Python fluency. Occasional ML-flavored
      coding (implement k-means, a metric, a small training loop, tokenization)
- [ ] **2 — ML breadth:** bias-variance, regularization, CV, class imbalance, calibration;
      precision/recall/F1, ROC-AUC vs PR-AUC and when each misleads; logreg, trees/GBMs,
      k-means, basic Bayesian. **Plus experimentation: A/B testing, power, multiple
      comparisons, causal basics** — the strongest and least-rehearsed material you have
- [ ] **3 — DL / NLP / LLM depth:** transformers, attention, tokenization; pretraining vs
      fine-tuning, PEFT/LoRA, RLHF conceptually; decoding, hallucination, eval design; RAG
      (chunking, embeddings, reranking, failure modes); multi-agent orchestration and
      verifier-guided generation. From scratch in NumPy/PyTorch: linreg, logreg, k-means,
      2-layer NN, self-attention, a transformer block
- [ ] **4 — ML system design:** a RAG system; a clinical entity-extraction pipeline
      (OCR → NER → post-processing, straight from HALO); an LLM evaluation harness; a
      multi-agent verification loop. Cover annotation strategy, serving (vLLM), latency,
      monitoring, and how you'd evaluate it
- [ ] **5 — Research deep-dive (AS-specific round):** 20-minute talk on the
      **Classify → Extract → Order → Verify** arc; 30-second and 3-minute versions; embedded
      answers for "what's next", "hardest part", "why this method over the baseline"
- [ ] **6 — Behavioral:** the five STAR stories above, mapped to Amazon LPs. Have a clean,
      non-defensive answer for the graduation timeline and for the venue question

## Recurring questions I want better answers to

- Why industry / why now (vs. postdoc or academia)?
- Why this company specifically? (Draft per-company in each `companies/*.md`.)
- What are you looking for in your next role?
- Walk me through your most impactful project. (This is the thesis pitch — have it cold.)
