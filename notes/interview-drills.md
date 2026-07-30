# Interview drills — first 8 weeks (AS/RS-weighted)

The concrete execution plan for the interview pillars, **Jul 27 – Sep 20 2026** (Foundation
phase into the start of the big-tech new-grad wave). This is the detail under
[roadmap.json](../roadmap.json); technique/how-to lives in [study-guide.md](study-guide.md),
story drafts in [interview-prep.md](interview-prep.md), and the LP grid in [amazon-lp.md](amazon-lp.md).
Area numbers refer to the six study areas in [../interview-prep-plan.md](../interview-prep-plan.md).

**Rebalanced 2026-07-30 for an Applied-Scientist-primary search** (Research Scientist secondary).
The original plan had three pillars — coding, system design, behavioral — which is the right
shape for an MLE loop. An AS loop weights differently, so two pillars were added and the
existing three were kept rather than cut:

| Pillar | Cadence | Change |
| --- | --- | --- |
| **Coding** (area 1) | daily, 40–45 min | Kept daily — it still gates the screen. Trimmed ~15 min/day to fund the additions. |
| **ML breadth** (areas 2–3) | 1×/week, ~45 min | **Added.** Mon. |
| **Experimentation & statistics** (area 2) | 1×/week, ~45 min | **Added.** Wed. The strongest and least-rehearsed material you have. |
| **ML system design** (area 4) | 2×/week, ~45 min | Kept. Tue + Thu. |
| **Research deep-dive** (area 5) | 1×/week, ~45 min | **Added.** Sat. AS runs this round; MLE doesn't. For RS it's the job talk. |
| **Behavioral** (area 6) | 1×/week from Aug 10 | **Parked for two weeks**, then weekly. Hard milestone Sep 6. |

**Why experimentation is worth a standing slot:** you implemented an exact-inference suite from
first principles — Sterne two-sided binomial, Fisher exact, Fisher–Freeman–Halton, χ² with a
seeded Monte-Carlo fallback, power analysis, four kinds of confidence interval — and you reached
a defensible negative result with a diagnosed cause. Almost no candidate has this. It is currently
worth nothing in an interview because it has never been said out loud. That is what this slot fixes.

**Behavioral is deliberately parked until Aug 10.** Two weeks of runway to get coding fluency and
the research narrative moving first. It is *not* dropped — it resumes Week 3 and closes on a hard
milestone in Week 6, **before applications go out on Sep 7**. Do not let it slide past that.

## Weekly cadence (~2 hrs/weekday + a lighter weekend, ≈9–10 hrs/week)

| Day | Coding (daily) | Study block |
| --- | --- | --- |
| Mon | 40–45 min | ML breadth (area 2–3) |
| Tue | 40–45 min | ML system design (area 4) |
| Wed | 40–45 min | Experimentation & statistics (area 2) |
| Thu | 40–45 min | ML system design (area 4) |
| Fri | 40–45 min | Behavioral (area 6) — **from Aug 10**; until then, experimentation catch-up |
| Sat | lighter — redo fails | Research deep-dive (area 5) |
| Sun | off / overflow | — |

This is ~9–10 hrs/week on drills. Against a 10–15 hr/week total budget that leaves roughly 3–5
hrs for applications, sourcing, and referral outreach — which is the rest of the search and is
not optional. If a week is tight, protect **coding** and **experimentation** and let a system
design slide; those two are the ones that compound.

## Approach per pillar

- **Coding:** LeetCode mediums in Python, ~25 min each, pattern by pattern (map in
  [study-guide.md](study-guide.md)). Brute force → name the pattern → clean code → trace an edge
  case. Keep a `failed_list`; redo every failure one week later. Ramp to Premium company-tagged +
  frequency-sorted once loops are near.
- **ML breadth:** the bar is **explain it in 2–3 minutes and say when it breaks**, out loud, not
  read. Checklist in [study-guide.md](study-guide.md).
- **Experimentation & statistics:** rehearse as *spoken answers*. The goal is to convert work you
  already did into fluent 2-minute explanations — the thesis benchmark is the worked example.
- **System design (ML):** one framework, every time — **problem framing → data → features → model
  → training → serving → metrics → monitoring**. State assumptions, drive the conversation, name
  trade-offs. Record yourself and listen back.
- **Research deep-dive:** the **Classify → Extract → Order → Verify** arc. Build 30-second,
  3-minute, and 20-minute versions; for RS targets, a 45-minute job talk with slides.
- **Behavioral:** STAR (~150 words), reusable across companies; tailor the framing, not the facts.
  Map to Amazon LPs (2 stories per top-8 LP). Clean answers for the **May 2027 timeline** and the
  **venue question**.

## The 8-week schedule

### Week 1 · Jul 27 – Aug 2 · coding restart
- **Coding:** Arrays & Hashing (~9), Two Pointers (~5). Python fluency (Counter, defaultdict,
  deque, heapq). Complexity basics. Start the `failed_list`.
- **ML breadth:** metrics — precision/recall/F1, ROC-AUC **vs** PR-AUC and when each misleads;
  class imbalance and why accuracy lies.
- **Experimentation:** hypothesis testing, p-values, CIs. Be able to say what a p-value *isn't*.
- **System design:** learn the framework — write the 8-step template from memory; read one primer.
  No full design yet.
- **Research deep-dive:** draft the **30-second intro** and the four-stage arc.
- **Behavioral:** _parked._

### Week 2 · Aug 3 – 9
- **Coding:** Sliding Window (~6), Stack (~7). Redo Week-1 fails.
- **ML breadth:** bias–variance, regularization (L1 vs L2, why L1 is sparse), logreg, SVM,
  trees → RF vs GBM.
- **Experimentation:** A/B testing — design, power analysis, sample size, novelty and network
  effects. **"Failing to reject H₀ ≠ accepting H₀"** — rehearse it; you have lived it.
- **System design #1 — RAG system** (retrieval → rerank → generate; chunking/embeddings; latency; eval).
- **Research deep-dive:** the **3-minute** version; draft the "what's the hardest part" answer.
- **Behavioral:** _parked — last parked week._

### Week 3 · Aug 10 – 16 · behavioral resumes
- **Coding:** Binary Search (~7), Linked List (~11). Redo fails.
- **ML breadth:** k-means and its failure modes, PCA; offline vs online metrics and why they disagree.
- **Experimentation:** multiple comparisons and when correcting is the *wrong* call; one- vs
  two-sided tests. Straight from the thesis redesign.
- **System design #2 — clinical entity-extraction pipeline** (OCR → NER → post-processing, from
  HALO; annotation strategy; serving; monitoring).
- **Research deep-dive:** outline the **20-minute** talk.
- **Behavioral:** inventory 6–8 candidate stories (anchors are in
  [interview-prep.md](interview-prep.md)), then write **STAR #1 — technical challenge** (TACO/SYMPCODER).

### Week 4 · Aug 17 – 23
- **Coding:** Trees (~15). Redo fails.
- **ML breadth:** backprop by hand on a tiny net; vanishing/exploding gradients; init; batch vs
  layer norm; dropout.
- **Experimentation:** causal inference — difference-in-differences, propensity scoring.
- **System design #3 — LLM evaluation harness** (offline vs online; LLM-as-judge; benchmark
  construction — ties to TACO's two-stage eval *and* the thesis benchmark).
- **Research deep-dive:** build the 20-minute slides; rehearse once.
- **Behavioral:** **STAR #2 — deadline crunch** (CRAFT through to SDM 2026) and
  **STAR #3 — ambiguity** (the 30 → 27 → 24 template roster churn).

### Week 5 · Aug 24 – 30
- **Coding:** Heap / Priority Queue (~7), Backtracking (~9). Redo fails. **ML-flavored coding:**
  implement k-means, a precision/recall metric, tokenization.
- **ML breadth:** **attention and transformers cold** — derive scaled dot-product on a whiteboard;
  multi-head, positional encoding, Q/K/V.
- **Experimentation:** exact vs asymptotic tests; what breaks when expected cell counts are small;
  power analysis. **Your own significance suite is the worked example — rehearse it aloud.**
- **System design #4 — multi-agent verification loop** (MERMAID/CRAFT territory: orchestration,
  tool use, verifier-guided generation, failure modes).
- **Research deep-dive:** full 20-minute rehearsal, recorded.
- **Behavioral:** **STAR #4 — failure and what changed** (the ~76% significance result: you
  diagnosed the report→core dilution funnel, established that raising T couldn't fix it, and
  redesigned rather than tuned — the strongest story in the set) and **STAR #5 — conflict**.
  Start the LP grid.

### Week 6 · Aug 31 – Sep 6 · foundation close — everything interview-ready
- **Coding:** Graphs (~13) begin. Redo fails. **First timed mock:** 2 problems, 45 min, aloud.
- **ML breadth + experimentation:** rapid-fire self-quiz across both; fix the weak spots.
- **System design #5 — recommendation ranking** *or* **fraud / anomaly detection**, whichever your
  actual targets weight.
- **Research deep-dive:** final rehearsal; do the Q&A with a labmate who will push back.
- **Behavioral — MILESTONE, hard gate before applications go out:** LP grid finished (2 stories per
  top-8 LP), all 5 STAR stories delivered aloud in under 2 min each, plus the **May-2027 timeline**
  and **venue** answers. Nothing here slips past this week.

### Week 7 · Sep 7 – 13 · applications out; ramp
- **Coding:** 1-D DP (~12) begin. Premium **company-tagged** problems for the firms you apply to.
- **ML breadth / experimentation:** maintenance, 1× each.
- **System design #6 — CTR / ad-click prediction** *or* **search ranking**. Move to 2–3/week.
- **Research deep-dive:** tailor per company — the arc stays, the emphasis shifts.
- **Behavioral:** stories memorized; run a mock behavioral round.

### Week 8 · Sep 14 – 20
- **Coding:** 2-D DP (first ~6) + Greedy/Intervals (~10); company-tagged; heavy redo of fails.
- **System design #7 — redo the weakest of #1–6.**
- **Full mock loop** — coding + system design + behavioral + research deep-dive. Refine from feedback.

## Mock interviews
- **Start Week 6**, then weekly. Rotate: coding mock → system-design mock → behavioral +
  research deep-dive.
- Sources: Pramp / interviewing.io for peer coding and SD; a labmate or industry friend for
  behavioral and the research deep-dive. Record when you can; write a two-line retro after each.

## Resources
- **Coding:** NeetCode 150 / LeetCode "Top Interview 150" by pattern; LeetCode Premium (company
  tags + frequency sort) once loops near; Python-for-interviews refreshers.
- **ML breadth & experimentation:** the checklists in [study-guide.md](study-guide.md); Trustworthy
  Online Controlled Experiments (Kohavi et al.) for the A/B testing vocabulary.
- **System design:** *Machine Learning System Design Interview* (Aminian & Xu) — work each case;
  *Designing Machine Learning Systems* (Huyen) for serving/monitoring vocabulary.
- **Research deep-dive:** your own papers; the arc in [../interview-prep-plan.md](../interview-prep-plan.md).
- **Behavioral:** [amazon-lp.md](amazon-lp.md) (LP grid) + [interview-prep.md](interview-prep.md)
  (story bank); STAR method.
