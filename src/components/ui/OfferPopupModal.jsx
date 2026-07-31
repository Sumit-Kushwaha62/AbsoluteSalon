import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift, Phone, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { BranchCallModal } from './BranchCallModal';

export const OfferPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    // Open offer pop-up after a short 1.2-second delay on page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenCallModal = () => {
    setIsOpen(false);
    setIsCallModalOpen(true);
  };

  const whatsappOfferUrl = BUSINESS_INFO.whatsapp.getUrl(
    "Hi Absolute Salon, I am a FIRST TIME CUSTOMER and I want to claim the UP TO 70% DISCOUNT OFFER for my first visit!"
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            />

            {/* Modal Card Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)]/60 rounded-[28px] p-6 sm:p-8 shadow-[0_20px_70px_rgba(214,180,92,0.3)] z-10 overflow-hidden space-y-6 my-auto text-center"
            >
              {/* Decorative Background Glow Effect */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-[var(--color-gold-accent)]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[var(--color-gold-accent)]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Close X Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-white border border-[var(--color-border-medium)] transition-colors z-20"
                aria-label="Close Special Offer Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-gold-accent)]/20 border border-[var(--color-gold-accent)]/50 text-[var(--color-gold-accent)] text-[11px] font-bold uppercase tracking-[0.2em] shadow-md mx-auto">
                <Gift className="w-4 h-4 text-[var(--color-gold-accent)]" />
                <span>WELCOME NEW CLIENT OFFER</span>
              </div>

              {/* HIGH-IMPACT PROMINENT DISCOUNT DISPLAY */}
              <div className="space-y-2">
                <div className="font-serif-display text-4xl sm:text-6xl font-normal text-[var(--color-gold-accent)] tracking-tight drop-shadow-[0_4px_15px_rgba(214,180,92,0.3)]">
                  UP TO 70% OFF
                </div>
                <h2 className="font-serif-display text-2xl sm:text-3xl text-[var(--color-text-primary)] font-normal leading-tight">
                  For All First Time Customers!
                </h2>
              </div>

              {/* HIGHLY HIGHLIGHTED FIRST-TIME CLIENT BANNER */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[var(--color-gold-accent)]/25 via-[var(--color-gold-accent)]/10 to-[var(--color-gold-accent)]/25 border-2 border-[var(--color-gold-accent)]/70 shadow-lg relative overflow-hidden group">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <Star className="w-4 h-4 text-[var(--color-gold-accent)] fill-[var(--color-gold-accent)]" />
                  <span className="text-xs uppercase font-extrabold tracking-[0.18em] text-[var(--color-gold-accent)]">
                    SPECIAL FIRST VISIT PRIVILEGE
                  </span>
                  <Star className="w-4 h-4 text-[var(--color-gold-accent)] fill-[var(--color-gold-accent)]" />
                </div>
                <p className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] leading-snug">
                  Visiting Absolute Salon for the first time?
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">
                  Enjoy up to <span className="text-[var(--color-gold-accent)] font-bold">70% instant discount</span> on haircut, hair spa, botox, dermal facials, and beauty services on your first appointment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                {/* Primary CTA: Claim Offer on WhatsApp */}
                <a
                  href={whatsappOfferUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="w-full py-4 px-6 rounded-2xl bg-[var(--color-gold-accent)] text-[#070707] font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 hover:bg-[var(--color-gold-light)] transition-all duration-300 shadow-[0_6px_25px_rgba(214,180,92,0.4)] active:scale-[0.99]"
                >
                  <Sparkles className="w-4 h-4 fill-[#070707]" />
                  Claim 70% Offer on WhatsApp
                </a>

                {/* Secondary CTA: Call Salon & Skip Link */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleOpenCallModal}
                    className="flex-1 py-3 px-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] text-[var(--color-text-primary)] hover:text-[var(--color-gold-accent)] hover:border-[var(--color-gold-accent)] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[var(--color-gold-accent)]" />
                    Call Salon
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="py-3 px-4 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors underline underline-offset-4"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-[10px] text-center text-[var(--color-text-muted)] pt-1 border-t border-[var(--color-border-subtle)]">
                Vijay Nagar & Shastri Nagar Branches • Jabalpur
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Branch Call Modal Integration */}
      <BranchCallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </>
  );
};
