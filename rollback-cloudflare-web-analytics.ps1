param(
    [string]$LayoutPath = ".\app\layout.tsx"
)

$ErrorActionPreference = "Stop"
$backup = "$LayoutPath.cloudflare-backup"

if (-not (Test-Path -LiteralPath $backup)) {
    throw "Backup not found: $backup"
}

Copy-Item -LiteralPath $backup -Destination $LayoutPath -Force
Write-Host "Restored $LayoutPath from backup."
