# MemoryFrame deployment notes

MemoryFrame is a Vite app, so it must be built before it is deployed.

## Vercel / Netlify

Use these settings:

- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20.19.0` or newer

## GitHub Pages

Do not deploy the repository root directly as a static site. The root `index.html` references Vite source files and needs Vite's build step first.

Use the included manual workflow:

1. Go to GitHub Actions.
2. Run **Deploy GitHub Pages** manually.
3. In repository settings, set Pages source to **GitHub Actions**.

The Vite config uses relative built asset paths so the same production build works from a root domain or a subpath such as `/MemoryFrame_app/`.

## Blank page checklist

If the site is blank:

1. Confirm the deployment output directory is `dist`.
2. Confirm the build command is `npm run build`.
3. Confirm Node is `20.19.0` or newer.
4. Open the browser console for runtime errors.
5. Confirm the latest main branch commit has redeployed.
