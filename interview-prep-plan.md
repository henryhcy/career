# Interview Prep: Timeline and Study Plan

_Last updated: July 2026. Built around a May 2027 graduation and the two application waves (big-tech new-grad in fall 2026, strong-fit full-time in spring 2027)._

## Timeline

### Aug to early Sep 2026 — foundation, before big-tech reqs open
- Rebuild coding fluency (Track B loops are the most coding-heavy).
- Refresh ML breadth so nothing feels rusty in a screen.
- Polish the research narrative and the 30-second intro; lock the method-first framing.
- Prep referral outreach lists for both tracks.

### Sep to Nov 2026 — big-tech new-grad wave (Track B) + interviews
- Applications out early; the bottleneck is being early and in the pile.
- Peak coding practice, ML system design, and behavioral prep during active loops.
- Keep research deep-dive sharp for research/applied-science screens.

### Dec 2026 to Feb 2027 — bridge
- Get papers 3 and 4 onto arXiv as each becomes submittable (paper 3 targeted ~Sep, paper 4 ~Dec). Preprints are what a recruiter can actually open.
- Keep coding warm (lighter volume) so spring loops don't need a cold restart.
- Continue any Track B loops still live.

### Feb to Apr 2027 — strong-fit full-time wave (Track A, the core)
- Heaviest tailoring effort here: "why this company" essays, cover letters, domain framing.
- Domain-specific interview prep (clinical NLP, IE, RAG, eval) and research deep-dives.
- This is the higher-hit-rate track; it gets the most careful preparation.

### May 2027 — graduate, convert offers.

## Study plan (six areas)

Applied Scientist / ML / NLP loops usually draw from these. Weight coding and system design more for Track B; weight research depth and domain framing more for Track A.

### 1. Coding / data structures and algorithms
- Python, LeetCode medium as the working level.
- Core: arrays, strings, hashmaps, two pointers, sliding window, stacks/queues, trees, graphs (BFS/DFS), heaps, binary search, and introductory DP.
- Expect occasional ML-flavored coding (implement k-means, a metric, a small training loop, tokenization).
- Cadence: a steady daily/near-daily habit from August; ramp volume during active loops.

### 2. ML breadth and fundamentals
- Classic ML: bias-variance, regularization, over/underfitting, cross-validation, class imbalance, calibration.
- Evaluation: precision/recall/F1, ROC-AUC vs PR-AUC, when each metric misleads (directly relevant to the fine-grained coding-accuracy + alignment framing in TACO).
- Algorithms you can reason about end to end: logistic regression, trees/GBMs, k-means, basic Bayesian methods (ties to the Gulf War Illness clustering work).

### 3. Deep learning / NLP / LLM depth
- Transformer architecture, attention, positional encodings, tokenization.
- Pretraining vs fine-tuning; PEFT/LoRA; instruction tuning; RLHF at a conceptual level (know it well enough to discuss, given it's adjacent to the aspirational RL interest).
- Decoding strategies, hallucination and faithfulness, LLM evaluation design.
- Retrieval / RAG: chunking, embeddings, vector search, reranking, failure modes. (Note TACO's real extension challenge: open-vocabulary retrieval and reranking, since the symptom list is provided from structured VAERS fields.)
- Multi-agent systems: orchestration, tool use, verifier-guided generation, iterative refinement, and their failure modes (path dependence, lack of a learned tool-selection policy — the known MERMAID weaknesses).

### 4. ML system design
- Practice designing: a RAG system; a clinical entity-extraction pipeline (OCR -> NER -> post-processing, straight from the HALO work); an LLM evaluation harness; a multi-agent verification loop.
- Cover data pipelines, annotation strategy (human-machine collaborative annotation: LLM first pass, human expert review), serving (vLLM), latency/throughput, monitoring, and how to evaluate the system.

### 5. Research deep-dive / presentation
- One tight 30-second intro plus structured talking points per project.
- Lead with the **Classify -> Extract -> Order -> Verify** arc so the portfolio reads as one coherent line of reasoning-systems work.
- Embed talking points for anticipated follow-ups within each project: "what's next," "how does it all fit together," "what's the hardest part," "why this method over the baseline."
- Be ready to go deep on MERMAID (claim decomposition, memory-augmented reason-action loop, stopping criteria) and the generator-verifier temporal framework.

### 6. Behavioral
- STAR stories from HALO/BIDMC (cross-functional work with clinical stakeholders, shipping under constraints, the schema-refinement iterations) and from research (owning a project end to end, handling a result that didn't work, collaboration on multi-author papers).
- For Amazon specifically, map stories to the Leadership Principles.
- Have a clean, non-defensive answer for the graduation timeline and for the venue question if a research interviewer probes it.

## Quick reference: what each track leans on
- **Track B (big-tech new-grad):** coding + ML system design + ML breadth + behavioral, with research depth for science roles.
- **Track A (strong-fit full-time):** research depth + domain framing + system design, with lighter but present coding.
