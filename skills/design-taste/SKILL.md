---
name: design-taste
description: "Anthony Tackett's design prescription. Apply it whenever you generate, art-direct, build or critique anything visual: posters, social posts and carousels, banners, web pages, landing pages, app and product UI, dashboards, slide decks, email, documents and resumes, packaging and print, brand marks, editorial layouts, data graphics, motion graphics and MP4, and prompts for image or video models. Use it even when the user only says 'design', 'make it look good', 'lay this out', 'animate this' or 'review this', or asks for feedback on a visual. It encodes his taste as portable principles (relationships and reasoning, not fixed values) across composition, typography, color, hierarchy, motion, tone, material, imagery, grid, brand, data, interaction, density and his dealbreakers, plus channel rules (product UI, web, email, decks, mobile, social, video, documents, identity, print), UI states and accessibility, scored critique, deliverable formats, RTL and CJK handling, and brand-file ingestion."
license: MIT. See LICENSE; third-party credits in NOTICE.md.
metadata:
  author: Anthony Tackett
  version: "2.3"
---

# Design Taste — Anthony's Prescription

This skill is a ruleset distilled from 148 rounds of side-by-side comparisons covering 194 design dimensions, extended in v2 with defaults for surfaces those rounds never reached (interactive UI, decks, critique, localization, brand files), kept separate from the validated rules and marked `default`, and in v2.2 with channel and format rounds (product UI, web, email, decks, documents, mobile, social, video, identity, print) that turned many of those defaults into validated rules. v2.3 adds a reasoning layer (why he decides what he decides, confirmed over rounds R142 to R149) and a render-and-review loop with a measure script; the loop and several new rules are unvalidated `default` rules awaiting his review (see `validation-queue.md`). It tells you how Anthony would design something himself. It does not prescribe pixel sizes, hex codes, or durations; it prescribes relationships, so it works at any size, aspect ratio, format, tool, or brand. It names no agent product and works the same in any harness.

**The standard.** Every design decision needs a reason you can state, rooted in research, proven practice and human psychology. This skill gives you his reasons, not just his values. Do not apply a number or a style by rote: state why each major decision was made in your delivery note, and make the judgment call (is this good, and why) instead of hedging. He is data-led, and everything has a purpose.

**Who this serves and how to behave.** Primary users are designers (Anthony and his team) who want to iterate quickly: give them something to react to that they can change by prompt or by hand. Secondary users are non-designers who need work that looks human-designed. Ask instead of assuming, **one easy-to-understand question at a time**, until the brief is complete; if still unsure, iterate or say so plainly so the user can step in. The user has the final say on what is good and done. **Assume you can see and render:** build, render to an image at the real size, look at it, fix, and repeat (`references/render-and-review.md`). Type and spacing errors are invisible in code and obvious in a picture, and weaker models lose the most without this loop. Run accessibility checks yourself and fix what fails; if you cannot verify something, say so and point to a source. Do not label output as AI-made by default, but tell the user that disclosure rules differ by region and that the choice and the responsibility are theirs. Never mislead with design (honest charts, no dark patterns: no pre-checked boxes, no guilt wording, easy cancel), show people inclusively, show visible feedback while anything is processing, and design every state (empty, loading, error, offline, long, no results, first-run) so a developer never has to decide.

## How the files fit

Read this file fully, then open `references/index.md` and load only what the task touches. Everything is one level deep.

- `references/principles/<category>.md` — **validated rules**, one file per category (composition, typography, color, motion, …), each tagged with its layer and the rounds that produced it. Read the categories relevant to the task before designing.
- `references/principles/reasoning-and-psychology.md` — **why he decides what he decides** (his reasons, process, and what wins when two reasons collide). Read it on every non-trivial task, and whenever a situation is not covered by a specific rule: reason from the why, not from the nearest style.
- `references/evidence.md` — the coverage tracker and round log (his picks and reasoning). For resolving ambiguity and quoting him.
- Default references (rules tagged `default`; defaults where no validated rule exists): `render-and-review.md` (read before every final pass), `process-and-critique.md`, `ui-craft.md`, `formats.md`, `media-prompts.md`, `scripts-and-direction.md`, `brand-and-registers.md`, `validation-queue.md`. `index.md` says when to read each.

**Two tiers.** Validated rules (this file + `principles/`) always win. Unvalidated `default` rules fill gaps, never override a validated rule, dealbreaker or non-negotiable, and cannot by themselves justify a BLOCK in a critique.

## Layers (how rules combine)

- **L1 — Foundation.** True in every piece. Never trade these away for style.
- **L2 — Tonal presets.** Dials that move with the concept (quiet/premium, playful, energetic, luxury, warm/inviting, plus the product, broadsheet, paper, showcase and instrument registers below).
- **L3 — Brand constraints.** A client's guidelines override L1 and L2 *preferences*. They never override the **non-negotiables** below; when a brand rule breaks one, change the minimum needed and flag the conflict to the user. Procedure for brand files: `references/brand-and-registers.md`.

## Core tenets (read first, always)

0. **Concept drives execution. Always. But the design principles still hold.** Read the subject, audience, channel and imagery first; let them choose type, palette temperature, motion energy, crop and camera. The foundation never bends.
1. **Everything must read as intentional.** Anything that could be mistaken for an accident or a default is wrong. Deviate decisively or not at all — a small offset, a slight angle, a one-sided bleed, a near-match color all read as errors.
2. **Hierarchy is enforced and follows meaning.** The reader never wonders what comes first. Spatial order, size, weight, color and motion order all follow the reading order and the meaning.
3. **Restraint over effect.** Drama lives in one place (the image or the headline); everything else is calm. No gratuitous bold, bounce, shadow, glow, ornament, or lone accent.
4. **Legibility is non-negotiable.** Contrast, reading time, no collisions, no near-tangents.
5. **Decide by the concept and the real assets.** Crops, camera moves, tints, dark modes and palettes come from this subject and this photograph.

## Non-negotiables (survive any brand override)

1. Accessible text contrast against whatever is actually behind the text (check images, gradients, opacity).
2. In motion, every frame holds long enough to read **all** of its text before anything exits.
3. Text links in UI are colored **and** underlined at rest.
4. No glyph collisions between lines; no near-tangents (elements almost touching, especially corner-to-corner — including text against features in a photo).
5. Reading order and enforced hierarchy.

## Precedence when rules collide (confirmed, R142 and R143)

State a conflict as "X even over Y" and say which wins. Confirmed rankings, in no strict chain, each true on its own:
1. Legibility and accessibility even over mood, immersion and brand styling.
2. Brand consistency even over personal taste.
3. The piece's purpose even over visual interest.
4. Convention in interface even over novelty.
5. The key information even over completeness (glance media; link out for the rest).
6. One recognizable family even over an identical template or total reinvention.
7. Clarity at a glance even over elegance.
8. Official platform guidelines, and data and insights, even over gut.
9. Protecting the original photograph even over fitting the layout.
10. Emphasizing the preferred option even over equal treatment.

**Brand and concept work at different levels.** The brand guide is a box of Lego: pieces (font, color, logo) fixed, the build free. The concept carries the brand and decides everything the brand leaves open. Fresh ideas live inside a brand that still reads as itself.

**Hard lines** he will not trade on any project: readable text, accessibility for everyone, the brand's identity, the purpose of the piece, key information never buried, familiar controls for interface tasks, everything looks chosen on purpose. **Design systems and templates:** always prefer them; break one only when accessibility or legibility demands it, and flag the break as a defect in the system to fix. **Working with people:** the client has the final say, but your job is to push back first with the reason and data; in a handoff, state the rigid parts and why, and where there is room for interpretation; only design what could be built. **Build cost is never a reason to choose the simpler design**: do the work to make the nicer one accessible and sustainable.

**Funnel stage sets the design** (details in `principles/reasoning-and-psychology.md`): awareness = one idea, immersive, brand early, soft ask, repetition; consideration = more detail, proof and comparison, clear next step; conversion = one prominent specific action, uncluttered, recommended option emphasized, fewer steps; loyalty = useful, familiar, warm, light on selling. Informational pieces (a chart, a diagram, a report) have no funnel stage: name the one question the piece answers, for whom, and in what medium (glance, page, reference). Internal tools and dashboards sit outside the funnel: name the job, the decision it supports and how often it is checked. Usual stage by piece: street poster awareness; prospect deck and product screens consideration; landing and pricing pages conversion; newsletter loyalty; a social post can serve any stage, so the brief decides.

**Psychology he reasons with on purpose** (name these in critiques; full list in `principles/reasoning-and-psychology.md`): proximity, similarity, isolation, directional cues, common region, scanning patterns, chunking, choice overload, recognition over recall, convention, progressive disclosure, target reach, aesthetic-usability, repetition and trust, picture superiority, peak-end, color and form feeling, faces and gaze. His line on persuasion is honesty: social proof, anchoring, defaults, scarcity and credibility only when true; labels and badges must be true.

## Workflow

1. **Read the brief.** Identify subject, audience, channel (glance media vs. poster vs. reference media), format/aspect ratio, whether there's motion or sound, script and language, and whether brand guidelines exist. If brand guidelines exist, load them as L3. Also establish the **purpose**: who the audience is, the problem or opportunity, and which stage of the conversion funnel the piece serves (awareness, consideration, purchase, loyalty, or to provoke an emotion or shift a perspective). Do not accept a thin brief: if the audience, goal, funnel stage or brand is missing and it would change the direction, structure or format, ask for it, one easy question at a time, before starting. If you cannot ask, proceed on the most defensible reading and list your assumptions in the delivery note (`process-and-critique.md`).
2. **Pick the register from the concept** (presets below). Do not apply a default house style to every brief, and do not hand the user a style menu: choosing is the job. For a composed piece, write two structurally different layouts in one sentence each and pick one with a reason, so the layout comes from this subject and not from the last poster you saw. `default`
3. **State the system in one sentence** before building a non-trivial piece: register and why, ground, type roles, accent logic, motion character. It lets the user redirect cheaply.
4. **Build the structure (L1)** — image-first, top-down reading chain, strict grid, golden-section proportions, one unbroken text block. See *Composition*, *Grid*, *Text/Image* in `principles/`. For an interface, also read `ui-craft.md`; for a specific deliverable (deck, dashboard, email, …), `formats.md`.
5. **Set the voice (L2)** — typeface, palette, motion character from the preset; pull colors from the actual imagery.
6. **Build loop and pre-flight.** Render at the real format(s); run the measure script in `references/render-and-review.md`; look at the whole image, then at crops of every text block; run its typography and spatial checks; fix every typography item; re-render; look at least twice. Then run the checklist below and the self-review in `process-and-critique.md`. If you truly cannot render, use the no-render mode in `render-and-review.md` and say so. Deliver a short note in this fixed shape: **Purpose** · **Audience** · **Stage or question** · **Register and why** · **Assumptions** · **Looked at** · **Not verified**. Never claim a check you did not run; a note without a **Looked at** line is incomplete.
7. **When critiquing**, never stop at "feels off": name the cause and the reader effect (why it feels wrong), and when two principles conflict state the ranking as an "X even over Y" sentence. Audit in his order: (1) does the message get through (text over a focal point, contrast, legibility); (2) hierarchy and amount of content; (3) craft details (shadows, emoji, decoration with no job). Use the scored format in `process-and-critique.md`: cite the specific principle (and its category) a design violates, separate must-fixes from quick wins, and propose the concrete fix.

## Structural defaults (L1, composed pieces: posters, covers, heroes, title slides)

These do not apply to interfaces or charts. For an interface use the Interface floor and `ui-craft.md`; for a chart or data graphic use the Data graphics rules below and `formats.md`. Image-first, the golden section and the image-height cap are for composed pieces.


- **Image first.** Image leads, text follows to support it; weight at the top. In landscape, split side-by-side (image half read first). Never let an image interrupt the text chain.
- **One unbroken reading chain:** label → image → headline → subhead → body → details. Headline group stays tight to the image; practical details anchor the bottom edge with a modest pause, never a void.
- **Proportion:** golden-section guides (61.8% in from each edge) for major divisions; a single focal subject sits horizontally centered on the upper golden line — never dead center. With text, keep the image under about half the page height (diagonal crops may reach lower because they remove area).
- **Full bleed by default;** bleed symmetrically or not at all. Inset only for production limits.
- **Surplus space:** absorb it by scaling the image (to its cap) then the headline (more lines at larger size) — don't redistribute it into gaps. Type-only pieces anchor the text block low with one clean field above.
- **Strict grid, consistent margins sized from the shorter side.** Reflow by restructuring for the aspect ratio and re-setting line breaks per format; never scale one recipe from the width. Every format must be beautiful, not just fit.
- **Series:** vary layouts per image, keep the brand language constant, add one meaningful recurring signature (e.g., a large exhibition numeral or a real logo), aligned to the grid.
- **Direction words.** "Flush left," "image half first" and similar rules describe left-to-right scripts. For right-to-left or mixed content, translate them to *start* and *end* and see `scripts-and-direction.md`; Latin-only rules (tracked caps, no italics) do not transfer to scripts that have no such concept.

## Type defaults (L1)

- **Roles:** display face for the headline only; a text-optimized companion for the one promoted practical detail (e.g., dates); a neutral sans for everything else.
- **Scale:** dramatic jump from headline to the rest; moderate even steps below. Supporting text at one regular weight — no bold subheads. Emphasis by **weight within one family** (on the phrase that carries the meaning; modifiers lighter), moderate jumps, **never italics** for emphasis. Use it only where one phrase truly carries the claim; the same weight split on every title in a series is a template, not hierarchy. Promote a detail once: if the date is already in the headline or first sentence, do not repeat it as a separate line. `default`
- **Type-only pieces:** the headline carries the image's job — push to extreme scale, stopping just short of full width.
- **Leading:** headline as tight as possible without any collision, but tight enough to read as one thought; body moderate. **Measure:** max ~55–75 characters per line. **Alignment:** flush left, ragged right; never justify.
- **Case:** tracked all-caps only for the smallest metadata tier, applied to the whole tier; promoted details stay sentence case. Small caps get moderate-to-generous tracking; display type sits close.
- Break headlines by phrase; balance lines; no widows/orphans. Judge a face by the actual glyphs in the copy. Character without quirkiness or robotic coldness; readability beats elegance.

- **Examples are reasoning, not recipes.** The principles cite one pairing (a light lead-in beside a medium core in a warm editorial serif) as an example of weight following meaning. Do not reuse that phrase, those weights or that face unless this concept calls for them; choose the face and the split from this subject. `default`
- **Interface type:** a defined scale of four or five sizes; figures in a column share precision and align on the right (tabular); never truncate the identifying field of a row; one size per kind of badge, button and chip. `default`

## Color defaults (L1)

- Color marks hierarchy: the primary hue on the headline (whole element, one color), a scarce accent on the promoted detail, everything else neutral (metadata gray). Never a lone colored text element in print — in UI that signals a link.
- Pull exact hues from the imagery; never near-duplicates. If there is no photograph yet (a placeholder), do not invent a palette from an imagined photo: use ink plus one provisional hue and say it will be re-sampled. `default` A hierarchy color must clearly read as a color, not near-black.
- Temperature follows the concept: neutral/institutional → cool lead + warm accent; warm/inviting subjects → one warm family.
- Never pure black on pure white. Contrast is a floor, then a mood dial (secondary text may dim toward the floor).
- Dark versions use a deep colored field drawn from the brand's darker colors, or from the primary hue when there is no brand (not a default gray or navy); white headline, the warm accent kept. Neutral gray dark is for a product-UI light/dark mode pair with no brand color to draw on. Gradients only subtle and tonal by default.

## Motion defaults (L1 unless noted)

- Always eased; entrances **ease out** with a gentle landing (no slow start, no hard snap). Smooth but brisk.
- Build in reading order, one meaning unit at a time; the headline arrives as one unit. Direct motion — no anticipation, overshoot or follow-through by default.
- Hold every frame for full reading time; keep long holds alive with a slow eased push-in (anchored so image features move away from overlaid text). Lateral camera moves only when they reveal more of the story.
- Exits exist only to hand off: continue the direction of travel into the next frame; if nothing follows, don't exit (build once, breathe). Sequences hand off with motion — not cuts, not dissolves. Steady tempo.
- Let the concept inform the hero motion (literal or, preferably, metaphorical); contrast rules apply to the resolved state.
- With music: snap transitions to the beat. With voiceover: the voice drives the edit. No sound effects by default.
- Interface motion (state changes, menus, dialogs) is a different regime — short, eased-out, purposeful, with a reduced-motion variant. See `ui-craft.md`.

## Tonal presets (L2)

| Register | Display type | Color | Motion | Notes |
|---|---|---|---|---|
| Quiet / premium | Warm editorial serif with a real weight range; light lead-in, medium core | Restrained, muted-to-mid saturation | Calm fade-and-rise, gentle build | Default for contemplative, cultural subjects |
| Playful | Friendly rounded sans | Brighter, more hues; solid pills/badges behind labels and dates | Spring/bounce allowed | Still square to the grid; headline one color |
| Energetic | Strong sans | Deep cool field, white type, bright warm accent | Faster, bigger travel, crisp wipe/mask reveals, no bounce | Discipline kept |
| Luxury | High-contrast Didone at full display scale | Deep jewel-toned field from the imagery, gold accent | Calm | Restraint in ornament, never in hierarchy |
| Warm / inviting | Editorial serif | One warm family from the imagery | Calm | Food, gathering, hospitality |
| Product / utility *(default)* | Neutral sans, sentence-case headings | Neutral surfaces; one accent reserved for the primary action and links; a stable hue per status (as many as there are statuses, never grouped), each shown as the word in a tinted small-radius badge (R089, R128) | State changes only, short, eased-out | Calm product UI, dashboards, settings, docs. Hairline separates rows of records; whitespace separates groups; no per-row cards (R088) |
| Broadsheet *(default)* | Strong serif headlines with decisive scale jumps; serif for running text | Near-neutral ink and paper; one link color, applied at rest | Almost none | Dense editorial and news. Hairlines and whitespace instead of boxes |
| Paper / document *(default)* | Serif sized for hierarchy | Warm off-white, one ink accent, shared warm neutrals | None or one calm fade-and-rise | Resumes, one-pagers, white papers, print-first decks |
| Showcase *(default)* | Large, calm; steps back from the photograph | Interface nearly invisible; photograph carries color; accent on the primary action only | Slow push-in; mask or fade reveals | Product-photo-first, cinematic. Chrome near zero |
| Instrument *(default)* | Neutral sans labels; tabular face for numbers | Deep tinted (not gray) dark field; every hue carries a fixed meaning | Signals and alerts only | Consoles, telemetry, trading. No glow or translucency |

Full detail for the five `default` registers is in `references/brand-and-registers.md`. Sensibility (timeless, trend-forward, nostalgic) is a concept choice — execute any of them convincingly. Imperfection (hand-made, glitch) only when the concept asks; precise and digital otherwise.

## Imagery, material, icons, data, UI (L1)

- The medium follows the concept (a photography show uses the photographs). Image quality must match the subject's caliber; stylize (e.g., duotone) only to rescue a weak placeholder, never someone's showcased work. Present professional photography as shot (corrective retouching only). Prefer shallow depth of field — captured in camera, never faked. Crop to keep the concept's cause and effect in frame.
- Flat and simple; no glows, drop shadows, bevels, emboss, extrusion. Effects only for legibility or concept-in-motion. Interactive elevation (card lift + shadow on hover) is the UI exception. Texture: clean by default; fine grain over everything when warranted; never simulated materials.
- Type over busy imagery: gradient scrim first (a barely-there shadow may refine it), solid sampled-color panel as backup; shadow alone never. Captions sit on the image, small and dimmed (not below the contrast floor), in the least competing corner.
- Icons beside text: thin line icons matched to the type weight, colored with their text (filled icons for UI controls). No ornament or background patterns; a plain hairline rule occasionally.
- Data: conventional clear charts (axis, light grid, labels); decorate one storytelling point only; big number + supporting line for fast reads; avoid dense pictograms. A label beside a big number is vertically centered on the figure's optical height (cap/figure top to baseline), never baseline-aligned. Density follows the channel: glance media minimal, posters moderate, reference media dense.
- UI states transition (never instant swaps); purposeful motion such as a fill sweep or arrow nudge.

## Data graphics (default rules; details in `references/formats.md`)

- The plot gets most of the page: the header (headline, one-line deck) takes at most about a third of the height; the plot absorbs the rest; the source and sample line sit at the foot.
- Hue belongs to the data: each series owns its color, and the headline and chrome stay ink. Never reuse a series hue for non-data text.
- Tell series apart by more than hue: direct end labels at minimum; vary line style or marker when lines cross or the piece may print in grayscale.
- Use true minus signs. Extend the value axis one gridline past the data so no mark sits on the frame. Bars and filled areas start at zero; ticks use round steps.
- A partial current period is never plotted as a full one, and a figure that appears twice matches everywhere.
- The headline states the finding a reader would act on (against a target or the last period), not just any true comparison.
- Never describe a source or method you were not given: write "sample" or "source not given".

## Interface floor (default rules; apply to any UI)

Full rules and reasoning in `references/ui-craft.md`. Before showing an interface, check:

- **Five states** exist, not just the populated one: loading, empty, error, populated, edge (longest text, zero and thousands of items, missing data).
- **Keyboard focus** is visible on every interactive element and distinct from hover; state is never carried by hue alone; non-text controls meet a 3:1 contrast floor against their ground.
- **Targets** are comfortably large with separated hit areas; native elements first; reading order equals DOM order.
- **Forms**: a visible label (never placeholder-as-label), errors after the field is left and cleared the instant it's valid, one primary action per view.
- **Motion** has a job, is eased-out, and has a reduced-motion variant. No more than three flashes in any second, in UI or MP4.
- **Content is real**: no invented statistics, testimonials, logos, lorem ipsum or **people (even labelled sample: use order numbers or roles such as "Walk-in")**; no scarcity, popularity or sourcing claim you were not given; a named real thing gets its real image or an honestly labelled placeholder. Show the empty slot instead of a plausible figure.

## Dealbreakers (never, unless the user explicitly asks)

Faux bold/italic · stretched type · straight quotes and hyphens for dashes · widows/orphans · justified text and rivers · letterspaced lowercase · too many typefaces · long centered paragraphs · all-caps body · cramped body leading · small text on busy images without support · glyph collisions · italic emphasis in display serifs · quirky novelty display faces · robotic serifs · hairline Didones outside luxury · faked outline strokes (outline styles only from a real font) · emoji where an icon belongs · floating 3D shapes · pill buttons everywhere · generic stock 3D illustration · over-rounded everything · decorative motifs and background patterns · bevel/emboss/drop-shadow effects · simulated paper texture · faked depth of field · amateur imagery for professional subjects · decorated charts (gradient bars, icon/value on every bar) · text block centered over the middle of a full-bleed photo · tabs across the top as primary mobile navigation · solid caption panel on video · two-letter monogram as a logo mark · an email with no brand header · extreme wide-crop banner images in content blocks · full-grid table borders · a video end card with only a logo · separating the logo mark from the wordmark · a "More" menu in primary navigation · vibrating complements · muddy low-contrast palettes · pure black on pure white · blush pink + sage · near-duplicate hues · elastic drop-ins · spin-ins · zooms with lens flares/light leaks · attention shakes · word-by-word pops · dipping to black between every transition · instant color-only hover states · near-tangents.

**Explicit request only:** holiday red/green (tasteful), rainbow gradients, teal-and-orange (as a footage grade only), typewriter and scramble text effects, centered layouts, bento grids, icon-in-circle feature rows, gradient-blob heroes, glassmorphism, sparkle/hype copy, gradient headline text. **Sparingly:** tech purple-to-pink gradients.

A brand file may *mandate* a style-level trait from these lists (for example a capsule button or a gradient hero) for that brand's own work; use it only there, list it in the output as a brand-mandated exception, and never extend it elsewhere. Craft-level dealbreakers (faux bold/italic, stretched type, fake dashes, justified text, widows, collisions, faked depth of field) are never waived by a brand (`brand-and-registers.md`). If the user explicitly requests a listed style, execute it well (`brand-and-registers.md`, section D).

## Pre-flight checklist (run before showing any work)

- [ ] Rendered at the real size and looked at (the whole image, then zoomed on every text block), at least twice; the typography and spatial checks in `render-and-review.md` done.
- [ ] Register chosen from the concept; brand guidelines applied where they exist; conflicts with non-negotiables flagged.
- *Posters and composed pieces only, the next five items:*
- [ ] Reading chain is unbroken and image-first (or type-led with a clean field above).
- [ ] Every edge on the grid; any deviation is bold and deliberate; no near-tangents (including against image features).
- [ ] Image under about half the page height; no pooled voids; surplus absorbed by image/headline.
- [ ] Headline broken by phrase, balanced, no collisions; body ≤ ~75 characters per line; no widows.
- [ ] Large elements paired with smaller text are optically centered (e.g., big number + label).
- [ ] Color only on headline + promoted detail; hues sampled from the imagery; no near-duplicates; no pure black on white.
- [ ] Contrast measured against the real background for every text element (including over photos and gradients).
- [ ] Motion: eased-out entrances, reading-order build, full reading-time holds, exits that hand off, steady tempo.
- [ ] Nothing from the dealbreaker list.
- [ ] Every format/aspect ratio reflowed and re-set, not just scaled.
- [ ] Interfaces: the interface floor above passes; deliverable-specific checks from `formats.md` done.
- [ ] Non-Latin or multilingual content: direction, script type behavior and text expansion handled (`scripts-and-direction.md`).
- [ ] Purpose stated (audience, goal, funnel stage) and the piece asks the viewer for exactly what that purpose needs.
- [ ] Final proofread against the brief: clear, easy to read, and the intended message lands.
- [ ] Any conflict between two rules was resolved with an explicit "even over" ranking, and only legibility or accessibility departed from a brand guide.
- [ ] Words: the headline says what the reader gets; buttons name the specific action; errors say how to fix; tone follows the brand voice and what is at stake for the reader; clarity first.
- [ ] Nothing invented: every number, name, quote and image is real or supplied; an unsupplied statistic, person or claim is a labelled empty slot, not a plausible figure (never an invented year, address or price either).

When a situation isn't covered, reason from the core tenets, then check `references/index.md` for the nearest category, and cite the rounds in `references/evidence.md` if you need his exact words.
