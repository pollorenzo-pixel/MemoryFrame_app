# MemoryFrame

MemoryFrame is a launchable website-app MVP for turning meaningful photos into personal, print-ready art. It combines a concise marketing site with a complete mocked creation flow.

## Run locally

```bash
npm install
npm run dev
```

Build the production bundle with `npm run build`.

## Included

- Landing page with product positioning, use cases, how it works, and pricing preview
- Local JPG, PNG, and WebP upload with validation and browser-only preview
- Eight selectable art styles
- Mock generation state and result preview
- Mock digital download, print selection, and checkout confirmation
- Responsive, accessible, gallery-inspired styling

All functionality is mocked. No images are uploaded, no API keys are required, and no payment or order is created.

## Structure

```text
src/
  App.jsx
  main.jsx
  components/
  data/
  services/
  styles/
```

## Future integrations

- OpenAI image API for image transformation
- Stripe Checkout for digital downloads and print orders
- Supabase for accounts, order records, and storage metadata
- Cloudinary or Supabase Storage for image assets
- A print-on-demand fulfillment API for posters, canvas, and framed prints
