# design-taste

Anthony Tackett's design prescription, packaged as one universal agent skill. It teaches an AI agent how he designs and critiques: composition, typography, color, motion, tone, imagery, interface, data and his dealbreakers, written as relationships rather than fixed values so it works at any size, format or brand.

Works in **Claude Code and Claude apps, OpenAI Codex CLI, Gemini CLI, OpenCode, Hermes Agent and Paperclip**, and in any other agent through a paste-in prompt. It follows the open Agent Skills layout (a folder with `SKILL.md` plus `references/`) and contains no agent-specific syntax.

## Install

```bash
git clone https://github.com/altextreme/Design-Taste.git
cd Design-Taste
./install.sh --dry-run   # preview
./install.sh             # detect installed harnesses and install
```

Windows: `install.ps1`. Per-harness steps, Paperclip import, plugin routes and troubleshooting are in [INSTALL.md](INSTALL.md).

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

**Validated** rules come from his side-by-side comparison rounds and always win. **Imported** rules (tagged `OD`) come from an analysis of the open-source [Open Design](https://github.com/nexu-io/open-design) project, filtered so nothing violates his dealbreakers. They fill surfaces the rounds never reached, and each one is queued for a validation round in `open-design-crosswalk.md`. See [NOTICE.md](NOTICE.md) for credits.

## License

MIT. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).

## Maintaining it (in the source project)

`DESIGN_TASTE.md` is the source of truth for validated rules. After any refinement round run `scripts/sync-skill.sh`: it regenerates `principles/*.md` and `evidence.md`, validates the skill (name equals folder, description length, line limits, link integrity), builds the adapters, and writes `dist/design-taste-skill.zip` (Claude apps) and `dist/design-taste-universal.zip` (everything).
