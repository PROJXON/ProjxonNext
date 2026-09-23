Projxon Cloudflare Web Analytics Next.js fix

Run from the ProjxonNext repo root:

powershell -ExecutionPolicy Bypass -File .\fix-cloudflare-next-script.ps1
npm run build

If build passes:
git add app/layout.tsx
git commit -m "Fix Cloudflare Web Analytics script loading"
git push
