import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp';
import { OfferPopupModal } from '../ui/OfferPopupModal';
import { PageMeta } from '../ui/PageMeta';

/**
 * Layout Component
 * Shared application wrapper including Navbar, ScrollToTop, Footer, Floating WhatsApp,
 * Offer Popup Modal, and Framer Motion route transitions.
 */
export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-hidden max-w-full relative">
      <PageMeta />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-3 left-3 z-[100] rounded-lg bg-[var(--color-gold-accent)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#070707]"
      >
        Skip to main content
      </a>
      <Navbar />

      <main id="main-content" className="flex-1" tabIndex="-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <OfferPopupModal />
    </div>
  );
};
