import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const RouteFallback = () => (
  <div
    className="min-h-screen bg-[#070707] flex flex-col items-center justify-center gap-4 px-6 text-center"
    role="status"
    aria-live="polite"
    aria-label="Loading page"
  >
    <img
      src="/brand/absolute-salon-logo.webp"
      alt=""
      width="72"
      height="72"
      className="h-[72px] w-[72px] object-contain"
    />
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#D6B45C]/30 border-t-[#D6B45C]" />
    <p className="text-xs uppercase tracking-[0.24em] text-[#D6B45C]">
      Loading Absolute Salon
    </p>
  </div>
);

export function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;