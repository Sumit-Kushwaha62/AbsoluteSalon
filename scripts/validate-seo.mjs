import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const routes = [
  { path: '/', file: 'index.html', canonical: 'https://absolutesalonjabalpur.com/' },
  { path: '/about', file: 'about/index.html', canonical: 'https://absolutesalonjabalpur.com/about' },
  { path: '/services', file: 'services/index.html', canonical: 'https://absolutesalonjabalpur.com/services' },
  { path: '/gallery', file: 'gallery/index.html', canonical: 'https://absolutesalonjabalpur.com/gallery' },
  { path: '/contact', file: 'contact/index.html', canonical: 'https://absolutesalonjabalpur.com/contact' },
];

const failures = [];
const titles = new Set();

const titleFrom = (html) => {
  const start = html.indexOf('<title>');
  const end = html.indexOf('</title>');
  return start >= 0 && end > start ? html.slice(start + 7, end) : '';
};

for (const route of routes) {
  const html = await readFile(path.join(distDir, route.file), 'utf8');
  const title = titleFrom(html);

  if (!title) failures.push(`${route.path}: missing title`);
  if (titles.has(title)) failures.push(`${route.path}: duplicate title`);
  titles.add(title);

  if (!html.includes('<meta name="description" content="')) failures.push(`${route.path}: missing description`);
  if (!html.includes(`<link rel="canonical" href="${route.canonical}" />`)) failures.push(`${route.path}: incorrect canonical`);
  if (!html.includes('<meta property="og:title"')) failures.push(`${route.path}: missing Open Graph title`);
  if (!html.includes('<meta name="twitter:card" content="summary_large_image"')) failures.push(`${route.path}: missing Twitter card`);
  if (!html.includes('<meta name="robots" content="index, follow"')) failures.push(`${route.path}: incorrect robots directive`);
  if (!html.toLowerCase().includes('<h1')) failures.push(`${route.path}: missing H1`);
  if (!html.includes('id="page-structured-data"')) failures.push(`${route.path}: missing structured data`);
  if (route.path !== '/' && !html.includes('BreadcrumbList')) failures.push(`${route.path}: missing breadcrumb schema`);
  if (route.path === '/services' && !html.includes('OfferCatalog')) failures.push('/services: missing service catalog schema');
  if (route.path === '/contact') {
    if (!html.includes('Vijay Nagar Branch')) failures.push('/contact: Vijay Nagar details missing');
    if (!html.includes('Shastri Nagar Branch')) failures.push('/contact: Shastri Nagar details missing');
  }
}

const notFoundHtml = await readFile(path.join(distDir, '404.html'), 'utf8');
if (!notFoundHtml.includes('<meta name="robots" content="noindex, follow"')) failures.push('404: missing noindex, follow');
if (notFoundHtml.includes('<link rel="canonical"')) failures.push('404: must not have a canonical URL');

for (const requiredFile of [
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'apple-touch-icon.png',
  'brand/absolute-salon-logo-social.jpg',
]) {
  try {
    await access(path.join(distDir, requiredFile));
  } catch {
    failures.push(`Missing production asset: ${requiredFile}`);
  }
}

const sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
for (const route of routes) {
  if (!sitemap.includes(`<loc>${route.canonical}</loc>`)) failures.push(`Sitemap missing ${route.canonical}`);
}

const robots = await readFile(path.join(distDir, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap: https://absolutesalonjabalpur.com/sitemap.xml')) {
  failures.push('robots.txt has an incorrect sitemap URL');
}

const productionHtml = await Promise.all([
  ...routes.map((route) => readFile(path.join(distDir, route.file), 'utf8')),
  readFile(path.join(distDir, '404.html'), 'utf8'),
]);
const combinedHtml = productionHtml.join('\n');
if (['absolutesalon.in', 'localhost', '127.0.0.1'].some((value) => combinedHtml.includes(value))) {
  failures.push('Production HTML contains an old or local domain reference');
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Validated SEO output for ${routes.length} public routes plus the 404 document.`);
