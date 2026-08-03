import { BRANCHES, BUSINESS_INFO } from '../data/business';
import { SERVICE_CATEGORIES } from '../data/services';
import {
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE_URL,
  getRouteSeo,
} from '../config/site';

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

const postalAddress = (branch) => ({
  '@type': 'PostalAddress',
  streetAddress: branch.address.street,
  addressLocality: branch.address.city,
  addressRegion: branch.address.state,
  postalCode: branch.address.pincode,
  addressCountry: 'IN',
});

const rating = (value) => ({
  '@type': 'AggregateRating',
  ratingValue: value.score,
  reviewCount: value.reviewsCount,
});

const organization = {
  '@type': 'Organization',
  '@id': organizationId,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: SOCIAL_IMAGE_URL,
  },
  image: SOCIAL_IMAGE_URL,
  email: BUSINESS_INFO.email.address,
  telephone: BUSINESS_INFO.phone.raw,
  sameAs: [
    BUSINESS_INFO.socials.instagram.url,
    BUSINESS_INFO.socials.facebook.url,
  ],
  aggregateRating: rating(BUSINESS_INFO.rating),
};

const branchEntities = BRANCHES.map((branch) => ({
  '@type': 'BeautySalon',
  '@id': `${SITE_URL}/#${branch.id}`,
  name: `${SITE_NAME} – ${branch.shortName}`,
  url: `${SITE_URL}/contact#${branch.id}`,
  image: SOCIAL_IMAGE_URL,
  telephone: branch.phone.raw,
  email: branch.email.address,
  address: postalAddress(branch),
  areaServed: {
    '@type': 'City',
    name: branch.address.city,
  },
  parentOrganization: { '@id': organizationId },
  sameAs: [branch.googleMaps.url, BUSINESS_INFO.socials.instagram.url],
  aggregateRating: rating(branch.rating),
}));

const serviceCatalog = {
  '@type': 'OfferCatalog',
  '@id': `${SITE_URL}/services#catalog`,
  name: 'Absolute Salon Services',
  url: `${SITE_URL}/services`,
  itemListElement: SERVICE_CATEGORIES.map((category) => ({
    '@type': 'OfferCatalog',
    name: category.name,
    description: category.description,
    itemListElement: category.items.map((item) => ({
      '@type': 'Service',
      name: item.name,
      description: item.shortDescription || category.description,
      provider: { '@id': organizationId },
      areaServed: 'Jabalpur, Madhya Pradesh',
    })),
  })),
};

const breadcrumbFor = (seo) => ({
  '@type': 'BreadcrumbList',
  '@id': `${seo.canonical}#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: seo.label,
      item: seo.canonical,
    },
  ],
});

export const getStructuredData = (pathname = '/') => {
  const seo = getRouteSeo(pathname);
  if (!seo.canonical) return null;

  const webPageId = `${seo.canonical}#webpage`;
  const graph = [
    organization,
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'en-IN',
      publisher: { '@id': organizationId },
    },
    ...branchEntities,
    {
      '@type': 'WebPage',
      '@id': webPageId,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      inLanguage: SITE_LOCALE.replace('_', '-'),
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: SOCIAL_IMAGE_URL,
      },
      ...(seo.path !== '/' ? { breadcrumb: { '@id': `${seo.canonical}#breadcrumb` } } : {}),
    },
  ];

  if (seo.path !== '/') graph.push(breadcrumbFor(seo));
  if (seo.path === '/services') graph.push(serviceCatalog);

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
