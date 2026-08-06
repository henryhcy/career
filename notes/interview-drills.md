# Interview drills — coding-heavy August, soft skills in season

The concrete execution plan for the interview pillars, **Jul 27 – Sep 20 2026** (Foundation phase
into the start of the big-tech new-grad wave). This is the detail under [roadmap.json](../roadmap.json);
technique/how-to lives in [study-guide.md](study-guide.md), story drafts in
[interview-prep.md](interview-prep.md), the LP grid in [amazon-lp.md](amazon-lp.md). Area numbers
refer to the six study areas in [../interview-prep-plan.md](../interview-prep-plan.md).

## The reweighting (set 2026-08-06)

**August is coding-heavy, and coding is protected** — nothing displaces it (~2 problems/day). Alongside
coding, August runs **two study pillars all month: ML breadth and DL/NLP/LLM depth** — nothing else
standing. **System design phases in mid-August** (week 4, Aug 17) and ramps as coding fluency improves;
it is not a from-week-one commitment. **Experimentation is demoted** off the August cadence entirely and
queued as a single low-priority *rehearsal* in September.

**September onward — soft skills, while they're in use, with research delivery as the headline.** The
September focus is **presenting your own projects and publications**: research-deep-dive delivery (the
30s / 3min / 20min versions), per-company tailoring, and the discussion/follow-up questions that come
with them — alongside the behavioral stories, the Amazon LP grid, the pitch, and the timeline/venue
answers. Each gets used within days of being written and revised against real feedback.

**Why this order:** coding and the two technical pillars compound with reps and want the long
uninterrupted August run; system design needs some coding fluency under it before it competes for time;
narrative and research *delivery* sharpen fastest against a real audience, so they wait for September.

**The one pre-September exception** — a single 30-minute task in Week 6: *list* candidate behavioral
stories, no drafting. Amazon's loop is LP-heavy and phone screens begin ~Sep 21, so September should not
start from a blank page.

## Pillars

| Pillar | August (Foundation) | From September |
| --- | --- | --- |
| **Coding** (area 1) | **daily, protected — ~2/day (coding-heavy)** | daily, company-tagged |
| **ML breadth** (area 2) | 2×/week — runs all month | maintenance |
| **DL / NLP / LLM depth** (area 3) | 2×/week — runs all month | maintenance |
| **ML system design** (area 4) | phases in **week 4 (Aug 17)**, ramps 1 → 2 designs/week | 2–3×/week |
| **Research deep-dive** (area 5) | — (moved to September) | **delivery + tailoring — the September headline** |
| **Experimentation & statistics** (area 2) | — (queued) | **one low-priority rehearsal, first to cut** |
| **Behavioral** (area 6) | — (story *inventory* only, Week 6) | 2×/week |

> **Experimentation is an asset on ice, not a study slot.** You implemented an exact-inference suite
> from first principles — Sterne two-sided binomial, Fisher exact, Fisher–Freeman–Halton, χ² with a
> seeded Monte-Carlo fallback, power analysis, four kinds of confidence interval — and reached a
> defensible negative result with a diagnosed cause. Almost no candidate has this. But it is **rehearsal,
> not learning**: worth nothing unsaid, and making it fluent is a ~30-minute spoken drill, queued for
> September (see [experimentation-primer.md](experimentation-primer.md)). It does **not** earn a weekly
> August slot.

## Weekly cadence

### August / Foundation (~2 hrs/weekday, coding-heavy)

| Day | Coding (daily, protected) | Study block |
| --- | --- | --- |
| Mon | ~2 problems | ML breadth (area 2) |
| Tue | ~2 problems | DL / NLP / LLM depth (area 3) |
| Wed | ~2 problems | ML breadth (area 2) |
| Thu | ~2 problems | DL / NLP / LLM depth (area 3) |
| Fri | ~2 problems | ML system design (area 4) — *from week 4; before that, extra coding* |
| Sat | lighter — redo fails | ML system design (area 4) — *from week 4; else redo / overflow* |
| Sun | off / overflow | — |

Coding is a **continuous, pattern-ordered queue** (~2/day) — the week labels organize the *study*
pillars; coding just advances underneath, so an unfinished pattern rolls into the next day. Don't try to
"finish pattern X inside week Y."

### From September

| Day | Focus |
| --- | --- |
| Mon | Coding (company-tagged) + ML breadth maintenance |
| Tue | ML system design |
| Wed | **Behavioral** — draft/refine STAR stories |
| Thu | ML system design |
| Fri | **Research delivery** — 30s/3min/20min, per-company tailoring, follow-up Qs; **+ Behavioral** (LP grid, "why them", pitch) |
| Sat | Mock (rotating: coding → SD → behavioral + **research deep-dive**) |

**If a week is tight, protect coding first, then ML breadth and DL/LLM depth. Experimentation is the
first thing cut** (it's already queued out of August); research *delivery* and behavioral flex against
which companies are actually live.

## Approach per pillar

- **Coding:** LeetCode mediums in Python, ~25 min each, pattern by pattern (map in
  [study-guide.md](study-guide.md)). Brute force → name the pattern → clean code → trace an edge case.
  Keep a `failed_list`; redo every failure one week later. Premium company-tagged + frequency-sorted
  from September.
- **ML breadth:** the bar is **explain it in 2–3 minutes and say when it breaks**, out loud.
- **DL / NLP / LLM depth:** transformers cold, PEFT/LoRA, RAG internals, decoding, eval design,
  multi-agent orchestration and its failure modes.
- **System design (ML):** one framework, every time — **problem framing → data → features → model →
  training → serving → metrics → monitoring**. State assumptions, drive, name trade-offs. *Starts week 4
  and ramps.*
- **Research deep-dive (September headline):** technical depth on your own work is the prerequisite; the
  September work is *delivery* — the 30s/3min/20min versions, the 45-minute job talk for RS targets,
  per-company tailoring, and rehearsing the discussion/follow-up questions ("what's next," "hardest
  part," "why this method over the baseline").
- **Experimentation (queued rehearsal, September):** you already own the stats — this is a single spoken
  rehearsal to make the A/B-testing and significance-suite answers fluent, **not** a learning block.
  Lowest priority; see [experimentation-primer.md](experimentation-primer.md).

> **Learn before you drill.** Spoken-answer drilling makes *known* material fluent; it does not teach new
> material. For any area where you're rusty or new, do a study pass first, then drill. (Learned the hard
> way on experimentation, 2026-08-06.)

## Schedule — Foundation (technical)

### Week 1 · Jul 27 – Aug 2 · coding restart (done)
- **Coding:** Arrays & Hashing, Two Pointers. Python fluency (Counter, defaultdict, deque, heapq).
  Complexity basics. Started the `failed_list`.
- **ML breadth:** metrics — precision/recall/F1, ROC-AUC **vs** PR-AUC; class imbalance and why accuracy lies.
- **DL depth:** transformer architecture, attention, positional encodings, tokenization — refresh cold.
- *(Experimentation — p-values/CIs — was completed here as the week-1 task; it is the last experimentation
  block until the September rehearsal.)*

### Week 2 · Aug 3 – 9 · absorbs the Week 1 carry-over (in progress)
> Carried forward into Week 2: **49 Group Anagrams**, **238 Product of Array Except Self**, the
> **Two Pointers** set, **bias-variance/regularization/CV**, **transformers cold**, and the **ops task**.
> **Retired:** 271 Encode & Decode Strings (Premium-gated, low frequency) and 36 Valid Sudoku (high
> tedium, low signal) — recoverable from git history. Coding is a continuous queue; overflow rolls forward.

- **Coding:** carry-over first — **Two Pointers set**, plus **49** and **238**. Then Sliding Window (~6),
  Stack (~7). Redo Week-1 fails.
- **ML breadth:** bias–variance, regularization (L1 vs L2, why L1 is sparse), cross-validation,
  over/underfitting — *then* metrics, logreg, SVM, trees → RF vs GBM.
- **DL depth:** backprop by hand on a tiny net; vanishing/exploding gradients; init; batch vs layer norm.
- **Ops:** resume/CV final; start referral lists for both tracks.

### Week 3 · Aug 10 – 16
- **Coding:** Binary Search (~7), Linked List (~11). Redo fails.
- **ML breadth:** logistic regression, trees/GBMs, k-means, basic Bayesian; PCA; offline vs online
  metrics and why they disagree.
- **DL depth:** pretraining vs fine-tuning; PEFT/LoRA; RLHF conceptually; decoding, hallucination/faithfulness.

### Week 4 · Aug 17 – 23 · system design begins
- **Coding:** Trees (~15). Redo fails.
- **ML breadth:** ranking metrics (NDCG/MAP/MRR); calibration; **attention derived on a whiteboard.**
- **DL depth:** RAG internals — chunking, embeddings, vector search, reranking, failure modes.
- **System design #1 — RAG:** learn the 8-step framework, then the RAG design (retrieval → rerank →
  generate; latency; eval).

### Week 5 · Aug 24 – 30 · SD ramps
- **Coding:** Heap / Priority Queue (~7), Backtracking (~9). **ML-flavored:** implement k-means, a
  precision/recall metric, tokenization. **From scratch:** NumPy (linreg, logreg, k-means, 2-layer NN
  w/ manual backprop); PyTorch (training loop, multi-head self-attention, transformer block).
- **ML breadth:** the from-scratch implementations double as breadth — reason about each end to end.
- **DL depth:** multi-agent orchestration, tool use, verifier-guided generation and their failure modes.
- **System design #2 — clinical entity-extraction pipeline** (OCR → NER → post-processing, from HALO);
  **#3 — LLM evaluation harness** (offline vs online; LLM-as-judge; benchmark construction).
- **Ops:** finalize referral lists; warm intros for big-tech.

### Week 6 · Aug 31 – Sep 6 · technical close
- **Coding:** Graphs (~13) begin. Redo fails. **First timed mock:** 2 problems, 45 min, aloud.
- **ML breadth + DL depth:** rapid-fire self-quiz across both; fix weak spots; the debugging drill (a
  training curve that won't converge — list 10 causes).
- **System design #4 — multi-agent verification loop** (MERMAID/CRAFT territory); **#5 — recommendation
  ranking or fraud / anomaly detection**, whichever your targets weight.
- **Behavioral — the one exception, ~30 min:** *list* 6–8 candidate stories (anchors in
  [interview-prep.md](interview-prep.md)). No drafting, no STAR shape, no LP mapping.
- **MILESTONE — technical readiness:** coding fluent, ML breadth and DL/LLM depth solid, five system
  designs done, referrals warm, materials ready.

## Schedule — Big-Tech Wave (soft skills + research delivery enter)

### Week 7 · Sep 7 – 13 · applications out
- **Coding:** 1-D DP (~12) begin. Premium **company-tagged** for the firms you apply to.
- **System design #6 — CTR / ad-click prediction** *or* **search ranking**.
- **Research delivery:** write the 30-second intro and the 3-minute version of the
  Classify → Extract → Order → Verify arc.
- **Behavioral (new, 2×/week):** draft **STAR #1 — technical challenge** (TACO/SYMPCODER) and
  **STAR #2 — failure and what changed** (the ~76% significance result: diagnosed the dilution funnel,
  established that raising T couldn't fix it, and redesigned rather than tuned).

### Week 8 · Sep 14 – 20 · gate before loops
- **Coding:** 2-D DP (first ~6) + Greedy/Intervals (~10); company-tagged; heavy redo of fails.
- **System design #7 — redo the weakest of #1–6.** Move to 2–3/week.
- **Research delivery:** the 20-minute version; per-company tailoring; rehearse the discussion/follow-up
  questions ("what's next," "hardest part," "why this over the baseline").
- **Behavioral:** **STAR #3 — ambiguity** (the 30 → 27 → 24 roster churn), **STAR #4 — deadline crunch**
  (CRAFT to SDM 2026), **STAR #5 — conflict**. Build the LP grid (2 stories per top-8 LP). Draft the
  **May-2027 timeline** and **venue** answers.
- **Experimentation rehearsal** (lowest priority, first to cut, ~30 min): say the A/B-testing and
  significance-suite answers aloud once. See [experimentation-primer.md](experimentation-primer.md).
- **GATE — before phone screens begin ~Sep 21:** all 5 STAR stories delivered aloud under 2 minutes, LP
  grid complete, timeline and venue answers clean and non-defensive, research delivery in all three lengths.
- **Full mock loop** — coding + system design + behavioral + research deep-dive.

## Mock interviews
- **Start Week 6** (coding only), then weekly from Week 7 with behavioral and the research deep-dive in rotation.
- Sources: Pramp / interviewing.io for peer coding and SD; a labmate or industry friend for behavioral and
  the research deep-dive. Record when you can; two-line retro after each.

## Resources
- **Coding:** NeetCode 150 / LeetCode "Top Interview 150" by pattern; LeetCode Premium (company tags +
  frequency sort) from September; Python-for-interviews refreshers.
- **ML breadth & DL/LLM depth:** the checklists in [study-guide.md](study-guide.md).
- **System design:** *Machine Learning System Design Interview* (Aminian & Xu) — work each case;
  *Designing Machine Learning Systems* (Huyen) for serving/monitoring vocabulary.
- **Research deep-dive:** your own papers; the arc in [../interview-prep-plan.md](../interview-prep-plan.md).
- **Experimentation (rehearsal):** [experimentation-primer.md](experimentation-primer.md); *Trustworthy
  Online Controlled Experiments* (Kohavi et al.) for A/B-testing vocabulary.
- **Behavioral:** [amazon-lp.md](amazon-lp.md) (LP grid) + [interview-prep.md](interview-prep.md) (story bank); STAR method.
