# Deliverable Formats
> **Status: default guidance. Not yet validated by Anthony's comparison rounds.** Follow these as defaults for surfaces his validated rules (`principles/*.md`, SKILL.md) don't cover. Wherever they conflict with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** the deliverable is a slide deck, dashboard, landing or marketing page, docs or long-form page, email, mobile or native screen, social card or poster set, resume, one-pager or print document, flowchart or diagram, or component documentation. Also read the closing checklist before showing any of them.

Shared ground: the composition, type, color and motion rules in SKILL.md apply to every format. This file adds only what the format changes. For states, focus, forms, UI motion and accessibility, see `ui-craft.md`. For process, critique and verdicts, see `process-and-critique.md`. Do not restate them per format.

## Slide decks
**Must have**
- Choose the narrative skeleton from the purpose (decision, pitch, training, retrospective, case study), then cut to the content. Length follows talk time, not the amount of source material. `L1` · default
- Slide copy follows the slide's job: one large statement for dividers; for content slides use short columns with sub-headings each topped by a conceptually connected line icon (plain columns without icons are boring), or a bullet list beside an image that helps communicate the message; templates always include image-left and image-right content layouts. See `principles/decks-and-presentations.md` (R099).
- Title slides are immersive: a full-bleed image with the title over it (away from the focal point, scrim-secured), or a half-photo split; type-only on a deep brand color is a divider; a photo band over type only for a branding reason. See `principles/decks-and-presentations.md` (R123).
- State the rhythm (one row per slide: layout and role) before building, and show it if you can ask the user. Otherwise state it as an assumption. `L1` · default
- One idea per slide. A slide with three numbers becomes three slides. Titles are assertions, so the titles read in sequence tell the whole story. `L1` · default
- When content overflows, split the slide. Never shrink the type to fit. Projection legibility is the floor: body text must read from the back of the room, so size type as a fraction of canvas height. `L1` · default
- Choose each layout by the relationship in the content: one dominant figure = a giant number with one sentence; parallel items = equal type-led columns (no icon-in-circle rows); two-way comparison = split; sequence = a short timeline; section break = whitespace or a full-bleed image with the section name only. `L1` · default
- Keep one frame across the deck: same margins, same title position, same footer band, same grid. Variety comes from layout, never from moving the frame. Fits his series rule (`principles/consistency-across-a-series.md`). `L1` · default
- Deck density is a dial, not a constant: place a deliberate low-density beat (full-bleed image, single number, empty field) near each third so the run does not flatten. `L1` · default
- One pull-quote per deck, with a real attribution. The closing slide is decisive: the ask, the takeaway sentence, or a date. Not "thank you". `L1` · default
- Present two audiences deliberately. Room view: large, sparse, one point, image-first. Speaker view or leave-behind: the same slide may carry notes or a denser companion, but the slide itself never becomes the document. If both are needed, make two artifacts rather than one compromised slide. `L1` · default
- Screenshots in slides: crop the bottom only, never the top or sides, so the interface's start stays in frame. `L1` · default

**Avoid**
- Centering every slide; gradient-wash title slides; an icon beside every bullet; corner blobs; abstract 3D filler. Each is already a dealbreaker or explicit-request-only. `L1` · default
- Invented metrics. Every number has a source line, understated. `L1` · default

**Ground per slide (validated, R105):** build every slide layout in both a light and a dark version. Use dark for divider slides and light for content slides, or the reverse, to break up the deck visually; a 100% light or 100% dark theme is equally fine. Template work always ships both versions of every layout. Do not default to one dark: the brand dictates deck colors, so draw dark grounds from darker brand colors (R106); with no brand, derive the dark from the primary hue (R038).

**Check:** read only the titles; does the story survive? Any slide with two ideas or shrunken type? Frame identical across slides? A real closing ask?

## Dashboards and data-dense UI
**Must have**
- Treat it as reference media: dense by design, organized by the same hierarchy. Region order: KPI row, one primary chart, one secondary chart or table. Each region answers one question. `L1` structure; `L2 (utility)` density · default
- A KPI tile is a label, one figure and its change against the prior period. Lead with the figure, support with the label (optical-centering rule from `principles/data-information-design.md` applies). `L1` · default
- Figures that stack in columns or sit in rows use tabular numerals so values do not jitter. A single number inside a sentence stays proportional. If the face lacks tabular figures, change the face for the numeric tier. `L1` · default
- Reuse his data rules by reference: conventional axis, light grid, labeled categories, decorate one storytelling point only (`principles/data-information-design.md`). Chart titles state the finding, with a source line beneath. `L1` · default
- Data slide default: chart beside one to three key numbers that call out the point (storytelling first); a chart alone only when the slide just showcases data with no single point. See `principles/decks-and-presentations.md` (R107).
- Compute every mark from the data against one shared baseline. Every datum is readable somewhere (axis plus grid satisfies it; do not add per-bar value labels by default). Prefer filled encoding over outline-only marks. In nested shapes, only one short KPI shares the center; other labels go to a legend. `L1` · default
- Chart selection follows the message: trend = line over time; comparison = bars from a zero baseline; part-to-whole = few segments only; one headline metric = big number. Avoid dense pictograms. `L1` · default
- Filtering: filters show their current state, the result count updates, and view state (filters, tab) lives in the address so a view can be shared. Last good values stay on screen when a fetch fails; sample data is labeled as sample; freshness is shown. `L1` · default
- Structure comes from hairlines and spacing, not boxes. As density rises, drop containers and keep rules. Accent is scarce: active navigation plus one chart highlight. Names and values are specific and plausible, never "Metric A". `L1` · default

**Avoid**
- Hero images, oversized headlines or marketing copy inside a data tool; row striping; per-chart decoration; color as the only status signal (pair with text or shape; see `ui-craft.md`). Status chips are fine; pill buttons are not. · default

**Check:** can the one question per region be answered in seconds? Numbers aligned? Every chart has axes, units and a finding title? Accent count within budget?

## Landing and marketing pages
**Must have**
- Hero fits the first view with the primary action visible. Stack is capped: optional label, headline, one supporting sentence, one primary action plus at most one secondary. Proof (logos, stats, avatars) moves to the next section. A headline that wraps past two lines is a size problem, not a copy problem. `L1` · default
- Hero composition follows the application, not a house layout: photo-led (start with the full-bleed photo and scrim text for landing and home pages; a laid-over paper panel for secondary pages or busy photos; a half split as the third), band-over-text for editorial, or type-led with an inset photo. See `principles/web-and-landing.md` (R096).
- Hero is image-first and left-aligned, per his composition rules: the photograph or product leads, text follows. In wide layouts split side by side with the image read first. Content sits in the upper golden region, never floating mid-viewport. `L1` · default
- Section rhythm: hero, proof, how it works, depth, decision, close. Vary section layout so the same split never repeats more than twice in a row, and alternate image and type-led sections. Do not vary by inventing bento or card mosaics. `L1` · default
- Ground rhythm down a web page: alternate sections between the base ground and a slightly darker tint; use a dark band only for the one section carrying the most important message; never one flat ground with hairlines. See `principles/web-and-landing.md` (R104).
- Proof is concrete: a real figure with its source, a named quote, a product screenshot. Never fabricated logos or numbers. `L1` · default
- One CTA label per intent across nav, hero and footer. Labels are specific and fit one line. Closing section repeats the primary action once. `L1` · default
- One theme per page. A dark band in a light page reads as a paste accident unless it is a single deliberate switch. One accent used consistently; one radius logic. `L1` · default
- Responsive means reorganizing the layout for the width, not scaling it. No horizontal scroll at the narrow end. `L1` · default

**Avoid**
- Section-number labels, "Step 01" labels, scroll cues, decorative status dots, tag overlays on photos, keyword strips under the hero. Counted tracked-caps labels: at most one per three sections. · default
- Left headline with a floating right paragraph and nothing visual beside it. · default

**Check:** value and action clear in the first view? Layout families varied? Every proof item real? Same CTA wording everywhere?

## Docs and long-form reading pages
**Must have**
- Tables in documents: alternating row shading for five or more rows, hairlines only for three or four, never a full grid of borders; numbers right-aligned in tabular figures with a total row set off by a rule. See `principles/documents-and-long-reading.md` (R117).
- Articles and long reading: one narrow column set from the left margin, always; no side rail, no multi-column text except occasionally in print. Minimize eye travel and cognitive load. See `principles/documents-and-long-reading.md` (R118).
- Reading comes first: flush left, ragged right, measure within his range, body leading moderate. Make the article column the widest thing; navigation and contents are quiet. `L1` · default
- Layout: sticky navigation at one side, article in the middle, an "on this page" list at the other that marks the current section. On narrow widths the contents list drops and navigation moves to a drawer. Every H2 and H3 has an anchor. Use logical (start/end) properties so the layout flips for right-to-left. `L1` · default
- Declare the page type (tutorial, how-to, reference, concept, troubleshooting) and match tone to it. Title is the reader's question. One job per page. Sentence-case headings. `L1` · default
- Short paragraphs; three or more parallel items become a list; code blocks are language-tagged, short, explained in prose, with a copy control. Callouts distinguish note from warning by label and rule, not by tinted boxes with icons. `L1` · default
- Accent is spent on links, the active navigation item and at most one callout rule. Links keep color and underline at rest. `L1` · default

**Avoid**
- Pressure words (easy, simple, just), recap openers, personified artifacts; vague quantifiers where a figure exists. · default

**Check:** page type declared? Title a question? Contents list tracks scroll? Links underlined at rest?

## Email
**Must have**
- Marketing email is glance media: one idea, one primary CTA, readable in about ten seconds. Transactional or reference email may be dense but keeps one reading chain. `L1` · default
- Email action hierarchy has three levels: one full-width filled primary button; compact secondary buttons (ghost or filled; ghost when there is more than one); tertiary items as colored, underlined text links. See `principles/email.md` (R100).
- Email opens with the brand: a wordmark header aligned to the text axis (left logo over left text). Never an email without a brand header. See `principles/email.md` (R115).
- Email content blocks sit on a clean grid (two columns that fold to one on mobile); no zigzag alternation; images stay modest so text leads and never extreme banner crops; a small image or icon left with text right is the alternative. See `principles/email.md` (R116).
- Single column. Reference width: about 600 to 680 px. The body is flush left, never centered paragraphs. It must still read at about 480 px, with type stepping down one size. `L1` · default
- Build for clients, not browsers: table layout, inline styles, system or safe-stack fallbacks, no dependence on web fonts, shadows, gradients or script. Every image has alt text and a solid fallback color behind it, because many clients block images by default. The CTA is a real link styled as a button with its own background color, not an image. `L1` · default
- Footer carries the sender address, unsubscribe and view-in-browser. Contrast is checked in both light and the client's forced dark mode; use opaque colors, not alpha. `L1` · default

**Avoid**
- Skewed or faux-italic accent words, pill CTAs, stylized gradient heroes (all dealbreakers). Two competing CTAs. · default

**Check:** one CTA? Survives images off and dark mode? Reads at the narrow width? Footer complete?

## Mobile and native screens
**Must have**
- Pick the platform mode first (iOS, Material, or a deliberately neutral cross-platform) and stay in it. Never one platform's chrome in the other's frame. `L1` · default
- Platform fidelity versus brand: platform owns navigation structure, system chrome, gestures, sheets and control behavior; brand owns color, type, imagery and tone. Where they collide, behavior follows the platform and appearance follows the brand. `L1` · default
- Honor safe areas: status bar, home indicator, notch, gesture edges. Critical controls stay out of them. Reference floors: about 44 pt touch targets on iOS, about 48 dp on Material. `L1` · default
- One screen, one job. Top-level navigation is the menu button (hamburger) for websites on small screens and for any non-trivial app; a bottom tab bar with icons only for a super simple native app (R101); never tabs across the top; drill-downs stack, secondary tasks use sheets, local switching uses segmented controls. Do not overload the bar. `L1` · default
- Small secondary tasks open as a bottom sheet (centered dialog acceptable), never a full screen: design for how the phone is held and keep inputs and primary actions in the thumb zone. See `principles/mobile-app.md` (R119).
- First screen: one focal point, short copy, one next action. A website hero inside a phone frame fails. Onboarding screens differ in composition, not three identical slides. `L1` · default
- When text feels small, cut or split to another screen rather than shrink. Prefer fewer containers over box-in-box. Hover effects only where hover exists. `L1` · default
- A phone-sized mockup uses one persistent, correct device frame that supports the screen. Controls work; no designer panels or demo badges inside the product. `L1` · default

**Check:** platform coherent? Safe areas clear? Targets above floor? One job per screen?

## Social cards and posters (per channel)
**Must have**
- Judge at thumbnail size and at half scale: the main message must survive both. The cover carries the whole click decision. `L1` · default
- Re-compose for each channel and size: reset hierarchy, line breaks and crop, never scale. Keep essentials inside the central safe area and clear of the channel's own interface overlays. Variants differ in composition or message, not color alone. `L1` · default
- Keep his image-first chain and golden proportions (SKILL.md); only the safe-area and thumbnail tests are added. One verb-led action at most, and text share stays modest on paid placements. `L1` · default
- Print: build at physical size with bleed, keep essentials a safe distance inside the trim, and size type for viewing distance. Reference floor: bleed about 3 to 5 mm; key content about 5 mm inside trim. `L1` · default

**Check:** message legible as a thumbnail? Each size re-laid out? Nothing under platform overlays?

## Resumes, one-pagers and print documents
**Must have**
- This is a composed page, not a dashboard. Warm off-white ground, one scarce accent, one warm undertone across all neutrals, hierarchy from size and weight within one family. `L2 (quiet/premium)` · default
- Margins track formality: denser documents take tighter margins, formal ones more. One strict grid, flush left, a clear reading chain from name or title to the first fact. `L1` · default
- Use opaque colors, not alpha, anything exported to PDF; embed or outline fonts; build at the physical page size. `L1` · default
- One page means one page: cut, do not shrink. Dates and figures in tabular numerals. Every claim is a real one. `L1` · default

**Avoid**
- Simulated paper texture, italic emphasis, side-rail ornament, centered titles by default. · default

**Check:** fits at legible size? Exports with colors intact? Accent under budget?

## Flowcharts and diagrams
**Must have**
- One main path, read in his reading order (top to bottom or left to right), with branches kept to two levels. A diagram that needs more becomes two diagrams. `L1` · default
- Align boxes to a grid, equalize spacing, route lines orthogonally with no crossings where avoidable, and never let a line run along an edge or end in a near-tangent. Label connectors, not just nodes. `L1` · default
- Flat, hairline strokes, one accent for the path that matters, text contrast checked against each node fill. Theme any generated diagram to its slide or page background; never recolor a single label to patch contrast. `L1` · default
- Nested or concentric diagrams: one short label at the center, everything else in a legend or callout. `L1` · default

**Check:** one main path? No crossings or tangents? Labels readable on every fill?

## Design-system and component documentation
**Must have**
- Show each component in all its states, with its variants beside it and usage notes beneath: when to use, when not to, accessibility behavior. States follow `ui-craft.md`. `L1` · default
- Document tokens by role (surface, text, accent, status), not by value, and list what is locked versus negotiable. Name the one accent and the one radius logic. `L1` · default
- Present specimens on the real background they ship on, in both light and dark if the system has both, with contrast stated per pair. `L1` · default

**Check:** every state shown? Tokens named by role? Both themes covered?

## Deliverable-format checklist
- [ ] Format identified; its section above read; the shared SKILL.md pre-flight also run.
- [ ] Deck: titles alone tell the story; one idea per slide; split, never shrink; one frame; every layout has light and dark versions.
- [ ] Dashboard: KPI, primary chart, secondary region in order; tabular numerals; chart integrity; freshness and sample labels.
- [ ] Landing: first view shows value and action; layout families varied; proof is real; one CTA label per intent.
- [ ] Docs: page type declared; measure and anchors; links colored and underlined.
- [ ] Email: one CTA; single column; survives images off and dark mode; footer complete.
- [ ] Mobile: platform mode consistent; safe areas; targets above floors; one job per screen.
- [ ] Social or print: tested at thumbnail and half scale; each size re-composed; bleed and trim margins.
- [ ] Resume or print: opaque colors; fits without shrinking; accent under budget.
- [ ] Diagram: one main path; no crossings or tangents; contrast per node.
- [ ] Component docs: all states, tokens by role, both themes.
- [ ] Nothing from the dealbreaker or explicit-request-only lists; image-first and left-aligned kept.

