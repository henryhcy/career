# Study guide — what to actually do each day

The operational companion to [ml-job-prep-plan.md](ml-job-prep-plan.md). The plan is the
*what and when*; this is the *how*, tied to the two daily checks on the board:

- **"One NeetCode problem"** → Part 1 below (the LeetCode routine).
- **"One study/project block"** → Part 2 below (what to review or learn).

Tick the box only when you actually did the thing. Streaks are the point.

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

### The pattern map — learn the technique, not the problem

Do NeetCode 150 **in this order** (it's built so each pattern builds on the last). For each,
the thing to internalize:

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

> When the code repo exists, keep solutions in `ml-job-prep/leetcode/`, one file per problem
> named by pattern, plus `failed_list.md`. Not in this repo — see the plan.

---

## Part 2 — Study block (the review / learn habit)

One focused block per weekday. **Don't study all seven tracks every day** — rotate, so each
area gets real depth. Suggested rotation (mirrors the plan's weekly template):

| Day | Study block focus |
|---|---|
| Mon | ML breadth topic (Track 2) |
| Tue | ML system design: read + practice one design out loud (Track 4) |
| Wed | ML breadth topic (Track 2) |
| Thu | ML system design: read + practice one design (Track 4) |
| Fri | One behavioral STAR story (Track 7) → map to an Amazon LP |
| Sat | From-scratch implementation (Track 3) + a bit of LLM (Track 6) |

The separate **project block** (Track 5, the deployed portfolio project) runs alongside on
weekdays — that's build time, not review time.

### The review checklist — what to know, and the bar for "known"

The bar for every item: **you can explain it in 2–3 minutes and say when it breaks.** Check a
box only when you've hit that bar out loud, not just read about it.

**ML breadth (Track 2) — rapid-fire fundamentals**
- [ ] Bias–variance tradeoff; over/underfitting; regularization (L1 vs L2, why L1 is sparse)
- [ ] Logistic regression (loss, decision boundary), SVM (margin, kernels)
- [ ] Trees → random forest vs gradient boosting (XGBoost/LightGBM): what each fixes
- [ ] k-means (and its failure modes), PCA (what the components mean)
- [ ] Class imbalance: resampling, class weights, why accuracy lies
- [ ] Metrics: precision/recall/F1, ROC-AUC **vs** PR-AUC (when each is right), calibration
- [ ] Ranking metrics: NDCG, MAP, MRR — needed for search/recsys loops
- [ ] Offline vs online metrics; why they disagree

**Deep learning (Track 2)**
- [ ] Backprop by hand on a tiny net; vanishing/exploding gradients
- [ ] Initialization, batch norm vs layer norm, dropout — what problem each solves
- [ ] CNNs (what a conv learns), RNN/LSTM (why LSTMs beat vanilla RNNs)
- [ ] **Attention & transformers — cold.** Be able to derive scaled dot-product attention on
      a whiteboard and explain multi-head, positional encoding, Q/K/V.

**Statistics, probability & A/B testing (Track 2)** — Amazon AS + quant love this
- [ ] MLE vs MAP; Bayes-rule word problems; common distributions
- [ ] Hypothesis testing, p-values, confidence intervals — say what a p-value *isn't*
- [ ] A/B testing: experiment design, power analysis, sample size, novelty & network effects
- [ ] Causal inference: difference-in-differences, propensity scoring (your data-mining edge)

**ML system design (Track 4)** — decides your level
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

**ML from scratch (Track 3)** — implement from a blank file, no framework
- [ ] NumPy: linear regression (gradient descent), logistic regression, k-means, k-NN,
      a 2-layer NN with manual backprop
- [ ] PyTorch: a training loop (no Lightning), a custom Dataset/DataLoader, single-head then
      multi-head self-attention, a small transformer block
- [ ] Karpathy *Zero to Hero* videos 1, 2, and the GPT video (build nanoGPT along)
- [ ] Debugging drill: given a training curve that won't converge, list 10 causes

**LLM / GenAI literacy (Track 6)** — 2026 table stakes even for non-LLM roles
- [ ] Pretraining vs SFT vs RLHF/DPO; LoRA/PEFT; quantization; context windows
- [ ] RAG architecture; embeddings & vector search; eval (LLM-as-judge, benchmarks)
- [ ] One hands-on artifact: a LoRA fine-tune on a toy task **or** a small RAG pipeline

**Production / MLOps vocabulary (Track 5)**
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
