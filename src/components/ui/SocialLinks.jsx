import React from 'react';
import { MapPin } from 'lucide-react';
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { InstagramIcon as Instagram } from '../ui/InstagramIcon';
import { BUSINESS_INFO } from '../../data/business';

export const SocialLinks = ({ variant = 'inline', className = '' }) => {
  const socialItems = [
    {
      name: BUSINESS_INFO.socials.instagram.label,
      url: BUSINESS_INFO.socials.instagram.url,
      icon: Instagram,
      sub: "Follow our work"
    },
    {
      name: BUSINESS_INFO.socials.whatsapp.label,
      url: BUSINESS_INFO.socials.whatsapp.url,
      icon: FaWhatsapp,
      sub: "Book an appointment",
      isWhatsapp: true
    },
    {
      name: BUSINESS_INFO.socials.facebook.label,
      url: BUSINESS_INFO.socials.facebook.url,
      icon: FaFacebookF,
      sub: "Connect with us"
    },
    {
      name: BUSINESS_INFO.socials.googleMaps.label,
      url: BUSINESS_INFO.socials.googleMaps.url,
      icon: MapPin,
      sub: "Get directions"
    }
  ];

  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
        {socialItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              aria-label={item.name}
              className="p-5 card-editorial rounded-[20px] group flex items-center justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                  item.isWhatsapp 
                    ? 'bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366]' 
                    : 'bg-[var(--color-bg-elevated)] border-[var(--color-border-medium)] text-[var(--color-gold-accent)] group-hover:border-[var(--color-gold-accent)]'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-gold-accent)] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-[var(--color-text-muted)] block mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
              <span className="text-xs text-[var(--color-gold-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                ↗
              </span>
            </a>
          );
        })}
      </div>
    );
  }

  // Default Inline Variant (For Header & Navigation)
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {socialItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            aria-label={item.name}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
              item.isWhatsapp
                ? 'border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10'
                : 'border-[var(--color-border-medium)] text-[var(--color-text-primary)] hover:text-[var(--color-gold-accent)] hover:border-[var(--color-border-gold)] hover:bg-[var(--color-bg-elevated)]'
            }`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};
