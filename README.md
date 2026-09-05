# DeepScan Showcase Website

The marketing/download site for [DeepScan](https://github.com/izaan-cell/DeepScan) — a
free, fully local AI search app. This repo is intentionally separate from the app itself:
it's a plain static site (no build step, no framework) deployed to Vercel, while the actual
app (Rust + Go + Java) is downloaded and runs entirely on the user's own machine.

## Pages

- `index.html` — home page
- `download.html` — served at `/download` (see `vercel.json`'s `cleanUrls`); links directly
  to the latest `DeepScan.dmg` / `DeepScan.msi` from the app repo's GitHub Releases

## Deploying

Import this repo into Vercel as-is — no root directory or build command needed, it's
already a static site at the repo root. Point your domain's DNS/subdomain at the Vercel
project once imported.
