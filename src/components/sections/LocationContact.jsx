import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Sparkles, Navigation, Clock, Star, ExternalLink } from 'lucide-react';
import { BRANCHES, BUSINESS_INFO } from '../../data/business';
import { SocialLinks } from '../ui/SocialLinks';
import { useTheme } from '../../context/ThemeContext';

export const LocationContact = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'vijay-nagar', or 'shastri-nagar'

  const displayedBranches = activeTab === 'all' 
    ? BRANCHES 
    : BRANCHES.filter(b => b.id === activeTab);

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[var(--color-bg-base)] border-t border-[var(--color-border-medium)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> 2 Locations in Jabalpur
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-[var(--color-text-primary)] font-normal leading-tight">
            Our Salon Branches & Maps
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--color-text-muted)] max-w-xl">
            Visit us at your nearest branch in Vijay Nagar or Shastri Nagar for world-class beauty, hair, and bridal services.
          </p>
          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-5" />
        </div>

        {/* Polished Social Cards Strip */}
        <div className="mb-12 sm:mb-16">
          <SocialLinks variant="cards" />
        </div>

        {/* Branch Filter Switcher Tabs for Mobile & Desktop */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-[var(--color-gold-accent)] text-[#070707] shadow-lg shadow-[var(--color-gold-accent)]/20'
                : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-medium)]'
            }`}
          >
            Both Branches (2 Maps)
          </button>
          {BRANCHES.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => setActiveTab(branch.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                activeTab === branch.id
                  ? 'bg-[var(--color-gold-accent)] text-[#070707] shadow-lg shadow-[var(--color-gold-accent)]/20'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-medium)]'
              }`}
            >
              <span>{branch.shortName}</span>
              <span className="text-[10px] opacity-75">({branch.rating.score} ★)</span>
            </button>
          ))}
        </div>

        {/* Branches Grid Section */}
        <div className="space-y-12 sm:space-y-16">
          {displayedBranches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden"
            >
              {/* Branch Badge Decorative */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[var(--color-bg-elevated)] border border-[var(--color-border-gold)] text-[var(--color-gold-accent)]">
                  <Sparkles className="w-3 h-3" /> {branch.badge}
                </span>
              </div>

              {/* Branch Details Column (Left on Desktop) */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[var(--color-text-primary)]">
                      {branch.name}
                    </h3>
                  </div>

                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-accent)] font-semibold mb-3">
                    {branch.tagline}
                  </p>

                  {/* Rating Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] text-xs text-[var(--color-gold-accent)] font-medium mb-6">
                    <Star className="w-4 h-4 fill-[var(--color-gold-accent)] text-[var(--color-gold-accent)]" />
                    <span>{branch.rating.displayText}</span>
                  </div>

                  {/* Info List */}
                  <div className="space-y-5 border-t border-[var(--color-border-subtle)] pt-5">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center text-[var(--color-gold-accent)] shrink-0 mt-0.5">
                        <MapPin className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-medium mb-0.5">
                          Address
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--color-text-primary)] leading-relaxed font-medium">
                          {branch.address.street},<br />
                          {branch.address.area}, {branch.address.city}, {branch.address.state} {branch.address.pincode}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center text-[var(--color-gold-accent)] shrink-0 mt-0.5">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-medium mb-0.5">
                          Phone Appointments
                        </h4>
                        <a
                          href={`tel:${branch.phone.raw}`}
                          className="text-sm sm:text-base text-[var(--color-gold-accent)] font-semibold hover:underline inline-block"
                        >
                          {branch.phone.display}
                        </a>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center text-[var(--color-gold-accent)] shrink-0 mt-0.5">
                        <Clock className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] font-medium mb-0.5">
                          Working Hours
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--color-text-primary)] font-medium">
                          {branch.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="pt-6 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={branch.googleMaps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-champagne-primary py-3 px-5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 text-center rounded-xl"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions (Google Maps)
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  <a
                    href={`tel:${branch.phone.raw}`}
                    className="btn-champagne-secondary py-3 px-5 text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 text-center rounded-xl"
                  >
                    <Phone className="w-4 h-4 text-[var(--color-gold-accent)]" />
                    Call Branch
                  </a>
                </div>
              </div>

              {/* Interactive Google Map Frame (Right on Desktop) */}
              <div className="lg:col-span-6 w-full h-[320px] sm:h-[380px] lg:h-auto min-h-[300px] lg:min-h-[420px] border border-[var(--color-border-medium)] rounded-[20px] sm:rounded-[24px] overflow-hidden relative shadow-inner">
                <iframe
                  title={`${branch.name} Map`}
                  src={branch.googleMaps.embedUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 min-h-[300px]"
                  style={{
                    filter: theme === 'dark' ? 'grayscale(0.8) contrast(1.2) invert(0.9)' : 'grayscale(0.2) contrast(1.05)'
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

