# Absolute Salon Deployment

## Netlify Custom Domain Setup

1. Push this repository to its remote and import it into Netlify.
2. Confirm the build command is `npm run build`.
3. Confirm the publish directory is `dist`.
4. Add the custom domain `absolutesalonjabalpur.com`.
5. Add `www.absolutesalonjabalpur.com` as a domain alias if desired.
6. Set `absolutesalonjabalpur.com` as the Netlify Primary domain.
7. Configure DNS using only the records displayed by Netlify for this specific site/domain, or use Netlify DNS. Do not use guessed IP addresses.
8. Wait for Netlify to verify the DNS configuration.
9. Enable or verify the Netlify HTTPS certificate.
10. Confirm that HTTPS is forced for the production domain.
11. Verify that `www.absolutesalonjabalpur.com` redirects to the non-www primary domain.
12. Test direct requests and browser refreshes for `/`, `/about`, `/services`, `/gallery` and `/contact`.
13. Verify `https://absolutesalonjabalpur.com/robots.txt`.
14. Verify `https://absolutesalonjabalpur.com/sitemap.xml`.
15. Inspect every core route and confirm its canonical URL uses the non-www HTTPS domain.

Netlify domain management supplies the current DNS values and certificate status. The repository intentionally does not hard-code DNS IP addresses.

## Post-deployment checks

- Confirm an unknown URL returns the rendered 404 document with an HTTP 404 status.
- Confirm hashed files under `/assets/` have immutable caching while HTML is revalidated normally.
- Confirm images, gallery files, videos, maps, WhatsApp links and telephone links work.
- Confirm both light and dark themes work after a hard refresh.
- Run a mobile and desktop Lighthouse check against the production domain.

## Google Search Console

1. Add and verify a Domain property for `absolutesalonjabalpur.com`.
2. Confirm Google selects the HTTPS, non-www canonical domain.
3. Submit `https://absolutesalonjabalpur.com/sitemap.xml`.
4. Request indexing for `/`, `/about`, `/services`, `/gallery` and `/contact`.
5. Inspect the declared and selected canonical for each route.
6. Monitor Page Indexing, Core Web Vitals and structured-data Enhancements.

## Bing Webmaster Tools

Add or import the property and submit `https://absolutesalonjabalpur.com/sitemap.xml`.

## Google Business Profile

After deployment, set the website URL to `https://absolutesalonjabalpur.com/` on both branch profiles where applicable. This is an external account action and is not changed by the website build.

## Optional analytics

No analytics ID is committed. When a real GA4 measurement ID or Google Tag Manager container is supplied, add it through a documented environment-aware integration and review consent, privacy and performance impact before enabling it.
