import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO } from '../../data/business';

export const FloatingWhatsApp = () => {
  return (
    <>
      {/* Desktop Floating Right Circular Icon Only */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <a
          href={BUSINESS_INFO.whatsapp.getUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment on WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 focus:outline-none"
        >
          <FaWhatsapp className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* Mobile Floating Action Buttons (No Rectangle Box Background, Pure Floating Buttons) */}
      <div className="md:hidden fixed bottom-4 left-3 right-3 z-50 pointer-events-none pb-[env(safe-area-inset-bottom,0px)] grid grid-cols-3 gap-2.5 transform-gpu">
        <Link
          to="/services?category=skin"
          aria-label="View Skin Care & Aesthetics Services"
          className="pointer-events-auto flex flex-col items-center justify-center py-2.5 px-1.5 bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] text-[var(--color-text-primary)] rounded-2xl text-center shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition-transform active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-[var(--color-gold-accent)] mb-0.5" />
          <span className="text-[9px] uppercase tracking-wider font-semibold whitespace-nowrap">Our Services</span>
        </Link>

        <a
          href={BUSINESS_INFO.whatsapp.getUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment on WhatsApp"
          className="pointer-events-auto flex flex-col items-center justify-center py-2.5 px-1.5 btn-champagne-primary rounded-2xl text-center font-bold shadow-[0_8px_25px_rgba(184,138,47,0.35)] transition-transform active:scale-95"
        >
          <FaWhatsapp className="w-4 h-4 text-[#070707] mb-0.5" />
          <span className="text-[9px] uppercase tracking-wider font-bold">WhatsApp</span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phone.raw}`}
          aria-label="Call Absolute Salon"
          className="pointer-events-auto flex flex-col items-center justify-center py-2.5 px-1.5 bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] text-[var(--color-text-primary)] rounded-2xl text-center shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 text-[var(--color-gold-accent)] mb-0.5" />
          <span className="text-[9px] uppercase tracking-wider font-semibold">Call</span>
        </a>
      </div>
    </>
  );
};



