# Roadmap — the whole job search, week by week

The bird's-eye view. [study-guide.md](study-guide.md) is *today*; this is *this week* and
*the whole arc* through offer season. Tick one box per week when you've done the bulk of it.
Dated **🎯 milestones** are the hard checkpoints (canonical list in
[ml-job-prep-plan.md](ml-job-prep-plan.md#milestone-checklist)).

**LeetCode counts are cumulative.** Targets track the milestones: 30 by Aug 10, 55 by Aug 24,
~110 by Oct 1. The build-phase weeks front-load the reps because September is mostly defense.

## The four phases at a glance

| Phase | Weeks | The job |
|---|---|---|
| **Build** | Jul 13 – Aug 30 | ~2.5 hrs/day. Bank LeetCode reps, build the portfolio project, apply. |
| **Defense** | Aug 31 – Sep 20 | Proposal defense. LeetCode maintenance only; everything else pauses. |
| **Interview** | Sep 21 – Oct 31 | Designs 3×/week, weekly mocks, company-specific prep, loops begin. |
| **Close** | Nov 2 – Dec 20 | Run loops, company-tagged prep 2 days out, negotiate, decide. |

---

## Build phase (Jul 13 – Aug 30)

- [ ] **Jul 13–19** · *build* · **← you are here (Thu Jul 16)**
  - LeetCode: Arrays & Hashing → Two Pointers. Target ~6. (cum ~6)
  - Study: ML breadth warm-up (bias–variance, regularization); skim *Designing ML Systems* ch. 1.
  - Apply/outreach: **start the Fall internship apps** (Amazon first); finalize resume with career-docs; concretize the two placeholder leads (quant, health-AI).
- [ ] **Jul 20–26** · *build*
  - LeetCode: Sliding Window → Stack. ~8. (cum ~14)
  - Study: metrics (ROC-AUC vs PR-AUC, NDCG/MAP/MRR); one system-design read.
  - 🎯 **Jul 26 — 10–12 Fall internship apps submitted; resume final; tracker live.**
- [ ] **Jul 27 – Aug 2** · *build*
  - LeetCode: Binary Search → Linked List. ~8. (cum ~22)
  - Study: classical ML (trees → RF vs GBM); begin the portfolio project (model trains locally).
  - Track 3: linear + logistic regression from scratch (NumPy).
- [ ] **Aug 3–9** · *build*
  - LeetCode: Trees. ~8. (cum ~30)
  - Study: deep-learning core (backprop, norm, dropout); project → FastAPI endpoint.
- [ ] **Aug 10–16** · *build*
  - LeetCode: Heap / PQ → Backtracking. ~8. (cum ~38)
  - Study: **attention & transformers cold**; project → Dockerize.
  - 🎯 **Aug 10 — 30 LeetCode done; model + API working locally.**
- [ ] **Aug 17–23** · *build*
  - LeetCode: Graphs. ~9. (cum ~47)
  - Study: A/B testing + causal inference; project → deploy to AWS, add W&B.
  - Track 3: k-means, k-NN, 2-layer NN with manual backprop.
- [ ] **Aug 24–30** · *build*
  - LeetCode: 1-D DP. ~8. (cum ~55)
  - Study: system design — practice recsys (two-tower + ranking) out loud; project → CI + README.
  - 🎯 **Aug 24 — 55 problems; project deployed on AWS with W&B + CI.**

## Defense phase (Aug 31 – Sep 20)

- [ ] **Aug 31 – Sep 6** · *defense begins*
  - LeetCode: taper to maintenance (~5, redo failed). (cum ~60)
  - 🎯 **Aug 31 — paper #3 submitted ("under review at ___" on resume); 15+ full-time apps submitted; project write-up posted.**
  - Note: front-load the FT applications into this week — callbacks arrive while you defend.
- [ ] **Sep 7–13** · *defense* · LeetCode 30 min/day maintenance only; everything else paused. (cum ~64)
- [ ] **Sep 14–20** · *defense* · LeetCode maintenance only. (cum ~68)
  - 🎯 **Sep 20 — proposal defense done.**

## Interview phase (Sep 21 – Oct 31)

- [ ] **Sep 21–27** · *interview mode on* · ramp back up
  - LeetCode: finish 2-D DP (first 6) + Greedy/Intervals; heavy redo of failed list. ~12. (cum ~80)
  - Study: system-design practice 3×/week starts; first mock interview.
- [ ] **Sep 28 – Oct 4** · *interview*
  - LeetCode: push to target + company-tagged (Premium) for imminent loops. ~15. (cum ~95–110)
  - 🎯 **Oct 1 — ~110 problems total; all 6 system designs practiced once; referral sweep done.**
    *(Aggressive next to the defense — if you're at ~90, that's fine; consistent reps matter more than the round number.)*
- [ ] **Oct 5–11** · *interview* · maintain LeetCode (redo + company-tagged); weekly mock; Amazon LP stories.
- [ ] **Oct 12–18** · *interview*
  - 🎯 **Oct 15 — 4+ mock interviews completed; Amazon LP stories memorized.**
  - Company-specific prep: 2 days before each loop, do that company's top frequency-sorted problems.
- [ ] **Oct 19–25** · *interview* · loops in flight; retro in `notes/` after each; keep mocks weekly.
- [ ] **Oct 26 – Nov 1** · *interview* · same; update the board as cards move (screen → interviewing).

## Close phase (Nov 2 – Dec 20)

- [ ] **Nov 2–8** · *close* · run loops; company-tagged prep 2 days out; log every interview retro.
- [ ] **Nov 9–15** · *close* · continue loops; tighten weak spots surfaced in retros.
- [ ] **Nov 16–22** · *close* · onsite/virtual finals; keep LeetCode warm (~3/wk).
- [ ] **Nov 23–29** · *close* · Thanksgiving week — lighter; follow-ups so nothing goes stale.
- [ ] **Nov 30 – Dec 6** · *close* · finals continue; start comparing any offers; comp research per company.
- [ ] **Dec 7–13** · *close* · negotiate; use the `companies/*.md` comp tables.
- [ ] **Dec 14–20** · *close*
  - 🎯 **Dec 20 — signed offer, or final-round loops in flight before the final semester.**

---

## How to run the week

1. **Monday:** open this file, read the current week, and set the LeetCode pattern for the week.
2. **Daily:** tick the two board habits (LeetCode + study block) — see [study-guide.md](study-guide.md).
3. **As roles move:** drag cards on the board; write a retro in `notes/` after each interview.
4. **Friday:** check the week's box here if you hit the bulk of it; commit and push.

If a week slips, don't reshuffle the whole plan — protect the LeetCode reps and the next
milestone, and let the softer study items flex.
