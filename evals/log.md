# Eval log

## Run 1 — 2026-10-25

- **Skill commit:** f376ded (v2.8.0). **Model:** the same Claude model for every worker and grader, in one Claude Code session.
- **Arms** (five, not the protocol's three): A baseline · B Anthropic `frontend-design` · C design-taste, single pass, no render · D design-taste plus a mandatory lint, render, look and fix loop · E baseline plus the same loop without rules. Arm E was added to separate the effect of the rules from the effect of the review loop.
- **Mapping** (revealed after scoring): A=W, B=Z, C=X, D=M, E=V. Picks were shown to Anthony as 1–5, shuffled per brief, from full-page renders (habit screen: first phone screen, 390 × 844).
- **Deviations:** B and C made small edits after writing (no rendering). All renders for judging were taken by the operator at the same widths.

### Anthony's blind picks (the verdict)

| Brief | Best | Worst | His reason, short |
|---|---|---|---|
| landing-bike-shop | B | C | Large display headline wins; E would have won but its subheads were offset from the copy column; C "feels the most AI created", no personality |
| dashboard-ops | A | D | A: clear hierarchy, intuitive filters, color used right; D: "mostly void of color", misses hierarchy |
| pricing-saas | A | D | A: hierarchy and color without overwhelming; D: "feels more like a wireframe", lacks finesse |
| email-launch | D | B | D: large image, short punchy text, one strong CTA; B: a wall of text |
| mobile-habit | E | D | E: gamified streaks, color, spacing and type set a strong hierarchy; D: "boilerplate, as if created by a developer and not crafted by a designer" |
| negative-control-trust | E | D | E: playful but structured, "a designer using a design system"; D: does not deliver on the brief, generic |

**Best:** A 2 · E 2 · B 1 · D 1 · C 0. **Worst:** D 4 · B 1 · C 1.

**Protocol stopping rule:** the skill works if C is picked best on more briefs than either other arm and has no more blockers than B. **It failed:** C was never picked best; D, the full skill with its loop, was picked worst on four of six briefs.

### AI grading (for contrast)

A blind grader of the same model scored each piece on the brief assertions, blockers and craft. It ranked D first on five of six briefs and C second overall (assertions passed of 32: C 30, D 30, A 18, B 18, E 14). **The AI grader and Anthony disagree almost completely.** The assertions are drawn from the skill's own rules, so they reward compliance; Anthony judged the whole piece. Lesson: an AI or rule-based score of this skill is not evidence that it produces work he likes.

### What the losses have in common (his words)

Void of color; wireframe; boilerplate; lacking finesse, nuance and personality; generic; "as if created by a developer". The winners use color for hierarchy, a large display headline, imagery, and playful touches inside a clear structure.

### Hypotheses to test (not conclusions; n = 1 per cell)

1. Restraint rules compound. Each rule is his, but applied together (accent on named events only, neutral surfaces, no decoration, one sans for work tools) they strip a piece of color and character he wants in the whole.
2. Honest gaps read as unfinished. D and C show bracketed placeholders where the baseline invented plausible content; placeholders look like a wireframe.
3. The loop polished compliance, not delight: it fixed measurable faults and once introduced a garbled sentence.

### Next

- Holistic rounds: whole pieces, not single variables, to find where the atomic rules stop adding up.
- Ask Anthony how finished placeholder content should look (R152 vs the wireframe read).
- Re-run after changes with the same briefs; keep Anthony's blind pick as the only verdict.

## Run 2 — 2026-10-26 (whole pieces)

- **Question:** do the restraint rules hurt in combination, and did placeholders cause run 1's losses?
- **Skill commit:** f376ded for both skill versions (the v2.8.1 fixes were not yet on main when the workers read the skill).
- **Versions** (revealed after picking): F the skill as is · G the skill with five restraint rules suspended (accent scarcity, neutral product surfaces, one sans for work tools, restraint on delight, the AI-tells list) · H no guidance. All three used real-looking content (invented facts listed in the notes) and the same mandatory render-and-fix loop.
- **Briefs:** pricing-saas, dashboard-ops, mobile-habit.

| Brief | Best | Worst | His reason, short |
|---|---|---|---|
| pricing-saas | G loosened | F as is | G: the cost calculator and "very nice" color; F: strong but simple, "doesn't really impress me" |
| dashboard-ops | H none | G loosened | H: color used very well, left-hand nav; G: "goes over the top with color, and looks a bit clowny" |
| mobile-habit | F as is | G loosened | F: intuitive; G: "UI that is a bit too non-traditional" |

### Reading (n = 1 per cell)

1. **Placeholders were a large part of run 1.** With real-looking content the skill as is won one brief and lost one; it was no longer the default loser.
2. **Color is a dial, not a switch.** Too little lost a marketing page; too much lost a work tool ("clowny"). The winner on the dashboard used color for hierarchy plus a familiar left nav.
3. **Interfaces stay conventional.** Loosening "restraint on delight" produced non-traditional mobile UI, which lost, which fits R142: a new pattern makes the brand teach it.
4. **A functional delight sells a marketing page.** The pricing winner's team-size cost estimator was the first thing he named.

### Proposed, not yet validated

- Replace R152's empty slot with real-looking content plus an "Invented, confirm before shipping" list (Anthony: "as real as possible").
- Scale the color budget by surface: consideration and marketing pages may tint sections and cards beyond the named events; work tools use color for hierarchy and status but not on every tile.
- Marketing pages look for one functional delight that answers the visitor's real question (an estimator or calculator), never decoration.
