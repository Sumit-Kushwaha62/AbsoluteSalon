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
            <div className="relative aspect-[4/5] border border-[var(--color-border-gold)] p-3 bg-[var(--color-bg-card)]">
              <SmartImage
                src={MEDIA_ASSETS.salon.interior}
                alt="Absolute Salon Ambiance"
                _category="Salon Interior"
                title="Absolute Salon Studio"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col justify-center p-6 bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)] max-w-[200px] shadow-2xl">
                <span className="font-serif-display text-4xl text-[var(--color-gold-accent)] font-semibold">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-primary)] font-medium mt-1">
                  Years of Unmatched Artistry
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
              <Sparkles className="w-4 h-4" /> BEAUTY WITH EXPERIENCE
            </span>
            
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[var(--color-text-primary)] font-normal leading-tight">
              15+ Years of Creating Confidence.
            </h2>

            <div className="w-16 h-[1px] bg-[var(--color-gold-accent)]" />

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-sans">
              Absolute Salon combines professional makeup, hair artistry, beauty care, and bridal transformations with a personalized approach for every client. Located in the heart of Vijay Nagar, Jabalpur, we provide an oasis of elegance and precision.
            </p>

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-sans">
              Our signature philosophy balances contemporary beauty techniques with timeless craftsmanship, ensuring every bride and client steps out feeling radiant, polished, and confident.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Professional Makeup Artist",
                "High-Definition & Airbrush Makeup",
                "Precision Hair Styling & Balayage",
                "Luxury Dermal Skin Therapies"
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
