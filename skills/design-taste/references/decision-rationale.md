# Decision Rationale (the why behind stated preferences)
> **Status: Anthony's stated reasons, collected by direct question, not yet from comparison rounds.** Each entry is a node: a decision, the conditions it applies under, the reasons he picked from a list of candidate reasons, what he said overrides it, and its links to other rules. Use it to reason about situations the rule does not literally cover: ask which of the reasons is in play, and let that decide.
> **Read when:** a stated preference in `ui-craft.md` or `formats.md` does not obviously fit the case in front of you, two rules seem to pull apart, or you are asked to explain a decision.
> Reasons are what he selected; an unselected reason was offered and not chosen, so do not assume it. Where a field says "none stated", he was not asked or named none.

## Node: custom-controls
- **Decision:** form controls and other controls are custom-drawn from the page's tokens, with native-equivalent behavior.
- **Applies when:** building interface where the look is designed.
- **Because (his reasons):** visual consistency across browsers and devices; brand expression; control over every state; native controls look unfinished inside a designed page.
- **Overridden by:** a tight deadline or prototype; a platform-native app where matching the OS is the goal.
- **Not chosen as an exception:** date, time and file pickers were offered and not selected, so do not treat them as exempt on their own.
- **Constraint that never relaxes:** the custom control replicates the native role, state, keyboard operation, visible focus and submitted value (accessibility is a non-negotiable).
- **Links:** `ui-craft.md` control and component geometry; SKILL.md interface floor; non-negotiable 1 and 5 (contrast, reading order).

## Node: hover-never-gates
- **Decision:** nothing a visitor needs is reachable only by hover; hover only adds polish, including secondary details. Hover may open a menu on desktop only if click, tap and keyboard also open it.
- **Because:** touch devices have no hover; keyboard and assistive-tech users cannot hover; hidden content is not discovered; making people hover repeatedly is effort.
- **Overridden by:** none stated.
- **Links:** `ui-craft.md` hover, touch and what moves on its own; psychology: recognition over recall, target reach; precedence: legibility and accessibility even over styling.

## Node: even-grid-for-equal-sets
- **Decision:** a set of genuinely equal items (gallery, feature list, row of logos) is an even grid with every item visible.
- **Because:** easy comparison; fairness among equal items; a grid is predictable and calm.
- **Boundary:** applies to equal items only. Pricing plans are not equal, so R110 (emphasize one plan) still applies. A section's lead image still follows the dominant-lead rule.
- **Not chosen as reasons:** "nothing hidden" was offered and not selected, so do not argue for the grid on that ground alone.
- **Confirmed R157 (comparison round):** an even grid beat one-large-five-small and a reel for six equal items. Reasons ticked: equal items must be compared, which needs all visible; one large implies a ranking that is not true; a reel leaves most items unseen and stepping costs effort; an even grid is calm and orderly. Not ticked: one large gives an entry point and rhythm; a reel is fine when there are too many to fit. Note that hiding items in a reel counted *against* the reel, so "nothing hidden" is now a supporting reason for not using reels, though not for choosing a grid on its own.
- **What separates this node from `hero-image-test`:** whether one element outranks the others. The evidence photo or true hero leads; items with no ranking stay equal.
- **Links:** `formats.md` landing; R110; psychology: similarity, choice overload (a grid of unequal items would fail the fairness reason).

## Node: interface-type-follows-brand
- **Decision:** interface typefaces follow the brand file; with no brand, one neutral sans; no display face added to product screens unprompted.
- **Because:** brand consistency over personal taste; recognition across every screen; a separate face on product screens sends mixed signals.
- **Not chosen as reasons:** client authority was offered and not selected.
- **Links:** precedence rule 2 (brand consistency even over personal taste); `brand-and-registers.md`.

## Node: ai-confirm-only-destructive
- **Decision:** an AI action asks for confirmation only when destructive or irreversible (delete, send, pay); everything else just happens, with Undo.
- **Because:** confirmation fatigue (frequent prompts get clicked through and the important ones lose force); speed and flow; the friction should match the severity of a mistake.
- **Not chosen as reasons:** "trust in the user to undo" was offered and not selected.
- **Links:** `ui-craft.md` forms (destructive, financial or legal actions are undoable or get a review step) and AI surfaces; Fitts and Hick (friction costs).

## Node: center-capped-column
- **Decision:** on content pages (marketing, reading, landing) a centered column with a maximum width; text inside stays flush left. Dashboards and app screens are exempt.
- **Because:** readability of line length; balance on a large monitor; focus on the content.
- **Not chosen as reasons:** consistency with narrower layouts was offered and not selected.
- **Links:** SKILL.md measure rule; the "centered layouts" explicit-request item (this is a centered container, not centered text).

## Node: two-cue-selection
- **Decision:** a selected item (icon set, tab, filter, nav item) carries two cues: a form change plus the accent. In navigation the active item keeps its line (R155) and adds the second cue.
- **Because:** color-blind users; accessibility standards (meaning is never carried by color alone).
- **Not chosen as reasons:** clarity at a glance and a more intentional look were offered and not selected, so the rule is justified by accessibility, not taste.
- **Links:** R155; non-negotiable 3; `ui-craft.md` accessibility baseline (never state by hue alone).

## Node: ai-sources-inline
- **Decision:** sources sit next to the claim they support, styled distinctly from body text.
- **Because:** verifiability of the exact statement; trust through honesty; recognition over recall (no matching a list at the end).
- **Not chosen as reasons:** stakes were offered and not selected as the reason for inline placement.
- **Links:** `ui-craft.md` AI surfaces; his honesty line on persuasion (SKILL.md); psychology: recognition over recall.

## Node: mixed-surface-treatments
- **Decision:** surface treatments (hairline-ruled bands, flat plates, soft tiles) may be mixed when each has a reason; one treatment per role, held the same everywhere.
- **Because:** different roles need different visual weight; it avoids the widget-kit look of one box stamped on everything.
- **Not chosen as reasons:** "a reason matters more than uniformity" and "real products are mixed" were offered and not selected.
- **What fails:** the same rounded-corner-plus-border box on cards, banners, dialogs and inputs with no reason.
- **Links:** `ui-craft.md` control and component geometry; R088 (hairline separates rows, whitespace separates groups); product register.
- **Confirmed R159 (comparison round):** one treatment per role beat the same box everywhere. Ticked: one box looks assembled from a kit; different roles should look different so people know what each one is. Offered and not ticked: consistency within a role matters more than variety across roles; too many treatments feel chaotic; one box is calmer. No flip condition given.

## Node: toast-with-undo
- **Status: overturned by R159 and R160. Kept under this name so links still resolve.**
- **Decision now:** a confirmation appears at the cause (inline beside the control) or at the consequence (in place of the changed item, with Undo; or at the top of the page after a permanent action), and stays until it has been read. A toast is used only when the cause has left the screen and nothing remains to point at ("Link copied" after a menu closes).
- **Because (his reasons, comparison rounds):** the message belongs where the cause is, or where the person lands; a message that stays is always seen; a toast can vanish before it is read or before the person can undo; showing the change in place shows what changed and where it went; a permanent action deserves a message that stays; for the cause-gone case, a toast is the only place left and is the familiar pattern, and a changed label is easy to miss.
- **Not chosen as reasons:** a toast does not disturb the layout; a toast gives Undo a visible, time-limited place; low stakes should mean low interruption.
- **Provenance:** the original toast-with-Undo rule was a stated preference. R159 picked inline on a bare mock; he said seeing it in context changed his mind, so R160 rebuilt it in realistic clickable screens. In R160 he picked inline for save (69a), toast for copy-from-a-closing-menu (69b), in place with Undo for archive (69c), top-of-page note for permanent delete (69d). No flip condition given.
- **Boundary:** never make a toast the only channel for an error that blocks progress (my addition, not asked).
- **Links:** `ui-craft.md` feedback channels; `judge-in-context` lesson (isolated mocks mislead him); precedence rule 4 (convention in interface even over novelty) did not decide this.

## Node: accent-scope
- **Decision:** the accent marks key moments (primary action, selection, focus, progress, a highlighted data point) plus links and wayfinding labels such as the active section. Eyebrows stay muted (R097, R130).
- **Because:** links must be findable; the accent carries one consistent meaning, "something to act on or notice".
- **Not chosen as reasons:** "wayfinding needs a cue" and "still scarce overall" were offered and not selected, but the accent staying small is also already validated (R040), so keep it small anyway.
- **Confirmed R158 (comparison round):** accent on named events only beat both spreading it across headings, labels, captions, statuses and icons, and using it on the primary action alone. Reasons ticked: an accent is a signal, so if everything has it nothing stands out; spreading it makes the screen busier and less calm; and accent on the selected row, progress and the active section helps people keep their place. **This corrects the line above:** the wayfinding reason was chosen in R158, so it now counts. Not ticked: the eye lands on the action and key number; labels and captions add color without meaning; button-only loses selection and progress cues; headings carry the brand. No flip condition given.
- **Links:** R040; R097; R130; `ui-craft.md` accent as a signal.

## Node: na-state-reasons
- **Decision:** a "not applicable" state gets a one-line reason only when the omission is unusual or could look like an oversight.
- **Because:** it avoids noise; the reader's time is limited; a reason exists to prevent doubt; docs stay lean.
- **Links:** `formats.md` design-system documentation.
- **Confirmed R159 (comparison round):** reasons only where unusual beat all-blank and reason-in-every-cell. Ticked: an unusual omission needs a reason so a developer does not have to guess. Not ticked: blank reads as forgotten; a reason in every cell is noise; the reason teaches why. Note the tick supports the reason for unusual cases; the "noise" reason for obvious ones was not ticked, but the pick implies it.

## Node: chat-follows-stream
- **Decision:** a chat view follows a streaming response until the reader scrolls or touches, then stops and offers "jump to latest". Long answers and documents never autoscroll.
- **Because:** chat convention (convention wins in interfaces); it keeps the newest text in view; it respects reader intent once they scroll; documents are read from the top and following would lose the reader's place.
- **Links:** precedence rule 4; `ui-craft.md` AI surfaces.

## Node: dark-elevation
- **Decision:** dark-theme elevation follows the brand's method; with none, lighter surface steps rather than shadows.
- **Because:** brand consistency; shadows disappear on dark grounds so lightness carries depth; one tonal system is simpler to keep consistent.
- **Not chosen as reasons:** the no-shadow principle was offered and not selected as a reason here.
- **Links:** precedence rule 2; `principles/material-texture-surface.md`; R038 and R039 (dark is a designed color field, not an inversion).

## Node: ai-uncertainty
- **Decision:** in high-stakes areas (health, money, legal) show uncertainty twice: a plain first-person hedge plus a High/Medium/Low label. A numeric percentage only if the number is real and calibrated.
- **Because:** the hedge is readable and the label is scannable; it is honest without alarming the reader.
- **Not chosen as reasons:** that percentages imply false precision, that high stakes need redundancy. He allows real percentages, so the ban I first wrote was my own and is removed.
- **Links:** his honesty line on persuasion (SKILL.md); `ui-craft.md` AI surfaces.

## Node: hero-image-test
- **Decision:** for an image-led hero, delete the image mentally; if the first screen still looks complete, the image was too small or too weak and must be enlarged or replaced.
- **Applies when:** the photograph is meant to lead (full-bleed or half split). Exempt: type-led heroes with an inset photo (R096).
- **Because:** immersion and first impression; picture superiority (images register faster and are remembered better); an image that can be removed without loss is filler.
- **Not chosen as a reason:** "image first" as a stand-alone reason was offered and not selected.
- **Confirmed R157 (comparison round):** when the work is the evidence, a dominant photo beat a small inset. Reasons ticked: a small picture cannot do the job of proof; a photo the first screen does not need is not earning its space. Reasons offered and not ticked: one dominant image as the single landing place; a weak photo is worse large; the space cost. No flip condition given.
- **Links:** R096; R133; `formats.md` landing; `principles/web-and-landing.md`; psychology: picture superiority.

## Node: self-sameness-test
- **Decision:** before showing any non-trivial piece, name the part that would appear unchanged for a very different brief, change it, and report the change.
- **Applies when:** always. Inside a brand, only to what the brand leaves open; brand-fixed pieces are skipped.
- **Because:** concept drives execution (the design should be derived from this subject); it breaks the template habits models fall into.
- **Not chosen as reasons:** specific work feeling human-designed, and brand recognition, were offered and not selected.
- **History:** he first said "new designs only", then changed to "always" once the test was explained with an example.
- **Links:** core tenet 0; the two-layouts step (R153); the logo-removed specificity test; brand-as-Lego ranking.

## Node: concentric-corners
- **Decision:** a rounded shape nested inside another has inner radius = outer radius minus the padding between them, with a small floor so it never reaches zero.
- **Because:** the gap looks even around the curve; mismatched corners read as an accident or a default (core tenet 1); it matches how the eye judges curves (optical correctness); it is a craft signal separating polished from templated work.
- **Overridden by:** none stated. Brand radius rules were offered as an option and not selected.
- **Links:** core tenet 1 (everything reads as intentional); `ui-craft.md` shape, layers and icons; R103 (card radius).
- **Confirmed R159 (comparison round):** concentric beat equal radii. Ticked: corners that share a center look like one continuous shape; equal radii make the gap look uneven at the corners. Not ticked: nobody notices; matching radii is simpler. No flip condition given.

## Node: space-before-boxes
- **Decision:** separate groups, sections and cards with space first, a surface change second, a hairline last. Rows of records keep hairlines (R088).
- **Because:** proximity does the grouping; less clutter; boxing everything erases the signal of a deliberate group.
- **Not chosen as a reason:** restraint over effect was offered and not selected for this rule.
- **Boundary:** applies to groups, sections and cards, not to record rows.
- **Links:** R088; R104 (alternating section ground); psychology: proximity, common region.
- **Confirmed R159 (comparison round):** space-first beat nested boxes for a form. Ticked: boxes inside boxes add visual noise; space groups without extra lines; fewer borders mean a calmer screen. Not ticked: a box makes grouping explicit and easier to scan. No flip condition given.

## Node: form-stability
- **Decision:** a field's border keeps one width in every state; focus is an offset outline in a reserved slot; helper and error text own a reserved line, so nothing shifts when focus lands or a message appears.
- **Because:** it looks intentional and polished; it protects the user's place; layout stability; it is a craft signal.
- **Overridden by:** none stated.
- **Links:** core tenet 1; `ui-craft.md` control and component geometry; non-negotiable 4 (no near-tangents, no collisions).

## Node: matched-control-height
- **Decision:** a text field and the button beside it share one height; density variants step together.
- **Because:** alignment and grid discipline; it reads as intentional; consistent density across one system.
- **Not chosen as a reason:** "equal height tells the eye the two belong together" was offered and not selected.
- **Links:** `principles/grid-and-systemization.md`; `ui-craft.md` control and component geometry.

## Node: disabled-three-ways
- **Decision:** a disabled control is visibly muted, shows a not-allowed cursor where a pointer exists, and is truly disabled for the keyboard and assistive tech. Opacity alone is not enough.
- **Because:** the signifier must match the behavior; keyboard and assistive tech users depend on the real state; never rely on one channel.
- **Not chosen as a reason:** "not everyone sees opacity" was offered and not selected.
- **Links:** `ui-craft.md` accessibility baseline (never carry state by one channel); non-negotiable 1.

## Node: icon-size-matches-text
- **Decision:** an icon is sized to the line height of the text beside it and centered on the text line; it is used at the size it was drawn for.
- **Exception:** a vector icon may be scaled up for a large slot in a sparse context, keeping its stroke weight matched to nearby type. Raster icons are never scaled up.
- **Because:** icon and text read as a unit; consistent weight; visual balance (an oversized icon pulls attention from its label); restraint (icons support text, not compete).
- **Links:** `principles/iconography-and-supporting-graphics.md` (thin line icons matched to type weight); core tenet 3.
- **Confirmed R159 (comparison round):** an icon matched to the text line beat one about twice the size. Ticked: it reads as part of the label; a mismatched size looks unfinished. Not ticked: bigger icons are easier to recognize and tap; a large icon pulls the eye first. The scaled-up vector exception above was not tested.

## Node: icon-optical-correction
- **Decision:** icons are corrected optically: a circle gets slightly more area than a square of the same box; a play triangle centers on its centroid.
- **Because:** it reads as intentional; it is a craft signal; it is consistent with optical centering elsewhere in the skill.
- **Not chosen as a reason:** "the eye judges, not the ruler" was offered and not selected as a stand-alone reason.
- **Links:** core tenet 1; the big-number-and-label optical centering rule (SKILL.md data defaults).

## Node: named-layer-order
- **Decision:** name the stacking order once (base, sticky bar, dropdown, scrim, dialog, popover, toast, skip link); every layer takes its place from it; no ad hoc z-index values.
- **Because:** it prevents overlap bugs; consistency across the system; handoff clarity; it reads as intentional.
- **Links:** `ui-craft.md` shape, layers and icons; the handoff stance in SKILL.md (state rigid parts and where there is room).

## Node: glass-fallback-and-contrast
- **Decision:** when a translucent or blurred surface is explicitly requested, ship an opaque fallback for reduced-transparency settings and check text contrast over white, black and a busy photo.
- **Because:** legibility is non-negotiable; accessibility for everyone; glass is risky so it must be earned; worst-case thinking (test the busiest background).
- **Applies when:** the user explicitly requests glass (it stays on the explicit-request-only list).
- **Links:** non-negotiable 1; `principles/negative-constraints.md`; `brand-and-registers.md` section D.

## Node: one-focal-point
- **Decision:** one element plainly dominates each screen; the first view holds a handful of meaning units; competing motion is minimized. No numeric thresholds.
- **Because:** enforced hierarchy; fewer competing choices; reading order follows meaning (the biggest thing is the most important).
- **Not chosen as a reason:** drama in one place was offered and not selected for this rule, though it is validated elsewhere (core tenet 3).
- **Rejected detail:** "about twice the area" and "no more than two things moving" were dropped. He keeps the dominance and drops the numbers.
- **Links:** core tenet 2; psychology: Hick, isolation; `principles/contrast-and-hierarchy.md`.

## Node: three-person-walkthrough
- **Decision:** for interactive work, walk it as a desktop mouse user, a one-handed phone user, and a keyboard user with no hover; record what each saw with no input and where each was blocked.
- **Applies when:** interactive work. Skipped for static pieces (posters, charts).
- **Because:** inclusive by default; it catches hover and touch gaps; observation beats opinion; every state is designed so a developer does not decide.
- **Links:** SKILL.md workflow step 6 and "design every state"; `ui-craft.md` hover, touch and what moves on its own; non-negotiable 1.

## Node: other-device-classes
- **Decision:** keep default rules for TV, watch, car, kiosk and spatial devices: size targets by input and type by viewing distance; glance surfaces carry one number or status; the motion budget shrinks as attention narrows and darker environments default darker; keep reading and selecting out of a TV's outer margin, and treat a second glance in a vehicle as a failure.
- **Because:** it covers a gap his rounds never reached; it stays inside his principles (legibility, hierarchy); safe defaults beat none.
- **Not chosen as a reason:** "easy to correct later" was offered and not selected.
- **Confidence:** he agreed with all four rule groups (after a clarifying question, since the first answer was ambiguous). He has not designed for these devices, so all remain unvalidated defaults.
- **Links:** queue 23 and 57; `formats.md` other device classes; non-negotiables 1, 2 and 4.


## Node: no-pills-everywhere
- **Decision:** pill-shaped buttons and tags used everywhere are a dealbreaker (R085); solid pills behind labels and dates remain welcome in a playful register (R056).
- **Because:** when everything is a pill, shape stops carrying meaning (it no longer distinguishes buttons from tags and labels); it reads as a generic template.
- **Not chosen as reasons:** over-rounded childish tone, and conflict with the square-to-the-grid discipline, were offered and not selected.
- **Boundary:** the fault is uniform use. A pill used for one role (a status badge, a date label) is fine.
- **Links:** R056; R085; R125 (status pills); `principles/negative-constraints.md`.

## Node: no-top-tabs-primary-mobile-nav
- **Decision:** tabs across the top are never the primary navigation on mobile (R101).
- **Because:** the top of a phone is out of thumb reach; top tabs do not scale past a few items; platform convention (bottom navigation) wins for interface tasks; items scrolled out of view get missed.
- **Links:** R101; R126; precedence rule 4 (convention in interface even over novelty); psychology: target reach, recognition over recall.

## Node: no-centered-text-over-photo-middle
- **Decision:** a text block centered over the middle of a full-bleed photo is a dealbreaker.
- **Because:** it covers the photo's subject (the middle is where the focal point usually sits).
- **Not chosen as reasons:** static composition, legibility over a busy image, and "looks like a default" were offered and not selected. Legibility is still required by non-negotiable 1, so scrim rules still apply wherever text meets an image.
- **Links:** R014; R134 (never put text over an image's critical focal point); precedence rule 9 (protect the original photograph).

## Node: no-two-letter-monogram-mark
- **Decision:** a two-letter monogram is never the logo mark.
- **Because:** it is not distinctive (it could belong to any company); it looks like a placeholder; it is a lazy shortcut.
- **Not chosen as a reason:** weakness at small sizes was offered and not selected.
- **Links:** `principles/identity-and-marks.md`; core tenet 1.

## Node: email-needs-brand-header
- **Decision:** an email with no brand header is a dealbreaker.
- **Because:** recognition and trust; repetition builds the brand; an unbranded email resembles phishing.
- **Not chosen as a reason:** that it looks unfinished was offered and not selected.
- **Links:** `principles/email.md`; precedence rule 2 (brand consistency); psychology: repetition and trust.

## Node: no-solid-caption-panel-on-video
- **Decision:** no solid caption panel on video.
- **Because:** it is heavy and clumsy; better options exist (a gradient scrim, or a quiet area of the frame); it breaks the image-first principle.
- **Not chosen as a reason:** that it blocks the picture was offered and not selected.
- **Links:** `principles/imagery-and-media-production.md`; `principles/social-and-glance-media.md`; the scrim-first rule (SKILL.md imagery); non-negotiable 1.

## Node: video-end-card-needs-action
- **Decision:** a video end card with only a logo is a dealbreaker; the ending should give viewers something to do.
- **Because:** it wastes the final moment; it gives no call to action.
- **Not chosen as reasons:** the peak-end effect, and "reads as abrupt or lazy", were offered and not selected.
- **Links:** `principles/social-and-glance-media.md`; purpose sets the design (SKILL.md funnel stages).

## Node: no-hairline-didone-outside-luxury
- **Decision:** hairline Didone typefaces are a dealbreaker outside the luxury register (where a high-contrast Didone at full display scale is welcome).
- **Because:** the hairlines vanish at small sizes; extreme thick-thin contrast makes legibility fragile.
- **Not chosen as reasons:** tone mismatch and overuse as a cliché were offered and not selected. The reason is legibility, so a Didone at large display scale is not objected to on these grounds.
- **Links:** luxury register (SKILL.md tonal presets); core tenet 4; `principles/typography.md`.

## Node: no-floating-3d-or-stock-3d
- **Decision:** no floating 3D shapes and no generic stock 3D illustration.
- **Because:** they are generic and overused.
- **Not chosen as reasons:** decoration with no job, not tied to the concept, and dated look were offered and not selected.
- **Links:** `principles/negative-constraints.md`; `principles/imagery-and-media-production.md`; core tenet 0.

## Node: no-letterspaced-lowercase
- **Decision:** lowercase is never letterspaced; tracked caps are for the smallest metadata tier only.
- **Because:** it hurts readability; tracking belongs to caps.
- **Not chosen as reasons:** word shapes breaking apart, and "looks affected", were offered and not selected.
- **Links:** `principles/typography.md`; `scripts-and-direction.md` (caseless scripts).

## Node: no-vibrating-complements-or-muddy-palettes
- **Decision:** no vibrating complements; no muddy, low-contrast palettes (which is why blush pink plus sage fails).
- **Because:** vibrating complements strain the eye; muddy low-contrast pairs blur together and lose hierarchy.
- **Not chosen as reasons:** that blush plus sage is a cliché, or that these pairings are applied by fashion and not the concept, were offered and not selected. The objection to blush plus sage is low contrast, so a version with clear value separation is not objected to on these grounds.
- **Links:** `principles/color.md`; core tenet 4; `principles/contrast-and-hierarchy.md`.

## Node: no-stock-motion-effects
- **Decision:** no elastic drop-ins, spin-ins, attention shakes or word-by-word pops.
- **Because:** they have an amateur, template look.
- **Not chosen as reasons:** motion should have a job, breaking the reading flow, and drama belonging in one place were offered and not selected. The objection is about how they look, so judge a new effect by whether it reads as a stock preset.
- **Links:** `principles/motion.md`; `principles/negative-constraints.md`.

## Node: no-dip-to-black-between-every-transition
- **Decision:** do not dip to black between every transition.
- **Because:** it reads as an unedited default.
- **Not chosen as reasons:** broken continuity, dead air, and repetitiveness were offered and not selected.
- **Links:** `principles/motion.md` (sequences hand off with motion).

## Node: no-decorative-patterns
- **Decision:** no decorative motifs or background patterns.
- **Because:** they compete with content; they date quickly and look busy.
- **Not chosen as reasons:** decoration with no job, and restraint over effect, were offered and not selected.
- **Links:** `principles/material-texture-surface.md`; `principles/negative-constraints.md`.

## Node: shadows-for-depth
- **Decision:** bevel, emboss, glows, colored or heavy shadows, and decorative shadows with no depth job stay banned. Subtle, neutral shadows are acceptable to establish z-depth on raised cards, floating layers, sticky bars, and hover and drag states. A subtle shadow on text is acceptable when it helps legibility: alone over mild imagery; over a busy photo a scrim or panel comes first.
- **Because:** the dated look of bevel and emboss is the objection; a subtle shadow that establishes depth does a job.
- **Widens:** the old rule that hover elevation was the only UI shadow (SKILL.md imagery bullet and `ui-craft.md`). R064 and R071 are not changed: they concern shadow-only fixes on busy photos.
- **Links:** `principles/material-texture-surface.md`; `principles/negative-constraints.md`; R064; R071; core tenet 3.

## Node: brief-vetoes
- **Decision:** certain treatments are ruled out entirely by brief signal, before any weighing. Trust-critical (money, health, legal, identity): the playful register, hype and urgency copy, novelty and kinetic type. Elevated accessibility: dimming secondary text toward the contrast floor, thin and light weights at body size. Very dense data: decorative texture or imagery behind data, ambient or looping motion, large hero-style type and marketing layouts.
- **Because:** the cost of getting it wrong is high; audience context sets the design; legibility and accessibility come first.
- **Not chosen as a reason:** "a veto saves deliberation" was offered and not selected.
- **Not vetoed (he left unselected):** glass and translucency under trust-critical, elevated-accessibility and dense-data signals (it stays explicit-request-only everywhere, with its fallback and contrast tests); motion beyond state changes under elevated accessibility.
- **Links:** precedence rules 1 and 3; core tenet 4; `process-and-critique.md` section 11; the quiet-constraints rule in section 2.

## Adopted from field review (reasons are the sources', not Anthony's)
These defaults came from comparing other design-guidance projects and were not put to him one at a time. Treat the reasons as unconfirmed until he answers; do not cite them as his.
- **Hard blockers override the score:** a failed non-negotiable fails the piece however high the score (aievolutionpl). Reason in source: a score you argued yourself into is worthless.
- **Lint before looking:** deterministic checks catch what eyes miss and make a "no violations" claim checkable (impeccable, avoid-ai-design, ui-craft). Each tell marked scanner, render-only or judgment.
- **Facets and anti-reference at intake:** name the perceptions to create and what the work must not become (mies).
- **Contradictory brief is named, not silently resolved; coverage gaps are asked about, not invented** (aievolutionpl).
- **Platform asked first when it changes the output; never prototype native UI as HTML** (senior-designer).
- **Replace to refine, branch to compare** (superdesign).
- **Browser surfaces themed; motion gate; motion claimed, motion shown** (impeccable, emilkowalski, taste-skill).
- **Reject a reference that harms usability** (tasteful-ui).
- **Stress with the worst believable content; choose truncation per field; the identifying and actionable parts do not shrink** (emilkowalski/skills, break-ui). Reason in source: demo data is chosen to flatter the design, so the breaks arrive in production; and one global truncation rule is wrong for some field.
- **Interruptible by default; release continues the hand's speed; edges give instead of walling; settle without overshoot** (emilkowalski/skills, Apple's fluid-interface talks as distilled there). Reason in source: thought and gesture run in parallel, so an interface that cannot be redirected feels like it is not listening. The no-overshoot default is this repo's own (R041, R048, R058) and is stricter than the source.
- **Slow where deciding, fast where the system answers; quicker motion is a quicker product; warm-up skips the repeat delay** (emilkowalski/skills). Reason in source: the deliberate wait is the safeguard, while any delay on the system's answer reads as lag.
- **Phone platform layer fixes** (emilkowalski/skills, mobile-native). Reason in source: most "janky on my phone" reports come from the tap flash, stuck hover, viewport height or input zoom, not from animation, and none reproduce in emulation.
- **Cause before fix for dropped frames; a cheaper property that looks the same; promote layers last** (emilkowalski/skills, animation-performance). Reason in source: a fast laptop hides almost every problem, and a premature layer promotion fixes nothing while costing memory.
- **Motion opportunity pass is a filter that reports rejections; variants diverge on a named axis** (emilkowalski/skills). Reason in source: an opportunity finder that suggests motion everywhere produces the over-animated product it exists to prevent; three tints of one idea teach nothing.
- **Simplicity is not minimalism; mapping; navigation named for contents; confirmation for the irreversible** (Apple's design-principles talk as distilled in emilkowalski/skills).
- **Other guidance never overrides his validated rules** (the Anthropic frontend-design list of tells conflicts with R097, R130, R153, R102, R103).

