param(
    [string]$LayoutPath = ".\app\layout.tsx"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $LayoutPath)) {
    throw "Could not find $LayoutPath. Run this script from the ProjxonNext repo root."
}

$content = Get-Content -LiteralPath $LayoutPath -Raw

$token = "a1f391224ba64f9cadf733676e95a463"

if ($content -match [regex]::Escape($token)) {
    Write-Host "Cloudflare Web Analytics beacon is already present. No changes made."
    exit 0
}

if ($content -notmatch '</body>') {
    throw "Could not find </body> in $LayoutPath. No changes made."
}

$backup = "$LayoutPath.cloudflare-backup"
Copy-Item -LiteralPath $LayoutPath -Destination $backup -Force

$beacon = @'
      {/* Cloudflare Web Analytics */}
      <script
        type="module"
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token":"a1f391224ba64f9cadf733676e95a463"}'
      ></script>
'@

$content = $content -replace '(?s)(\s*</body>)', "`r`n$beacon`$1"
Set-Content -LiteralPath $LayoutPath -Value $content -Encoding UTF8

Write-Host "Cloudflare Web Analytics beacon added to $LayoutPath"
Write-Host "Backup created at $backup"
Write-Host "Next: run npm run build"
