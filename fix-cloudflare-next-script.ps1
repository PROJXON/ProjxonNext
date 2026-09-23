param(
    [string]$LayoutPath = ".\app\layout.tsx"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $LayoutPath)) {
    throw "Could not find $LayoutPath. Run this script from the ProjxonNext repo root."
}

$content = Get-Content -LiteralPath $LayoutPath -Raw

# Add Next.js Script import if missing.
if ($content -notmatch "from ['""]next/script['""]") {
    $content = "import Script from 'next/script';`r`n" + $content
}

# Replace the raw Cloudflare script block added by the previous patch.
$pattern = '(?s)\s*\{/\* Cloudflare Web Analytics \*/\}\s*<script\s+type="module"\s+src="https://static\.cloudflareinsights\.com/beacon\.min\.js"\s+data-cf-beacon=''\{"token":"a1f391224ba64f9cadf733676e95a463"\}''\s*></script>'

$replacement = @'
      {/* Cloudflare Web Analytics */}
      <Script
        id="cloudflare-web-analytics"
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
        data-cf-beacon='{"token":"a1f391224ba64f9cadf733676e95a463"}'
      />
'@

$newContent = [regex]::Replace($content, $pattern, "`r`n$replacement", 1)

if ($newContent -eq $content) {
    # Fallback: replace any Cloudflare beacon script with the Next Script component.
    $fallback = '(?s)<script[^>]*src="https://static\.cloudflareinsights\.com/beacon\.min\.js"[^>]*></script>'
    $newContent = [regex]::Replace($content, $fallback, $replacement, 1)
}

if ($newContent -eq $content) {
    throw "Could not find the Cloudflare raw <script> block to replace."
}

Set-Content -LiteralPath $LayoutPath -Value $newContent -Encoding UTF8
Write-Host "Replaced raw Cloudflare script with next/script in $LayoutPath"
Write-Host "Next: npm run build"
