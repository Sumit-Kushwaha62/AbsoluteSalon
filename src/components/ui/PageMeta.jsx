import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_LOCALE, SITE_NAME, getRouteSeo } from '../../config/site';
import { getStructuredData } from '../../seo/structuredData';

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);

  if (!value) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    const [key, rawValue] = attribute.split('=');
    element.setAttribute(key, rawValue);
    element.dataset.seoManaged = 'true';
    document.head.appendChild(element);
  }

  element.setAttribute('content', value);
};

const setCanonical = (url) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!url) {
    canonical?.remove();
    return;
  }

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.dataset.seoManaged = 'true';
    document.head.appendChild(canonical);
  }

  canonical.href = url;
};

export const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(pathname);
    const schema = getStructuredData(pathname);

    document.title = seo.title;
    setMeta('meta[name="description"]', 'name=description', seo.description);
    setMeta('meta[name="robots"]', 'name=robots', seo.robots);
    setMeta('meta[property="og:type"]', 'property=og:type', seo.type || 'website');
    setMeta('meta[property="og:site_name"]', 'property=og:site_name', SITE_NAME);
    setMeta('meta[property="og:locale"]', 'property=og:locale', SITE_LOCALE);
    setMeta('meta[property="og:title"]', 'property=og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property=og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property=og:url', seo.canonical);
    setMeta('meta[property="og:image"]', 'property=og:image', seo.image);
    setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', seo.description);
    setMeta('meta[name="twitter:image"]', 'name=twitter:image', seo.image);
    setCanonical(seo.canonical);

    let schemaScript = document.getElementById('page-structured-data');
    if (!schema) {
      schemaScript?.remove();
      return;
    }

    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'page-structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, [pathname]);

  return null;
};
