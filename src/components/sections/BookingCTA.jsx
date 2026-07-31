import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { BranchCallModal } from '../ui/BranchCallModal';

export const BookingCTA = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <section className="py-20 bg-[var(--color-bg-alt)] border-t border-[var(--color-border-gold)] relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,167,44,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-accent)] font-semibold">
          RESERVE YOUR APPOINTMENT
        </span>
        
        <h2 className="font-serif-display text-4xl sm:text-6xl text-[var(--color-text-primary)] font-normal leading-tight">
          Experience Absolute Elegance
        </h2>

        <p className="text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed">
          Book your personalized appointment or bridal consultation directly with our master artists via WhatsApp or phone call.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={BUSINESS_INFO.whatsapp.getUrl("Hi Absolute Salon, I would like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 btn-champagne-primary text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-4 h-4" />
            Book via WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setIsCallModalOpen(true)}
            className="w-full sm:w-auto px-10 py-5 btn-champagne-secondary text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-3 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[var(--color-gold-accent)]" />
            Call Our Branches
          </button>
        </div>
      </div>

      <BranchCallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </section>
  );
};
