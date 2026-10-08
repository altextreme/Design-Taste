# Design Taste: Interaction & Affordance

> Layer tags: `L1` foundation (always), `L2` tonal preset (only for that tone), `L3` brand-negotiable. `Rnnn` = the comparison round that produced the rule (see ../evidence.md). Non-negotiables in SKILL.md survive any brand override.

- **Colored text signals interactivity.** In UI and web work, a single accent color on text is reserved for links and actionable items, and isn't spent on emphasis or decoration. `L1` · R033, R076
- **Text links: color and underline, always, at rest.** Follow UX best practice. A text link carries both signals, a distinct color and an underline, in its resting state. An underline that appears only on hover is not acceptable. `L1` · **non-negotiable in UI** · R076
- **State changes transition, never just swap.** Hover and press states should animate between states with the house brisk ease-out. An instant color-only change on a button is too plain. Purposeful motion, like a fill sweeping in or an arrow nudging toward the destination, is welcome. `L1` · R076
- **Elevation is a legitimate interactive affordance.** On the web, lifting a card toward the viewer on hover, with a slight rise, scale and shadow, literally pulls it out of the page and is a strong signal for cards and clickable surfaces. This is the UI exception to the no-shadow default, because there the shadow communicates state rather than decorating. Match the treatment to what is being activated. `L1` · R015, R064, R076

