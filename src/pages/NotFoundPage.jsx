import React from 'react';
import { motion } from 'framer-motion';
import { LuxuryButton } from '../components/ui/LuxuryButton';

export const NotFoundPage = () => {
  return (
    <>
      <section className="min-h-[75vh] flex items-center justify-center bg-[var(--color-bg-base)] bg-noise-overlay px-6 py-32 relative transition-colors duration-300">
        <div className="max-w-xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 card-editorial bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-[28px] w-full"
          >
            <span className="text-6xl sm:text-7xl font-serif-display text-[var(--color-gold-accent)] font-light block mb-2">
              404
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold block mb-4">
              PAGE NOT FOUND
            </span>
            <h1 className="font-serif-display text-3xl sm:text-4xl text-[var(--color-text-primary)] font-normal mb-4">
              Looking for Beauty?
            </h1>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-8">
              The page you are trying to reach does not exist or may have been moved. Return to our homepage or explore our signature services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <LuxuryButton to="/" variant="primary" className="w-full sm:w-auto text-center">
                Return to Home
              </LuxuryButton>
              <LuxuryButton to="/services" variant="secondary" className="w-full sm:w-auto text-center">
                View Services
              </LuxuryButton>
              <LuxuryButton to="/contact" variant="secondary" className="w-full sm:w-auto text-center">
                Contact Us
              </LuxuryButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
