# Process Gates and Critique Mode
> **Status: imported from Open Design (OD) analysis. Not yet validated by Anthony's comparison rounds.** Follow these as defaults for surfaces his validated rules (`principles/*.md`, SKILL.md) don't cover. Wherever they conflict with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** starting any non-trivial design task (before building); deciding whether to ask the user a question; the user asks for a critique, review, audit, or "what's wrong with this"; you are about to show or hand off finished work.

## 1. Ask or decide

- Default to proceeding. Ask only when an unresolved answer would change the direction, the structure, or the delivery format; a question whose answer would only nudge a detail costs the user a turn for nothing. `L1` · OD
- Never ask what the brief, attached assets, a supplied brand source, earlier turns, or this skill already answer. Asking again signals you did not read. `L1` · OD
- If you can ask the user: ask once, at most three questions, each carrying your recommended default so a bare "go ahead" is a valid reply. Never run a second round of questions. `L1` · OD
- If you cannot ask (no channel, unattended run, "just do it"): proceed on the most defensible reading and list each assumption in the delivery note, so a wrong guess is a cheap redirect. `L1` · OD
- Local, reversible details (a heading's wording, a crop, an accent choice among sampled hues) are assumed and disclosed, never asked. Skip questions entirely for edits to existing work. `L1` · OD
- Never ask the user to choose a visual style. Choosing one is the job; a style menu hands the decision back. The exception is an explicit request for options: give two or three that differ decisively on one stated axis, never cosmetic variants. `L1` · OD
- Do not guess a brand. If the user says "match our brand" or "like this reference" and nothing was supplied, ask for it (this is the one question worth asking) or state that you are proceeding unbranded. `L3` · OD

## 2. Direction first

- Resolve direction in this order: explicit user instruction, supplied brand source (L3), supplied reference, then inference from subject, audience, channel and tone (the L2 preset). A higher source silences every lower one. `L1` · OD
- Commit to one direction. A main direction plus hedged alternates reads as indecision, and mid-piece drift breaks series consistency. If two directions truly compete, name both in one sentence, recommend one, proceed. `L1` · OD
- Before building, state the system in one sentence: the register and why, the ground, the three type roles, the accent logic, the motion character. It exists so the user can redirect at the cost of one reply, not after the build. `L1` · OD
- Mark each decision in the delivery note as user-given, brand-given, or defaulted by this skill. A default presented as confirmed is a silent assumption. `L1` · OD
- Decide the system once (ground, type roles and scale, spacing rhythm, edge treatment, icon family, motion character) and reuse it unchanged across every page, frame, variant and later turn until the user changes it. Re-inventing it per round is how a series falls apart. `L1` · OD
- For multi-part work (several screens, slides, frames), state the structure and the rhythm between parts before building; show a rough, honestly labelled first pass early rather than a polished one late. `L1` · OD
- Quiet constraints override register preference: accessibility-critical audiences, regulated content, children, glance-only channels. Read for them before choosing. `L1` · OD

## 3. Discovery inputs

Collect these from the brief and assets; ask only for the ones that are both missing and decision-changing.

- **Subject and the real assets:** what it is, what images, copy, data and marks actually exist. Tenet 5 decides from the real assets, so inventory them first.
- **Audience and channel:** glance media, poster, or reference media; this sets density and scale.
- **Format and aspect ratios:** every one that will ship (each is reflowed, not scaled).
- **Motion and sound:** is there motion, music, voiceover; this switches on the motion and sync rules.
- **Brand:** guidelines, logo, palette, fonts, prior work. If present, load as L3 and extract real values; never invent tokens.
- **Existing work:** is this greenfield, a refinement, or an overhaul. Classify it before touching anything.
- **Constraints:** deadline, production limits, legal or required copy, accessibility needs.

`L1` · OD

## 4. Editing existing work

- Existing work is a baseline: read its palette, type, spacing and component language first and continue them. `L1` · OD
- An edit changes only what was named, everywhere that request applies, and nothing else. A change of narrative, structure or direction is a redesign; say which one you are doing. `L1` · OD
- Before an overhaul, list what must not change (structure, labels, brand marks, legal copy). Preserve existing accessibility wins. Fix in this order: type, color, states, spacing and grid, component swaps, polish. `L1` · OD
- After editing, confirm every targeted instance changed and every unnamed element did not. `L1` · OD

## 5. Iteration limits

- Self-revision: at most three passes. Stop earlier when a pass yields no real improvement. At the cap, deliver the best pass and state what remains open. `L1` · OD
- Refinement turns: edit in place, never rebuild from memory. Keep the system bound on every turn; earlier constraints persist until the user changes them. `L1` · OD
- Recheck after a fix only what the fix touched, then the non-negotiables once more. `L1` · OD

## 6. Anti-slop gate

Before showing work, ask of every element: where did this come from? If the answer is "it is the default", change it or justify it from the concept.

- Every hue traces to the imagery or the concept; a stock framework accent that nobody chose is a tell. `L1` · OD
- No invented facts: statistics, testimonials, logos, customer names, awards, prices, citations. Use a clearly labelled placeholder or leave the slot out. Any figure shown carries its source, unit and period. `L1` · OD
- No filler copy ("Feature one", lorem ipsum, hype adjectives). An empty area is a composition problem; solve it with scale and placement, not words. Do not add sections or copy the user did not ask for. `L1` · OD
- A named real thing (person, product, artwork, landmark, mark) is shown by its real image, never a generated look-alike. If unavailable, show an honestly labelled placeholder. `L1` · OD
- Structural tells to treat as defects: a rounded card with a colored left-edge stripe; an icon beside every heading or bullet; several solid primary buttons for one action in view; hover that merely greys or dims text; designer or "demo" controls inside a product artifact; placeholder-image URLs; the stock hero-features-pricing-FAQ sequence with nothing specific to this product. `L1` · OD
- Soul test: a proven structure plus exactly one earned, concept-driven move. If a stranger could not tell what this is for, raise the specificity of content and proportion, never the decoration. `L1` · OD (adapted)

## 7. Critique mode

Use when the user asks for a review, or when grading your own pass. Review the executed result (what is actually on the canvas or in the file), never the stated intent. If tooling exists to render it, look at it at the real format(s) at least once; if not, say the review was static. `L1` · OD (adapted)

**Five dimensions, scored independently** (a piece can be a 9 on one and a 4 on another, and the report must say so):

| # | Dimension | Anthony's tenet | OD rubric equivalent | Judge |
|---|---|---|---|---|
| D1 | Concept and direction | 0 and 5 | Philosophy consistency | One direction chosen from the subject and the real assets; register, type, color and motion agree with it |
| D2 | Hierarchy and reading order | 2 | Visual hierarchy | Single unbroken chain; the first, second, third read are what the meaning demands |
| D3 | Intent and detail | 1 | Detail execution | Grid, margins, tangents, collisions, rag, optical alignment; nothing reads as accident or default |
| D4 | Legibility and function | 4 | Functionality | Contrast on the real background, reading time, states, every format reflowed |
| D5 | Restraint and distinctiveness | 3 | Innovation (reworded) | Drama in one place; one earned move; never rewards a second flourish or novelty for its own sake |

**Scale and scoring rules**
- Bands: 0–4 broken, 5–6 works but drifts, 7–8 strong, 9–10 exceptional. A 7 means strong, not acceptable. `L1` · OD
- Every score cites evidence: the specific element, region or frame, plus the principle id. A number without evidence is invalid. `L1` · OD
- Score the worst sustained band, never the average, and never average up. One weak region that a viewer would notice caps its dimension. `L1` · OD
- No grade inflation. If every dimension lands at 8 or above, re-read the piece as a sceptical reviewer and find the first thing they would attack. `L1` · OD
- For each dimension under 9, say in one line what the 10 version would do differently. `L1` · OD
- A non-negotiable or dealbreaker hit is an automatic must-fix and caps its dimension at 4, whatever else is good. `L1` · OD

**Lens checks** (report separately; a strength in one does not excuse a failure in another)
- Brief fit: does it solve the stated problem; name its thinnest part.
- Brand (L3): conformance to supplied guidelines; a brand violation is a defect even if it looks good, except where it would break a non-negotiable (flag, change the minimum).
- Copy: specific, terse, no filler, no invented facts.
`L1` · OD

**Verdict and thresholds**
- SHIP when: every dimension is 7 or higher, no must-fix is open, and no non-negotiable or dealbreaker is hit. Otherwise BLOCK. Use a min over dimensions, not a weighted composite. `L1` · OD
- Review passes: at most three. After each non-final pass, fix must-fix items first and re-score only what changed. `L1` · OD
- **Must-fix** = non-negotiable failure, dealbreaker, hierarchy ambiguity, or any dimension under 7. **Quick win** = a small polish (minutes, not a rebuild) that does not change a verdict. Keep the two lists separate; never pad Fix with polish, and never bury a must-fix among quick wins. `L1` · OD
- Order Fix by impact per effort, using this remedy preference: remove the element, reduce it, fix hierarchy or placement, fix type, fix color, then polish. `L1` · OD
- Default to flagging; approval is earned. `L1` · OD

**Citing principles**
- Cite as `category · R-id (layer)`, taking the category from the heading and the R-id from the tag on the rule in `principles/*.md`, for example `Typography · R024 (L1)`. For an L2 rule add the tone: `(L2 quiet/premium)`. For a brand rule: `(L3)`.
- Cite SKILL.md items by name: `Non-negotiable 3`, `Tenet 2`, `Dealbreaker: justified text`.
- Imported, unvalidated rules are cited by file and section (for example `ui-craft.md · Forms`) and labelled provisional; they can raise a Quick win or a Fix but never a Block on their own. (Only validated rules, non-negotiables and dealbreakers block.)
`L1` · OD (adapted)

**Before / After / Why format** (one row per issue, never separate lines)

| Before | After | Why |
|---|---|---|
| What it is now, with location | The concrete change, in relationships not literal values | Principle id and the reason it matters here |

### Critique output template

```markdown
# Critique: <piece name>
**Verdict:** SHIP | BLOCK — <one sentence: the single most important reason>
**Reviewed:** <rendered at formats X, Y | static review only> · pass <n> of 3

## Scores (worst sustained band, not average)
| Dimension | Score | Evidence (element or region, principle id) | What a 10 would do |
|---|---|---|---|
| D1 Concept and direction | /10 | | |
| D2 Hierarchy and reading order | /10 | | |
| D3 Intent and detail | /10 | | |
| D4 Legibility and function | /10 | | |
| D5 Restraint and distinctiveness | /10 | | |

Lenses: Brief fit — <note> · Brand (L3) — <note or n/a> · Copy — <note>

## Keep (do not touch)
- <3–5 things that work and why, with principle ids>

## Fix (must-fix first, then by impact per effort)
| # | Severity | Before | After | Why |
|---|---|---|---|---|
| 1 | Must-fix | | | <Category · R-id (layer)> |
| 2 | Should-fix | | | |

## Quick wins (minutes each, none change the verdict)
- <3–5 items>

## Assumptions and open items
- <assumptions made, rules bent, anything unchecked>
```

## 8. Self-review loop (extends the SKILL.md pre-flight checklist)

Run on your own output, in this order, before showing it. Run the SKILL.md pre-flight checklist as step 3.

1. **Completeness.** No placeholder left that is not labelled; no invented facts; every required asset and format present.
2. **Direction.** Does the built result still match the one-sentence system you stated? If it drifted, fix the build or restate the system.
3. **Pre-flight.** Run the SKILL.md checklist in full: non-negotiables first, then hierarchy and grid, then color and contrast on real backgrounds, then motion, then the dealbreaker scan, then per-format reflow.
4. **Anti-slop gate** (section 6): trace each hue, each icon, each claim, each image.
5. **Look at it.** If you can render or preview, do so at the real format(s) and inspect the result; measure what you can (contrast, spacing, line length) rather than trusting arithmetic. If you cannot, state that the check was static.
6. **Score quickly** with the D1–D5 table, worst band. Anything under 7 or any must-fix: fix and repeat from step 3, at most three passes total.
7. **Name the weakest element** a sceptical reviewer would attack first. Fix it or disclose it.
8. **Report only what you ran.** The delivery note lists decisions with their source (user, brand, default), assumptions, any rule bent and why, and what remains open. Never claim a check you did not perform; do not narrate tooling trouble the user did not ask about.

`L1` · OD (adapted)

