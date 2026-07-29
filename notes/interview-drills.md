# Interview drills — first 8 weeks (coding · system design · behavioral)

The concrete execution plan for the three interview pillars, **Jul 27 – Sep 20 2026** (Foundation
phase into the start of the big-tech new-grad wave). This is the detail under
[roadmap.json](../roadmap.json); technique/how-to lives in [study-guide.md](study-guide.md),
story drafts in [interview-prep.md](interview-prep.md), and the LP grid in [amazon-lp.md](amazon-lp.md).

**Why these three:** Track B (big-tech new-grad, fall) leans coding + system design + behavioral;
those are the rounds that gate the funnel. Research deep-dive matters too but is already strong —
these three are where the reps go now.

## Weekly cadence (~2–2.5 hrs/weekday)

- **Coding — daily, ~45–60 min.** One problem minimum; talk aloud; keep a `failed_list`; redo a
  failed problem one week later. This is the non-negotiable daily habit.
- **System design — 2×/week, ~45 min** (ramping to 3×/week in September). Work one case end to
  end, out loud, ideally recorded. Use the fixed framework every time.
- **Behavioral — 1×/week, ~45 min.** Write or refine one STAR story; map it to Amazon LPs.
- **Weekends:** lighter — redo failed coding problems; one mock once mocks start (Week 6).

## The three pillars — approach

- **Coding:** LeetCode mediums in Python, ~25 min each, pattern by pattern (see the pattern map in
  [study-guide.md](study-guide.md)). Brute force → name the pattern → clean code → trace an edge
  case. Ramp to Premium company-tagged + frequency-sorted once loops are near.
- **System design (ML):** one framework, every time — **problem framing → data → features → model
  → training → serving → metrics → monitoring**. State assumptions, drive the conversation, name
  trade-offs. Record yourself and listen back.
- **Behavioral:** STAR (~150 words), reusable across companies; tailor the framing, not the facts.
  Map each to Amazon Leadership Principles (2 stories per top-8 LP). Have clean answers for the
  **May 2027 timeline** and the **venue question** ready.

## The 8-week schedule

### Week 1 · Jul 27 – Aug 2 · coding restart
- **Coding:** Arrays & Hashing (~9), Two Pointers (~5). Rebuild Python fluency (Counter,
  defaultdict, deque, heapq). Start the `failed_list`.
- **System design:** learn the framework — write the 8-step template from memory; read one primer. No full design yet.
- **Behavioral:** inventory 6–8 candidate stories (paper-1 challenge, research-direction change,
  reviewer/advisor conflict, a failure, a deadline crunch, HALO stakeholder work). Just list them.

### Week 2 · Aug 3 – 9
- **Coding:** Sliding Window (~6), Stack (~7). Redo Week-1 fails.
- **System design #1 — RAG system** (retrieval → rerank → generate; chunking/embeddings; latency; eval).
- **Behavioral:** write STAR #1 (technical challenge) + STAR #2 (deadline crunch).

### Week 3 · Aug 10 – 16
- **Coding:** Binary Search (~7), Linked List (~11). Redo fails.
- **System design #2 — clinical entity-extraction pipeline** (OCR → NER → post-processing, from
  HALO; annotation strategy; serving; monitoring).
- **Behavioral:** write STAR #3 (ambiguity) + STAR #4 (conflict). Start the Amazon LP grid with these four.

### Week 4 · Aug 17 – 23
- **Coding:** Trees (~15). Redo fails.
- **System design #3 — recommendation ranking** (two-tower candidate generation vs ranking;
  features; training/serving skew; NDCG/AUC).
- **Behavioral:** write STAR #5 (failure + what changed). Draft the **May-2027 timeline answer**
  and the **venue-question answer** (non-defensive).

### Week 5 · Aug 24 – 30
- **Coding:** Heap / Priority Queue (~7), Backtracking (~9). Redo fails. **ML-flavored coding:**
  implement k-means, a precision/recall metric, tokenization.
- **System design #4 — LLM evaluation harness** (offline vs online; LLM-as-judge; benchmark
  construction; ties to TACO's two-stage eval).
- **Behavioral:** finish the LP grid — 2 stories per top-8 LP (reuse the 5 core stories). Record 2 aloud.

### Week 6 · Aug 31 – Sep 6 · foundation close + first mock
- **Coding:** Graphs (~13) begin. Redo fails. **First timed mock (coding):** 2 problems, 45 min, talk aloud.
- **System design #5 — multi-agent verification loop** (your MERMAID/CRAFT territory: orchestration,
  tool use, verifier-guided generation, failure modes).
- **Behavioral:** polish delivery — 30-sec intro + method-first arc; run all 5 STAR stories aloud, <2 min each.

### Week 7 · Sep 7 – 13 · applications out; ramp
- **Coding:** 1-D DP (~12) begin. Start Premium **company-tagged** problems for the firms you apply to; redo fails.
- **System design #6 — CTR / ad-click prediction** *or* **fraud / anomaly detection** (plays to
  data-mining). Move to 2–3 designs/week.
- **Behavioral:** LP stories memorized; do a mock behavioral round.

### Week 8 · Sep 14 – 20
- **Coding:** 2-D DP (first ~6) + Greedy/Intervals (~10) begin; company-tagged; heavy redo of fails.
- **System design #7 — search ranking**; then redo the weakest of designs #1–6.
- **Behavioral + SD mock:** a full mock loop; refine from the feedback. **Weekly coding mock** continues.

## Mock interviews
- **Start Week 6**, then weekly. Alternate a coding mock and a system-design/behavioral mock.
- Sources: Pramp / interviewing.io for peer coding + SD; a labmate or friend in industry for
  behavioral and research deep-dive. Record when you can; write a two-line retro after each.

## Resources
- **Coding:** NeetCode 150 / LeetCode "Top Interview 150" by pattern; LeetCode Premium (company
  tags + frequency sort) once loops near; Python-for-interviews refreshers.
- **System design:** *Machine Learning System Design Interview* (Aminian & Xu) — work each case;
  *Designing Machine Learning Systems* (Huyen) for the serving/monitoring vocabulary.
- **Behavioral:** [amazon-lp.md](amazon-lp.md) (LP grid) + [interview-prep.md](interview-prep.md)
  (story bank); STAR method.
