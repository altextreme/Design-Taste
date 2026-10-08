# design-taste

An AI agent skill that makes your agent design and critique the way Anthony Tackett does. It covers composition, typography, color, hierarchy, motion, tone, imagery, interface, data and his dealbreakers, written as relationships and reasoning (not fixed pixel or hex values) so it holds at any size, format or brand.

Install it once and your agent applies it whenever it builds or reviews something visual: web pages, app UI, slide decks, posters, social posts, dashboards, email, motion graphics, and prompts for image or video models. It also does scored design critique.

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
    ├── principles/<category>.md   validated rules, one file per category (87 rounds, 108 dimensions)
    ├── evidence.md                coverage tracker and round log
    ├── process-and-critique.md    ask-vs-decide, direction-first, scored critique, self-review loop
    ├── ui-craft.md                states, accessibility, forms, interface motion, content integrity
    ├── formats.md                 decks, dashboards, landing pages, docs, email, mobile, social, print, diagrams
    ├── media-prompts.md           image and video prompts, motion-graphic builds, MP4 checks
    ├── scripts-and-direction.md   RTL, CJK, Arabic/Persian/Urdu, mixed scripts, localization
    ├── brand-and-registers.md     brand-file (DESIGN.md) ingestion, extra tonal registers, explicit-request styles
    └── open-design-crosswalk.md   provenance, rejected advice, validation queue
adapters/                          always-on core block, paste-in prompt, single-file edition
```

## Two tiers of rules

**Validated** rules come from Anthony's side-by-side comparison rounds (the log is in `references/evidence.md`) and always win. **Imported** rules (tagged `OD`) come from an analysis of the open-source [Open Design](https://github.com/nexu-io/open-design) project, filtered so nothing violates his dealbreakers. They fill surfaces the rounds never reached, and each one is queued for a validation round in `open-design-crosswalk.md`. See [NOTICE.md](NOTICE.md) for credits.

## License

MIT. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
