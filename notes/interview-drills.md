# Interview drills — hard technical first, soft skills in season

The concrete execution plan for the interview pillars, **Jul 27 – Sep 20 2026** (Foundation
phase into the start of the big-tech new-grad wave). This is the detail under
[roadmap.json](../roadmap.json); technique/how-to lives in [study-guide.md](study-guide.md),
story drafts in [interview-prep.md](interview-prep.md), and the LP grid in [amazon-lp.md](amazon-lp.md).
Area numbers refer to the six study areas in [../interview-prep-plan.md](../interview-prep-plan.md).

## The split (set 2026-07-30)

**Before September — hard technical only.** The six weeks of Foundation are uninterrupted time
with no loops competing for attention, so they go entirely to the skills that need volume and
repetition to move: coding, ML breadth, experimentation and statistics, DL/NLP/LLM depth, ML
system design, and the technical depth behind the research deep-dive.

**September onward — soft skills, while they're in use.** Behavioral stories, the Amazon LP grid,
the pitch and its delivery, per-company "why them" answers, and the timeline and venue answers all
land during application and interview season, when each one gets used within days of being written
and can be revised against real feedback.

**Why this way:** technical depth decays slowly and compounds with reps, so it wants a long
uninterrupted run. Narrative sharpens fastest against a real audience, and stories written in
August get rewritten in September anyway once you know which companies are actually live.

**The one exception** — a single 30-minute task in Week 6: *list* candidate stories, no drafting.
Amazon's loop is LP-heavy and phone screens begin around Sep 21, which leaves roughly two weeks
to build the behavioral set from scratch. Naming the raw material in advance costs almost nothing
and means September starts from a list instead of a blank page. Drop it if you want the split clean.

## Pillars

| Pillar | Before Sep | From Sep |
| --- | --- | --- |
| **Coding** (area 1) | daily, 40–45 min | daily, company-tagged |
| **ML breadth** (area 2) | 1×/week | maintenance |
| **Experimentation & statistics** (area 2) | 1×/week | maintenance |
| **DL / NLP / LLM depth** (area 3) | 1×/week | maintenance |
| **ML system design** (area 4) | 2×/week | 2–3×/week |
| **Research deep-dive** (area 5) | 1×/week — *technical depth* | *delivery + tailoring* |
| **Behavioral** (area 6) | — *(story inventory only, Week 6)* | 2×/week |

**Why experimentation earns a standing slot:** you implemented an exact-inference suite from first
principles — Sterne two-sided binomial, Fisher exact, Fisher–Freeman–Halton, χ² with a seeded
Monte-Carlo fallback, power analysis, four kinds of confidence interval — and reached a defensible
negative result with a diagnosed cause. Almost no candidate has this. It is currently worth nothing
in an interview because it has never been said out loud. That is what this slot fixes.

## Weekly cadence

### Before September (~2 hrs/weekday + lighter weekend, ≈9–10 hrs/week)

| Day | Coding (daily) | Study block |
| --- | --- | --- |
| Mon | 40–45 min | ML breadth (area 2) |
| Tue | 40–45 min | ML system design (area 4) |
| Wed | 40–45 min | Experimentation & statistics (area 2) |
| Thu | 40–45 min | ML system design (area 4) |
| Fri | 40–45 min | DL / NLP / LLM depth (area 3) |
| Sat | lighter — redo fails | Research deep-dive: technical depth (area 5) |
| Sun | off / overflow | — |

### From September

| Day | Focus |
| --- | --- |
| Mon | Coding (company-tagged) + ML breadth maintenance |
| Tue | ML system design |
| Wed | **Behavioral** — draft/refine STAR stories |
| Thu | ML system design |
| Fri | **Behavioral** — LP grid, per-company "why them", pitch delivery |
| Sat | Mock (rotating: coding → SD → behavioral + research deep-dive) |

~9–10 hrs/week on drills. Against a 10–15 hr/week total that leaves 3–5 hrs for applications,
sourcing, and referral outreach — the rest of the search, and not optional. If a week is tight,
protect **coding** and **experimentation**; those two compound.

## Approach per pillar

- **Coding:** LeetCode mediums in Python, ~25 min each, pattern by pattern (map in
  [study-guide.md](study-guide.md)). Brute force → name the pattern → clean code → trace an edge
  case. Keep a `failed_list`; redo every failure one week later. Premium company-tagged +
  frequency-sorted from September.
- **ML breadth:** the bar is **explain it in 2–3 minutes and say when it breaks**, out loud.
- **Experimentation & statistics:** **learn the applied A/B-testing layer first**
  ([experimentation-primer.md](experimentation-primer.md)) — the stats foundation is already yours,
  but the online-experiment vocabulary (unit of randomization, MDE, guardrails, novelty, clustering)
  is new. *Then* rehearse as spoken answers, converting the thesis benchmark into fluent 2-minute
  explanations.

> **Learn before you drill.** Spoken-answer drilling makes *known* material fluent; it does not
> teach new material. For any area where you're rusty or new, do a study pass first, then drill.
> (Learned the hard way on experimentation, 2026-08-06.)
- **DL / NLP / LLM depth:** transformers cold, PEFT/LoRA, RAG internals, decoding, eval design,
  multi-agent orchestration and its failure modes.
- **System design (ML):** one framework, every time — **problem framing → data → features → model
  → training → serving → metrics → monitoring**. State assumptions, drive, name trade-offs.
- **Research deep-dive:** *before September* this is technical — be able to go arbitrarily deep on
  CRAFT's generator–verifier loop and stopping criteria, MERMAID's claim decomposition, and the
  benchmark's gold-label construction. *From September* it becomes delivery: the 30s/3min/20min
  versions, the 45-minute job talk for RS targets, and per-company tailoring.
- **Behavioral (from September):** STAR (~150 words), reusable; tailor the framing, not the facts.
  Map to Amazon LPs (2 stories per top-8 LP). Clean answers for the **May 2027 timeline** and the
  **venue question**.

## Schedule — Foundation (technical)

### Week 1 · Jul 27 – Aug 2 · coding restart
- **Coding:** Arrays & Hashing (~9), Two Pointers (~5). Python fluency (Counter, defaultdict,
  deque, heapq). Complexity basics. Start the `failed_list`.
- **ML breadth:** metrics — precision/recall/F1, ROC-AUC **vs** PR-AUC and when each misleads;
  class imbalance and why accuracy lies.
- **Experimentation:** hypothesis testing, p-values, CIs. Be able to say what a p-value *isn't*.
- **DL depth:** transformer architecture, attention, positional encodings, tokenization — refresh cold.
- **System design:** learn the framework — write the 8-step template from memory. No full design yet.
- **Research depth:** re-read your own CRAFT and TACO methods; list the follow-up questions you'd
  least want to be asked.

### Week 2 · Aug 3 – 9 · absorbs the Week 1 carry-over
> Week 1 closed 5/14. Carried forward: **49 Group Anagrams**, **238 Product of Array Except
> Self**, the **Two Pointers** set, **bias-variance/regularization/CV**, **transformers cold**,
> **re-read your own methods**, and the **ops task** (resume/CV final + referral lists).
> **Retired:** 271 Encode & Decode Strings (Premium-gated, low frequency) and 36 Valid Sudoku
> (high tedium, low interview signal) — recoverable from git history if you want them back.
>
> This makes Week 2 the heaviest of Foundation at 8 tasks. If it slips again, cut coding volume
> before cutting a pillar — one fewer problem costs less than a skipped experimentation block.

- **Coding:** carry-over first — **Two Pointers set**, plus **49** and **238**. Then Sliding
  Window (~6), Stack (~7). Redo Week-1 fails.
- **ML breadth:** bias–variance, regularization (L1 vs L2, why L1 is sparse), cross-validation,
  over/underfitting — *then* metrics, logreg, SVM, trees → RF vs GBM.
- **Ops:** resume/CV final; start referral lists for both tracks.
- **Experimentation:** A/B testing — design, power analysis, sample size, novelty and network
  effects. **"Failing to reject H₀ ≠ accepting H₀"** — you have lived this; make it fluent.
- **DL depth:** backprop by hand on a tiny net; vanishing/exploding gradients; init; batch vs layer norm.
- **System design #1 — RAG system** (retrieval → rerank → generate; chunking/embeddings; latency; eval).
- **Research depth:** MERMAID — claim decomposition, memory-augmented reason–act loop, stopping criteria.

### Week 3 · Aug 10 – 16
- **Coding:** Binary Search (~7), Linked List (~11). Redo fails.
- **ML breadth:** k-means and its failure modes, PCA; offline vs online metrics and why they disagree.
- **Experimentation:** multiple comparisons and when correcting is the *wrong* call; one- vs
  two-sided tests. Straight from the thesis redesign.
- **DL depth:** pretraining vs fine-tuning; PEFT/LoRA; RLHF conceptually; decoding, hallucination.
- **System design #2 — clinical entity-extraction pipeline** (OCR → NER → post-processing, from
  HALO; annotation strategy; serving; monitoring).
- **Research depth:** CRAFT's generator–verifier loop — why iterative refinement over one-shot,
  and where it fails.

### Week 4 · Aug 17 – 23
- **Coding:** Trees (~15). Redo fails.
- **ML breadth:** ranking metrics (NDCG/MAP/MRR); calibration; **attention derived on a whiteboard.**
- **Experimentation:** causal inference — difference-in-differences, propensity scoring.
- **DL depth:** RAG internals — chunking, embeddings, vector search, reranking, failure modes.
- **System design #3 — LLM evaluation harness** (offline vs online; LLM-as-judge; benchmark
  construction — ties to TACO's two-stage eval *and* the thesis benchmark).
- **Research depth:** the benchmark — gold-label construction, the leveled-order representation,
  why the significance framing is the verdict.

### Week 5 · Aug 24 – 30
- **Coding:** Heap / Priority Queue (~7), Backtracking (~9). **ML-flavored coding:** implement
  k-means, a precision/recall metric, tokenization.
- **ML breadth:** from-scratch NumPy — linreg, logreg, k-means, a 2-layer NN with manual backprop.
- **Experimentation:** exact vs asymptotic tests; what breaks when expected cell counts are small;
  power analysis. **Your own significance suite is the worked example — say it aloud.**
- **DL depth:** PyTorch from scratch — training loop, single- then multi-head self-attention,
  a small transformer block.
- **System design #4 — multi-agent verification loop** (MERMAID/CRAFT territory: orchestration,
  tool use, verifier-guided generation, failure modes).
- **Research depth:** the report→core dilution funnel — be able to explain the negative result and
  the structural fix without defensiveness.

### Week 6 · Aug 31 – Sep 6 · technical close
- **Coding:** Graphs (~13) begin. Redo fails. **First timed mock:** 2 problems, 45 min, aloud.
- **ML breadth + experimentation:** rapid-fire self-quiz across both; fix the weak spots.
- **DL depth:** self-quiz; the debugging drill (a training curve that won't converge — list 10 causes).
- **System design #5 — recommendation ranking** *or* **fraud / anomaly detection**, whichever your
  actual targets weight.
- **Research depth:** full technical Q&A with a labmate who will push back. Content only —
  delivery polish comes in September.
- **Behavioral — the one exception, ~30 min:** *list* 6–8 candidate stories. Anchors are already in
  [interview-prep.md](interview-prep.md). No drafting, no STAR shape, no LP mapping. Just the list.
- **MILESTONE — technical readiness:** coding fluent, ML breadth and experimentation solid,
  five system designs done, research depth bulletproof.

## Schedule — Big-Tech Wave (soft skills enter)

### Week 7 · Sep 7 – 13 · applications out
- **Coding:** 1-D DP (~12) begin. Premium **company-tagged** for the firms you apply to.
- **System design #6 — CTR / ad-click prediction** *or* **search ranking**.
- **Behavioral (new, 2×/week):** draft **STAR #1 — technical challenge** (TACO/SYMPCODER) and
  **STAR #2 — failure and what changed** (the ~76% significance result: you diagnosed the
  dilution funnel, established that raising T couldn't fix it, and redesigned rather than tuned —
  the strongest story in the set).
- **Pitch:** write the 30-second intro and the 3-minute version of the arc.

### Week 8 · Sep 14 – 20 · behavioral gate before loops
- **Coding:** 2-D DP (first ~6) + Greedy/Intervals (~10); company-tagged; heavy redo of fails.
- **System design #7 — redo the weakest of #1–6.** Move to 2–3/week.
- **Behavioral:** **STAR #3 — ambiguity** (the 30 → 27 → 24 template roster churn),
  **STAR #4 — deadline crunch** (CRAFT to SDM 2026), **STAR #5 — conflict**. Build the LP grid
  (2 stories per top-8 LP). Draft the **May-2027 timeline** and **venue** answers.
- **GATE — before phone screens begin around Sep 21:** all 5 STAR stories delivered aloud under
  2 minutes, LP grid complete, timeline and venue answers clean and non-defensive.
- **Full mock loop** — coding + system design + behavioral + research deep-dive.

## Mock interviews
- **Start Week 6** (coding only), then weekly from Week 7 with behavioral and the research
  deep-dive in rotation.
- Sources: Pramp / interviewing.io for peer coding and SD; a labmate or industry friend for
  behavioral and the research deep-dive. Record when you can; two-line retro after each.

## Resources
- **Coding:** NeetCode 150 / LeetCode "Top Interview 150" by pattern; LeetCode Premium (company
  tags + frequency sort) from September; Python-for-interviews refreshers.
- **ML breadth & experimentation:** the checklists in [study-guide.md](study-guide.md); *Trustworthy
  Online Controlled Experiments* (Kohavi et al.) for A/B testing vocabulary.
- **System design:** *Machine Learning System Design Interview* (Aminian & Xu) — work each case;
  *Designing Machine Learning Systems* (Huyen) for serving/monitoring vocabulary.
- **Research deep-dive:** your own papers; the arc in [../interview-prep-plan.md](../interview-prep-plan.md).
- **Behavioral:** [amazon-lp.md](amazon-lp.md) (LP grid) + [interview-prep.md](interview-prep.md)
  (story bank); STAR method.
