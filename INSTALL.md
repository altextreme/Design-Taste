# Installing design-taste

Get it first:

```bash
git clone https://github.com/altextreme/Design-Taste.git
cd Design-Taste
```

One skill folder (`skills/design-taste/`) works in every harness below, because all of them read the open Agent Skills layout: a folder containing `SKILL.md` with `name` and `description` frontmatter, plus optional `references/`. Nothing in the skill is tied to a specific agent product.

**Fastest path (macOS, Linux, WSL):**

```bash
./install.sh --dry-run     # see what it will do
./install.sh               # install for your user, for every harness it detects
./install.sh --agents-md   # optional: also add a short always-on core block to each harness's global instructions
```

On Windows: `powershell -ExecutionPolicy Bypass -File install.ps1`.

The installer puts one canonical copy in `~/.agents/skills/design-taste` (read natively by Codex, Gemini CLI and OpenCode), links it into `~/.claude/skills/` for Claude Code, and copies it into `~/.hermes/skills/` for Hermes. Existing copies are backed up, never overwritten. `--project [DIR]` installs into a repo instead of your home folder; `--copy` avoids symlinks; `--uninstall` removes everything it placed.

## Per-harness manual steps

Verified against each harness's published docs on 2026-10-04. Paths and commands change between releases; if one fails, check that harness's skills page (linked at the bottom).

| Harness | Install (user scope) | Project scope | Verify |
|---|---|---|---|
| **Claude Code** | `cp -R skills/design-taste ~/.claude/skills/` | `.claude/skills/design-taste/` | Ask "what design skills do you have?" or run `/design-taste` |
| **Claude apps** (claude.ai, desktop) | Upload `design-taste-skill.zip` under Settings → Capabilities → Skills | n/a | Skill appears in the list; toggle on |
| **OpenAI Codex CLI** | `cp -R skills/design-taste ~/.agents/skills/` then restart Codex. Or use its skill installer with the GitHub folder URL | `.agents/skills/design-taste/` in the repo | `/skills` |
| **Gemini CLI** | `gemini skills install https://github.com/altextreme/Design-Taste --path skills/design-taste --consent`, or copy to `~/.agents/skills/` or `~/.gemini/skills/` | `.gemini/skills/` or `.agents/skills/` | `/skills list` |
| **OpenCode** | Copy to `~/.config/opencode/skills/design-taste`. It also reads `~/.agents/skills` and `~/.claude/skills`, so the installer adds no extra copy there | `.opencode/skills/` (or `.agents/skills/`) | The `skill` tool lists `design-taste` |
| **Hermes Agent** | `hermes skills install altextreme/Design-Taste/skills/design-taste` (keeps `references/`), or copy to `~/.hermes/skills/design-taste`, or add `~/.agents/skills` to `skills.external_dirs` in `config.yaml` | `.hermes/skills/` or `.agents/skills/` | `hermes skills list`, then start a new session |
| **Paperclip** | Not a file install. Paperclip is a control plane that hands skills to the agents it runs. Import `altextreme/Design-Taste` from the company Skills page (pin a tag), then add `design-taste` to each design-capable agent's skills | n/a | The agent's skill list shows it; the underlying runtime (Claude, Codex, Gemini, OpenCode, Hermes) does the loading |

### Make it always-on (optional)
Skills load when a task matches their description. In harnesses where that triggering is weaker, add the short core block (tenets, non-negotiables, dealbreakers, about 4 KB) to the global instruction file. `./install.sh --agents-md` does this idempotently between `<!-- design-taste:start -->` and `<!-- design-taste:end -->` markers in `~/.codex/AGENTS.md`, `~/.config/opencode/AGENTS.md` and `~/.gemini/GEMINI.md`. Hermes loads only one project context file (`.hermes.md` > `AGENTS.md` > `CLAUDE.md`), so append the block there by hand if you want it.

### Cursor, Copilot, Windsurf, Cline, Zed, Aider, Kiro and other tools
Verified against each tool's current docs on 2026-10-07. Most of these now read the open Agent Skills layout themselves, so the skill folder is the right thing to install. The canonical `~/.agents/skills/design-taste` that `install.sh` creates is read natively by **Cursor, VS Code / GitHub Copilot, JetBrains Junie, Roo Code, Codex, Gemini CLI and OpenCode** (project scope: `.agents/skills/`). Goose reads `.agents/skills/` per project.

| Tool | Skill folder | Always-on instructions |
|---|---|---|
| **Cursor** | `.agents/skills/` or `.cursor/skills/` (also `~/`) | `AGENTS.md`, or `.cursor/rules/*.mdc` with `alwaysApply: true` |
| **VS Code / GitHub Copilot** | `.github/skills/`, `.agents/skills/` or `.claude/skills/` (user: `~/.copilot/skills/`, `~/.agents/skills/`); no setting needed | `AGENTS.md` or `.github/copilot-instructions.md` |
| **Windsurf** | `.windsurf/skills/` (user: `~/.codeium/windsurf/skills/`); `install.sh` handles it | `AGENTS.md` (root, always on), or `.devin/rules/` / `.windsurf/rules/` with `trigger: always_on`. Limits: 12,000 characters per rule file, 6,000 for the global file |
| **Cline** | not documented | `AGENTS.md`, or `.clinerules/` / `.cline/rules/` |
| **Roo Code** | `.roo/skills/` or `.agents/skills/` (also `~/`) | `.roo/rules/` or `AGENTS.md` |
| **JetBrains Junie** | `.junie/skills/` or `.agents/skills/` (also `~/`) | `AGENTS.md` |
| **Kiro** | `.kiro/skills/` (user: `~/.kiro/skills/`); `install.sh` handles it | `.kiro/steering/` |
| **Zed** | not documented | `.rules` first, then `AGENTS.md` (Zed loads only the first match, so put the block in `.rules` if one exists) |
| **Aider** | no skill support | `CONVENTIONS.md`, loaded with `aider --read CONVENTIONS.md` or `read: CONVENTIONS.md` in `.aider.conf.yml` |

`./install.sh --project --agents-md` writes the always-on core block into `AGENTS.md`, plus `CONVENTIONS.md` if the project uses Aider and `.rules` if it uses Zed. Not confirmed in the 2026-10-07 check, so treat as likely but unverified and not automated: Goose's user-level folder, Amp's folders, Roo's `.roo/rules/`, Junie reading `AGENTS.md`, and Kiro's `.kiro/steering/`.

### Any other agent or model
- **Can read files:** point it at `skills/design-taste/SKILL.md` and say "read references/index.md and the matching reference file before you design."
- **Cannot read files / no skill support:** paste `adapters/paste-in-prompt.md` into the system prompt (≈20 KB). Attach `adapters/design-taste.full.md` (≈250 KB) if the model has a large context or you use retrieval.

## Claude Code plugin route (optional)
This repo also carries `.claude-plugin/plugin.json` and `marketplace.json`, so `/plugin marketplace add altextreme/Design-Taste` followed by `/plugin install design-taste@design-taste` works. Tested on 2026-10-07 with Claude Code 2.1.285: the marketplace added, the plugin installed (v2.0.0, user scope, enabled) and the skill landed in the plugin cache. The CLI equivalents are `claude plugin marketplace add altextreme/Design-Taste` and `claude plugin install design-taste@design-taste`. The plain folder copy above also works. A `gemini-extension.json` at the repo root lets `gemini extensions install https://github.com/altextreme/Design-Taste` pick up the same `skills/` folder.

## Troubleshooting
- **Skill not picked up:** restart the CLI (Codex, Gemini and Hermes read skills at session start). Confirm `SKILL.md` sits directly inside a folder named `design-taste`.
- **Same skill listed twice:** a harness found it through two roots (for example `~/.claude/skills` and `~/.agents/skills`). Remove one; behavior with duplicate names is not documented for OpenCode or Hermes.
- **Symlink ignored:** reinstall with `--copy`.
- **References not loading in a single-file install:** the harness only got `SKILL.md`. Use `adapters/design-taste.full.md` or install the whole folder.

## Sources
Agent Skills spec <https://agentskills.io/specification> · Claude Code <https://code.claude.com/docs/en/skills> · Codex <https://developers.openai.com/codex/skills> · Gemini CLI <https://geminicli.com/docs/cli/skills/> · OpenCode <https://opencode.ai/docs/skills> · Hermes <https://hermes-agent.nousresearch.com/docs/user-guide/features/skills> · Paperclip <https://docs.paperclip.ing/reference/skills/>
