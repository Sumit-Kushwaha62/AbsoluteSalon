# Absolute Salon

Production website for Absolute Salon, Vijay Nagar, Jabalpur. Built with React, Vite, Tailwind CSS, React Router, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deployment

- Netlify: `netlify.toml` defines the build command, SPA routing, security headers, and long-lived media caching.
- Vercel: `vercel.json` defines SPA rewrites and immutable asset/media caching.
- Build command: `npm run build`
- Publish directory: `dist`

No runtime environment variables are required.