import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const ssrDir = path.join(projectRoot, '.prerender');
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const serverEntry = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const renderHead = (seo, schema) => {
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="robots" content="${seo.robots}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${escapeHtml(serverEntry.SITE_NAME)}" />`,
    `<meta property="og:locale" content="${serverEntry.SITE_LOCALE}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    seo.canonical ? `<meta property="og:url" content="${seo.canonical}" />` : '',
    seo.image ? `<meta property="og:image" content="${seo.image}" />` : '',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    seo.image ? `<meta name="twitter:image" content="${seo.image}" />` : '',
    seo.canonical ? `<link rel="canonical" href="${seo.canonical}" />` : '',
    schema
      ? `<script id="page-structured-data" type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`
      : '',
  ];

  return tags.filter(Boolean).join('\n    ');
};

const pages = [
  ...serverEntry.SEO_ROUTES.map(({ path: routePath }) => ({ routePath })),
  { routePath: '/404', outputFile: path.join(distDir, '404.html') },
];

for (const page of pages) {
  const seo = serverEntry.getRouteSeo(page.routePath);
  const schema = serverEntry.getStructuredData(page.routePath);
  const appHtml = serverEntry.render(page.routePath);
  const html = template
    .replace('<!--seo-head-->', renderHead(seo, schema))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outputFile = page.outputFile || (
    page.routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, page.routePath.slice(1), 'index.html')
  );

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, html, 'utf8');
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...serverEntry.SEO_ROUTES.map(({ path: routePath }) => (
    `  <url><loc>${serverEntry.SITE_URL}${routePath === '/' ? '/' : routePath}</loc></url>`
  )),
  '</urlset>',
  '',
].join('\n');

await writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${pages.length} HTML documents and generated sitemap.xml.`);
