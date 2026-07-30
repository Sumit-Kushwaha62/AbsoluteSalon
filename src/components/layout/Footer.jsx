import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { SocialLinks } from '../ui/SocialLinks';

export const Footer = () => {
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[var(--color-footer-bg)] border-t border-[var(--color-border-medium)] pt-16 pb-28 md:pb-12 text-[var(--color-text-muted)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[var(--color-border-medium)]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/brand/absolute-salon-logo.webp?v=2.0"
                alt="Absolute Salon Logo"
                width="512"
                height="512"
                loading="lazy"
                decoding="async"
                className="h-14 w-14 object-contain"
              />
              <div>
                <span className="font-serif-display text-2xl font-semibold tracking-wider text-[var(--color-text-primary)] block">
                  ABSOLUTE SALON
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-gold-accent)] font-semibold block">
                  Jabalpur • 15+ Years Experience
                </span>
              </div>
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-sm">
              Where beauty becomes art. Professional makeup artist specializing in high-definition bridal transformations, hair styling, balayage, and dermal skin care.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--color-gold-accent)] font-medium">
              <Star className="w-4 h-4 fill-[var(--color-gold-accent)] text-[var(--color-gold-accent)]" />
              <span>{BUSINESS_INFO.rating.score} Rating ({BUSINESS_INFO.rating.reviewsCount}+ Client Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-primary)] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[var(--color-gold-accent)] transition-colors uppercase tracking-wider block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address, Phone & Email */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-primary)] font-semibold mb-4">
              Contact & Socials
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Ekta Chowk, Plot No. 53, Opp. Mahalaxmi Jewellers,<br />
              Vijay Nagar, Jabalpur, MP 482002
            </p>
            <p className="text-xs text-[var(--color-gold-accent)] font-semibold">
              Phone: {BUSINESS_INFO.phone.display}
            </p>
            <p className="text-xs text-[var(--color-text-primary)] break-all">
              Email: <a href={BUSINESS_INFO.email.mailto} className="hover:text-[var(--color-gold-accent)] transition-colors">{BUSINESS_INFO.email.address}</a>
            </p>

            <div className="pt-2">
              <SocialLinks variant="inline" />
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--color-text-muted)] gap-4">
          <p>© {new Date().getFullYear()} Absolute Salon Jabalpur. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for <span className="text-[var(--color-text-primary)] font-semibold">Absolute Salon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
