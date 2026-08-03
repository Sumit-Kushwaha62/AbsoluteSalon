# Absolute Salon

Production website for Absolute Salon’s Vijay Nagar and Shastri Nagar branches in Jabalpur. Built with React 19, Vite, Tailwind CSS, React Router and Framer Motion.

## Local development

```bash
npm ci
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
npm run validate:seo
npm run validate:assets
```

`npm run build` creates the client bundle, renders crawlable static HTML for every public route, generates `sitemap.xml`, and writes the production output to `dist/`.

## Production deployment

Netlify is the authoritative production platform.

- Build command: `npm run build`
- Publish directory: `dist`
- Primary domain: `absolutesalonjabalpur.com`
- Canonical URL: `https://absolutesalonjabalpur.com`
- Route strategy: prerendered route directories with a static `404.html`

See [DEPLOYMENT.md](DEPLOYMENT.md) for custom-domain, DNS, HTTPS, route and search-engine setup. See [SEO_AUDIT.md](SEO_AUDIT.md) for the implemented technical audit.

No runtime environment variables or analytics identifiers are currently required. Add a real GA4 or Google Tag Manager identifier only when one is supplied; do not add placeholder tracking IDs.
