import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { SocialLinks } from '../ui/SocialLinks';
import { useTheme } from '../../context/ThemeContext';

export const LocationContact = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-base)] border-t border-[var(--color-border-medium)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Visit & Connect
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[var(--color-text-primary)] font-normal">
            Location & Social Connect
          </h2>
          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-6" />
        </div>

        {/* Polished Social Cards Strip */}
        <div className="mb-16">
          <SocialLinks variant="cards" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8 card-editorial bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] p-6 sm:p-10 rounded-[28px]"
          >
            <div>
              <h3 className="font-serif-display text-3xl text-[var(--color-text-primary)] mb-1">
                Absolute Salon
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold">
                Vijay Nagar • Jabalpur
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 border-t border-[var(--color-border-subtle)] pt-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center text-[var(--color-gold-accent)] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                  Salon Address
                </h4>
                <p className="text-sm text-[var(--color-text-primary)] leading-relaxed">
                  {BUSINESS_INFO.address.street},<br />
                  {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city},<br />
                  {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}, {BUSINESS_INFO.address.country}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 border-t border-[var(--color-border-subtle)] pt-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center text-[var(--color-gold-accent)] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                  Phone Appointments
                </h4>
                <a
                  href={`tel:${BUSINESS_INFO.phone.raw}`}
                  className="text-base text-[var(--color-gold-accent)] font-semibold hover:underline block truncate"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 border-t border-[var(--color-border-subtle)] pt-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center text-[var(--color-gold-accent)] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden">
                <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                  Email Contact
                </h4>
                <a
                  href={BUSINESS_INFO.email.mailto}
                  className="text-sm sm:text-base text-[var(--color-text-primary)] font-medium hover:text-[var(--color-gold-accent)] transition-colors break-all sm:break-normal block"
                >
                  {BUSINESS_INFO.email.address}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Google Maps Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 w-full h-full min-h-[400px] border border-[var(--color-border-medium)] rounded-[28px] overflow-hidden"
          >
            <iframe
              title="Absolute Salon Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.653456789012!2d79.8987654!3d23.1765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1234567890%3A0x1234567890abcdef!2sVijay%20Nagar%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482002!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '400px',
                filter: theme === 'dark' ? 'grayscale(0.8) contrast(1.2) invert(0.9)' : 'grayscale(0.2) contrast(1.05)'
              }}
              allowFullScreen=""
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
