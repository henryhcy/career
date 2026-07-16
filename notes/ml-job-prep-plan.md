# ML Job Prep Plan — Applied Scientist / ML Engineer

**Profile:** CS/ML PhD (data mining + health ML), graduating Summer 2027, NYC-first.
**Targets:** Amazon Applied Scientist, MLE at big tech (Google/Meta NYC), Bloomberg AI,
quant research, NYC health-AI companies, TikTok/ByteDance. (Logged as leads on the board.)
**Timeline anchors:** 3rd paper done end of Aug → proposal defense early Sep →
interview season Oct–Dec.

> **Where things live.** This is the *plan and tracking* — it stays in `career` (prose only,
> per CLAUDE.md). The actual practice **code** (LeetCode solutions, from-scratch NumPy/PyTorch,
> the deployed portfolio project, nanoGPT) does **not** go in this repo. When you start writing
> solutions, put them in a separate `ml-job-prep` code repo and link it here. See
> [Where the code lives](#where-the-code-lives) at the bottom — this supersedes the standalone
> repo structure the original plan suggested.
>
> **Week-by-week roadmap:** [roadmap.md](roadmap.md) lays the whole search out as checkable
> weeks (build → defense → interview → close), with cumulative LeetCode targets and milestones.
>
> **Day-to-day companion:** [study-guide.md](study-guide.md) turns the two daily board habits
> (one LeetCode problem + one study block) into concrete instructions — the LeetCode routine,
> the pattern-by-pattern technique map, and a review checklist with the "known" bar.

---

## The 7 Skill Tracks

Every interview loop for the target roles draws from these seven areas. Track 1 and Track 4
are where PhDs fail; Tracks 2–3 are where you already have an edge and just need packaging.

### Track 1 — Coding / Data Structures & Algorithms (the #1 PhD filter)
**Goal:** Solve LeetCode mediums in Python in ~25 min, clean code, talking out loud.

- [ ] Work through LeetCode **by pattern** (you have Premium — use company tags + frequency
      sort; a curated spine like "Top Interview 150" / "LeetCode 75" works), in this order:
  - [ ] Arrays & Hashing (9 problems)
  - [ ] Two Pointers (5)
  - [ ] Sliding Window (6)
  - [ ] Stack (7)
  - [ ] Binary Search (7)
  - [ ] Linked List (11)
  - [ ] Trees (15)
  - [ ] Heap / Priority Queue (7)
  - [ ] Backtracking (9)
  - [ ] Graphs (13)
  - [ ] 1-D Dynamic Programming (12)
  - [ ] 2-D Dynamic Programming (first 6 only — diminishing returns beyond)
  - [ ] Greedy + Intervals (10)
- [ ] Total target: **~110 problems by Oct 1** (≈ 4–5/week Jul–Aug, lighter during defense)
- [ ] Redo every problem you failed, 1 week later (keep a "failed" list)
- [ ] Python fluency drills: collections (Counter, defaultdict, deque), heapq, itertools,
      list/dict comprehensions, generators
- **Resources:** LeetCode Premium — official study plans, company-tagged problems, and
      frequency sort; pair with pattern write-ups (e.g. the "LeetCode patterns" cheat sheets)
      and Python-for-interviews refreshers on YouTube when a pattern is new

### Track 2 — ML Breadth (rapid-fire fundamentals round)
**Goal:** Answer any "explain X / when would you use X / what breaks when Y" in 2–3 minutes.

- [ ] Classical ML: bias–variance, regularization (L1/L2), logistic regression, SVM,
      decision trees, random forest vs gradient boosting (XGBoost/LightGBM), k-means,
      PCA, class imbalance handling
- [ ] Deep learning: backprop, initialization, batch/layer norm, dropout, CNNs, RNN/LSTM,
      **attention & transformers (know this cold — derive attention on a whiteboard)**
- [ ] Evaluation: precision/recall/F1, ROC-AUC vs PR-AUC, calibration, ranking metrics
      (NDCG, MAP, MRR — critical for recsys/search roles), offline vs online metrics
- [ ] Statistics & probability: MLE vs MAP, Bayes rule problems, hypothesis testing,
      p-values, confidence intervals, common distributions
- [ ] **A/B testing & causal inference** (Amazon AS and quant firms love this):
      experiment design, power analysis, novelty effects, network effects,
      difference-in-differences, propensity scoring — your data-mining background helps here
- **Resources:** *StatQuest* (YouTube) for fast refreshers; Chip Huyen's
  *Machine Learning Interviews* book (free online) for question banks;
  *Trustworthy Online Controlled Experiments* (Kohavi) — skim chapters 1–5 for A/B testing

### Track 3 — ML Coding (implement-from-scratch round)
**Goal:** Code core algorithms in NumPy/PyTorch without a framework doing the thinking.

- [ ] Implement from scratch in NumPy: linear regression (gradient descent),
      logistic regression, k-means, k-NN, a 2-layer neural net with manual backprop
- [ ] Implement in PyTorch: a training loop from scratch (no Lightning), a custom Dataset/DataLoader,
      **single-head then multi-head self-attention**, a small transformer block
- [ ] Complete Karpathy's *Neural Networks: Zero to Hero* videos 1, 2, and the GPT video
      (build nanoGPT along with him)
- [ ] Debugging drills: given a training curve that won't converge, list 10 causes
- **Resources:** Karpathy *Zero to Hero* (YouTube, free); *d2l.ai* for reference implementations

### Track 4 — ML System Design (the round that decides seniority/level)
**Goal:** Run a 45-min design (problem framing → data → features → model → training →
serving → metrics → monitoring) without being dragged.

- [ ] Read *Designing Machine Learning Systems* (Chip Huyen) — all chapters, 1–2/week
- [ ] Read *Machine Learning System Design Interview* (Ali Aminian & Alex Xu) — work every
      case study end-to-end on paper
- [ ] Practice these canonical designs out loud (record yourself):
  - [ ] News-feed / video recommendation system (two-tower + ranking — TikTok, Meta staple)
  - [ ] Search ranking system
  - [ ] Ad click-through prediction
  - [ ] Fraud / anomaly detection (plays to your data-mining strengths)
  - [ ] A health-domain design of your choice (readmission risk, patient triage) — your differentiator
  - [ ] An LLM-backed feature (RAG-based support assistant) — increasingly asked in 2026 loops
- [ ] For each: know the serving story (latency budget, candidate generation vs ranking,
      caching, feature store, training/serving skew, model monitoring & retraining triggers)

### Track 5 — Production / MLOps (proves "research code → real code")
**Goal:** One deployed, public, end-to-end project + fluency in the vocabulary.

- [ ] The portfolio project (health-adjacent, public dataset):
  - [ ] Model trains locally, reproducible (requirements.txt / uv, seeds, config file)
  - [ ] FastAPI inference endpoint with input validation
  - [ ] Dockerized (write the Dockerfile yourself, no copy-paste-and-pray)
  - [ ] Deployed on AWS (EC2 or SageMaker endpoint — SageMaker preferred for Amazon apps)
  - [ ] Experiment tracking with Weights & Biases
  - [ ] GitHub Actions CI (lint + tests run on push)
  - [ ] README with architecture diagram + a short write-up post
- [ ] Distributed training literacy: run PyTorch DDP on 2 GPUs (or simulated), read the FSDP
      docs, be able to explain data vs model vs pipeline parallelism
- [ ] **PySpark basics** — appears explicitly in Amazon/applied-science intern postings:
      DataFrame API, joins, groupBy/agg, UDF pitfalls, one exercise on a big public dataset
- [ ] SQL: window functions, self-joins, CTEs — 15 problems on a practice site
      (quant firms and health companies screen SQL)

### Track 6 — LLM / GenAI Literacy (2026 table stakes, even for non-LLM roles)
**Goal:** Speak fluently about the modern stack; one small hands-on artifact.

- [ ] Concepts: pretraining vs SFT vs RLHF/DPO, LoRA/PEFT, quantization,
      context windows, RAG architecture, embeddings & vector search, eval (LLM-as-judge, benchmarks)
- [ ] Hands-on: fine-tune a small open model with LoRA on a toy task, OR build a small RAG
      pipeline over a document set — add it to the portfolio repo
- **Resources:** Hugging Face free courses (LLM + fine-tuning); Chip Huyen's *AI Engineering*
  (skim chapters relevant to evals + RAG)

### Track 7 — Behavioral + Research Storytelling
**Goal:** Never lose a room while explaining your own work.
Drafts live in [interview-prep.md](interview-prep.md) and [amazon-lp.md](amazon-lp.md).

- [ ] Write STAR stories (~150 words each) for: a technical challenge (paper #1); dealing with
      ambiguity (research direction change); a conflict/disagreement (advisor, collaborator,
      reviewer); a failure and what you changed; delivering under deadline (paper crunch).
- [ ] **Amazon Leadership Principles:** map 2 stories to each of the top 8 LPs — see
      [amazon-lp.md](amazon-lp.md). Amazon AS loops weight this heavily.
- [ ] Thesis pitch: a 3-minute and a 10-minute version for a smart non-specialist
      (problem → why it matters → approach → impact). Record and iterate.
- [ ] "Why industry / why this company" for each top-10 target — draft in each `companies/*.md`.

---

## Weekly Schedule (repeating template)

**Jul 15 – Aug 31 (build phase, ~2.5 hrs/day weekdays):**

| Slot | Mon | Tue | Wed | Thu | Fri | Sat |
|---|---|---|---|---|---|---|
| 45 min | LeetCode | LeetCode | LeetCode | LeetCode | LeetCode (redo failed) | off |
| 60 min | Project (Track 5) | Project | Project | Project | Project | Track 3 (from-scratch) |
| 45 min | Track 2 topic | Track 4 reading | Track 2 topic | Track 4 reading | Track 7 (1 story/wk) | Track 6 |

The daily checklist on the board (`./bin/board`) mirrors this: LeetCode, a study/project block,
outreach. Tick them off to keep the streak honest.

**Sep 1 – Sep 20 (defense mode):** LeetCode 30 min/day maintenance only. Everything else pauses.
Applications were front-loaded to late August; callbacks arrive while you defend.

**Sep 21 – Oct 31 (interview mode):** Track 4 practice designs 3×/week, mock interviews weekly,
LeetCode 45 min/day, company-specific prep 2 days before each loop.

---

## Milestone Checklist (the "am I on track" list)

- [ ] **Jul 26:** 10–12 Fall internship applications submitted; resume final; tracker live
- [ ] **Aug 10:** 30 LeetCode problems done; model + API working locally
- [ ] **Aug 24:** 55 problems; project deployed on AWS with W&B + CI
- [ ] **Aug 31:** Paper #3 submitted ("under review at ___" goes on resume);
      15+ full-time applications submitted; project write-up posted
- [ ] **Sep 20:** Proposal defense done
- [ ] **Oct 1:** 110 problems total; all 6 system designs practiced once; referral sweep done
- [ ] **Oct 15:** 4+ mock interviews completed; Amazon LP stories memorized
- [ ] **Dec 20:** Goal — signed offer or final-round loops in flight before final semester

---

## Where the code lives

The original plan suggested one `ml-job-prep/` repo holding both the plan and all the code
(`leetcode/`, `ml_from_scratch/`, `portfolio_project/`, `nanogpt/`). We're **not** doing that,
because `career` is deliberately prose-only (see CLAUDE.md) and already part of a two-repo setup.

Instead:

- **This repo (`career`)** holds the plan, milestones, prep notes, and the application pipeline.
- **A separate `ml-job-prep` code repo** (create it when you write your first solution) holds:

  ```
  ml-job-prep/
  ├── leetcode/            # one .py per problem, pattern-named; failed_list.md
  ├── ml_from_scratch/     # logistic_regression.py, kmeans.py, attention.py, nanogpt/
  ├── system_design/       # one .md per practiced design (notes, not code)
  ├── portfolio_project/   # the deployed FastAPI + Docker + AWS project (Track 5)
  └── llm_playground/      # LoRA fine-tune / RAG mini-project (Track 6)
  ```

- The **deployed portfolio project** is your public signal — it can be its own public repo so
  recruiters can see it, separate from the private practice scratch.

When the code repo exists, link it here and from the README.
