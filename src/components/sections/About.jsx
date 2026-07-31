import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { MEDIA_ASSETS } from '../../data/media';
import { SmartImage } from '../ui/SmartImage';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-[var(--color-bg-base)] border-t border-[var(--color-border-medium)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Imagery Split */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] border border-[var(--color-border-gold)] p-3 bg-[var(--color-bg-card)] rounded-2xl shadow-xl">
              <SmartImage
                src={MEDIA_ASSETS.salon.founders}
                alt="Absolute Salon Founders & Master Beauty Artists"
                _category="Founders & Team"
                title="Absolute Salon Founders"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Floating Founders & Experience Badge Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 flex flex-col justify-center p-4 sm:p-5 bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)] rounded-xl max-w-[210px] sm:max-w-[240px] shadow-2xl z-20 backdrop-blur-md">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[var(--color-gold-accent)] font-extrabold block mb-0.5">
                  FOUNDERS OF ABSOLUTE SALON
                </span>
                <span className="font-serif-display text-2xl sm:text-3xl text-[var(--color-text-primary)] font-bold leading-none">
                  15+ YRS
                </span>
                <span className="text-[10px] sm:text-[11px] text-[var(--color-text-primary)] font-semibold mt-1.5 leading-tight block border-t border-[var(--color-border-subtle)] pt-1.5">
                  Ex-L'Oréal & Lakmé Salon Mumbai Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-accent)] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> FOUNDERS & MASTER ARTISTRY
            </span>
            
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[var(--color-text-primary)] font-normal leading-tight">
              15+ Years of Creating Confidence.
            </h2>

            <div className="w-16 h-[1px] bg-[var(--color-gold-accent)]" />

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-sans">
              Absolute Salon was founded by senior beauty experts with over 15 years of prestigious experience at <strong className="text-[var(--color-text-primary)] font-semibold">L'Oréal & Lakmé Salon Mumbai</strong>. Located in Vijay Nagar & Shastri Nagar, Jabalpur, we bring top-tier Mumbai salon craftsmanship, HD bridal transformations, and dermal skin care to every client.
            </p>

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-sans">
              Our signature philosophy balances high-fashion contemporary techniques with personalized care, ensuring every bride and client steps out feeling radiant, polished, and confident.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Founders & Master Artists",
                "Ex-L'Oréal & Lakmé Salon Mumbai",
                "High-Definition & Airbrush Bridal Glam",
                "Precision Hair Styling, Balayage & Botox"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-gold-accent)] flex-shrink-0" />
                  <span className="text-xs uppercase tracking-wider text-[var(--color-text-primary)] font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={BUSINESS_INFO.whatsapp.getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 btn-champagne-primary text-xs uppercase tracking-[0.25em] font-semibold"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
