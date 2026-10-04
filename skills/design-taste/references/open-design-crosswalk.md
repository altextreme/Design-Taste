# Open Design Crosswalk (Provenance, Conflicts, Validation Queue)
> **Status: imported from Open Design (OD) analysis. Not yet validated by Anthony's comparison rounds.** Follow these as defaults for surfaces his validated rules (`principles/*.md`, SKILL.md) don't cover. Wherever they conflict with a validated rule, a dealbreaker, or a non-negotiable, the validated rule wins.
> **Read when:** you are tempted to import advice from an external design guideline, or you are planning the next quiz round.

## 1. Method and attribution
- Four analysis passes compared Open Design's craft notes, design-system corpus, skills and templates, and prompt stack against Anthony's rules. This file keeps only the cross-cutting outcomes: where OD agrees, where OD must lose, and what still needs a comparison round.
- Anything OD says that touches a dealbreaker, an explicit-request-only item or a non-negotiable is a conflict by default. Take the mechanism (a placement rule, a process step, a floor) and leave the look.
- Licensing: Open Design (nexu-io/open-design) is Apache-2.0. Its `craft/` notes are adapted from the MIT-licensed refero_skill; most prompt templates are CC-BY-4.0; the kami system is MIT. All content in these imported files is paraphrased, not copied. Credit: nexu-io/open-design and the upstream authors named above. Keep this credit if the files are redistributed.
- Tags used elsewhere: `· OD` marks a rule drawn from OD; `· OD (adapted)` marks one reshaped to fit Anthony's rules; `· OD gap` marks standard practice added where OD gave no value.

## 2. Confirmations: Anthony rule -> OD source that independently agrees
Independent agreement strengthens provenance; it does not replace his rounds.

| Anthony rule | Independent OD agreement |
|---|---|
| No pure black or pure white surfaces | craft color notes, most design systems in the corpus, taste and redesign skills, brand sample file |
| One scarce accent; color marks hierarchy | craft color, discovery prompt, several design systems, deck and dashboard templates |
| Contrast checked against the real paired background (4.5:1 text, 3:1 large/UI) | craft accessibility, core prompt, marketing prompt |
| Links need an underline, not hue alone | craft laws-of-ux (convention), design-system survey (one brand breaks it; see section 3) |
| Never italics for emphasis | serif-only systems, Urdu system (script reasons) |
| No glassmorphism, neumorphism, glow, bevel | kami, default, warm-editorial, Apple-style and feed-app systems, brand sample file |
| No gradient or blob heroes | craft anti-slop and color notes, discovery prompt |
| Emoji is not an icon | craft anti-slop, discovery prompt, several templates and checklists |
| Top-biased placement, never vertically centered by default | default, warm-editorial, atelier systems |
| Image-first; photography carries drama; real photography over generated | Tesla/Apple/SpaceX/Nike/Airbnb-style systems, core prompt |
| Ease-out entrances, no ease-in on entering UI, no bounce by default | UI motion skill, hyperframes motion principles, Urdu system, craft animation notes |
| Motion confirms, not decorates; restraint | craft animation discipline (cited study), discovery prompt ("many no's per yes") |
| Exits are hand-offs; transition is the exit | hyperframes transition rules |
| Reading-time holds before text exits | hyperframes notes |
| Never rely on motion alone for state | craft animation discipline, accessibility notes |
| Dark = tinted field, not gray | kami warm charcoal, mission-control navy (neutral near-black systems disagree; see section 3) |
| No invented metrics or facts | several template families |

## 3. Rejected OD advice: OD says -> why rejected -> what wins
Do not import any row below, even when an OD-style source presents it as best practice.

### Typography
| OD says | Why rejected | Winner |
|---|---|---|
| Ban en and em dashes; use hyphens | Hyphens standing in for dashes is a dealbreaker | Real en/em dashes, true quotes |
| Italic of the same family for emphasis; italic serif on key nouns; lowercase italic subheads | Faux or real italic emphasis reads as decoration | Never italics for emphasis |
| Skewed headline word | Stretched or faux italic type | Dealbreaker |
| Serif banned as default; named-font blacklists | Blacklists are one author's taste; quiet/premium defaults to a warm editorial serif | Judge faces by glyphs and role |
| Max two typefaces | Conflicts with three roles (display serif, text serif, sans) | Three type roles; apply the cap only where there is no text serif |
| Weight lock (400/500 only) or medium/semibold on labels and buttons | Emphasis by weight within one family; no bold below the headline | Medium allowed on controls only (provisional, validation queue 9) |
| Universal uppercase display with tracking | Tracked caps only for the smallest tier | Sentence case; caps for metadata |
| Title Case headings and buttons | Sentence case for promoted details | Sentence case |
| Display serif plus mono numerics as seed defaults | No round has fixed this | Template register only (queue item 11) |

### Color
| OD says | Why rejected | Winner |
|---|---|---|
| Links count toward the accent cap; demote to foreground-colored underline | Breaks links colored and underlined at rest | Accent hue on links; make the CTA a filled shape |
| Link color only on hover (WIRED-style) | Same | Links colored and underlined at rest; flag the brand conflict |
| Neutral near-black dark mode | Dark is a deep colored field | Tinted dark field; take only the no-pure-black mechanism |
| Palettes with secondary/domain accent plus status colors, "avoid monochrome", gradients and colored moments in UI | Color only marks hierarchy; one scarce accent | Scarce accent; status color only where data requires it, paired with a non-color cue |
| Gradient mesh, radial purple/fuchsia washes, brand gradients | Gradients subtle and tonal only; blobs explicit-only | Flat or tonal |
| Cyan vs coral buy/sell pair | Vibrating complements | Pair with a non-color cue and re-check |

### Layout
| OD says | Why rejected | Winner |
|---|---|---|
| Anti-center bias, or "cinematic center preferred" | Centered layouts are explicit-request-only | Top-biased, aligned |
| Bento grids; gapless or diverse bento backgrounds | Explicit-request-only | Strict grid, type-led columns |
| Asymmetric chaos, rotations, negative-margin overlaps | Deviate decisively or not at all; no near-tangents or collisions | Strict grid |
| Masonry with unequal card heights | Strict grid | Columns strict, heights set by content |
| Card grid with icon on top for feature lists | Icon-in-circle rows are explicit-request-only | Type-led columns |
| Brand at top, visual in middle, CTA at bottom | Image-first; headline group tight to image | Keep only safe-area and thumbnail tests |
| "Surprise the user, a notch more ambitious" | Restraint; do not add what was not asked | One decisive flourish at most |
| Pill buttons, pill tags, button-in-button circles, inline pill images in headlines | Pill buttons everywhere is a dealbreaker | Square or modestly rounded, consistent |

### Motion
| OD says | Why rejected | Winner |
|---|---|---|
| Springs for position and scale | No overshoot by default; bounce only in the playful tone | Eased, critically damped at most |
| Count-up numbers, confetti, sparkle, celebration moments | Restraint; word pops and sparkle are dealbreakers | Adopt only "peak at the end of the flow" |
| Perpetual micro-interactions, shimmer, infinite loops, marquees | Nothing loops or exits without reason | Static unless it carries state |
| Vary ease, direction, duration and stagger per scene; slowest scene 3x fastest | Steady tempo; drama in one place | Steady tempo |
| Ease-in exits, exits 60 to 70% of entrance, stagger | Exits only hand off | Unvalidated; see validation queue 2, 3 and 4 |
| Whip pans, speed ramps, motion-blur cuts, light leaks, glitch, scramble/typewriter text | Attention shakes, flares, glitch are dealbreakers or explicit-only | Direct motion |

### Material
| OD says | Why rejected | Winner |
|---|---|---|
| Grain, noise, paper-texture overlay; spotlight borders | Simulated materials; clean by default | Flat surfaces |
| Glass or frosted panels, frosted sticky nav, glass badges on images | Glassmorphism is explicit-request-only | Gradient scrim first, solid panel second |
| Multi-layer tinted atmospheric shadows; chunky bottom shadows; "depth by overlap" | Shadows only as interactive state | Hover lift only |
| Phosphor glow, neon, outer glow | Glow is a dealbreaker | None |

### Copy and process
| OD says | Why rejected | Winner |
|---|---|---|
| Big emoji as hero or icon | Emoji dealbreaker | Real icons or type |
| Alternating hero dark/light slides as default | Quiet registers use one ground; dark is a variant | Conditional (queue 1) |
| Plain brutalism/neobrutalism, doodle, retro, dithered styles | Tenet 1; novelty faces | Explicit-request-only (queue 6) |

## 4. Validation queue
Candidates that need a comparison round before promotion. Each: question, the one variable, affected file or rule, suggested dimension.

1. **Alternating light/dark slides in a deck.** Does a rhythm of alternating grounds beat a single ground? Variable: ground sequence (single vs alternating) with all else fixed. Affects: deck conventions, Showcase register, series rule. Dimension: `deck-ground-rhythm`.
2. **Enter vs exit easing.** Should leaving UI use ease-in (accelerating away) or the same ease-out as entrances? Variable: exit curve only. Affects: UI motion rules (exits). Dimension: `ui-exit-easing`.
3. **Exit duration vs entrance.** Is a shorter exit (about two thirds) better than equal? Variable: exit duration ratio. Affects: UI motion duration tiers. Dimension: `ui-exit-duration`.
4. **Stagger between siblings.** Does a small stagger help or read as decoration/word-pop? Variable: stagger on or off, same total time. Affects: UI motion and list entrances. Dimension: `sibling-stagger`.
5. **Blur to bridge a crossfade.** Does a brief blur mask a rough crossfade acceptably? Variable: blur during crossfade on or off. Affects: transition rules. Dimension: `crossfade-blur`.
6. **Plain brutalism.** Raw, no-radius, unstyled: is it an explicit-request-only style or acceptable as a deliberate register? Variable: raw vs refined treatment of the same layout. Affects: explicit-request list. Dimension: `raw-brutalism`.
7. **Brand as explicit request.** When a brand file conflicts with a default (radius, caps, shadow), should the brand win on that point? Variable: brand mark of the conflicting trait vs house default. Affects: L3 negotiation procedure. Dimension: `brand-override-scope`.
8. **Three-typeface cap.** Does a text serif beside a display serif and sans read as one family? Variable: text face distinct vs same family as display. Affects: type roles; OD's two-face cap. Dimension: `type-role-count`.
9. **Medium weight on controls.** Is a medium weight on buttons and nav acceptable under "no bold below headline"? Variable: control weight. Affects: weight rules, Product register. Dimension: `control-weight`.
10. **Tinted vs neutral interactive shadow.** On hover lift, does a hue-tinted shadow beat a neutral one? Variable: shadow tint. Affects: hover lift rule. Dimension: `hover-shadow-tint`.
11. **Tabular or mono numerals for data.** Do tabular figures (and a mono face) suit tables and dashboards? Variable: numeral style in the same table. Affects: data and dashboard rules; seed-default pairing. Dimension: `numeral-style`.
12. **Tracked-caps micro-eyebrow.** Do kicker labels above headings match his taste, or count as decoration? Variable: eyebrow present/absent. Affects: anti-repetition rule, caps tier. Dimension: `eyebrow-label`.
13. **Left-border accent stripe on cards.** Tell or acceptable? Variable: stripe vs hairline frame. Affects: candidate dealbreaker list. Dimension: `card-stripe`.
14. **Business stock photography and logo walls.** Tell or acceptable when real? Variable: stock vs real vs none. Affects: imagery policy, candidate dealbreakers. Dimension: `stock-and-proof`.
15. **UI micro-interaction scale.** Does a slight press scale (a small shrink) feel responsive or gimmicky? Variable: press feedback on/off. Affects: UI motion press rule. Dimension: `press-feedback`.
16. **Dense-editorial, Product/Utility and Showcase registers.** Are these distinct tones he would name? Variable: tone preset on one fixed layout. Affects: any new L2 preset. Dimension: `register-product`, `register-broadsheet`, `register-showcase`.
17. **Instrument/telemetry dark register.** Can a data-dense dark field coexist with colored-field dark? Variable: field tint at high density. Affects: dark-surface rules. Dimension: `dark-density`.
18. **Status color count and pairing.** How many status hues before accent scarcity breaks? Variable: number of status hues (each with a non-color cue). Affects: semantic data color. Dimension: `status-color-count`.
19. **Hierarchy depth and feed card height.** Three vs five visible levels above the fold; equal rows vs content-set heights in strict columns. Variable: one each. Affects: hierarchy cap, grid rule. Dimensions: `ui-hierarchy-depth`, `feed-card-height`.
20. **Scene tempo, image-label backing, CJK/RTL defaults.** Varied scene pacing; scrim vs solid panel for labels on photos; imported script-profile defaults. Dimensions: `scene-tempo`, `image-label-backing`, `script-profile`.
