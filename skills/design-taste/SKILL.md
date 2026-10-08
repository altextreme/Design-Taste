---
name: design-taste
description: "Anthony Tackett's design prescription. Apply it whenever you generate, art-direct, build or critique anything visual: posters, social posts, banners, web pages, app and product UI, dashboards, slide decks, email, documents, editorial layouts, data graphics, motion graphics and MP4, and prompts for image or video models. Use it even when the user only says 'design', 'make it look good', 'lay this out', 'animate this' or 'review this', or asks for feedback on a visual. It encodes his taste as portable principles (relationships and reasoning, not fixed values) across composition, typography, color, hierarchy, motion, tone, material, imagery, grid, brand, data, interaction, density and his dealbreakers, plus UI states and accessibility, scored critique, deliverable formats, RTL and CJK handling, and brand-file ingestion."
license: MIT. See LICENSE; third-party credits in NOTICE.md.
metadata:
  author: Anthony Tackett
  version: "2.0"
---

# Design Taste — Anthony's Prescription

This skill is a ruleset distilled from 87 rounds of side-by-side comparisons covering 108 design dimensions, extended in v2 with defaults for surfaces those rounds never reached (interactive UI, decks, critique, localization, brand files), drawn from an analysis of the open-source Open Design project and filtered through his rules. It tells you how Anthony would design something himself. It does not prescribe pixel sizes, hex codes, or durations; it prescribes relationships, so it works at any size, aspect ratio, format, tool, or brand. It names no agent product and works the same in any harness.

## How the files fit

Read this file fully, then open `references/index.md` and load only what the task touches. Everything is one level deep.

- `references/principles/<category>.md` — **validated rules**, one file per category (composition, typography, color, motion, …), each tagged with its layer and the rounds that produced it. Read the categories relevant to the task before designing.
- `references/evidence.md` — the coverage tracker and round log (his picks and reasoning). For resolving ambiguity and quoting him.
- Imported references (rules tagged `OD`; defaults where no validated rule exists): `process-and-critique.md`, `ui-craft.md`, `formats.md`, `media-prompts.md`, `scripts-and-direction.md`, `brand-and-registers.md`, `open-design-crosswalk.md`. `index.md` says when to read each.

**Two tiers.** Validated rules (this file + `principles/`) always win. Imported `OD` rules fill gaps, never override a validated rule, dealbreaker or non-negotiable, and cannot by themselves justify a BLOCK in a critique.

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

## Workflow

1. **Read the brief.** Identify subject, audience, channel (glance media vs. poster vs. reference media), format/aspect ratio, whether there's motion or sound, script and language, and whether brand guidelines exist. If brand guidelines exist, load them as L3. Ask the user only for what would change the direction, structure or format; if you cannot ask, proceed on the most defensible reading and list your assumptions in the delivery note (`process-and-critique.md`).
2. **Pick the register from the concept** (presets below). Do not apply a default house style to every brief, and do not hand the user a style menu: choosing is the job.
3. **State the system in one sentence** before building a non-trivial piece: register and why, ground, type roles, accent logic, motion character. It lets the user redirect cheaply.
4. **Build the structure (L1)** — image-first, top-down reading chain, strict grid, golden-section proportions, one unbroken text block. See *Composition*, *Grid*, *Text/Image* in `principles/`. For an interface, also read `ui-craft.md`; for a specific deliverable (deck, dashboard, email, …), `formats.md`.
5. **Set the voice (L2)** — typeface, palette, motion character from the preset; pull colors from the actual imagery.
6. **Pre-flight check** — run the checklist below, plus the self-review loop in `process-and-critique.md`. Fix everything before showing work. If you can render the result, look at it at the real format(s) and measure rather than trust arithmetic. Then say briefly what you checked and anything you had to compromise; never claim a check you did not run.
7. **When critiquing**, use the scored format in `process-and-critique.md`: cite the specific principle (and its category) a design violates, separate must-fixes from quick wins, and propose the concrete fix.

## Structural defaults (L1, every register)

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
- **Scale:** dramatic jump from headline to the rest; moderate even steps below. Supporting text at one regular weight — no bold subheads. Emphasis by **weight within one family** (on the phrase that carries the meaning; modifiers lighter), moderate jumps, **never italics** for emphasis.
- **Type-only pieces:** the headline carries the image's job — push to extreme scale, stopping just short of full width.
- **Leading:** headline as tight as possible without any collision, but tight enough to read as one thought; body moderate. **Measure:** max ~55–75 characters per line. **Alignment:** flush left, ragged right; never justify.
- **Case:** tracked all-caps only for the smallest metadata tier, applied to the whole tier; promoted details stay sentence case. Small caps get moderate-to-generous tracking; display type sits close.
- Break headlines by phrase; balance lines; no widows/orphans. Judge a face by the actual glyphs in the copy. Character without quirkiness or robotic coldness; readability beats elegance.

## Color defaults (L1)

- Color marks hierarchy: the primary hue on the headline (whole element, one color), a scarce accent on the promoted detail, everything else neutral (metadata gray). Never a lone colored text element in print — in UI that signals a link.
- Pull exact hues from the imagery; never near-duplicates. A hierarchy color must clearly read as a color, not near-black.
- Temperature follows the concept: neutral/institutional → cool lead + warm accent; warm/inviting subjects → one warm family.
- Never pure black on pure white. Contrast is a floor, then a mood dial (secondary text may dim toward the floor).
- Dark versions use a deep colored field from the primary hue (not gray), white headline, the warm accent kept. Gradients only subtle and tonal by default.

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
| Product / utility *(OD)* | Neutral sans, sentence-case headings | Neutral surfaces; one accent reserved for the primary action and links; closed set of status colors | State changes only, short, eased-out | Calm product UI, dashboards, settings, docs. Whitespace separates first, hairline second, card last |
| Broadsheet *(OD)* | Strong serif headlines with decisive scale jumps; serif for running text | Near-neutral ink and paper; one link color, applied at rest | Almost none | Dense editorial and news. Hairlines and whitespace instead of boxes |
| Paper / document *(OD)* | Serif sized for hierarchy | Warm off-white, one ink accent, shared warm neutrals | None or one calm fade-and-rise | Resumes, one-pagers, white papers, print-first decks |
| Showcase *(OD)* | Large, calm; steps back from the photograph | Interface nearly invisible; photograph carries color; accent on the primary action only | Slow push-in; mask or fade reveals | Product-photo-first, cinematic. Chrome near zero |
| Instrument *(OD)* | Neutral sans labels; tabular face for numbers | Deep tinted (not gray) dark field; every hue carries a fixed meaning | Signals and alerts only | Consoles, telemetry, trading. No glow or translucency |

Full detail for the five `OD` registers is in `references/brand-and-registers.md`. Sensibility (timeless, trend-forward, nostalgic) is a concept choice — execute any of them convincingly. Imperfection (hand-made, glitch) only when the concept asks; precise and digital otherwise.

## Imagery, material, icons, data, UI (L1)

- The medium follows the concept (a photography show uses the photographs). Image quality must match the subject's caliber; stylize (e.g., duotone) only to rescue a weak placeholder, never someone's showcased work. Present professional photography as shot (corrective retouching only). Prefer shallow depth of field — captured in camera, never faked. Crop to keep the concept's cause and effect in frame.
- Flat and simple; no glows, drop shadows, bevels, emboss, extrusion. Effects only for legibility or concept-in-motion. Interactive elevation (card lift + shadow on hover) is the UI exception. Texture: clean by default; fine grain over everything when warranted; never simulated materials.
- Type over busy imagery: gradient scrim first (a barely-there shadow may refine it), solid sampled-color panel as backup; shadow alone never. Captions sit on the image, small and dimmed (not below the contrast floor), in the least competing corner.
- Icons beside text: thin line icons matched to the type weight, colored with their text (filled icons for UI controls). No ornament or background patterns; a plain hairline rule occasionally.
- Data: conventional clear charts (axis, light grid, labels); decorate one storytelling point only; big number + supporting line for fast reads; avoid dense pictograms. A label beside a big number is vertically centered on the figure's optical height (cap/figure top to baseline), never baseline-aligned. Density follows the channel: glance media minimal, posters moderate, reference media dense.
- UI states transition (never instant swaps); purposeful motion such as a fill sweep or arrow nudge.

## Interface floor (imported defaults; apply to any UI)

Full rules and reasoning in `references/ui-craft.md`. Before showing an interface, check:

- **Five states** exist, not just the populated one: loading, empty, error, populated, edge (longest text, zero and thousands of items, missing data).
- **Keyboard focus** is visible on every interactive element and distinct from hover; state is never carried by hue alone; non-text controls meet a 3:1 contrast floor against their ground.
- **Targets** are comfortably large with separated hit areas; native elements first; reading order equals DOM order.
- **Forms**: a visible label (never placeholder-as-label), errors after the field is left and cleared the instant it's valid, one primary action per view.
- **Motion** has a job, is eased-out, and has a reduced-motion variant. No more than three flashes in any second, in UI or MP4.
- **Content is real**: no invented statistics, testimonials, logos or lorem ipsum; a named real thing gets its real image or an honestly labelled placeholder.

## Dealbreakers (never, unless the user explicitly asks)

Faux bold/italic · stretched type · straight quotes and hyphens for dashes · widows/orphans · justified text and rivers · letterspaced lowercase · too many typefaces · long centered paragraphs · all-caps body · cramped body leading · small text on busy images without support · glyph collisions · italic emphasis in display serifs · quirky novelty display faces · robotic serifs · hairline Didones outside luxury · faked outline strokes (outline styles only from a real font) · emoji where an icon belongs · floating 3D shapes · pill buttons everywhere · generic stock 3D illustration · over-rounded everything · decorative motifs and background patterns · bevel/emboss/drop-shadow effects · simulated paper texture · faked depth of field · amateur imagery for professional subjects · decorated charts (gradient bars, icon/value on every bar) · vibrating complements · muddy low-contrast palettes · pure black on pure white · blush pink + sage · near-duplicate hues · elastic drop-ins · spin-ins · zooms with lens flares/light leaks · attention shakes · word-by-word pops · dipping to black between every transition · instant color-only hover states · near-tangents.

**Explicit request only:** holiday red/green (tasteful), rainbow gradients, teal-and-orange (as a footage grade only), typewriter and scramble text effects, centered layouts, bento grids, icon-in-circle feature rows, gradient-blob heroes, glassmorphism, sparkle/hype copy, gradient headline text. **Sparingly:** tech purple-to-pink gradients.

A brand file may *mandate* a style-level trait from these lists (for example a capsule button or a gradient hero) for that brand's own work; use it only there, list it in the output as a brand-mandated exception, and never extend it elsewhere. Craft-level dealbreakers (faux bold/italic, stretched type, fake dashes, justified text, widows, collisions, faked depth of field) are never waived by a brand (`brand-and-registers.md`). If the user explicitly requests a listed style, execute it well (`brand-and-registers.md`, section D).

## Pre-flight checklist (run before showing any work)

- [ ] Register chosen from the concept; brand guidelines applied where they exist; conflicts with non-negotiables flagged.
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
- [ ] Nothing invented: every number, name, quote and image is real, supplied, or labelled placeholder.

When a situation isn't covered, reason from the core tenets, then check `references/index.md` for the nearest category, and cite the rounds in `references/evidence.md` if you need his exact words.
