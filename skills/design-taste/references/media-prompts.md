# Image, Video and Motion-Graphic Prompting
> **Status: default guidance. Not yet validated by Anthony's comparison rounds.** Follow these as defaults for surfaces his validated rules (`principles/*.md`, SKILL.md) don't cover. Wherever they conflict with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** writing a prompt for an image or video model; briefing a generated photo or plate; authoring a timeline-based motion graphic (HTML/CSS, a timeline library or a frame renderer) or exporting MP4; building negative-prompt lists; QA-ing generated media before it enters a layout.

## Core stance
- A prompt is a brief to a photographer, not an incantation. Name concrete things, light, lens and relationships; filler ("masterpiece", "hyper-realistic", "cinematic") adds no control and invites the generic look. `L1` · default
- Restate every taste rule in prompt language. A rule left implicit gets the model's default, usually a dealbreaker (glow, gloss, faked blur, rendered type). `L1` · default
- Generate only what cannot be sourced. A named real thing (person, product, artwork, logo) uses its real image; generation serves atmosphere and subjects with no real referent. `L1` · default
- Generated media is a plate, not a layout. Type, logos, labels and data are composed over it. Ask for the picture, never the poster. `L1` · default

## Image prompt assembly order
One clause per block; skip only what is irrelevant.
1. **Intent and medium:** what it is for and what kind of picture ("documentary photograph, plate for a poster, text added later"). Stating the use lets the model leave the right area calm. `L1` · default
2. **Subject** in concrete nouns with materials, wear and scale, not adjectives of feeling. `L1` · default
3. **Composition:** framing, angle, subject position, and where the calm area is. Focal subject horizontally centered on the upper golden line, never dead center; keep the subject's cause and effect inside the frame. `L1` · default
4. **Camera and lens** (photographic work): distance, focal-length feel, aperture feel, as capture. `L1` · default
5. **Light:** direction, hard or soft, color temperature, where shadows fall. One light story per image. `L1` · default
6. **Palette as relationships sourced from the concept** ("one warm family; shadows lean cool"), never a free-floating "vibrant" or "pastel". Choose one clear hierarchy hue and a calm neutral, since the layout will later sample them for type. A supplied brand palette replaces this. `L1` · default
7. **Material and finish:** real surfaces, matte and unglossed, plus honest capture flaws when realism matters. Grain, if any, fine and over everything; never simulated paper or fabric. `L1` · default
8. **Exclusions:** positive form first ("flat matte background, no scenery"), then the negative list below. `L1` · default
9. **Aspect ratio and size as tool parameters**, plus one prose sentence naming the safe area where text will go. `L1` · default

- Change one block per revision so the cause of a difference is known. Hold the seed when testing one variable; release it when exploring. `L1` · default
- Parameterize reusable prompts with named, defaulted slots (subject, palette relationships, aspect, text-safe region). `L1` · default

## Translating his rules into prompt language
- **Shallow depth of field, captured not faked:** ask for a long lens, wide aperture and real subject-to-background distance. Never request "blur effect", "bokeh filter" or "tilt-shift". A painted or uniformly blurred background means regenerate, not post-blur. `L1` · default
- **Flat, no glow:** natural light, matte surfaces; exclude glow, bloom, halos, neon edges, flare, light leaks, drop shadows. `L1` · default
- **Real-photo presentation:** phrase subjects as an actual capture shown as shot, with true color and ordinary retouching. Never "airbrushed", "polished" or "stylized" for showcased subjects. `L1` · default
- **No stock 3D:** do not ask for 3D render, glossy plastic, floating objects, clay mascots or isometric illustration unless the concept is explicitly that. Volume comes from a photographed physical object in real light. `L1` · default
- **Series consistency via reference anchors:** repeat verbatim the palette relationships, light direction, lens feel, background treatment and subject scale. Feed an approved frame as a reference with a named role ("match light, color and lens feel; subject differs"). Vary composition per piece, keep the language constant. For multi-panel sheets state grid, equal cells, plain backgrounds, "identical subject in every panel". `L1` · default
- **Calm area for the headline:** request a quiet, even-toned, low-detail region. Do not ask the model to draw a panel or text box. Measure contrast on the delivered pixels. `L1` · default
- **Generate with margin** beyond the intended crop so layout can crop decisively and bleed symmetrically. `L1` · default

## Text inside images
- Never rely on the model to set typography: generated glyphs garble and fake weights and shapes. Request a text-free plate; compose real type in layout. `L1` · default
- Sole exception is text that is part of a photographed object (a sign in a scene). Quote the exact string, keep it a few characters, treat it as decor that may need cleanup, never as meaning. `L1` · default
- Never prompt for real logos or look-alikes; leave a clean area and place the real asset. No lorem or filler in frame. `L1` · default

## Aspect-ratio reflow
- Write a separate composition clause per format; do not generate one master and crop. Portrait: subject above a calm lower field. Landscape: subject on one half, calm half opposite, image leading the read. All other anchors carry over verbatim. `L1` · default · cf. R070
- State which edge the gaze or motion leads toward so the text chain can follow. Request normal ratios, never extreme slivers. `L1` · default
- Vertical platform frames: keep subject and text out of the UI bands; reference floor: roughly the top 15% and bottom 20%. `L1` · default

## Iteration discipline
- Record per accepted asset: final prompt, negative list, aspect, seed or variation id, reference images with roles. Series members must be reproducible. `L1` · default
- Save revisions as new files. Use critique to rewrite the prompt, not to swap tools. One image per turn unless variations are requested, and variations differ on one block. `L1` · default
- If two prompt edits do not remove a flaw, change structure (composition, reference anchor, crop it out), not prompt length. `L1` · default

## Negative-prompt templates (from his dealbreakers)
Attach the base list to every image prompt; add modules as needed. Without a negative field, write "avoid: ...".
- **Base:** glow, bloom, flare, light leaks, drop shadows, bevel, emboss, extrusion, mesh or rainbow gradients, neon, floating 3D objects, glossy plastic, stock 3D characters, simulated paper or fabric texture, vignette (a precaution, not one of his dealbreakers), decorative patterns, emoji-style icons, over-rounded shapes, artificial blur, any rendered text, logos, watermarks. `L1` · default
- **Photographic:** airbrushed or plastic skin, warped hands, duplicated subjects, HDR halos, oversharpening, fake bokeh discs, oversaturation, teal-and-orange grade. `L1` · default
- **Palette:** muddy low-contrast color, vibrating complements, near-duplicate hues, pure black against pure white. `L1` · his dealbreakers
- **Video (adds):** identity drift, flicker, jitter, morphing, warping, stretching, sudden zoom, whip pans, camera shake, speed ramps, spinning, flashes, scene resets. `L1` · default
- Pair exclusions with a target ("flat matte background, one soft natural light") so the model has something to aim at. `L1` · default

## Video prompt skeleton

- Captions follow the piece: plain text over a gradient scrim for voiceover-free supers and calm, professional or emotional pieces; word-by-word highlighted captions for someone speaking to camera and for energetic, high-impact shorts; never a solid caption panel (looks like native Instagram/TikTok text). See `principles/imagery-and-media-production.md` (R109).
- End card: the brand, one call to action and a link out; never a logo-only dead end and never a block of information. See `principles/imagery-and-media-production.md` (R122).
1. **One intent line:** feeling, palette relationships, pacing, sound or silence. `L1` · default
2. **One shot, one idea.** Reference floor: aim for about 10 s or less per generation and join clips in an edit; long generations drift. `L1` · default
3. **Shot list with ranges.** Per shot: size, camera behavior, one concrete physical action, light state, landing sound. Length follows the weight of the idea. `L1` · default
4. **One camera move per shot.** Static or a slow eased push-in by default; a lateral move only when it reveals more of the story. Never stack push, pan and orbit. `L1` · default · cf. R047
5. **One change per beat** in transformations (expression, then color temperature, then camera). `L1` · default
6. **Continuity locks repeated in every shot:** subject, wardrobe, environment, light direction, color relationships, lens feel, time of day. Give references named roles (identity, light and palette, camera path). `L1` · default
7. **Readable text needs hold time.** Prefer a text-free clip with real type added in the edit, which guarantees the hold. If text is generated, quote it exactly and state it stays still and resolved for its reading time; reference floor: a short title about 1.5 s, more per added word. `L1` · default · cf. R046
8. **Sound:** with music, name the cuts that land on beats; with voiceover, the voice drives the edit; otherwise no effects. The picture alone must carry the message with sound off. `L1` · default
9. **End with the avoid line.** `L1` · default

## Motion-graphic builds (HTML, CSS, timeline libraries, frame renderers)
- **Build the resolved frame first,** with ordinary layout flow and padding, then tween from the entry position to rest. Collisions and near-tangents only appear once the end state exists. `L1` · default
- **Timeline in reading order:** label, image, headline, subhead, body, details. What moves first reads as most important; the headline enters as one unit, never word by word. `L1` · default
- **Ease-out entrances, no overshoot.** Decelerating curve, responsive start, soft landing, for entrances and for slow push-ins (eased at both ends). No spring, elastic or back easing; a physics-feel library is set critically damped. Playful tone may relax this per his validated rule. `L1` · default · cf. R041, R048
- **Duration by role.** Brisk for professional and energetic work, slower for luxury; exits faster than entrances; one tempo across the piece; stagger small enough that a group reads as one build. UI duration tiers (instant feedback, about 150 ms state change, up to about 500 ms cross-screen) are for product UI only, not staged video. `L1` · default
- **Hold lengths come from the copy.** Every element is at full contrast before its hold starts and stays for the frame's whole text. If it drags, cut copy or split the frame; never shorten the hold. `L1` · non-negotiable (his R046)
- **No dead zones:** about a second or more with nothing alive gets a slow eased push-in or breathing ambient movement, not decoration. `L1` · default
- **Exits hand off or do not exist.** No exit tween before a transition; the transition is the exit, with outgoing content fully visible at its start, traveling the same direction as the incoming build. No dips to black between every scene; only the last frame fades; a standalone piece builds once and stays. `L1` · default · cf. R045, R050
- **Few simultaneous movers;** each segment has one narrative job and the hook comes early. `L1` · default
- **Video legibility:** headline far above body; body and data labels readable on a phone-size preview; horizontal frames keep safe-area padding, vertical frames clear the platform UI bands. `L1` · default
- **Dark fields:** solid colored field; any gradient subtle and tonal to avoid banding; no radial glows. `L1` · default
- **Deterministic timelines:** no random or clock-driven values; synchronous, finite builds so renders repeat frame for frame. Never pass code-driven motion off as footage. `L1` · default

## Export and MP4 checks
- Sample, do not eyeball one frame: measure contrast against the rendered background and inspect collisions and near-tangents at the first frame of each hold, mid-hold, and the frame before each exit. `L1` · default
- Confirm in the exported file, not the preview, that every text element is resolved and readable for its full hold. `L1` · non-negotiable (his R046)
- Probe the file: aspect, resolution, frame rate matching the timeline, duration, audio present or intentionally absent, widely playable codec and pixel format. `L1` · default
- Scrub transitions for black flashes, duplicate frames, overlapping text. Reference floor: nothing flashes more than three times per second. `L1` · default
- Web embeds get a reduced-motion or static fallback; motion is never the only carrier of meaning. `L1` · default

## Prompt QA checklist
- [ ] Assembly order followed; no filler quality words.
- [ ] Palette stated as relationships from the concept (or supplied brand palette), one hierarchy hue plus a calm neutral.
- [ ] Depth of field specified as optics; no blur effect requested.
- [ ] Base negative list attached, plus the right modules.
- [ ] No text, logo or UI chrome requested; type composed in layout.
- [ ] Calm area defined per aspect; subject on the upper golden line, not dead center.
- [ ] Series anchors repeated verbatim; references have roles.
- [ ] Output inspected for hands, faces, seams, warped geometry, stray marks, hidden text artifacts; contrast measured where type will sit.
- [ ] Video: one camera move per shot, continuity locks, holds cover reading time, steady tempo.
- [ ] Nothing from the dealbreaker list in the output; regenerate rather than patch.
- [ ] Prompt, seed, aspect, reference roles recorded.

## Worked example: image plate (quiet, premium, photography-exhibition poster)
> Documentary photograph to serve as the full-bleed image of a poster; text is added later, so the frame contains no writing. A weathered wooden fishing boat pulled up on a pebble shore at first light, hull paint worn to bare grey timber in places, a coil of frayed rope across the bow. Portrait composition, eye level, boat horizontally centered on the upper golden line, with a quiet, low-detail stretch of pale sea and sky across the lower third kept even in tone. Shot on a long lens at a wide aperture from a distance, so the far headland falls into soft natural blur. Low sun from the left, soft and cool-neutral, long gentle shadows to the right. Palette is one restrained family: slate blue-grey sea, bone-white sky, worn ochre and grey on the hull. Matte surfaces, true color, ordinary tonal range, fine natural detail in the wood. Aspect 4:5 (parameter). Avoid: glow, bloom, flare, light leaks, drop shadows, effect gradients, HDR halos, oversaturation, teal-and-orange grade, fake blur or tilt-shift, floating objects, stock 3D, texture overlays, vignette, any text, logos, watermarks, people, birds.

Landscape version: rewrite only the composition sentence (boat on one half, calm sky opposite); keep every other block verbatim.

## Worked example: video (energetic product teaser, text-free, 10 s, vertical)
> Intent: confident, brisk, silent picture for a later music bed; deep cool navy field with one warm amber accent as the only saturated color; steady pace, no tempo changes. Vertical 9:16, 10 s, no text in frame, subject kept out of the top 15% and bottom 20%.
> Continuity locks in every shot: the same matte slate-grey desktop speaker on a dark navy seamless surface, same soft overhead key from the upper left, same long-lens feel, same amber indicator lamp.
> 0–3 s. Medium close-up, camera static. The speaker sits still; the amber lamp brightens slowly from dim to steady. Nothing else moves.
> 3–7 s. Same framing; one slow eased push-in toward the lamp. The cloth grille catches the light; the background stays soft by lens distance. Only camera distance changes.
> 7–10 s. Camera locks off at the closer framing, speaker and lamp in the upper golden zone, lower third calm and empty for a title added in the edit.
> Avoid: whip pans, shake, speed ramps, spinning, zoom jumps, flashes, flare, glow or bloom around the lamp, light leaks, glossy plastic, floating objects, morphing or warping, flicker, identity drift, scene resets, any rendered text or logos.

