import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift, Phone, Star, Percent } from 'lucide-react';
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
    "Hi Absolute Salon, I want to claim the Special Offers (Up to 70% Off for 1st Time Customers / Up to 50% Off on ₹5,000+ services)."
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
              className="relative w-full max-w-lg bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)]/60 rounded-[28px] p-5 sm:p-8 shadow-[0_20px_70px_rgba(214,180,92,0.3)] z-10 overflow-hidden space-y-5 my-auto text-center"
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
                <span>EXCLUSIVE SALON OFFERS</span>
              </div>

              {/* Header Title */}
              <div className="space-y-1">
                <h2 className="font-serif-display text-2xl sm:text-3xl text-[var(--color-text-primary)] font-normal leading-snug">
                  Special Discount Offers!
                </h2>
                <p className="text-xs text-[var(--color-text-muted)] max-w-sm mx-auto">
                  Unlock premium salon savings at Vijay Nagar & Shastri Nagar branches.
                </p>
              </div>

              {/* Dual Offer Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Offer 1: Up to 70% Off First Visit */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-gold-accent)]/25 via-[var(--color-bg-elevated)] to-[var(--color-bg-card)] border-2 border-[var(--color-gold-accent)]/70 shadow-md flex flex-col justify-between space-y-2 text-left group">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-[var(--color-gold-accent)] bg-[var(--color-gold-accent)]/20 px-2 py-0.5 rounded-md border border-[var(--color-gold-accent)]/40">
                      1st Time Client
                    </span>
                    <Star className="w-4 h-4 text-[var(--color-gold-accent)] fill-[var(--color-gold-accent)]" />
                  </div>
                  <div>
                    <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--color-gold-accent)] tracking-tight">
                      UP TO 70% OFF
                    </div>
                    <p className="text-xs text-[var(--color-text-primary)] font-bold mt-1">
                      For First Time Customers
                    </p>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed pt-1 border-t border-[var(--color-border-subtle)]">
                    Valid on <span className="text-[var(--color-gold-accent)] font-semibold">haircut, hair spa, botox, dermal facials & beauty services</span> for first visit.
                  </p>
                </div>

                {/* Offer 2: Up to 50% Off Over ₹5,000 Services */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] border border-[var(--color-gold-accent)]/50 shadow-md flex flex-col justify-between space-y-2 text-left group">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--color-gold-accent)] bg-[var(--color-gold-accent)]/15 px-2 py-0.5 rounded-md border border-[var(--color-gold-accent)]/30">
                      Special Bonus
                    </span>
                    <Percent className="w-4 h-4 text-[var(--color-gold-accent)]" />
                  </div>
                  <div>
                    <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--color-gold-accent)] tracking-tight">
                      UP TO 50% OFF
                    </div>
                    <p className="text-xs text-[var(--color-text-primary)] font-bold mt-1">
                      On Services Worth ₹5,000+
                    </p>
                  </div>
                  <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed pt-1 border-t border-[var(--color-border-subtle)]">
                    Valid on <span className="text-[var(--color-gold-accent)] font-semibold">haircut, hair spa, botox, dermal facials & beauty services</span> on billing above ₹5,000.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                {/* Primary CTA: Claim Offer on WhatsApp */}
                <a
                  href={whatsappOfferUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[var(--color-gold-accent)] text-[#070707] font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 hover:bg-[var(--color-gold-light)] transition-all duration-300 shadow-[0_6px_25px_rgba(214,180,92,0.4)] active:scale-[0.99]"
                >
                  <Sparkles className="w-4 h-4 fill-[#070707]" />
                  Claim Offers on WhatsApp
                </a>

                {/* Secondary CTA: Call Salon & Skip Link */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleOpenCallModal}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] text-[var(--color-text-primary)] hover:text-[var(--color-gold-accent)] hover:border-[var(--color-gold-accent)] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[var(--color-gold-accent)]" />
                    Call Salon
                  </button>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="py-2.5 px-4 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors underline underline-offset-4"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-[10px] text-center text-[var(--color-text-muted)] pt-1 border-t border-[var(--color-border-subtle)]">
                Vijay Nagar & Shastri Nagar Branches • Limited time offer
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
