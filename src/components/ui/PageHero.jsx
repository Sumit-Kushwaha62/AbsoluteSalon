import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageHero Component
 * Reusable inner page header component matching Absolute Salon's luxury visual identity.
 */
export const PageHero = ({ eyebrow = "ABSOLUTE SALON JABALPUR", title, description, children }) => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-[var(--color-bg-base)] border-b border-[var(--color-border-medium)] overflow-hidden transition-colors duration-300">
      {/* Background Subtle Gradient & Radial Overlay */}
      <div className="absolute inset-0 bg-noise-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-gold-accent)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center max-w-3xl mx-auto"
        >
          {eyebrow && (
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3">
              {eyebrow}
            </span>
          )}
          
          <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl text-[var(--color-text-primary)] font-normal leading-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-4 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xl">
              {description}
            </p>
          )}

          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-6" />

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};
