# design-taste installer for Windows (copy-only; symlinks need elevated rights).
# Usage: powershell -ExecutionPolicy Bypass -File install.ps1 [-Project <dir>] [-DryRun] [-Uninstall]
param([string]$Project = "", [switch]$DryRun, [switch]$Uninstall)
$ErrorActionPreference = "Stop"
$name = "design-taste"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$src = Join-Path $here "skills\$name"
if (-not (Test-Path (Join-Path $src "SKILL.md"))) { $src = Join-Path $here $name }
if (-not (Test-Path (Join-Path $src "SKILL.md"))) { throw "Cannot find $name\SKILL.md next to this script." }
$base = if ($Project) { (Resolve-Path $Project).Path } else { $env:USERPROFILE }
$targets = @(
  (Join-Path $base ".agents\skills\$name"),   # Codex, Gemini CLI, OpenCode
  (Join-Path $base ".claude\skills\$name")    # Claude Code
)
if (-not $Project -and (Test-Path (Join-Path $env:USERPROFILE ".hermes"))) { $targets += (Join-Path $env:USERPROFILE ".hermes\skills\$name") }
foreach ($t in $targets) {
  if ($Uninstall) { if (Test-Path $t) { Write-Host "remove $t"; if (-not $DryRun) { Remove-Item -Recurse -Force $t } }; continue }
  if (Test-Path $t) { $b = "$t.bak-$(Get-Date -Format yyyyMMddHHmmss)"; Write-Host "backup $t -> $b"; if (-not $DryRun) { Move-Item $t $b } }
  Write-Host "install $t"
  if (-not $DryRun) { New-Item -ItemType Directory -Force -Path (Split-Path $t) | Out-Null; Copy-Item -Recurse $src $t }
}
Write-Host "Done. Restart your agent CLI. Paperclip: import the GitHub repo from its Skills page (see INSTALL.md)."
