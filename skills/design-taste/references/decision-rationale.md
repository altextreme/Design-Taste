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

## Node: toast-with-undo
- **Decision:** small confirmations ("Saved", "Copied") use a toast, with Undo when the action is reversible.
- **Because:** it does not disturb the layout; Undo needs a visible, time-limited place to live; low stakes should mean low interruption; the pattern is familiar.
- **Boundary:** inline in place for field and section feedback; a toast is never the only channel for an error that blocks progress (my addition, not yet confirmed by him).
- **Links:** `ui-craft.md` feedback channels; precedence rule 4 (convention in interface even over novelty).

## Node: accent-scope
- **Decision:** the accent marks key moments (primary action, selection, focus, progress, a highlighted data point) plus links and wayfinding labels such as the active section. Eyebrows stay muted (R097, R130).
- **Because:** links must be findable; the accent carries one consistent meaning, "something to act on or notice".
- **Not chosen as reasons:** "wayfinding needs a cue" and "still scarce overall" were offered and not selected, but the accent staying small is also already validated (R040), so keep it small anyway.
- **Links:** R040; R097; R130; `ui-craft.md` accent as a signal.

## Node: na-state-reasons
- **Decision:** a "not applicable" state gets a one-line reason only when the omission is unusual or could look like an oversight.
- **Because:** it avoids noise; the reader's time is limited; a reason exists to prevent doubt; docs stay lean.
- **Links:** `formats.md` design-system documentation.

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
