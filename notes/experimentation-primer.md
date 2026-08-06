# Experimentation & A/B testing — interview primer

A study reference for the "experimentation & statistics" area (area 2). **Learn this first, then
drill it** as spoken answers (see [interview-drills.md](interview-drills.md)) — drilling makes
known material fluent; it doesn't teach new material.

**You already own the hard half.** Your thesis is power analysis, exact tests, p-values,
confidence intervals, and correlated-data inference. This primer adds the thin *applied
online-experiment* layer on top — vocabulary and design patterns. Where a concept is one you've
already lived, it's flagged **[you know this]**.

---

## 0. The distinction to never miss: offline eval vs online A/B test

| | Offline evaluation | Online A/B test |
| --- | --- | --- |
| Setup | Fixed dataset, score vs gold (ROUGE, F1, exact match, human ratings) | Model is **live**; randomize real **users**; measure real outcomes |
| Question | "Is it good enough to *try*?" | "Should we *ship* it?" |
| Your thesis | This is your benchmark pipeline | The new layer |

Pipeline: **offline eval (gate) → online A/B (decision) → ship.** If asked to "design an A/B test"
and you describe dataset construction + offline metrics, you answered the wrong stage. Name which
stage you're in first.

---

## 1. The design framework (hit these beats, in order)

For *any* "design an experiment" question:

1. **Hypothesis & decision** — what you're changing, what you expect to move, and what **decision**
   the test drives (ship / kill).
2. **Unit of randomization** — who/what gets bucketed, and *why* (§2).
3. **Metrics** — one **primary** (the OEC), **secondary/driver** metrics, and **guardrails** you
   refuse to regress (§3).
4. **Sizing** — MDE + baseline variance + α + power → sample size → run length (§4–5).
5. **Analysis & pitfalls** — the test + CI, then name the traps (§6–7).
6. **Decision rule** — pre-registered ship criteria (what if primary is flat but a guardrail moves?).

---

## 2. Unit of randomization

The choice: randomize by **user / session / request**, or **cluster** (clinician, clinic, geo, region).
Two questions decide it:

- **Independence.** Are the units independent observations? Multiple notes from one clinician are
  **correlated** — randomizing at the note level breaks the independence your analysis assumes. **[you know this]**
- **Interference / contamination (SUTVA).** Does treating one unit affect another? If a clinician
  exposed to AI drafts changes behavior *even on their control notes* (carryover), or if users in a
  social network / marketplace influence each other, you have **spillover** → randomize at a **cluster**
  level so treatment and control don't mix within a unit.

**Cluster randomization** (e.g., by clinician) fixes both — at a cost: fewer independent units, so
you need more of them (§4, design effect). Rule of thumb: randomize at the coarsest level where
interference still crosses, but no coarser.

---

## 3. Metrics

- **Primary / OEC (Overall Evaluation Criterion):** the *one* metric the decision hangs on. Must be
  sensitive, move quickly, and align with long-term value (often a **proxy** for the true goal —
  e.g., documentation time as a proxy for clinician burden).
- **Secondary / driver metrics:** explain *why* the primary moved (edit distance, adoption rate).
- **Guardrail metrics:** things you refuse to regress even if the primary improves — **safety**
  (hallucinated/wrong clinical facts), quality, latency, cost, later corrections. In clinical/health,
  safety guardrails are non-negotiable.
- **Sanity/invariant metrics:** things that should *not* change between arms (e.g., the 50/50 split
  itself) — used to detect bugs (§7, SRM).

Good metric traits: sensitive, hard to game, causally attributable, and directional (you know which
way is good).

---

## 4. Sizing = a power analysis (four knobs) **[you know this]**

Fix three (+ variance) and solve for **N**:

1. **MDE** (minimum detectable effect) — the smallest effect **worth shipping**. A **business call,
   not statistics** (e.g., "a 10% cut in doc time is worth it"). Smaller MDE → much bigger N.
2. **α** — usually 0.05 (Type I / false positive rate).
3. **Power** = 1 − β — usually 0.80 (chance of detecting a true effect of size MDE).
4. **Baseline mean + variance** — **estimated from historical logs**, not guessed.

Intuition to say out loud: **N ∝ variance / (effect size)²**. So halving the MDE ~quadruples N;
noisier metrics need more N. (Two-sample means: `n ≈ 2σ²(z_{1−α/2} + z_{1−β})² / Δ²` per arm.)

**Clustering inflates N.** With cluster randomization, effective N shrinks by the
**design effect = 1 + (m − 1)·ICC** (m = units per cluster, ICC = intra-cluster correlation). You
need enough **clusters** (clinicians), not just notes — and ≥ a couple of clusters per arm just to
estimate between-cluster variance. **[you know this — correlated data]**

**Variance reduction (bonus points): CUPED** — use a pre-experiment covariate (e.g., each
clinician's baseline doc time) to strip out predictable variance → smaller N for the same power.

---

## 5. Run length

`run_length = max( time to accumulate N given traffic (clusters × units/week), a minimum of a few weeks )`

The minimum exists even if you already have N, to:
- **Cover a full cycle** — weekday/weekend, on-call rotations, case mix, seasonality.
- **Outlast the novelty/primacy effect** — users react to *change itself* early (over-edit,
  over-trust), which biases the metric until behavior settles.

Don't stop early just because it "looks significant" — that's peeking (§7).

---

## 6. Analysis & what a p-value is / isn't **[you know this cold]**

- **Test:** two-sample t/z-test for means, or a proportions test for rates; report the **effect size
  + confidence interval**, not just the p-value.
- **Clustered design → clustered analysis:** mixed model with a cluster random effect, or clustered
  standard errors. *Never* a naive per-unit t-test on clustered data (understates variance → false
  positives). This pairing (cluster randomize → cluster analyze) is the senior move.
- **p-value** = P(data at least this extreme **| H₀ true**). It is **not** P(H₀ true), not the
  probability the result is "due to chance," and **failing to reject H₀ ≠ accepting H₀** (could be
  underpowered). You lived this on the benchmark — say it exactly that way.
- **CI (frequentist):** "95% of such intervals would contain the true value over repeated
  experiments" — *not* "95% probability the truth is in this one interval."

---

## 7. The traps (this is where interviews are won)

- **SRM (Sample Ratio Mismatch):** your 50/50 split comes out 48/52 at huge N → a χ² test flags it;
  something's broken (assignment/logging bug) → **invalidate the test**, don't interpret it.
- **Peeking / sequential testing:** checking repeatedly and stopping at significance inflates Type I
  error. Fix the horizon in advance, or use sequential / always-valid methods.
- **Multiple comparisons:** many metrics or variants → inflated false positives; correct with
  Bonferroni/FDR. **But know when correcting is the *wrong* call** (a pre-specified single primary
  metric doesn't need it). **[straight from your thesis redesign]**
- **Novelty / primacy effects:** early behavior ≠ steady state (§5).
- **Network effects / interference:** treatment leaks to control (social, marketplace, shared
  resources) → cluster/geo/switchback randomization.
- **Heterogeneity / Simpson's paradox:** an overall effect can reverse within subgroups; segment,
  but pre-register the segments.
- **Twyman's law:** any result that looks amazing is probably a bug — check instrumentation first.

---

## 8. Common interview questions → the one-line approach

- *"Design an A/B test for X."* → run the §1 framework out loud.
- *"Your metric is flat — what do you do?"* → underpowered? novelty not settled? wrong/ insensitive
  metric? check SRM and instrumentation before believing "no effect."
- *"It's significant after 2 days — ship?"* → no: peeking, novelty, cycle coverage; wait for the
  pre-registered horizon.
- *"Can't randomize users (interference) — now what?"* → cluster / geo / switchback designs.
- *"Explain a p-value / CI to a PM."* → §6, in plain language.

---

## 9. Where your work already maps (say these in interviews)

- **Power analysis from first principles** → §4 is your home turf.
- **Correlated / non-independent observations** → §2 unit choice and §6 clustered analysis.
- **Exact tests, Monte-Carlo fallback, four kinds of CI** → §6 rigor; you can go deeper than most.
- **A defensible negative result with a diagnosed cause** → the textbook "fail to reject ≠ accept,
  and here's why" story (§6). Almost no candidate has a real one. Lead with it.

## 10. Resources
- *Trustworthy Online Controlled Experiments* — Kohavi, Tang, Xu (the standard; chapters 1–5 cover
  all of the above).
- Free Udacity **A/B Testing** course for a guided pass.
- Chip Huyen, *Designing ML Systems* — the evaluation/experimentation chapter for the ML-serving angle.
