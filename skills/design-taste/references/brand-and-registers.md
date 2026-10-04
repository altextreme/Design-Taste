# Brand Files (L3) and Extra Registers
> **Status: imported from Open Design (OD) analysis. Not yet validated by Anthony's comparison rounds.** Follow these as defaults for surfaces his validated rules (`principles/*.md`, SKILL.md) don't cover. Wherever they conflict with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** a brand guide, design-system file or `DESIGN.md` is supplied or named; the user says "in the style of <brand>"; no brand exists but the work is for a business; the brief is a product UI, news page, document, product showcase or dashboard (none fit the five existing registers); the user asks for a style that is on the explicit-request-only list.

## A. Ingesting a brand file as L3

### Precedence
- **Order of authority, highest first:** explicit user instruction, brand locks, brand tendencies, the chosen L2 register, L1 defaults. The non-negotiables sit above all of it. Record how the brand arrived (stated by the user, saved with the project, inherited from a template); a user-stated brand outranks an inherited one. `L3` · OD
- **When the file and its own tokens disagree, tokens win for values and prose wins for intent.** Flag the mismatch. `L3` · OD
- **Trust check first.** A file of boilerplate, with no atmosphere and no specifics, is a weak brand: take only its palette and type, and do not let it override structural defaults. `L3` · OD

### Procedure
1. **Read** the usage notes (if any), then the prose, then the tokens. Tokens are authoritative for values, prose for intent.
2. **Bin every statement** into LOCKS, TENDENCIES or GAPS before designing.
   - **LOCKS** are closed sets and mandates: palette, type families, logo and its clear space, radius tiers, spacing base unit, voice rules, forbidden lists, mandated components. Comply exactly. `L3`
   - **TENDENCIES** are atmosphere, density, motion character, imagery mood, accent frequency. They choose the dial position inside the nearest register; they are not requirements. `L3`
   - **GAPS** are domains the file is silent on, or contradicts itself on. Fill them (step 5) and list them. `L3`
3. **Read for these domains,** ticking which the brand specifies: atmosphere, color roles (with the contrast intent), type (families, scale, leading, tracking), spacing and layout, components with their states, elevation, radius, motion (and reduced motion), imagery, data color, voice, responsive behavior, accessibility, and the explicit do/don't list. Every unticked domain falls back to design-taste. `L3` · OD
4. **Name the signature.** From the brand's key traits, pick the two to four that depend on each other to be recognizable. Reproduce them together or not at all; a partial copy reads as an accident. If a brand runs modes (showcase and transactional), keep tokens shared and change density and spacing between them. `L3` · OD
5. **Fill gaps from design-taste.** Use L1 plus the nearest L2 register, chosen from the brand's atmosphere, not its name, and match the brand's own constants: same radius family, same accent frequency, same neutral undertone and temperature. `L3` · OD
6. **Treat the palette as closed.** Never mint a new hue or tint to fix a problem. Use the nearest brand color or mix two brand colors, and flag it. Image-sampled hues apply only where the brand leaves color open. `L3` · OD
7. **Use the supplied logo; never redraw one.** If none exists, place a flat block labelled as the logo. `L1 · L3` · OD
8. **Scan the non-negotiables** (below), fix minimally, flag each. `L3`
9. **Scan the dealbreakers and explicit-request-only list** against the brand's traits (below). `L3`
10. **Express output with named roles,** declared once; components hold no raw values; dark versions swap role values, not component rules. Tint by mixing existing roles. A new role is justified only when two components need it. `L1` for coded deliverables · OD
11. **Check script and locale** if the content is not Latin left-to-right (see `scripts-and-direction.md`).
12. **Report:** locks applied, gaps filled and from where, exceptions to his taste made, non-negotiable conflicts fixed, what the brand left unspecified.

### Conflicts with the non-negotiables
- **Change the minimum and flag it.** The brand's intent stays; only the failing element moves. Typical cases: a brand color that fails contrast as text (darken or lighten that use only, keep it for non-text), a brand that shows links by color on hover only (add the at-rest color and underline), a brand type size or tracking that causes collisions, a brand motion pace that gives too little reading time. Never ship the failing version silently; never use the fix as a pretext to override other locks. `L3` · OD (adapted)

### Does choosing a brand count as asking for its signature traits?
Resolved conservatively, pending his confirmation:
- **A brand lock may use a style-level trait that is on his dealbreaker or explicit-request-only list, but only inside that brand's own work and only for the trait the brand itself mandates.** Examples: capsule buttons, a chunky shadow, a gradient hero, all-caps display, an italic accent set in a real italic face. Craft-level dealbreakers are never waived by a brand: faux or synthesized bold or italic, stretched type, straight quotes or hyphens for dashes, justified text and rivers, widows, glyph collisions, faked depth of field. This is unvalidated (validation queue 7); the cautious reading wins when in doubt. `L3`
- **The permission does not leak.** It does not extend to other dealbreakers, to a different brand, to unbranded work, or to the parts of the piece the brand is silent on (those follow design-taste). A brand named only as inspiration ("feels like X") is a tendency, not a lock, and unlocks nothing. `L3`
- **Every such use is listed in the output** as a brand-mandated exception, with the trait named. If the brand file merely depicts the trait in a sample but does not mandate it, drop it. `L3`
- **Non-negotiables are never waived by brand.** `L3`
- When unsure whether a trait is mandated or incidental, ask if you can; otherwise state the assumption and take the cautious reading (omit the trait). `L3`

### Revising a branded piece
- **Work in dependency order:** neutrals, accent frequency, type (display, body, micro), radius and elevation, motion; recheck earlier layers after each later change. `L1` · OD
- **Map mood requests to levers.** More dramatic: scale the headline or image. More minimal: delete optional layers, keep the structural system. More premium: more air and less accent. Do not answer a mood request by adding color or effects. `L1` · OD
- **A named reference owns one dimension.** When asked to move closer to a reference, state which dimension is borrowed (palette, grid, type voice, imagery, rhythm) and change only that. `L1` · OD

## B. Minimal brand brief (when no file exists)
Ask for these if you can ask the user; otherwise state the assumed answers at the top of the output and proceed. Anything unanswered falls back to design-taste.
- **Who and what:** the product or organization in one line, the audience, the channel (glance, poster, reference).
- **Genre vocabulary:** what category it must read as. Hue family and temperature follow the genre; a color that signals another genre (tech, finance, luxury) misleads. `L2/L1` · OD
- **Locked assets:** logo files, required typefaces, required colors (any color that must not move), required legal text.
- **Atmosphere:** three adjectives and one "not this".
- **Accent:** which element earns the accent color, and how often it appears (one primary action, one headline, one detail).
- **Voice:** formal, friendly or technical; words to use and avoid.
- **Neighbors:** one or two reference brands, and which single dimension of each is borrowed.
- **Scripts and locales** the piece must support.
- **Anything forbidden.**
Record the answers as LOCKS (stated as required), TENDENCIES (stated as preference) and GAPS (unanswered). `L3` · OD (adapted)

## C. Additional L2 registers
Same shape as the table in SKILL.md. All five obey his dealbreakers: flat surfaces, three type roles, ease-out entrances with no overshoot, colored dark fields, links colored and underlined at rest. Hover lift is the only shadow. Use a register only when the concept matches; do not default to one.

| Register | Display type | Color | Motion | Notes |
|---|---|---|---|---|
| Product / Utility (calm product UI, dashboards, settings, docs) | Neutral sans; sentence-case headings; slight negative tracking at display size relaxing to zero at body | Neutral surfaces; one accent reserved for the primary action and links; semantic status colors, closed set, never decorative | Minimal: state changes only, eased-out, short | Whitespace separates first, a hairline second, a card last. Few distinct type sizes per screen (reference: about three). Two elevation levels at most (flat plus hover lift). Density moderate to high, following the reference-media rule. All interaction states drawn. |
| Broadsheet / Editorial-news (dense editorial) | Strong serif headlines jumping scale decisively (skip the middle size); serif for any running paragraph beyond a couple of lines; sans for UI only | Near-neutral ink and paper; one link color, applied at rest | Almost none; page-level reveals only | Hairline rules and whitespace in place of boxes or shadows. Square geometry. One tracked-caps kicker tier above stories (his smallest-tier caps rule). Grid-strict, multi-column. A near-black (never pure black) reserved for footer and utility strips. |
| Paper / Document (resumes, one-pagers, white papers, print-first decks) | Serif sized for hierarchy; hierarchy from size and his weight-within-family emphasis, not weight stacking | Warm off-white canvas, never pure white; one ink accent covering a small, stated share of the surface; all neutrals share one warm undertone; tints exported as opaque pre-blended colors | None, or a single calm fade-and-rise for decks | A variant of Quiet / premium. Margins track formality: denser documents smaller, more formal ones larger. Hairline rules, no texture. Left-aligned titles, not centered. |
| Showcase (product-photo first, cinematic) | Large, calm; the type steps back from the photograph; sentence case | Interface nearly invisible; photograph carries color; single accent on the primary action only; one ground per piece by default | Slow eased push-in on imagery; mask or fade reveals; no bounce | Image first at near full bleed, text on or beside it with the scrim-first rule. Chrome (borders, patterns, shadows) near zero. Dark chapters, if used, use a colored field. Alternating dark and light chapters is unvalidated (validation queue 1): default to one ground, and make any switch a single deliberate one. |
| Instrument / Technical (consoles, telemetry, trading, data-dense dark) | Neutral sans for labels; tabular figures for all numeric data (a mono face is an unvalidated option, validation queue 11; his validated rules do not favor a mono voice) | Deep tinted (not gray) dark field; every hue carries a fixed operational meaning, closed set; a status pair always has a non-color cue; tertiary text only for non-critical metadata and never under the contrast floor when it must be read | Only for signals and alerts; nothing decorative; eased-out | Dense but gridded. Small radii. Numbers in tabular figures. No glow, no translucency, no phosphor effects. Use only when the concept is a dashboard or console. |

Rules shared by the registers:
- **Product / Utility headings are sentence case, one accent, dividers by whitespace first.** `L2 (product)` · OD
- **Broadsheet takes hairline structure but never hides link color until hover;** links stay colored and underlined at rest. `L2 (broadsheet)` · OD (adapted)
- **Paper keeps his weight-within-family emphasis;** do not import a single-weight lock. Titles are not centered by default. `L2 (paper)` · OD (adapted)
- **Showcase drops capsule CTAs and universal tracked-caps display** that its sources use; the structure stays. `L2 (showcase)` · OD (adapted)
- **Instrument uses a colored dark field, not neutral near-black,** and replaces glow with a flat status color plus a shape or label. `L2 (instrument)` · OD (adapted)
- **Reference floors that apply across registers:** stacked numbers use tabular figures; single-line controls keep leading at about 1.2 or more so descenders and script marks do not clip; opaque tints for anything exported to PDF. `L1` · OD

## D. Explicit-request-only styles: how to execute them if asked
Use only when the user asks by name or by description. Say once, briefly, that it departs from his defaults, then execute it well. Intent first (tenet 1: it must read as deliberate). The non-negotiables still hold. `L3-like exception` · OD

- **Brutalism, raw, anti-design:** Commit fully. Square corners, hard visible borders, a flat saturated or stark palette, a heavy or monospace face, and a strict visible grid. The roughness is in the surface, the alignment stays exact: edges on the grid, no near-tangents, hierarchy still unmistakable, links colored and underlined. Jarring is the effect; illegible is a failure. Contrast is checked as usual.
- **Neo-brutalism:** brutalism plus a flat, offset solid block behind elements. The offset is one consistent vector and one flat color, never blurred.
- **Glassmorphism:** only over a rich backdrop that actually has content behind it. Frosted panel with a tint strong enough that text meets the contrast floor against the worst pixel behind it, not the average; test over the busiest area of the backdrop. Use one glass layer, a hairline edge, and no stacked panels. Never put small body text on thin glass.
- **Bento / card-grid layouts:** a strict modular grid with a single gap and a single radius family; tile sizes follow content weight (one dominant, the rest supporting), not uniform filling. Each tile has one job and one focal element. Reading order is still explicit.
- **Centered layouts:** center the whole composition on one axis, symmetric and deliberate: short lines only, balanced breaks, generous equal space. Do not center long paragraphs (dealbreaker holds). Align everything to the same axis; no half-centered mixes.
- **Gradient-blob hero or gradient headline text:** keep the gradient in one hue family or two adjacent hues, low contrast between stops, positioned by purpose. Text on it is checked against its real background at the worst point. Headline gradients only if every part of the gradient clears contrast.
- **Neumorphism, claymorphism, skeuomorphism (bevel and simulated material):** the surface and the page share one color; light and shadow come from one consistent source. Because contrast is low by nature, add real text contrast and a non-shadow boundary cue for every control; a control that is only a shadow fails.
- **Neon / glow / cosmic:** a deep colored field, one or two hues, glow limited to a few large display elements; body copy has no glow and meets contrast.
- **Retro, pixel, dithered, doodle, fantasy:** commit to the period vocabulary as a complete bundle (type, palette, edge treatment, motion) or not at all; a half-measure looks like an error. Keep text sized and spaced for reading.
- **Pill buttons, rounded everything, mascots, thick borders, chunky bottom shadows (the playful-brand bundle):** if requested, carry the full bundle together (shape, thickness, shadow, color) with one shadow direction and flat color; keep them within the piece and confined to controls.
- **Holiday red and green, rainbow, teal-and-orange grade, typewriter or scramble text, sparkle or hype copy, icon-in-circle feature rows:** apply the standing rule from SKILL.md; execute with restraint, one place for the effect, contrast checked.
Every execution closes with the same check as normal work: contrast against the real background, all text readable before exit, no collisions, reading order. List the style under "requested exceptions" in the report.

Excluded: OD's single-weight lock, italic-serif emphasis, paper-noise overlay, side rails and corner brackets (dealbreakers or decorative motifs); the looser "treat a chosen brand as consent" step (narrowed above); all hex and px values from the source systems.
