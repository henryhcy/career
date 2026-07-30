# Study guide — what to actually do each day

The *how-to* for daily coding + study practice. The **week-by-week arc** is the board's
`roadmap.json` (rebuilt around the May-2027 two-wave strategy — see
[../job-search-strategy.md](../job-search-strategy.md) and
[../interview-prep-plan.md](../interview-prep-plan.md)). This guide is the *how*, tied to the
two daily checks on the board:

- **"One LeetCode problem"** → Part 1 below (the LeetCode routine).
- **"One study/project block"** → Part 2 below (what to review or learn).

For the **scheduled first-8-weeks plan** across coding, system design, and behavioral (which
patterns/designs/stories to do each week), see [interview-drills.md](interview-drills.md).

Tick the box only when you actually did the thing. Streaks are the point.

> **Note (Jul 2026):** the *techniques* below are current, but any specific dated milestones or
> cumulative problem counts (e.g., "110 by Oct 1") are leftovers from the earlier plan — follow
> the weekly cadence in `roadmap.json` instead.

---

## Part 1 — LeetCode (the coding habit)

**Why it's first:** clean coding under time pressure is the #1 filter that screens PhDs out.
It doesn't reward being smart; it rewards having drilled the patterns until they're reflex.

### The per-problem routine (~25–35 min)

1. **Restate the problem** in your own words; ask about constraints out loud (input size,
   duplicates, sorted?, empty?). Interviewers score this.
2. **Brute force first** — say the naive approach and its time/space complexity before optimizing.
3. **Reach for the pattern** (see the map below). Name it: "this is a sliding window because…"
4. **Code it clean** — good names, no dead code — while narrating what you're doing.
5. **Trace one example and one edge case by hand** before you claim it works.
6. **If stuck > 25 min:** read the solution, understand *why* it works, then close it and
   re-solve from a blank file. Add it to `failed_list.md`.
7. **Redo every failed problem one week later.** The redo is where the learning sticks.

**Target speed:** a medium in ~25 min, talking the whole time. Slow is fine in July; build
speed through August.

### Use LeetCode Premium deliberately

You have Premium — it changes how you pick problems, so use it:

- **Follow a curated list in pattern order** (the map below). LeetCode's own **"Top Interview
  150"** and **"LeetCode 75"** study plans are good spines; work them by pattern, not front to back.
- **Company tag + frequency sort (Premium).** Two weeks before a loop, filter problems by that
  company's tag and sort by frequency — that's the highest-signal prep there is. Do the top
  ~20–30 for each target (Amazon, Google, Meta, Bloomberg, TikTok).
- **Sort by frequency generally** so you spend time on what's actually asked, not trivia.
- **Use the built-in timer and "Interview" mode** to rehearse the 25-minute clock.

### The pattern map — learn the technique, not the problem

Work the patterns **in this order** (each builds on the last). The counts are a rough
per-pattern volume to aim for; source the actual problems from your Premium lists above. For
each, the thing to internalize:

| # | Pattern (count) | The technique to make reflex |
|---|---|---|
| 1 | Arrays & Hashing (9) | Hash map / set for O(1) lookup; frequency counts with `Counter` |
| 2 | Two Pointers (5) | Converging pointers on a sorted array; pair-sum without a hash |
| 3 | Sliding Window (6) | Grow the window, shrink while it's invalid; track a running quantity |
| 4 | Stack (7) | Monotonic stack; matching pairs; "next greater element" |
| 5 | Binary Search (7) | Search on an index **and** on an answer space; use `bisect` |
| 6 | Linked List (11) | Dummy head node; fast/slow pointers; in-place reversal |
| 7 | Trees (15) | DFS via recursion vs BFS via `deque`; pre/in/post-order; BST invariant |
| 8 | Heap / Priority Queue (7) | `heapq` for top-k and merge-k; min-heap by negating for max |
| 9 | Backtracking (9) | choose → explore → un-choose template; prune early |
| 10 | Graphs (13) | Adjacency list; BFS/DFS; union-find; topological sort; Dijkstra |
| 11 | 1-D DP (12) | Define the state; memoize, then convert to a bottom-up table |
| 12 | 2-D DP (first 6 only) | Grids and subsequences (LCS, edit distance); diminishing returns after |
| 13 | Greedy + Intervals (10) | Sort by start or end, then sweep; exchange argument |

**~110 problems total by Oct 1** (≈ 4–5/week Jul–Aug, lighter during the defense). Checkpoints:
30 by Aug 10, 55 by Aug 24, 110 by Oct 1.

### Python fluency to drill alongside

You lose real time fumbling the standard library. Get fluent with:

- `collections`: `Counter`, `defaultdict`, `deque`
- `heapq` (push/pop, `heapify`, `nlargest`/`nsmallest`), `bisect` (`bisect_left`/`insort`)
- comprehensions, generators, `enumerate`, `zip`
- `sorted(..., key=...)`, tuple sorting, `float("inf")`
- string ops (`join`, slicing, `ord`/`chr`), and why strings are immutable

> Solutions live in the `ml-job-prep` repo (`leetcode/<pattern>/`), one file per problem, plus
> `failed_list.md`. Not in this repo — see the plan.

### Complexity basics (Big-O) — know the *why*

Big-O is a **growth rate** as n → ∞: it drops constants and lower-order terms, and describes the
worst case unless you say otherwise. Interviewers want you to state it *and* justify it.

Costs of the operations you use every day (CPython):

| Operation | Time |
| --- | --- |
| list index / append (amortized) | O(1) |
| list `x in lst`, `insert(0,…)`, `pop(0)` | O(n) |
| dict / set insert, lookup, delete (avg) | O(1) |
| `heappush` / `heappop` · `heapify` · peek | O(log n) · O(n) · O(1) |
| `sorted(...)` / `list.sort()` | O(n log n) |
| `Counter(nums)` | O(n) |
| building a string with `+=` in a loop | O(n²) — use a list + `join` → O(n) |

**Why `sorted()` is O(n log n).** Any *comparison-based* sort has a proven lower bound of
Ω(n log n): there are n! possible orderings, and each comparison roughly halves the possibilities,
so ≈ log₂(n!) ≈ n log n comparisons are needed to pin down the right one. Python's Timsort hits
that bound (and is O(n) on already-sorted runs).

**Why bucket/counting sort can beat it.** That lower bound is *only* for comparison sorts. When
keys are bounded integers you place items by index instead of comparing → O(n). That's why bucket
sort does Top-K Frequent in O(n) (frequencies are bounded by n). Caveat from the 347 exercise:
Big-O is growth, not wall-clock at small n — constant factors and allocation cost can flip a
micro-benchmark, and LeetCode's timer is noisy.

**Amortized.** `list.append` is O(1) *amortized* — an occasional resize copies O(n), but spread
over many appends it averages O(1). The same idea (hashing) makes dict/set O(1) average.

**Space.** Count memory beyond the input; recursion adds O(depth) stack. Trade deliberately —
a size-k heap is O(k) space for O(n log k) time; bucket sort is O(n) space for O(n) time.

**Reference:** bigocheatsheet.com; wiki.python.org/moin/TimeComplexity.

---

## Part 2 — Study block (the review / learn habit)

One focused block per weekday. **Don't study every area every day** — rotate, so each gets real
depth. Area numbers refer to the six study areas in
[../interview-prep-plan.md](../interview-prep-plan.md); the week-by-week version is
[interview-drills.md](interview-drills.md).

| Day | Study block focus |
|---|---|
| Mon | ML breadth topic (area 2) |
| Tue | ML system design: read + practice one design out loud (area 4) |
| Wed | Experimentation & statistics (area 2) |
| Thu | ML system design: read + practice one design (area 4) |
| Fri | One behavioral STAR story (area 6) → map to an Amazon LP |
| Sat | Research deep-dive (area 5) + from-scratch implementation (areas 2–3) |

**Behavioral is parked through Aug 9** — Friday goes to experimentation catch-up until then.
See the drill plan for why, and for the hard Sep 6 milestone that closes it out.

The separate **project block** (the deployed portfolio project) runs alongside on weekdays —
that's build time, not review time.

> Renumbering note (2026-07-30): this file previously used the "Track 1–7" scheme from the
> superseded [ml-job-prep-plan.md](ml-job-prep-plan.md). Mapping: Track 1 → area 1;
> Track 2 → area 2 (classical ML, metrics, stats) and area 3 (deep learning); Track 3 → areas
> 2–3; Track 4 and Track 5 → area 4; Track 6 → area 3; Track 7 → area 6. **Area 5
> (research deep-dive) had no old equivalent** — it is the round AS loops run and MLE loops
> don't, and it is the centerpiece for RS.

### The review checklist — what to know, and the bar for "known"

The bar for every item: **you can explain it in 2–3 minutes and say when it breaks.** Check a
box only when you've hit that bar out loud, not just read about it.

**ML breadth (area 2) — rapid-fire fundamentals**
- [ ] Bias–variance tradeoff; over/underfitting; regularization (L1 vs L2, why L1 is sparse)
- [ ] Logistic regression (loss, decision boundary), SVM (margin, kernels)
- [ ] Trees → random forest vs gradient boosting (XGBoost/LightGBM): what each fixes
- [ ] k-means (and its failure modes), PCA (what the components mean)
- [ ] Class imbalance: resampling, class weights, why accuracy lies
- [ ] Metrics: precision/recall/F1, ROC-AUC **vs** PR-AUC (when each is right), calibration
- [ ] Ranking metrics: NDCG, MAP, MRR — needed for search/recsys loops
- [ ] Offline vs online metrics; why they disagree

**Deep learning (area 3)**
- [ ] Backprop by hand on a tiny net; vanishing/exploding gradients
- [ ] Initialization, batch norm vs layer norm, dropout — what problem each solves
- [ ] CNNs (what a conv learns), RNN/LSTM (why LSTMs beat vanilla RNNs)
- [ ] **Attention & transformers — cold.** Be able to derive scaled dot-product attention on
      a whiteboard and explain multi-head, positional encoding, Q/K/V.

**Statistics, probability & A/B testing (area 2)** — the AS differentiator; see the drill plan
- [ ] MLE vs MAP; Bayes-rule word problems; common distributions
- [ ] Hypothesis testing, p-values, confidence intervals — say what a p-value *isn't*
- [ ] **"Failing to reject H₀ is not accepting H₀"** — you already reasoned this through on the
      thesis benchmark; it is a classic interview trap and you can answer it from experience
- [ ] A/B testing: experiment design, power analysis, sample size, novelty & network effects
- [ ] Multiple comparisons and when to correct (and when correcting is the wrong call)
- [ ] Causal inference: difference-in-differences, propensity scoring (your data-mining edge)
- [ ] One- vs two-sided tests and why the choice matters; exact vs asymptotic tests; what breaks
      when expected cell counts are small — **you implemented all of this from scratch**, so
      rehearse it as *spoken answers*, not as code you can point at

**ML system design (area 4)** — decides your level
- [ ] The framework, same order every time: **problem framing → data → features → model →
      training → serving → metrics → monitoring**
- [ ] Serving vocabulary: latency budget, candidate generation vs ranking, feature store,
      training/serving skew, model monitoring & retraining triggers
- [ ] Practice these 6 out loud, recording yourself:
  - [ ] News-feed / video recommendation (two-tower + ranking)
  - [ ] Search ranking
  - [ ] Ad click-through prediction
  - [ ] Fraud / anomaly detection (your data-mining strength)
  - [ ] A health design (readmission risk / triage) — your differentiator
  - [ ] An LLM-backed feature (RAG assistant) — increasingly asked in 2026

**ML from scratch (areas 2–3)** — implement from a blank file, no framework
- [ ] NumPy: linear regression (gradient descent), logistic regression, k-means, k-NN,
      a 2-layer NN with manual backprop
- [ ] PyTorch: a training loop (no Lightning), a custom Dataset/DataLoader, single-head then
      multi-head self-attention, a small transformer block
- [ ] Karpathy *Zero to Hero* videos 1, 2, and the GPT video (build nanoGPT along)
- [ ] Debugging drill: given a training curve that won't converge, list 10 causes

**LLM / GenAI literacy (area 3)** — 2026 table stakes even for non-LLM roles
- [ ] Pretraining vs SFT vs RLHF/DPO; LoRA/PEFT; quantization; context windows
- [ ] RAG architecture; embeddings & vector search; eval (LLM-as-judge, benchmarks)
- [ ] One hands-on artifact: a LoRA fine-tune on a toy task **or** a small RAG pipeline

**Research deep-dive (area 5)** — the round AS loops run and MLE loops don't; the centerpiece for RS
- [ ] The **Classify → Extract → Order → Verify** arc as one coherent line of work
      (SMILE-College → TACO → CRAFT/MedTempo → MERMAID + the thesis benchmark)
- [ ] Three lengths, each rehearsed aloud: **30 seconds**, **3 minutes**, **20 minutes**
- [ ] For RS specifically: a **45-minute job talk** version with slides
- [ ] Embedded answers for the predictable follow-ups: "what's next", "what's the hardest part",
      "why this method over the baseline", "how does it all fit together"
- [ ] Go deep on demand: CRAFT's generator–verifier loop and stopping criteria; MERMAID's claim
      decomposition and memory-augmented reason–act loop; the benchmark's gold-label construction
- [ ] A clean, non-defensive answer to the **venue question** and to the **May 2027 timeline**

**Production / MLOps vocabulary (area 4 — serving & monitoring)**
- [ ] The deployed portfolio project itself (FastAPI + Docker + AWS + W&B + CI)
- [ ] Distributed training: data vs model vs pipeline parallelism; DDP; skim FSDP
- [ ] PySpark basics (DataFrame API, joins, groupBy/agg, UDF pitfalls) — named in Amazon postings
- [ ] SQL: window functions, self-joins, CTEs — 15 practice problems

### If you only have 30 minutes

LeetCode first, always — it's the filter. Skip the study block before you skip the problem.
During defense mode (Sep 1–20), this is the whole plan: 30 min of LeetCode maintenance, nothing else.

### Where you'll draft the outputs

- Behavioral stories → [interview-prep.md](interview-prep.md); LP mapping → [amazon-lp.md](amazon-lp.md)
- Per-company "why them" answers → each `companies/*.md`
- System-design write-ups and all code → the separate `ml-job-prep` repo (not here)
