# Absolute Salon SEO Audit

## Production Domain

https://absolutesalonjabalpur.com

## Initial Issues Found

- The React SPA shipped one empty root document and relied on JavaScript for route content.
- Route metadata only changed the title and description, leaving canonical, Open Graph, Twitter and robots tags stale after client navigation.
- The services schema referenced the obsolete domain `https://absolutesalon.in/services`.
- The global schema represented only one branch and used a 510-review value while centralized data contained 532 total reviews and a separate label said 530+.
- Service schema coerced “starting from” price text into exact numeric offers, which could misrepresent conditional pricing.
- The Vijay Nagar map embed contained placeholder-style coordinates and place identifiers instead of a repository-backed address query.
- The SPA catch-all returned the home shell with HTTP 200 for unknown URLs, creating an indexable soft-404 risk.
- No production `robots.txt` or generated XML sitemap existed.
- Footer branch details were duplicated as hard-coded strings instead of using centralized business data.
- Service featured-image paths contained spaces and referenced missing paths.
- Gallery cards were clickable non-semantic containers, comparison controls lacked slider semantics, and dialogs did not manage initial focus or expose dialog semantics.
- Reduced-motion handling did not cover global animations or autoplay reels.
- Stable media names received one-year immutable caching, increasing stale-media risk after replacement.
- Netlify and Vercel were both described as production targets, creating deployment ambiguity.

## Fixes Implemented

- Added one canonical site/route configuration in `src/config/site.js`.
- Added a Vite-compatible server render and build-time prerender pipeline without an outdated prerender dependency.
- Generated route-specific HTML for `/`, `/about`, `/services`, `/gallery`, `/contact` and a noindex 404 document.
- Upgraded client navigation metadata synchronization for title, description, canonical, robots, Open Graph, Twitter and JSON-LD.
- Added automated sitemap generation, `robots.txt`, SEO output validation and active media-reference validation.
- Consolidated footer NAP details around `BRANCHES` and corrected invalid service media paths.
- Replaced the unverified Vijay Nagar coordinate embed with an address-based map query.
- Added semantic gallery buttons, modal/lightbox focus restoration, Escape handling, dialog roles, a skip link, focus-visible styling and comparison-slider ARIA.
- Deferred below-the-fold videos, paused off-screen playback, respected reduced-motion preferences and removed competing logo preload pressure from the hero image.
- Hardened Netlify redirects, caching and security headers, and documented Netlify as the only authoritative production target.

## Structured Data

The route JSON-LD graph uses stable canonical `@id` values and contains:

- `Organization`
- `WebSite`
- `WebPage`
- two separate `BeautySalon` entities for Vijay Nagar and Shastri Nagar
- `BreadcrumbList` on secondary routes
- `OfferCatalog` with repository-backed `Service` entries on `/services`

Branch addresses, phones, email, social/map profiles and ratings come from centralized repository data. Numeric service prices were deliberately omitted from JSON-LD because the visible catalogue includes starting prices, variants and conditional pricing. Opening-hours schema was also omitted because the repository does not contain a complete day-by-day schedule and the Shastri Nagar value provides only an opening time.

## Technical SEO

- Every public route has a unique title, description and canonical URL.
- Open Graph and Twitter large-image cards use the verified 1200×630 social image.
- Public routes are `index, follow`; the generated 404 is `noindex, follow` and has no canonical tag.
- `robots.txt` allows public crawling and references the canonical sitemap.
- `sitemap.xml` is generated from the same route configuration used by the app.
- Important routes expose meaningful server-rendered HTML and metadata before JavaScript executes, then hydrate into the existing SPA.
- Navbar, footer and CTAs use crawlable links for core internal routes.

## Local SEO

Both branches are modeled separately and connected to the parent organization. Footer, contact content and structured data use the centralized branch records. Local wording naturally describes Absolute Salon’s bridal makeup, hair, skin, nail and beauty services in Vijay Nagar, Shastri Nagar and Jabalpur without creating fake location pages.

The initial 510/530+/532 review-count conflict was consolidated to the centralized total of 532, which equals the two repository branch counts. No reviews, coordinates, awards or business claims were invented.

## Performance

- The hero remains the sole high-priority image preload and has explicit intrinsic dimensions.
- Below-the-fold video sources are attached near the viewport, use posters and avoid eager preload.
- Off-screen reels pause automatically; reduced-motion users do not receive autoplay and can use controls.
- Google Maps frames retain native lazy loading.
- Stable layout containers and explicit image dimensions reduce CLS risk.
- Hashed Vite assets are cached immutably; stable public media uses shorter cache periods.
- Global reduced-motion CSS removes expensive animation for users who request it.

The minified application bundle remains slightly above Vite’s 500 kB advisory threshold. It is gzip-compressed to approximately 155 kB. Aggressive route splitting was not forced because the shared animated home sections and SSR hydration path would need a larger architectural change and current media/network optimizations provide the safer production improvement.

## Netlify

Netlify builds with `npm run build` and publishes `dist`. Static prerendered route directories handle direct navigation and refreshes. The final fallback serves `404.html` with status 404. Host-specific redirects normalize HTTP and www requests to `https://absolutesalonjabalpur.com` without redirecting the canonical HTTPS host to itself.

Security headers include HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and a conservative `Permissions-Policy`. No untested CSP was added, so Google Maps, Google Fonts, WhatsApp and social links remain functional.

## Remaining Manual Actions

- Import/push the repository to Netlify and add the production custom domain.
- Configure the exact DNS records Netlify displays for the site.
- Verify the Netlify HTTPS certificate and primary-domain/www redirect settings.
- Verify the domain in Google Search Console and Bing Webmaster Tools, then submit the sitemap.
- Update both Google Business Profile website fields to the canonical production URL where applicable.
