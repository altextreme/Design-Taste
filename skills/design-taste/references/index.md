# Design Taste: Reference Index

Load only what the task needs. Every file is one level below `SKILL.md`; none requires another to be read first.

## Provenance: two tiers of rules

| Tier | Where | Authority |
|---|---|---|
| **Validated** | `principles/*.md`, SKILL.md | Distilled from 148 side-by-side rounds of Anthony's own picks. Each rule cites its rounds (`R001`…). These win every conflict. |
| **Default (`default`)** | the files in "Default references" below | Unvalidated defaults for surfaces the rounds never covered, filtered through the validated rules. Tag: `default`. Never overrides a validated rule, dealbreaker or non-negotiable, and cannot by itself justify a BLOCK in a critique. |

## Validated principles (read the categories the task touches)

<!-- principles:start -->
| File | Category |
|---|---|
| `principles/core-tenets.md` | Core Tenets |
| `principles/composition-and-structure.md` | Composition & Structure |
| `principles/typography.md` | Typography |
| `principles/color.md` | Color |
| `principles/contrast-and-hierarchy.md` | Contrast & Hierarchy |
| `principles/motion.md` | Motion |
| `principles/tone-and-emotional-register.md` | Tone & Emotional Register |
| `principles/material-texture-surface.md` | Material / Texture / Surface |
| `principles/imagery-and-photography.md` | Imagery & Photography |
| `principles/iconography-and-supporting-graphics.md` | Iconography & Supporting Graphics |
| `principles/grid-and-systemization.md` | Grid & Systemization |
| `principles/brand-flexibility.md` | Brand Flexibility |
| `principles/text-image-relationship.md` | Text / Image Relationship |
| `principles/data-information-design.md` | Data / Information Design |
| `principles/interaction-and-affordance.md` | Interaction & Affordance |
| `principles/sound-motion-sync.md` | Sound / Motion Sync |
| `principles/density-and-information-load.md` | Density & Information Load |
| `principles/consistency-across-a-series.md` | Consistency Across a Series |
| `principles/cultural-reference-sensibility.md` | Cultural / Reference Sensibility |
| `principles/imperfection-and-authenticity.md` | Imperfection & Authenticity |
| `principles/negative-constraints.md` | Negative Constraints |
| `principles/product-ui-and-dashboards.md` | Product UI & Dashboards |
| `principles/web-and-landing.md` | Web & Landing |
| `principles/social-and-glance-media.md` | Social & Glance Media |
| `principles/decks-and-presentations.md` | Decks & Presentations |
| `principles/email.md` | Email |
| `principles/mobile-app.md` | Mobile App |
| `principles/documents-and-long-reading.md` | Documents & Long Reading |
| `principles/imagery-and-media-production.md` | Imagery & Media Production |
| `principles/identity-and-marks.md` | Identity & Marks |
| `principles/print-and-physical.md` | Print & Physical |
| `principles/reasoning-and-psychology.md` | Reasoning and Psychology |
<!-- principles:end -->

`evidence.md` holds the coverage tracker and round log (his picks and reasoning, in his words). Read it only to resolve ambiguity or to quote him.

## Default references (read when the trigger matches)

| File | Read when |
|---|---|
| `render-and-review.md` | Before every final pass on any visual: how to render the piece to an image and look at it, the typography and spatial checks, a hunt list of common failures, and the no-render fallback |
| `process-and-critique.md` | Starting any non-trivial task (ask vs decide, state the direction); the user asks for a critique, review or audit; before handing off finished work (scored review, self-review loop) |
| `ui-craft.md` | Any interactive UI: states (loading, empty, error, edge), focus and keyboard, targets, forms, hover and press behavior, UI motion, sample content and copy, laws of UX |
| `formats.md` | Slide decks, dashboards, charts and data graphics, landing pages, docs, email, mobile and native screens, social cards, resumes and print, diagrams, design-system docs |
| `media-prompts.md` | Writing prompts for image or video models; building timeline-based motion graphics; exporting MP4; negative-prompt lists; QA of generated media |
| `scripts-and-direction.md` | Any non-Latin script, right-to-left layout, CJK, mixed-language or translated content, locale formats; before writing "left" or "right" in a spec |
| `brand-and-registers.md` | A brand guide, `DESIGN.md` or "in the style of X" is supplied; no brand exists but the work is for a business; the brief is product UI, news, document, showcase or console (extra tonal registers) |
| `validation-queue.md` | You are planning the next quiz round, or want to promote a `default` rule to validated |

## Precedence in one line
Explicit user instruction > brand locks (L3) > validated rules for the chosen register (L2) > validated foundation (L1) > unvalidated `default` rules. The non-negotiables in SKILL.md sit above all of it, except that a brand conflict is resolved by changing the minimum and flagging it.
