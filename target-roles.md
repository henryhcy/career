# Target Roles

_Last updated: July 2026. Calibrated honestly, not optimistically._

## Role titles to search and apply under
**Applied Scientist** (the primary target), Research Scientist (secondary, ~15% — see Tier 2 below for where it's real), Machine Learning Engineer, NLP Engineer, ML Research Engineer, Data Scientist, Member of Technical Staff (some startups). The same profile maps to several of these titles depending on the company's naming, so search broadly — but note that Meta and ByteDance use "Research Scientist" for what is Applied Scientist elsewhere, and Amazon is the only company using "Applied Scientist" as an exact title at scale.

## Tier 1 (core, highest likelihood): strong-fit full-time
Where a recruiter reads the CV and immediately sees fit. Production clinical NLP plus a publication record is close to exactly what these teams scope. This is the track that actually converts and where most tailoring effort belongs.

**Profile of the fit:** clinical NLP, health-tech, and mid-size applied-ML shops; information extraction, LLM evaluation, RAG, and multi-agent/agentic pipelines in applied settings.

**Curated fits** (on the board as Track A seeds — warm referrals now, apply Feb 2027):
- **Pharmacovigilance / drug safety:** Pfizer, Novartis. The strongest single edge in the portfolio — the thesis is functionally LLM-driven adverse-event analysis over VAERS, and drug safety is a funded function at both. Very few PhD applicants have this combination.
- **Clinical NLP at scale:** Optum Labs (UnitedHealth), Oracle Health, Abridge, Komodo Health.
- **Bio/ML:** Insitro, Genentech/Prescient Design.

**Sponsorship is a screening criterion, not a discovery.** F-1 requiring H-1B means small startups must be confirmed as sponsors *before* they earn tailoring effort. Currently unverified: Abridge, Komodo Health, Insitro, Scale AI. This matters more here than anywhere else, because Tier 1 is the designated core track and it skews small.

**Historical / lower-confidence** (from prior application history, kept for reference): Biohub, Novo Nordisk, Prior Labs (tabular foundation models), Precisely, Plymouth Rock Assurance, GoFundMe, Fanatics, Blank Slate. Several of these are not clinical NLP at all — treat the list as a record of where applications went before, not as a curated target set.

**Why likely:** thinner, domain-filtered applicant pools; full-time is often their primary hiring path; the BIDMC production pipeline and VAERS work are load-bearing rather than adjacent.

## Tier 2 (reach, real but low-odds): big-tech new-grad full-time
Worth a few well-placed, referral-backed shots. Do not build expectations on it. The bar is higher, the funnel narrower, and converting interns have first claim on headcount.

**Split the target by sub-type:**
- **Applied Scientist / Applied ML roles** — better fit. Screen is "can you build and ship real ML systems," where the HALO deployment is a genuine signal and publications are a strong plus rather than a gate.
- **Research Scientist roles** — a real but narrow lane, and worth roughly 15% of effort. General-purpose labs (DeepMind, FAIR, and peers) do weight top-tier ML/NLP venues (NeurIPS, ICML, ICLR, ACL, EMNLP) as a first-pass filter, and the venue profile does not clear that bar. **Health and applied research groups are a different story**, and this assessment was written before two things landed:
  - **CRAFT accepted at SIAM SDM 2026, first author.** SDM is a credible peer-reviewed data-mining venue, and first authorship on it is a materially different signal from the co-authored domain-venue record this section originally described.
  - **A substantial reviewing record** — NeurIPS, KDD, AAAI, EMNLP, COLING, CIKM, LREC, and ACL Rolling Review, plus a journal. Research groups read service as evidence you are already in the community.

  So: still a venue-prestige gap against general-purpose labs, still not the core. But the honest target is **health/applied research groups**, where the clinical NLP depth is the asset and the venue profile is not disqualifying. Named shortlist on the board: Microsoft Research Health Futures, AI2, Genentech/Prescient Design, IBM Research.

**Representative companies:** Google (Research / applied science), Amazon (Applied Scientist), Microsoft / MSR, Meta, ByteDance (active NLP and IE PhD/new-grad roles), Scale AI (research roles wanting NLP/agents/eval publications), Samsung Research, MERL, Sony Research.

**Biggest single lever on this tier:** land one under-review paper at a top-tier venue. That moves the needle more than any application tailoring. It likely won't land in time for fall-2026 screening, which is why Tier 1 is the core and Tier 2 is the reach.

## Tier 3 (aspirational reframe): reasoning / agents / verification / eval teams
Not a separate company list so much as a *lens* on Tiers 1 and 2. The existing portfolio already is reasoning-systems work; it has been described by domain instead of method. Target teams working on:
- multi-agent systems and agentic reasoning (MERMAID: multi-agent evidence reconciliation, iterative verification)
- verifier-guided generation and self-correction (temporal generator-verifier loop)
- iterative refinement pipelines (FAIR-Q: refine-and-review)
- reasoning evaluation and benchmark construction (TRACE, temporal QA)

**How to present it:** methods as the headline, clinical/veracity as application domains. Narrative arc: **Classify -> Extract -> Order -> Verify** (SMILE-College -> TACO -> MedTEMPO/AFTER -> MERMAID), where "Order" (temporal reasoning) and "Verify" (veracity, generator-verifier) carry the reasoning weight. This is honest and load-bearing, and it targets exactly the teams working on agents, verification, and reasoning eval without abandoning the portfolio.

## Explicitly not this cycle
- **RL-focused roles** (RLHF, RL-for-reasoning): no RL track record. Cold-applying reads as unfocused and is the lowest-probability bet of the directions considered. Longer play only.
- **Domains without genuine background** (CV/perception, autonomous driving, oncology): do not claim adjacency. Flag calibration concerns rather than overclaiming.
