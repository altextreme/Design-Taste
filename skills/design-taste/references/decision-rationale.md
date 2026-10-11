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

## Decisions recorded without reasons yet
These were answered but not yet asked why: toast with Undo for small confirmations; accent also on links and wayfinding labels; mixing surface treatments with a reason; reasons for "not applicable" states only when unusual; chat follows a stream until the reader scrolls; dark elevation follows the brand; hybrid hedge plus High/Medium/Low label for uncertainty. Ask before generalizing them to a new case.
