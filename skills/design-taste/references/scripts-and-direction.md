# Scripts, Direction and Localization
> **Status: default guidance. Not yet validated by Anthony's comparison rounds.** Follow these as defaults for surfaces his validated rules (`principles/*.md`, SKILL.md) don't cover. Wherever they conflict with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** content is not Latin left-to-right (Arabic, Persian, Urdu, Hebrew, Chinese, Japanese, Korean, Devanagari and similar); the piece will be translated or shipped in several languages; a layout could render right-to-left; numbers, dates or currency are shown to an international audience; Latin and another script share one lockup.

## Scope: what the validated rules assume
Every validated rule was proven on Latin, left-to-right copy. Treat them as written for Latin and re-derive the intent for other scripts instead of applying the letter.

- **Say "start" and "end", never "left" and "right", for anything tied to reading direction.** "Flush left, ragged right" means flush to the reading-start edge, ragged at the end. "Image half read first" means the half at the reading start. Physical left/right is reserved for things that are not language-directional (a chart's value axis, a photograph's subject, a physical object). Written physically, a rule silently assumes one language and breaks the others. `L1` · default
- **Pull quotes, offsets, captions, wrap-around images, separators and progress fills are specified as start/end** so the whole composition mirrors from one definition. `L1` · default
- **Golden-section divisions stay symmetric.** The proportion is measured from each edge, so it survives mirroring; only the assignment of image, text and focal subject to a side flips with direction. Do not hand-place a "left" third. `L1` · default
- **Declare language and direction on the document and on every embedded passage in another script.** Language drives font choice, hyphenation, line breaking and speech; direction drives layout. Text of unknown direction (user-generated) uses automatic direction detection. `L1` · default
- **Add language and direction as reflow axes** next to aspect ratio. Before showing work, view the piece once in a right-to-left language and once with long strings. Prototype with real copy in the target script, never filler text. `L1` · default

## What mirrors, what never does
The test: does the element encode reading direction or sequence? Then it mirrors. Does it encode identity, physical reality, or a mathematical convention? Then it does not.

- **Mirror:** layout order, navigation order, tab and focus order, sidebars, directional arrows, back/next, disclosure chevrons, progress fills and sliders that are not media, the side a checkbox label sits on, weekday order in calendars, the entry direction of motion and the direction of travel between frames, bullet and list indents, the side of text-leading icons. `L1` · default
- **Never mirror:** logos and wordmarks, photographs and illustrations, physical-object icons (a phone, a pencil, a bag), clock faces and clockwise refresh symbols, media transport controls and scrubbers (play points the way time runs on the timeline, which stays start-to-end as a convention), music notation, and the mathematical axes of a chart. `L1` · default
- **Charts keep time running left to right and value running up by default.** A time axis is a mathematical convention, not text. If the audience's convention for the dataset is established the other way, follow it and say so, but never flip a chart just because the page flipped. Legends, labels and the page layout around the chart do mirror. `L1` · default
- **Numerals follow the locale, not the direction.** Digits read left to right even inside right-to-left text; whether they are Western or script-native digits is a locale choice, set once per document. Tabular figures still apply to stacked numbers. `L1` · default
- **A genuinely contested symbol (the search magnifier) is decided per platform convention,** not by principle. State the choice. `L1` · default
- **Vertical spacing is unaffected by direction.** Only the inline axis flips. `L1` · default

## Bidi isolation
- **Isolate every run of the opposite direction** (brand names, product names, code, a quoted foreign title) with an isolating element or direction attribute, not invisible control characters. Without isolation, neutral punctuation next to the run jumps to the wrong side. `L1` · default
- **Force intrinsically left-to-right values to left-to-right inside right-to-left copy:** phone numbers, card numbers, bank identifiers, emails, URLs, codes, version strings. Mostly-neutral characters defeat auto-detection and the value scrambles. `L1` · default
- **Text links keep both signals in any script:** colored and underlined at rest. Underlines on cursive script must skip or clear descenders and dots, not strike through them. `L1` · default
- **Prefer truncate-with-expand over a bare ellipsis in right-to-left text.** The cut can fall mid-word in cursive script and the ellipsis must land on the end side (verify in the target renderer). `L1` · default

## Latin-only rules and how to scope them
Name the script of each text element, then check it against this table before applying a Latin rule.

- **Tracked all-caps:** caseless scripts (Arabic-script, Hebrew, CJK, Devanagari, Thai) have no capitals, so the smallest-metadata-tier rule has nothing to track. Express that tier by size, weight and color instead, at zero extra tracking. The tracking floor for Latin caps stays as is. `L1` · default
- **Letter-spacing in cursive scripts is zero, in every direction.** Tracking breaks the joins between letters. This overrides both the tight display tracking and the generous small-caps tracking. `L1` · default
- **Italics ban extends to "no slant at all."** Arabic-script, Hebrew and CJK have no italic tradition, so a slanted face is a synthesized fake (a dealbreaker already). If a script lacks a real face for a needed weight, choose a different family that has it. Emphasis comes from real weight or color. `L1` · default
- **Weight emphasis uses real weights only.** Some script faces ship few weights (reference: a Nastaliq face may offer only a regular and a bold). Plan the hierarchy inside what exists; never fake bold. `L1` · default
- **Flush-start, ragged-end holds in every script and "never justify" still wins.** Some Arabic typography stretches joins to justify; do not, the dealbreaker stands. CJK is set on a character grid and may look justified by nature; keep the final line ragged and do not stretch spacing. `L1` · default
- **The 55 to 75 character measure is a Latin number.** Other scripts have no validated measure. Keep lines short enough that a reader never loses the start of the next line, state the assumed measure, and proof with real copy. `L1` · default
- **"Headline as tight as possible" is bounded by the glyphs, not by a ratio.** The principle is unchanged: tight until just before a collision. Scripts with tall or deep strokes hit that collision at much looser leading than Latin. Measure on the real copy. `L1` · default
- **Mono and numeric stacks carry the script fallback,** or labels and figures render as empty boxes. `L1` · default

## CJK type behavior
- **Leading is looser than Latin because glyphs fill the whole em box and there is no ascender or descender slack.** Reference floor: display about 1.3 to 1.4, body about 1.7 to 1.8, even for huge cover titles. Latin-tight display leading collides. `L1` · default
- **No negative tracking on CJK.** Display CJK sits near zero tracking and is usually set smaller in absolute size than a Latin headline of equal presence; body takes slight positive tracking. `L1` · default
- **No caps, no italics.** Emphasize with color or real weight, or a tag. Thin-stroke serif styles (Mincho, Song) need the text color one step darker than the Latin equivalent, since the strokes carry less ink. `L1` · default
- **Dense CJK body has a size floor.** Reference floor: about 14 px-class for body and about 12 px-class for captions; no thin weights at body size. `L1` · default
- **Line breaking follows the script's own rules.** Opening brackets and quotes never end a line; closing brackets, commas, full stops and small kana never start one; do not break inside a numeral group or a Latin word embedded in the line. Set the language attribute so the engine applies its rules. `L1` · default
- **Punctuation follows the language, not the keyboard.** Use the punctuation of the language (ideographic comma and full stop; corner brackets in Japanese and Traditional Chinese, curly quotes in Simplified Chinese; Korean mostly keeps Latin-style marks; verify per locale); do not carry Latin straight quotes or periods into Chinese or Japanese copy. This extends his real-quotes-and-dashes rule to the target language's own marks. `L1` · default
- **Mixed-script lockups are styled per element.** Give the Latin run its tight leading and tracking and the CJK run its own; never let one inherit from the other. Match them optically: pick the Latin face's x-height and weight to sit beside the CJK strokes, and align on a shared baseline or a shared center line, chosen once and held. `L1` · default
- **Slides need print values rescaled, not reused.** Moving a print layout to a slide: scale type up, scale small values (tracking, rules, radii) down. Reference ratios (verify against the actual deck): macro type about 1.6 times, micro values about 0.6 times, tracking about half. `L1` · default

## Arabic, Persian, Urdu and Nastaliq
- **Body is set larger with generous leading,** to clear stacked dots and diacritics. Reference floor: body about 14 to 18 px-class at about 1.5 to 1.75 leading. `L1` · default
- **Nastaliq needs extra leading and size.** Its strokes cascade diagonally, so lines interlock vertically. Reference floor: leading at least 1.8 and never below 1.6; body at least 16 px-class; regular and bold only. Do not substitute a generic Arabic face for Urdu. `L1` · default
- **No shadow, glow or text-shadow on script text,** which hides dots. This already follows from his flat-type rule; do not use shadow as a legibility aid here. Over images use the scrim. `L1` · default
- **No rotating, tilting or parallax on running cursive text,** and no per-letter animation, which cuts the joins. Animate the line or block as one unit. `L1` · default
- **Contrast target rises for dotted scripts.** Reference floor: the standard text ratio is a minimum; for body in dotted scripts aim near the stricter enhanced ratio (about 7:1), since dots are the first detail to vanish. `L1` · default
- **Emoji do not substitute for icons** (already a dealbreaker); in right-to-left UI the directional-icon mirror rule applies to the icons used instead. `L1` · default

## Font stack per language
- **Choose the stack from the dominant language, then override with a language scope for embedded passages.** One family per role per language, so three type roles stay three. Never chain Latin, CJK and Arabic families into one undifferentiated list for a role; the dilution reads as a different voice. `L1` · default
- **Let the platform fall through per glyph for incidental mixed script,** but name a real fallback per script in the stack so nothing renders as a box. `L1` · default
- **Judge the face by the glyphs in the actual copy** (already a validated rule) and by whether it has the weights, tabular figures and punctuation of the target language. If the brand's face lacks the script, keep the brand face for Latin runs and pick a script companion that matches its weight, contrast and x-height; flag it as a brand gap. `L3` · default

## Text expansion and translation
- **Design for expansion, not the source language's length.** Reference floors for planning: translation into a Latin-script language commonly runs 30 to 40 percent longer than English, short UI strings more (up to roughly double); CJK often runs shorter in length but taller in glyph size. `L1` · default
- **Never size a container to the source string.** Buttons, tabs, labels and table headers flex in the inline direction; headlines re-break by phrase per language, which the validated phrase-break rule already requires. `L1` · default
- **Do not hard-code line breaks in headlines.** Set the breaks per language, since the phrase boundaries move. `L1` · default
- **Long-string test:** run the longest realistic string through every text slot and a short one through every slot. Neither may collide, truncate silently, or leave a void. `L1` · default
- **No text baked into images** unless it is regenerated per language; keep text live so it can be swapped. `L1` · default

## Numbers, dates, currency
- **Format with the locale, never by hand.** Grouping separators, decimal marks, digit shapes, date order, week start, 12/24-hour clock and currency symbol placement all vary; take them from the locale and state which locale you assumed. `L1` · default
- **Localize the currency symbol, its position and the numerals together.** A symbol with the wrong digit shape or on the wrong side reads as a mistake. `L1` · default
- **Dates are unambiguous when the audience is mixed.** Spell the month in words or use the unambiguous year-first order. `L1` · default
- **Tabular figures for stacked numbers** (columns, KPI grids, prices in lists); a lone number in a sentence stays proportional. `L1` · default
- **Copy register follows the locale** (formal, friendly, technical tiers). Translate meaning and tone, not word order, and keep his no-hype copy stance in every language. `L2 (per brand)` · default

## Pre-flight additions for non-Latin or multilingual work
- [ ] Language and direction declared on the document and each foreign run.
- [ ] Layout written in start/end terms; mirrored version viewed; identity, media controls, chart axes and time axes confirmed unmirrored.
- [ ] Latin-only rules (caps tracking, tight tracking, tight leading, italics, measure) re-derived for each script present.
- [ ] Real copy used; leading and size checked against the script's floors.
- [ ] Opposite-direction runs isolated; LTR values forced LTR in RTL copy.
- [ ] Longest and shortest strings tested; headline breaks set per language.
- [ ] Numbers, dates and currency formatted by locale; locale stated.

Items tagged `default` are standard typographic practice and need his confirmation. Excluded: a ban on en and em dashes (conflicts with his real-dash rule); any literal hex or px values.
