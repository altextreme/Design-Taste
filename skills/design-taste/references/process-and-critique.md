# Process Gates and Critique Mode
> **Status: default guidance. Not yet validated by Anthony's comparison rounds.** Follow these as defaults for surfaces his validated rules (`principles/*.md`, SKILL.md) don't cover. Wherever they conflict with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** starting any non-trivial design task (before building); deciding whether to ask the user a question; the user asks for a critique, review, audit, or "what's wrong with this"; you are about to show or hand off finished work; asked to add or find motion; asked for several variants.

## 1. Ask or decide

- When a person can answer, ask before assuming: one easy question at a time until the brief is complete, skipping questions whose answer would only nudge a detail (R149, R148). When no one can answer (an automated run, another agent's pipeline), proceed on defensible assumptions and state them at the top of the delivery note. `L1` · R149 (owner's ruling 2026-10-26; the no-one-to-ask branch is a default)
- Never ask what the brief, attached assets, a supplied brand source, earlier turns, or this skill already answer. Asking again signals you did not read. `L1` · default
- If you can ask the user: ask one question at a time, at most three in total, each carrying your recommended default so a bare "go ahead" is a valid reply. Never run a second round of questions. `L1` · default
- If you cannot ask (no channel, unattended run, "just do it"): proceed on the most defensible reading and list each assumption in the delivery note, so a wrong guess is a cheap redirect. `L1` · default
- Local, reversible details (a heading's wording, a crop, an accent choice among sampled hues) are assumed and disclosed, never asked. Skip questions entirely for edits to existing work. `L1` · default
- Never ask the user to choose a visual style. Choosing one is the job; a style menu hands the decision back. The exception is an explicit request for options: give two or three that differ decisively on one stated axis, never cosmetic variants. `L1` · default
- If the platform changes the output (native iOS, native Android, web, several) and the brief does not say, ask it first, as the single most decision-changing question. Never prototype a native interface as HTML: it cannot show spring motion, system materials, text scaling or safe areas, so it misinforms the decisions. Web-only prototypes are for web. `L1` · default (adopted from field review)
- Do not guess a brand. If the user says "match our brand" or "like this reference" and nothing was supplied, ask for it (this is the one question worth asking) or state that you are proceeding unbranded. `L3` · default

## 2. Direction first

- Resolve direction in this order: explicit user instruction, supplied brand source (L3), supplied reference, then inference from subject, audience, channel and tone (the L2 preset). A higher source silences every lower one. `L1` · default
- Commit to one direction. A main direction plus hedged alternates reads as indecision, and mid-piece drift breaks series consistency. If two directions truly compete, name both in one sentence, recommend one, proceed. `L1` · default
- Before building, state your read in one line ("Reading this as: <piece> for <audience>, needing <facets>, with <register> restraint"), then the system in one sentence: the register and why, the ground, the type roles, the accent logic, the motion character. It exists so the user can redirect at the cost of one reply, not after the build. `L1` · default
- Mark each decision in the delivery note as user-given, brand-given, or defaulted by this skill. A default presented as confirmed is a silent assumption. `L1` · default
- Decide the system once (ground, type roles and scale, spacing rhythm, edge treatment, icon family, motion character) and reuse it unchanged across every page, frame, variant and later turn until the user changes it. Re-inventing it per round is how a series falls apart. `L1` · default
- For multi-part work (several screens, slides, frames), state the structure and the rhythm between parts before building; show a rough, honestly labelled first pass early rather than a polished one late. `L1` · default
- Quiet constraints override register preference: accessibility-critical audiences, regulated content, children, glance-only channels. Read for them before choosing; section 11 turns the main ones into vetoes. `L1` · default
- If the brief contradicts itself (for example a trust-critical product asked to feel playful), name the contradiction and propose the trade-off. Do not silently pick one side. Where the brief leaves a coverage gap (no dark mode specified, no error state described), ask or flag it; never invent policy from silence. `L1` · default (adopted from field review)

## 3. Discovery inputs

Collect these from the brief and assets; ask only for the ones that are both missing and decision-changing.

- **Subject and the real assets:** what it is, what images, copy, data and marks actually exist. Tenet 5 decides from the real assets, so inventory them first.
- **Audience and channel:** glance media, poster, or reference media; this sets density and scale.
- **Format and aspect ratios:** every one that will ship (each is reflowed, not scaled).
- **Motion and sound:** is there motion, music, voiceover; this switches on the motion and sync rules.
- **Brand:** guidelines, logo, palette, fonts, prior work. If present, load as L3 and extract real values; never invent tokens.
- **Existing work:** is this greenfield, a refinement, or an overhaul. Classify it before touching anything.
- **Facets and anti-reference:** the three to five perceptions the work must create (calm, expert, durable, warm, fast, crafted, trustworthy), and what it must not become, including the category default and the AI default it could fall into. Infer them from the brief; ask only when a wrong guess causes rework. `L1` · default (adopted from field review)
- **Constraints:** deadline, production limits, legal or required copy, accessibility needs.
- **Named products, companies and people:** do not assume facts about them. Verify by search if you can, otherwise ask. A wrong premise costs more than the check. `L1` · default (adopted from field review)
- **References and inspiration:** treat them as material, not answers. If a reference would make the interface less readable, less useful, less credible or less true to the product, weaken or reject it and say so. `L1` · default (adopted from field review)

`L1` · default

## 4. Editing existing work

- Existing work is a baseline: read its palette, type, spacing and component language first and continue them. `L1` · default
- An edit changes only what was named, everywhere that request applies, and nothing else. A change of narrative, structure or direction is a redesign; say which one you are doing. `L1` · default
- Before an overhaul, list what must not change (structure, labels, brand marks, legal copy). Preserve existing accessibility wins. Fix in this order: type, color, states, spacing and grid, component swaps, polish. `L1` · default
- After editing, confirm every targeted instance changed and every unnamed element did not. `L1` · default

## 5. Iteration limits

- Self-revision: at most three passes. Stop earlier when a pass yields no real improvement. At the cap, deliver the best pass and state what remains open. `L1` · default
- Refinement turns: edit in place, never rebuild from memory. Keep the system bound on every turn; earlier constraints persist until the user changes them. `L1` · default
- Recheck after a fix only what the fix touched, then the non-negotiables once more. `L1` · default
- When iterating on a chosen direction, replace it in place (keep a version history) so it refines. Branch only for alternatives the user wants to compare side by side. `L1` · default (adopted from field review)

## 6. Anti-slop gate

Before showing work, ask of every element: where did this come from? If the answer is "it is the default", change it or justify it from the concept.

- Every hue traces to the imagery or the concept; a stock framework accent that nobody chose is a tell. `L1` · default
- Current AI-generated looks, for calibration: (1) a warm cream ground near #F4F1EA with a high-contrast serif and a terracotta or clay accent near #D97757; (2) a near-black ground with one acid-green or vermilion accent; (3) broadsheet hairlines, zero radius and dense newspaper columns; (4) the SaaS card kit: identical rounded cards, one radius on everything, the same soft grey shadow, gradient washes as decoration; (5) template chrome: meta strings joined with middle dots, labels built as "WORD — fragment". Each is legitimate when the brief or brand asks for it; where the brief leaves that axis free, do not spend it on one. His Quiet/premium and Broadsheet registers sit close to (1) and (3): use them because the concept calls for them, never as the fallback. Not adopted from the same source because his rounds decide otherwise: tracked caps for the smallest metadata (R097, R130), one emphasized word or phrase (R153), an arrow that nudges toward the destination (R076), a mono face for numbers (R170). `L1` · default (adapted from anthropics/skills frontend-design)
- Content looks real (R171): no brackets, "TBD" or grey boxes. Invented statistics, testimonials, customer names, awards, prices, citations, years, addresses and claims of scarcity, popularity or sourcing are allowed only as realistic fill, and each one that would mislead if shipped is listed under "Invented, confirm before shipping". Never use a real company's logo or a real person as invented proof. A real figure carries its source, unit and period. `L1` · R171
- No filler copy ("Feature one", lorem ipsum, hype adjectives). An empty area is a composition problem; solve it with scale and placement, not words. Do not add sections or copy the user did not ask for. `L1` · default
- A named real thing (person, product, artwork, landmark, mark) is shown by its real image, never a generated look-alike. If unavailable, show an honestly labelled placeholder. `L1` · default
- Structural tells to treat as defects: a colored left-edge stripe used as the only graphic on a card (flag it as weaker than an icon or image, R102; not a defect until validation queue 76 isolates it); an icon beside every heading or bullet (an icon tied to each column's meaning in a deck, R132, or on practical details, R068, is not a tell); several solid primary buttons for one action in view; hover that merely greys or dims text; designer or "demo" controls inside a product artifact; placeholder-image URLs; the stock hero-features-pricing-FAQ sequence with nothing specific to this product. `L1` · default
- More tells: a decorative squiggle or brush underline standing in for the real active-state mark (use the system's own mark: a straight rule, a ground change, a weight shift); fake browser or phone chrome around a screenshot; accent color applied to labels and captions only to add color; one hover effect stacked from three or more changes (move, scale, shadow, color together; his validated card lift, rise plus slight scale plus shadow, is not a tell, R076); a celebration for something the screen already shows; a placeholder person such as "Jane Doe". `L1` · default
- More tells (field review): a big-number stat band used as decoration on a marketing hero with no finding behind it (a big number that carries the point, R075 or R107, is not a tell); a modal for a task that needs neither interruption nor protected focus; section numbers (01, 02, 03) where the content is not a sequence; the same fade-and-rise entrance on every section. `L1` · default
- Photography test: if an image could have been made for any other organization, reject it. Write a short photo brief (subject types, vantage, light, color treatment, who is shown) before choosing or generating imagery. `L1` · default
- Soul test: a proven structure plus exactly one earned, concept-driven move. If a stranger could not tell what this is for, raise the specificity of content and proportion, never the decoration. `L1` · default

## 7. Critique mode

Use when the user asks for a review, or when grading your own pass. Review the executed result (what is actually on the canvas or in the file), never the stated intent. If tooling exists to render it, look at it at the real format(s) at least once; if not, say the review was static. `L1` · default

**Hard blockers override the score.** A failed non-negotiable (accessible contrast, reading time, collisions and near-tangents, enforced hierarchy and reading order, paragraph links colored and underlined) fails the piece, however well the five dimensions score. A 90 with a blocker is a fail, and the report says so first. A `default` rule alone never creates a blocker. His reasons (R169): some failures stop a piece being usable whatever else is good; a high score can hide a serious problem; calling it blocked makes sure it gets fixed first. `L1` · R169

**Five dimensions, scored independently** (a piece can be a 9 on one and a 4 on another, and the report must say so):

| # | Dimension | Anthony's tenet | Judge |
|---|---|---|---|---|
| D1 | Concept and direction | 0 and 5 | One direction chosen from the subject and the real assets; register, type, color and motion agree with it |
| D2 | Hierarchy and reading order | 2 | Single unbroken chain; the first, second, third read are what the meaning demands |
| D3 | Intent and detail | 1 | Grid, margins, tangents, collisions, rag, optical alignment; nothing reads as accident or default |
| D4 | Legibility and function | 4 | Contrast on the real background, reading time, states, every format reflowed |
| D5 | Restraint and distinctiveness | 3 | Drama in one place; one earned move; never rewards a second flourish or novelty for its own sake |

**Scale and scoring rules**
- Bands: 0–4 broken, 5–6 works but drifts, 7–8 strong, 9–10 exceptional. A 7 means strong, not acceptable. `L1` · default
- Every score cites evidence: the specific element, region or frame, plus the principle id. A number without evidence is invalid. `L1` · default
- Score the worst sustained band, never the average, and never average up. One weak region that a viewer would notice caps its dimension. `L1` · default
- No grade inflation. If every dimension lands at 8 or above, re-read the piece as a sceptical reviewer and find the first thing they would attack. `L1` · default
- For each dimension under 9, say in one line what the 10 version would do differently. `L1` · default
- A non-negotiable or dealbreaker hit is an automatic must-fix and caps its dimension at 4, whatever else is good. `L1` · default

**Lens checks** (report separately; a strength in one does not excuse a failure in another)
- Brief fit: does it solve the stated problem; name its thinnest part.
- Brand (L3): conformance to supplied guidelines; a brand violation is a defect even if it looks good, except where it would break a non-negotiable (flag, change the minimum).
- Copy: specific, terse, no filler; invented facts listed under "Invented, confirm before shipping".
`L1` · default

**Verdict and thresholds**
- SHIP when: every dimension is 7 or higher, no must-fix is open, and no non-negotiable or dealbreaker is hit. Otherwise BLOCK. Use a min over dimensions, not a weighted composite. Only a validated rule, dealbreaker or non-negotiable can drive a dimension under 7 into BLOCK; a score dragged down by default rules alone is SHIP with fixes. `L1` · default
- Review passes: at most three. After each non-final pass, fix must-fix items first and re-score only what changed. `L1` · default
- **Must-fix** = non-negotiable failure, dealbreaker, hierarchy ambiguity, or any dimension under 7. **Quick win** = a small polish (minutes, not a rebuild) that does not change a verdict. Keep the two lists separate; never pad Fix with polish, and never bury a must-fix among quick wins. `L1` · default
- Order Fix by impact per effort, using this remedy preference: remove the element, reduce it, fix hierarchy or placement, fix type, fix color, then polish. `L1` · default
- Default to flagging; approval is earned. `L1` · default

**Citing principles**
- Cite as `category · R-id (layer)`, taking the category from the heading and the R-id from the tag on the rule in `principles/*.md`, for example `Typography · R024 (L1)`. For an L2 rule add the tone: `(L2 quiet/premium)`. For a brand rule: `(L3)`.
- Cite SKILL.md items by name: `Non-negotiable 3`, `Tenet 2`, `Dealbreaker: justified text`.
- Imported, unvalidated rules are cited by file and section (for example `ui-craft.md · Forms`) and labelled provisional; they can raise a Quick win or a Fix but never a Block on their own. (Only validated rules, non-negotiables and dealbreakers block.)
`L1` · default

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

1. **Completeness.** Nothing reads as a placeholder; every invented claim is listed under "Invented, confirm before shipping"; every required asset and format present.
2. **Direction.** Does the built result still match the one-sentence system you stated? If it drifted, fix the build or restate the system.
3. **Pre-flight.** Run the SKILL.md checklist in full: non-negotiables first, then hierarchy and grid, then color and contrast on real backgrounds, then motion, then the dealbreaker scan, then per-format reflow.
4. **Anti-slop gate** (section 6): trace each hue, each icon, each claim, each image.
5. **Look at it.** Render at the real format(s) and inspect the image, then zoom into every text block, following `render-and-review.md` (assume you can see). Measure what you can (contrast, spacing, line length) rather than trusting arithmetic. Fix and look again. If you truly cannot render, use its no-render mode and state that the check was static.
6. **Score quickly** with the D1–D5 table, worst band. Anything under 7 or any must-fix: fix and repeat from step 3, at most three passes total.
7. **Ask the retouch question:** would a designer retouch this? If any box is unchecked or any part looks assembled instead of decided, it is not done. Then name the weakest element a sceptical reviewer would attack first. Fix it or disclose it.
8. **Report only what you ran.** The delivery note lists decisions with their source (user, brand, default), assumptions, any rule bent and why, and what remains open. Never claim a check you did not perform; do not narrate tooling trouble the user did not ask about.

`L1` · default


## 9. Review passes that catch what a single read misses

- **Eyes first, then the lint.** Judge the render before running any mechanical check, and write the verdict down, so the scan cannot talk you into approving something that looks wrong. A page can pass every automated check and still feel flat. Add the mechanical results after. `L1` · default
- **For interactive work, walk it as three people** (his stated answer, not yet a comparison round; skip for static pieces such as posters and charts): a desktop user with a mouse; a one-handed phone user with a thumb; a keyboard user with no hover. For each, record what they saw with no input, and where they were blocked. Report friction, not opinions. `L1` · default
- **Grep what a grep can find,** and keep the log. Reference starter patterns for web builds: `transition: all`, a disabled state expressed by opacity alone, color values written inline instead of from tokens, a viewport-height hero with a centered stack, an unstyled native select, border-width changes between states. "No violations visible in the source" is only a claim if the search was run; a hit is judged real or harmless and written down. `L1` · default
- **Self-sameness test, always.** (His stated answer, not yet a comparison round.) Before showing any non-trivial piece, name the part of the design that would appear unchanged for a very different brief in a different category, then change it and say what you changed and why in the delivery note. Inside a brand, examine only what the brand leaves open (layout, structure, content decisions); brand-fixed pieces such as font, color and logo are skipped. If you cannot name one, you have not looked hard enough. This sits beside the logo-removed specificity test in `ui-craft.md` and the two-layouts step. `L1` · default
- **Derive, then build, when making a system.** For a design system or multi-screen product: state a stance and two or three principles, each with what it gives up; write a short decision list with one-line reasons; turn it into tokens that point back at the decision; specify components (anatomy, state matrix, hit areas) before pages; declare each page's layout grammar and make sure the content volume supports it (a carousel needs enough slides, a mosaic enough items), asking for more content rather than shrinking the layout. Pages then consume the system; a new value means going back and adding a decision. A token with no reason behind it is an improvisation. `L1` · default
- **Declare density and motion before building.** One line: how dense (airy to packed) and how much motion (still to lively). When density is low, the cap on focus and fold content wins over any rule that says to fill space. `L1` · default

## 10. Critique vocabulary (name the cause, then the fix)

Use these as shorthand for the cause. Each pairs the phrase a reviewer says with what is wrong, a signal you can check in the render, and the usual fix. Always tie it to the goal of the piece, not to taste. Anthony confirmed this is how he talks (a stated answer, not yet a comparison round), so use the phrases in critiques, with the cause named alongside. `L1` · default

| Phrase | What is actually wrong | Signal to check | Usual fix |
|---|---|---|---|
| "Everything is shouting" / no entry point | Several elements share top emphasis | More than one element at the largest size or strongest contrast | Demote all but one to the second level |
| "Type soup" | More sizes, weights or families than the scale allows | Count them in the view | Snap to the roles in the scale |
| "Conflict, not contrast" | Two levels differ, but not enough to read as different | Neighboring levels look too close in size or weight | Widen the step or the weight gap, not both slightly |
| "Busy" / "noisy" | Too many borders, colors or boxes | Count borders and distinct colors | Replace inner borders with space |
| "Floating" | A label sits as close to the wrong group as to its own | Gap to own group is not smaller than gap to the neighbor | Tighten the label to its field |
| "Ragged" | Too many different left edges | Count the unique x-positions | Snap to the grid |
| "Muddy" | Colors differ in hue but not in value | Look at it in grayscale | Separate by lightness |
| "Rainbow" | Accent spread across many elements | Count accent-colored elements | Keep it for the action and status |
| "Washed out" | Gray text on a colored surface | Secondary text token on a tinted ground | Use the on-color text token |
| "Lopsided" | Visual weight sits on one side unintentionally | Blur the image and see where the mass falls | Rebalance size, value or position |
| "Doesn't look clickable" | Weak signifier | A ghost or text-style primary action; links styled like body | Solid variant, underline for text links |
| "Boxes in boxes" | Containers used for grouping | Nesting deeper than two | Use gaps instead of the inner box |
| "Optically off" | Geometric, not optical, centering or sizing | A triangle centered by its box; a circle and square at equal width | Correct by centroid or area |
| "Not one family" | Two styles for one job | Two button treatments doing the same thing | Merge, or give them different jobs |
| "Looks like any other X" | Could belong to any product in the category | Remove the logo and compare | Add the one thing only this subject has |

## 11. Brief vetoes (absolute, before any choosing)

His stated answers; not yet tested in a comparison round. A veto removes a treatment before any weighing, however good it would look. If vetoes remove everything the brief asks for, the brief contradicts itself: say so, name the contradiction, and propose the trade-off (section 2). `L1` · default

| Brief signal | Ruled out entirely |
|---|---|
| **Trust-critical** (money, health, legal, identity) | The playful register; hype and urgency copy; novelty and kinetic type |
| **Elevated accessibility** (public sector, health, wide age range, regulated) | Dimming secondary text toward the contrast floor; thin and light weights at body size |
| **Very dense data** (dashboards, tables, consoles) | Decorative texture or imagery behind data; ambient or looping motion; large hero-style type and marketing layouts |

- Glass and translucency stay explicit-request-only everywhere; they are not vetoed by these signals, but their fallback and contrast tests still apply.
- Reasons he gave: the cost of getting it wrong is high; audience context sets the design; legibility and accessibility come first.

## 12. Motion opportunity pass (restraint first)
> Adopted from field review (emilkowalski/skills, find-animation-opportunities). Reasons are the source's, not Anthony's.

Use when asked to "add motion", "make it feel alive" or "what could animate here". The job is a filter as much as a finder: expect to reject most candidates.
- Run each candidate through four questions in order and record the answers: how often will a person see it (the frequency gate in `ui-craft.md`); what is its job (feedback, orientation, a state change made legible, a jarring change bridged, explanation, or delight only at the rare tier); can it stay quick; and does it help or hinder where it sits (readouts and data being acted on do not move for style). A candidate that fails any one is dropped. `L1` · default
- Name what you rejected and which question rejected it ("command palette open and close: used constantly, no motion"; "line drawing on the live chart: the reader is reading it"). A list of only additions is a wishlist. His reasons (R164): seeing the rejections shows the pass was careful and earns trust in the proposals, teaches the reasoning, and stops the same motion being suggested again. `L1` · R164
- Cap proposals by leverage, not by how fun they would be to build: a short list for a view, a handful for a whole product. Zero is a legitimate answer, and good news when the interface is already close to right. `L1` · default
- A calm product earns fewer and subtler proposals than a playful one. Read the product's character and its existing motion vocabulary first and extend it; never add a second, parallel one. `L1` · default
- Where feel cannot be judged without seeing it move, say so and mark which proposals depend on that, rather than guessing. `L1` · default

## 13. Exploring options (variants worth flipping between)
> Adopted from field review (emilkowalski/skills, prototype). Applies when the user asked for options; otherwise section 1 stands and the style choice is never handed back.

- Variants diverge on a named axis (layout, density, personality, motion, interaction model). Three tints of one idea waste the comparison: if two differ only in accent or copy they are one direction, so replace one. State each variant's axis in a phrase before building. `L1` · default
- Divergence never lowers the craft floor. Every variant is individually shippable and meets the same rules; a sloppy one only loses on execution and teaches nothing about its direction. Sharing the product's tokens is not convergence, since each should feel native to the product. `L1` · default
- Judge each variant at real size and in real surroundings (a toast over a page, a card among siblings, a button in a form), one at a time. Thumbnails side by side distort spacing and scale. Switching between them is instant: it is a repeated act, so by the frequency gate it gets no motion. `L1` · default
- Say honestly when each variant is the right choice and what it costs. Do not pre-pick a favorite in the comparison; if asked, answer from the product's character and how often the thing is seen, not from aesthetics alone. If two converge while building, cut one and say so. `L1` · default
- The comparison harness is chrome, not a contestant: plain, neutral, identical across rounds so its look never sways the verdict, and kept out of production code. When a winner is chosen, promote only that one by the project's conventions and remove the rest. `L1` · default

## 14. Defaults are the product
> Adopted from field review (emilkowalski/skills). Reasons are the source's.

- For a component, kit or system, most people never change a setting, so the default easing, timing, spacing and look are the design. Make the call and ship it well rather than exposing an option in place of a decision. This is "commit to one direction" (section 2) applied to reusable parts. `L1` · default
- Invisible correctness compounds. Details a person never consciously notices (an origin set to the trigger, a hover that cannot stick on touch, an edge case that does not break) are the goal: the thing behaves as assumed and nobody gives it a second thought. They are cheap to skip and expensive in aggregate, so they stay on the checklist even though no one will praise them. `L1` · default
