import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Compass, HeartHandshake } from 'lucide-react';
import { MEDIA_ASSETS } from '../../data/media';
import { SmartImage } from '../ui/SmartImage';

export const SalonExperience = () => {
  const pillars = [
    { title: "Personalized Consultation", desc: "Every skin tone, hair texture, and bridal vision receives bespoke care.", icon: Compass },
    { title: "Hygienic Luxury Standards", desc: "Strict sanitization protocol with premium international beauty brands.", icon: Shield },
    { title: "15+ Years Artistry", desc: "Craftsmanship refined across hundreds of royal wedding celebrations.", icon: HeartHandshake }
  ];

  return (
    <section className="py-24 bg-[var(--color-bg-alt)] border-t border-[var(--color-border-medium)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold-accent)] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> THE ATMOSPHERE
            </span>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[var(--color-text-primary)] font-normal leading-tight">
              An Oasis of Elegance in Jabalpur
            </h2>
            <div className="w-16 h-[1px] bg-[var(--color-gold-accent)]" />

            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Step into a serene environment tailored for relaxation and artistic transformation. Designed with ambient warm lighting, plush vanity styling chairs, and dedicated bridal suites.
            </p>

            <div className="space-y-6 pt-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-gold)] flex items-center justify-center text-[var(--color-gold-accent)] flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif-display text-xl text-[var(--color-text-primary)]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Interior Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] border border-[var(--color-border-medium)] rounded-[20px] overflow-hidden">
              <SmartImage
                src={MEDIA_ASSETS.salon.ambiance}
                alt="Absolute Salon Ambiance"
                _category="Salon Interior"
                title="Salon Ambiance"
              />
            </div>
            <div className="aspect-[3/4] border border-[var(--color-border-medium)] rounded-[20px] overflow-hidden mt-8">
              <SmartImage
                src={MEDIA_ASSETS.salon.makeupStation}
                alt="Makeup Vanity Station"
                _category="Vanity Suite"
                title="Makeup Station"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
