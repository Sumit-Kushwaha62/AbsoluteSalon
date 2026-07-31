import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift, Phone, Percent } from 'lucide-react';
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
    "Hi Absolute Salon, I would like to claim the Special Discount Offer (Up to 70% Off for 1st Time / Up to 50% Off on ₹5,000+ services)."
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            />

            {/* Modal Card Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)]/50 rounded-[28px] p-6 sm:p-8 shadow-[0_20px_60px_rgba(214,180,92,0.25)] z-10 overflow-hidden space-y-6 my-auto"
            >
              {/* Decorative Background Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-gold-accent)]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--color-gold-accent)]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Close X Button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-white border border-[var(--color-border-medium)] transition-colors z-20"
                aria-label="Close Special Offer Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="text-center space-y-2 pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-gold-accent)]/15 border border-[var(--color-gold-accent)]/40 text-[var(--color-gold-accent)] text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">
                  <Gift className="w-4 h-4 text-[var(--color-gold-accent)]" />
                  <span>Exclusive Salon Offer</span>
                </div>

                <h2 className="font-serif-display text-3xl sm:text-4xl text-[var(--color-text-primary)] font-normal leading-tight">
                  Welcome Discount Offers!
                </h2>
                <p className="text-xs text-[var(--color-text-muted)] max-w-sm mx-auto">
                  Unlock instant savings on hair, skin, bridal & aesthetic treatments at Absolute Salon Jabalpur.
                </p>
              </div>

              {/* Dual Offer Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Offer 1: Up to 70% Off First Visit */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] border border-[var(--color-gold-accent)]/40 shadow-sm flex flex-col justify-between space-y-2 group hover:border-[var(--color-gold-accent)] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--color-gold-accent)] bg-[var(--color-gold-accent)]/15 px-2 py-0.5 rounded-md border border-[var(--color-gold-accent)]/30">
                      1st Time Client
                    </span>
                    <Sparkles className="w-4 h-4 text-[var(--color-gold-accent)]" />
                  </div>
                  <div>
                    <div className="font-serif-display text-3xl sm:text-4xl font-normal text-[var(--color-gold-accent)] tracking-tight">
                      UP TO 70% OFF
                    </div>
                    <p className="text-[11px] text-[var(--color-text-primary)] font-medium mt-1">
                      For First Time Customers
                    </p>
                  </div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">
                    Valid on first appointment visit
                  </span>
                </div>

                {/* Offer 2: Up to 50% Off Over 5000 Services */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] border border-[var(--color-gold-accent)]/40 shadow-sm flex flex-col justify-between space-y-2 group hover:border-[var(--color-gold-accent)] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--color-gold-accent)] bg-[var(--color-gold-accent)]/15 px-2 py-0.5 rounded-md border border-[var(--color-gold-accent)]/30">
                      Special Bonus
                    </span>
                    <Percent className="w-4 h-4 text-[var(--color-gold-accent)]" />
                  </div>
                  <div>
                    <div className="font-serif-display text-3xl sm:text-4xl font-normal text-[var(--color-gold-accent)] tracking-tight">
                      UP TO 50% OFF
                    </div>
                    <p className="text-[11px] text-[var(--color-text-primary)] font-medium mt-1">
                      On Services Worth ₹5,000+
                    </p>
                  </div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">
                    Applied on billing above ₹5,000
                  </span>
                </div>
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
                  Claim Offer on WhatsApp
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
                Available at Vijay Nagar & Shastri Nagar Branches • Limited time offer
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
