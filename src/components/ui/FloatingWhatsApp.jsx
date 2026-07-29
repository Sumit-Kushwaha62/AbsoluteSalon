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

      {/* Mobile Conversion Floating Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 navbar-glass-strip p-3 grid grid-cols-3 gap-2 border-t border-[var(--color-border-medium)]">
        <Link
          to="/services?category=skin"
          aria-label="View Skin Care & Aesthetics Services"
          className="flex flex-col items-center justify-center py-2.5 bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] text-[var(--color-text-primary)] rounded-[14px] text-center transition-transform active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-[var(--color-gold-accent)] mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-semibold whitespace-nowrap">Our Services</span>
        </Link>

        <a
          href={BUSINESS_INFO.whatsapp.getUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment on WhatsApp"
          className="flex flex-col items-center justify-center py-2.5 btn-champagne-primary rounded-[14px] text-center font-bold transition-transform active:scale-95"
        >
          <FaWhatsapp className="w-4 h-4 text-[#070707] mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-bold">WhatsApp</span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phone.raw}`}
          aria-label="Call Absolute Salon"
          className="flex flex-col items-center justify-center py-2.5 bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] text-[var(--color-text-primary)] rounded-[14px] text-center transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 text-[var(--color-gold-accent)] mb-1" />
          <span className="text-[9px] uppercase tracking-wider font-semibold">Call</span>
        </a>
      </div>
    </>
  );
};

