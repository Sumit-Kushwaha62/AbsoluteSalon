import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MapPin, Star, Sparkles } from 'lucide-react';
import { BRANCHES } from '../../data/business';

export const BranchCallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal / Bottom Sheet Container */}
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-lg bg-[var(--color-bg-card)] border-t sm:border border-[var(--color-border-medium)] rounded-t-[28px] sm:rounded-[28px] p-6 sm:p-8 shadow-2xl z-10 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Direct Call
              </span>
              <h3 className="font-serif-display text-2xl text-[var(--color-text-primary)] font-normal mt-0.5">
                Select Branch to Call
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors border border-[var(--color-border-medium)]"
              aria-label="Close branch selector modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
            Choose your nearest Absolute Salon location to call directly:
          </p>

          {/* Branch Options List */}
          <div className="space-y-3.5">
            {BRANCHES.map((branch) => (
              <a
                key={branch.id}
                href={`tel:${branch.phone.raw}`}
                onClick={onClose}
                className="group block p-4 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] hover:border-[var(--color-border-gold)] transition-all duration-300 shadow-sm active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1 min-w-0 pr-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-serif-display text-base sm:text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-gold-accent)] transition-colors font-medium">
                        {branch.name}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-gold-accent)]/10 text-[var(--color-gold-accent)] font-bold border border-[var(--color-gold-accent)]/20 shrink-0 whitespace-nowrap">
                        {branch.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-gold-accent)] shrink-0" />
                      <span className="truncate">{branch.address.street}</span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] pt-1">
                      <span className="text-[var(--color-gold-accent)] font-semibold">
                        ★ {branch.rating.score} ({branch.rating.reviewsCount} reviews)
                      </span>
                      <span className="text-[var(--color-text-muted)]">• {branch.phone.display}</span>
                    </div>
                  </div>

                  {/* Call Icon Action */}
                  <div className="w-11 h-11 rounded-full bg-[var(--color-gold-accent)] text-[#070707] flex items-center justify-center font-bold shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 fill-[#070707]" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div className="pt-2 text-center border-t border-[var(--color-border-subtle)]">
            <span className="text-[10px] text-[var(--color-text-muted)]">
              Appointments open daily • Walk-ins & bookings welcome
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
