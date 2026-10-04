#!/usr/bin/env bash
# design-taste installer: detects installed agent harnesses and installs the skill where each one reads it.
# Works from a clone (./skills/design-taste) or from the extracted release zip.
#
# Usage: ./install.sh [--user|--project [DIR]] [--copy] [--only LIST] [--agents-md] [--dry-run] [--uninstall] [--yes]
#   --user         install for your user account (default)
#   --project DIR  install into DIR (default: current directory) instead of your home
#   --copy         copy files instead of symlinking (use on Windows/WSL mounts or if a harness ignores symlinks)
#   --only LIST    comma list of: claude,codex,gemini,opencode,hermes  (default: all detected)
#   --agents-md    also append the short always-on core block to each detected harness's global instruction file
#   --dry-run      print what would happen, change nothing
#   --uninstall    remove what this script installed
#   --yes          do not prompt
set -euo pipefail

NAME="design-taste"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$HERE/skills/$NAME"; [ -f "$SRC/SKILL.md" ] || SRC="$HERE/$NAME"; [ -f "$SRC/SKILL.md" ] || SRC="$HERE"
[ -f "$SRC/SKILL.md" ] || { echo "Cannot find $NAME/SKILL.md next to this script." >&2; exit 1; }
SNIPPET="$HERE/adapters/agents-md-snippet.md"

MODE=user; PROJECT_DIR=""; COPY=0; ONLY=""; AGENTS_MD=0; DRY=0; UNINSTALL=0; YES=0
while [ $# -gt 0 ]; do
  case "$1" in
    --user) MODE=user;;
    --project) MODE=project; if [ "${2:-}" ] && [ "${2#--}" = "$2" ]; then PROJECT_DIR="$2"; shift; fi;;
    --copy) COPY=1;; --only) ONLY="$2"; shift;; --agents-md) AGENTS_MD=1;;
    --dry-run) DRY=1;; --uninstall) UNINSTALL=1;; --yes|-y) YES=1;;
    -h|--help) sed -n '2,13p' "$0"; exit 0;;
    *) echo "Unknown option: $1" >&2; exit 2;;
  esac; shift
done
[ "$MODE" = project ] && PROJECT_DIR="$(cd "${PROJECT_DIR:-.}" && pwd)"

if [ "$MODE" = project ]; then
  CANON="$PROJECT_DIR/.agents/skills/$NAME"; CLAUDE_T="$PROJECT_DIR/.claude/skills/$NAME"
  HERMES_T="$PROJECT_DIR/.hermes/skills/$NAME"; OPENCODE_T="$PROJECT_DIR/.opencode/skills/$NAME"
else
  CANON="${AGENTS_SKILLS_DIR:-$HOME/.agents/skills}/$NAME"; CLAUDE_T="$HOME/.claude/skills/$NAME"
  HERMES_T="$HOME/.hermes/skills/$NAME"; OPENCODE_T="$HOME/.config/opencode/skills/$NAME"
fi

declare -a REPORT=()
say(){ printf '%s\n' "$*"; }
run(){ if [ "$DRY" = 1 ]; then printf "  [dry-run] %s\n" "$*" >&2; else "$@"; fi; }
want(){ [ -z "$ONLY" ] && return 0; case ",$ONLY," in *",$1,"*) return 0;; esac; return 1; }
have(){ command -v "$1" >/dev/null 2>&1 || [ -d "$2" ]; }
add(){ REPORT+=("$(printf '%-10s %-9s %s' "$1" "$2" "$3")"); }

same(){ [ -d "$1" ] && diff -rq "$SRC" "$1" >/dev/null 2>&1; }

place_copy(){ # $1 = target dir
  local t="$1"
  if same "$t"; then echo "up-to-date"; return; fi
  if [ -e "$t" ] || [ -L "$t" ]; then
    local b="$t.bak-$(date +%Y%m%d%H%M%S)"; run mv "$t" "$b"; run mkdir -p "$(dirname "$t")"; run cp -R "$SRC" "$t"; echo "updated (old kept at $b)"; return
  fi
  run mkdir -p "$(dirname "$t")"; run cp -R "$SRC" "$t"; echo "installed"
}
place_link(){ # $1 = target, points at canonical copy
  local t="$1"
  if [ "$COPY" = 1 ]; then place_copy "$t"; return; fi
  if [ -L "$t" ] && [ "$(readlink "$t")" = "$CANON" ]; then echo "up-to-date"; return; fi
  if [ -e "$t" ] || [ -L "$t" ]; then
    if same "$t"; then echo "up-to-date (copy)"; return; fi
    local b="$t.bak-$(date +%Y%m%d%H%M%S)"; run mv "$t" "$b"
  fi
  run mkdir -p "$(dirname "$t")"; run ln -s "$CANON" "$t"; echo "linked -> $CANON"
}
remove(){ local t="$1"; if [ -e "$t" ] || [ -L "$t" ]; then run rm -rf "$t"; echo "removed"; else echo "not present"; fi; }

START="<!-- design-taste:start -->"; END="<!-- design-taste:end -->"
agents_block(){ # $1 = instruction file
  local f="$1"; [ -f "$SNIPPET" ] || { echo "snippet missing"; return; }
  local body; body="$(sed "s#<SKILL_DIR>#$CANON#g" "$SNIPPET")"
  if [ "$DRY" = 1 ]; then echo "[dry-run] would write block to $f"; return; fi
  mkdir -p "$(dirname "$f")"; touch "$f"
  if grep -qF "$START" "$f"; then
    awk -v s="$START" -v e="$END" 'index($0,s){skip=1} !skip{print} index($0,e){skip=0}' "$f" > "$f.tmp" && mv "$f.tmp" "$f"
  fi
  printf '\n%s\n%s\n%s\n' "$START" "$body" "$END" >> "$f"; echo "always-on block written to $f"
}
agents_unblock(){ local f="$1"; [ -f "$f" ] && grep -qF "$START" "$f" || return 0
  [ "$DRY" = 1 ] && { echo "[dry-run] would strip block from $f"; return; }
  awk -v s="$START" -v e="$END" 'index($0,s){skip=1} !skip{print} index($0,e){skip=0}' "$f" > "$f.tmp" && mv "$f.tmp" "$f"; echo "block removed from $f"; }

if [ "$UNINSTALL" = 1 ]; then
  say "Uninstalling $NAME ($MODE)…"
  for t in "$CANON" "$CLAUDE_T" "$HERMES_T" "$OPENCODE_T"; do say "  $t: $(remove "$t")"; done
  for f in "$HOME/.codex/AGENTS.md" "$HOME/.config/opencode/AGENTS.md" "$HOME/.gemini/GEMINI.md"; do agents_unblock "$f" || true; done
  exit 0
fi

say "Installing $NAME ($MODE) from $SRC"
# Canonical copy: Codex, Gemini CLI and OpenCode read .agents/skills natively; Hermes can via skills.external_dirs.
r="$(place_copy "$CANON")"; add "canonical" "yes" "$CANON ($r)"

if want claude && { [ "$MODE" = project ] || have claude "$HOME/.claude"; }; then
  add "claude" "yes" "$CLAUDE_T ($(place_link "$CLAUDE_T"))"
else add "claude" "no" "not detected (re-run with --only claude to force)"; fi

for h in codex gemini; do
  d="$HOME/.$h"; if want "$h" && { [ "$MODE" = project ] || have "$h" "$d"; }; then
    add "$h" "yes" "reads $(dirname "$CANON") natively; restart the CLI"
  else add "$h" "no" "not detected"; fi
done

if want opencode && { [ "$MODE" = project ] || have opencode "$HOME/.config/opencode"; }; then
  add "opencode" "yes" "reads $(dirname "$CANON") natively (no extra copy, avoids duplicate same-name skills)"
else add "opencode" "no" "not detected"; fi

if want hermes && { [ "$MODE" = project ] || have hermes "$HOME/.hermes"; }; then
  add "hermes" "yes" "$HERMES_T ($(place_copy "$HERMES_T"))"
else add "hermes" "no" "not detected"; fi

if [ "$AGENTS_MD" = 1 ] && [ "$MODE" = user ]; then
  have codex "$HOME/.codex" && want codex && add "codex" "always-on" "$(agents_block "$HOME/.codex/AGENTS.md")"
  have opencode "$HOME/.config/opencode" && want opencode && add "opencode" "always-on" "$(agents_block "$HOME/.config/opencode/AGENTS.md")"
  have gemini "$HOME/.gemini" && want gemini && add "gemini" "always-on" "$(agents_block "$HOME/.gemini/GEMINI.md")"
elif [ "$AGENTS_MD" = 1 ]; then
  add "agents-md" "project" "$(agents_block "$PROJECT_DIR/AGENTS.md")"
fi

say ""; printf '%-10s %-9s %s\n' HARNESS INSTALLED DETAIL; for l in "${REPORT[@]}"; do say "$l"; done
for f in "$CANON/SKILL.md"; do
  if [ "$DRY" != 1 ]; then n="$(awk '/^name:/{gsub(/^name:[ ]*"?|"?[ ]*$/,"");print;exit}' "$f")"; [ "$n" = "$NAME" ] && say "
Verified: $f has name=$n" || say "WARNING: name in $f is '$n' (expected $NAME)"; fi
done
say "
Paperclip: not a file install. In your company's Skills page import the GitHub repo that hosts this package, then add '$NAME' to the agents that do design work (see INSTALL.md)."
say "Claude apps (claude.ai / desktop): upload design-taste-skill.zip under Settings → Capabilities → Skills."
