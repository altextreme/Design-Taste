# Validation Queue
> **Read when:** you are planning the next quiz round, or tempted to promote a `default` rule to validated.
> Rules tagged `default` in the reference files are unvalidated. Each needs a comparison round before it is promoted into DESIGN_TASTE.md with its round id.

## Queue
Candidates that need a comparison round before promotion. Each: question, the one variable, affected file or rule, suggested dimension.

1. *(Answered: web by R104; decks by R105: build light and dark of every layout, use ground to separate dividers from content. Dark choice: the brand decides, R106.)* **Alternating light/dark slides in a deck.** Does a rhythm of alternating grounds beat a single ground? Variable: ground sequence (single vs alternating) with all else fixed. Affects: deck conventions, Showcase register, series rule. Dimension: `deck-ground-rhythm`.
2. **Enter vs exit easing.** Should leaving UI use ease-in (accelerating away) or the same ease-out as entrances? Variable: exit curve only. Affects: UI motion rules (exits). Dimension: `ui-exit-easing`.
3. **Exit duration vs entrance.** Is a shorter exit (about two thirds) better than equal? Variable: exit duration ratio. Affects: UI motion duration tiers. Dimension: `ui-exit-duration`.
4. **Stagger between siblings.** Does a small stagger help or read as decoration/word-pop? Variable: stagger on or off, same total time. Affects: UI motion and list entrances. Dimension: `sibling-stagger`.
5. **Blur to bridge a crossfade.** Does a brief blur mask a rough crossfade acceptably? Variable: blur during crossfade on or off. Affects: transition rules. Dimension: `crossfade-blur`.
6. **Plain brutalism.** Raw, no-radius, unstyled: is it an explicit-request-only style or acceptable as a deliberate register? Variable: raw vs refined treatment of the same layout. Affects: explicit-request list. Dimension: `raw-brutalism`.
7. **Brand as explicit request.** When a brand file conflicts with a default (radius, caps, shadow), should the brand win on that point? Variable: brand mark of the conflicting trait vs house default. Affects: L3 negotiation procedure. Dimension: `brand-override-scope`.
8. **Three-typeface cap.** Does a text serif beside a display serif and sans read as one family? Variable: text face distinct vs same family as display. Affects: type roles; a two-face cap. Dimension: `type-role-count`.
9. **Medium weight on controls.** Is a medium weight on buttons and nav acceptable under "no bold below headline"? Variable: control weight. Affects: weight rules, Product register. Dimension: `control-weight`.
10. **Tinted vs neutral interactive shadow.** On hover lift, does a hue-tinted shadow beat a neutral one? Variable: shadow tint. Affects: hover lift rule. Dimension: `hover-shadow-tint`.
11. **Tabular or mono numerals for data.** Do tabular figures (and a mono face) suit tables and dashboards? Variable: numeral style in the same table. Affects: data and dashboard rules; seed-default pairing. Dimension: `numeral-style`.
12. *(Answered in part by R097: B tracked caps when navigational; not yet A vs B.)* **Tracked-caps micro-eyebrow.** Do kicker labels above headings match his taste, or count as decoration? Variable: eyebrow present/absent. Affects: anti-repetition rule, caps tier. Dimension: `eyebrow-label`.
13. **Left-border accent stripe on cards.** Tell or acceptable? Variable: stripe vs hairline frame. Affects: candidate dealbreaker list. Dimension: `card-stripe`.
14. *(Logo walls: answered in part by R112: "mentioned in" names are valid proof when the brief calls for clout; stock photography still open.)* **Business stock photography and logo walls.** Tell or acceptable when real? Variable: stock vs real vs none. Affects: imagery policy, candidate dealbreakers. Dimension: `stock-and-proof`.
15. **UI micro-interaction scale.** Does a slight press scale (a small shrink) feel responsive or gimmicky? Variable: press feedback on/off. Affects: UI motion press rule. Dimension: `press-feedback`.
16. *(Product/Utility partly answered by R088–R095; Broadsheet and Showcase open.)* **Dense-editorial, Product/Utility and Showcase registers.** Are these distinct tones he would name? Variable: tone preset on one fixed layout. Affects: any new L2 preset. Dimension: `register-product`, `register-broadsheet`, `register-showcase`.
17. *(Answered by R094 and R106: dark suits dense data; brand decides the dark.)* **Instrument/telemetry dark register.** Can a data-dense dark field coexist with colored-field dark? Variable: field tint at high density. Affects: dark-surface rules. Dimension: `dark-density`.
18. *(Answered by R089 and R128: word in a tinted badge; one hue per status, never grouped.)* **Status color count and pairing.** How many status hues before accent scarcity breaks? Variable: number of status hues (each with a non-color cue). Affects: semantic data color. Dimension: `status-color-count`.
19. **Hierarchy depth and feed card height.** Three vs five visible levels above the fold; equal rows vs content-set heights in strict columns. Variable: one each. Affects: hierarchy cap, grid rule. Dimensions: `ui-hierarchy-depth`, `feed-card-height`.
20. **Scene tempo, image-label backing, CJK/RTL defaults.** Varied scene pacing; scrim vs solid panel for labels on photos; imported script-profile defaults. Dimensions: `scene-tempo`, `image-label-backing`, `script-profile`.
