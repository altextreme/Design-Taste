# design-taste

An AI agent skill that makes your agent design and critique the way Anthony Tackett does. It covers composition, typography, color, hierarchy, motion, tone, imagery, interface, data and his dealbreakers, plus channel rules for product UI, web, email, decks, documents, mobile, social, video, brand identity and print. It is written as relationships and reasoning (not fixed pixel or hex values) so it holds at any size, format or brand.

Install it once and your agent applies it whenever it builds or reviews something visual: web pages, app UI, slide decks, posters, social posts and carousels, dashboards, email, resumes and documents, packaging and business cards, brand marks, motion graphics, and prompts for image or video models. It also does scored design critique.

It follows the open [Agent Skills](https://agentskills.io) layout: a folder with `SKILL.md` plus `references/`.

## Install

Pick the route for your tool.

| You use | Do this |
|---|---|
| **Claude Code** | `claude plugin marketplace add altextreme/Design-Taste` then `claude plugin install design-taste@design-taste` |
| **Claude apps** (claude.ai, desktop) | Download `design-taste-skill.zip` from [Releases](https://github.com/altextreme/Design-Taste/releases/latest), then Settings → Capabilities → Skills → upload |
| **Codex, Gemini CLI, OpenCode, Cursor, VS Code / Copilot, Windsurf, Roo Code, Junie, Kiro, Hermes** | Run the installer (below) |
| **Cline, Zed, Aider** | Run the installer with `--project --agents-md` for always-on instructions (below) |
| **Anything else** | Paste `adapters/paste-in-prompt.md` into the system prompt, or point the agent at `skills/design-taste/SKILL.md` |

**Installer (macOS, Linux, WSL):**

```bash
git clone https://github.com/altextreme/Design-Taste.git
cd Design-Taste
./install.sh --dry-run    # preview what it will do
./install.sh              # install for your user, for every tool it detects
```

It puts one copy in `~/.agents/skills/design-taste` (read natively by Codex, Gemini CLI, OpenCode, Cursor, VS Code / Copilot, Roo Code and Junie), links it for Claude Code, and installs into Kiro, Windsurf and Hermes if you use them. Existing copies are backed up, never overwritten.

| Flag | Effect |
|---|---|
| `--project [DIR]` | Install into a project instead of your home folder |
| `--agents-md` | Also add the short always-on core (about 4 KB) to your global instructions, or with `--project` to `AGENTS.md` (plus `CONVENTIONS.md` for Aider and `.rules` for Zed if the project has them) |
| `--copy` | Copy instead of symlink |
| `--only LIST` | Limit to `claude,codex,gemini,opencode,hermes,kiro,windsurf` |
| `--uninstall` | Remove everything the installer placed |

**Windows:** `powershell -ExecutionPolicy Bypass -File install.ps1`. It copies the skill to `.agents\skills` and `.claude\skills` (and Hermes if present). It is untested and does not cover Kiro, Windsurf or the always-on files; for those, copy the folder by hand using [INSTALL.md](INSTALL.md).

Per-tool folder paths, always-on options, Paperclip import and troubleshooting are in [INSTALL.md](INSTALL.md).

## Check that it works

Restart your agent, then ask: "what design skills do you have?" or give it a design task such as "design a landing page hero". It should read `SKILL.md` and the matching reference file before it starts. Skills load when a task matches their description; if your tool triggers them weakly, add the always-on core with `--agents-md`.

## What's tested

The Claude Code plugin install and the macOS/Linux installer (install, rerun, uninstall) were run end to end. Folder paths for the other tools were checked against their published docs on 2026-10-07 but not run inside each tool. If one fails for you, check that tool's skills page and open an issue.

## What's inside

```
skills/design-taste/
├── SKILL.md                       tenets, non-negotiables, workflow, defaults, presets, dealbreakers, checklist
├── agents/openai.yaml             Codex display metadata (ignored elsewhere)
└── references/
    ├── index.md                   what to read when
    ├── principles/<category>.md   validated rules, one file per category (148 rounds, 194 dimensions)
    ├── evidence.md                coverage tracker and round log
    ├── process-and-critique.md    ask-vs-decide, direction-first, scored critique, self-review loop
    ├── ui-craft.md                states, accessibility, forms, interface motion, content integrity
    ├── formats.md                 decks, dashboards, landing pages, docs, email, mobile, social, print, diagrams
    ├── media-prompts.md           image and video prompts, motion-graphic builds, MP4 checks
    ├── scripts-and-direction.md   RTL, CJK, Arabic/Persian/Urdu, mixed scripts, localization
    ├── brand-and-registers.md     brand-file (DESIGN.md) ingestion, extra tonal registers, explicit-request styles
    └── validation-queue.md        unvalidated defaults awaiting comparison rounds
adapters/                          always-on core block, paste-in prompt, single-file edition
```

## What changed in v2.2

Phase 2 of the comparison rounds (R088 to R140) tested how the foundation carries into specific channels. The skill now has validated rules, from picks and reasoning, for:

- **Product UI and dashboards:** row separation, status badges (one hue per status), button hierarchy (including destructive actions), navigation, empty and error states, density, forms, dark grounds, records as table or labeled cards.
- **Web and landing:** hero composition (full-bleed first), section rhythm, proof, pricing, card graphics, section labels.
- **Email:** brand header, three-level action hierarchy, content grid.
- **Decks:** slide copy, title and divider slides, light and dark layouts, data slides.
- **Documents:** article layout, resumes, tables.
- **Mobile:** navigation, bottom sheets, touch targets, list density.
- **Social and video:** story text placement, carousels, feed copy, cover titles, captions, end cards.
- **Identity and print:** mark and wordmark as a modular system, packaging labels, business cards, poster hierarchy.

New dealbreakers include a centered text block over a photo's focal point, top tabs as primary mobile navigation, a "More" menu in primary navigation, a monogram as a logo mark, an email with no brand header, and a solid caption panel on video. Several rules are conditional on the brief; the skill says so rather than picking a house style.

## Two tiers of rules

**Validated** rules come from Anthony's side-by-side comparison rounds (the log is in `references/evidence.md`) and always win. **Default** rules (tagged `default`) fill surfaces the rounds never reached, filtered so nothing violates his dealbreakers. Each is queued for a validation round in `validation-queue.md`.

## License

MIT. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
