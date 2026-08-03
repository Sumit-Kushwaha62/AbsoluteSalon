export const SITE_URL = 'https://absolutesalonjabalpur.com';
export const SITE_NAME = 'Absolute Salon';
export const SITE_LOCALE = 'en_IN';
export const PRIMARY_CITY = 'Jabalpur';
export const SOCIAL_IMAGE_PATH = '/brand/absolute-salon-logo-social.jpg';
export const SOCIAL_IMAGE_URL = `${SITE_URL}${SOCIAL_IMAGE_PATH}`;

export const SEO_ROUTES = [
  {
    path: '/',
    label: 'Home',
    title: 'Absolute Salon Jabalpur | Hair, Beauty & Bridal Makeup',
    description: 'Discover bridal makeup, professional hair, skin, nail and beauty services at Absolute Salon in Vijay Nagar and Shastri Nagar, Jabalpur.',
  },
  {
    path: '/about',
    label: 'About',
    title: 'About Absolute Salon | Beauty Artistry in Jabalpur',
    description: 'Learn about Absolute Salon’s 15+ years of beauty artistry, salon philosophy and luxury client experience in Jabalpur, Madhya Pradesh.',
  },
  {
    path: '/services',
    label: 'Services',
    title: 'Salon Services & Prices | Absolute Salon Jabalpur',
    description: 'Explore transparent prices for bridal makeup, haircuts, hair colour, skin care, facials, nails and salon services at Absolute Salon Jabalpur.',
  },
  {
    path: '/gallery',
    label: 'Gallery',
    title: 'Bridal Makeup & Hair Gallery | Absolute Salon Jabalpur',
    description: 'View real bridal makeup, engagement, party makeup and hair styling work by Absolute Salon’s beauty artists in Jabalpur.',
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Contact Absolute Salon Jabalpur | Both Branches',
    description: 'Find addresses, phone numbers, opening information and directions for Absolute Salon’s Vijay Nagar and Shastri Nagar branches in Jabalpur.',
  },
];

export const NOT_FOUND_SEO = {
  path: null,
  label: 'Page Not Found',
  title: 'Page Not Found | Absolute Salon Jabalpur',
  description: 'The requested page could not be found. Explore Absolute Salon services, gallery and contact information.',
  robots: 'noindex, follow',
};

export const normalizePathname = (pathname = '/') => {
  const cleanPath = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return cleanPath || '/';
};

export const getRouteSeo = (pathname = '/') => {
  const normalizedPath = normalizePathname(pathname);
  const route = SEO_ROUTES.find((item) => item.path === normalizedPath);

  if (!route) return NOT_FOUND_SEO;

  return {
    ...route,
    canonical: `${SITE_URL}${route.path === '/' ? '/' : route.path}`,
    image: SOCIAL_IMAGE_URL,
    robots: 'index, follow',
    type: 'website',
  };
};
