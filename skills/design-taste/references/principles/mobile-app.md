# Design Taste: Mobile App

> Layer tags: `L1` foundation (always), `L2` tonal preset (only for that tone), `L3` brand-negotiable. `Rnnn` = the comparison round that produced the rule (see ../evidence.md). Non-negotiables in SKILL.md survive any brand override.

- **Use the hamburger menu for websites on small screens, always.** The top bar keeps the logo and collapses to a menu button. Stated as a standing rule. `L2 (web/mobile)` · R101, R091
- **Bottom tab bar with icons only for a super simple native mobile app.** When the app is genuinely that small, a tab bar with icon and label is acceptable. Otherwise go with the menu button. `L2 (native mobile)` · R101
- **Never use tabs across the top as the primary navigation on mobile.** It is off the table. `L1` · R101
- **Open a small secondary task as a bottom sheet.** It sits where the thumb already is, so it is physically accessible: the bottom of the phone is easier to reach and the user doesn't have to shift their grip. `L2 (native mobile)` · R119
- **A centered dialog is acceptable, a bottom sheet is preferred.** `L2 (native mobile)` · R119
- **Don't send a small task to a full screen.** Putting its input at the top of a new screen forces a reach or a grip shift for something minor. Reserve full screens for large tasks. `L2 (native mobile)` · R119
- **Design mobile interactions for how the phone is held.** Put inputs and primary actions in the easy-reach zone at the bottom of the screen; treat reachability as a design criterion. `L1` · R119
- **Size touch targets to the platform guidelines, not by feel.** He follows Apple's Human Interface Guidelines for minimum hit area and consults Google's Material Design guidelines too; those numbers are the authority. `L1` · R120
- **A modest visual control is fine in a dense list when the hit area still meets the platform minimum.** The compact option (about 28 px drawn) suits a list with many rows; extend the tappable area with padding so the target meets the guideline. In the round shown, the hit area equaled the drawn size and was below the 44-point guideline, so the real build must pad it. `L2 (native mobile)` · R120 (his gut pick; the numbers come from HIG/Material, so no further round is needed)
- **Oversized controls are a mistake.** A large control eats screen space and looks clownish; being easy to hit is not a reason to enlarge the drawn control past need. `L2 (native mobile)` · R120

