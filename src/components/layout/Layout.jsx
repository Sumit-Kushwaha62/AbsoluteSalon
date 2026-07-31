import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp';
import { OfferPopupModal } from '../ui/OfferPopupModal';

/**
 * Layout Component
 * Shared application wrapper including Navbar, ScrollToTop, Footer, Floating WhatsApp,
 * Offer Popup Modal, and Framer Motion route transitions.
 */
export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-hidden max-w-full relative">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
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

export default Layout;
