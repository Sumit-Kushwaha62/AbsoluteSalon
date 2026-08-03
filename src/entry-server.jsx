import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import App from './App.jsx';
import { SEO_ROUTES, SITE_LOCALE, SITE_NAME, SITE_URL, getRouteSeo } from './config/site.js';
import { getStructuredData } from './seo/structuredData.js';

export const render = (url) => renderToString(
  <ThemeProvider>
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  </ThemeProvider>,
);

export { SEO_ROUTES, SITE_LOCALE, SITE_NAME, SITE_URL, getRouteSeo, getStructuredData };
