import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Sparkles, Heart, Feather } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/services';

export const ServicesTeaser = () => {
  const iconsMap = {
    'bridal-makeup': Sparkles,
    'hair': Scissors,
    'hair-care-styling': Scissors,
    'skin': Feather,
    'skin-aesthetics': Feather,
    'nails': Heart,
    'nail-hand-feet': Heart
  };

  const bgMap = {
    'bridal-makeup': '/services/bridelCard.webp?v=2.0',
    'hair': '/services/hairCard.webp?v=2.0',
    'hair-care-styling': '/services/hairCard.webp?v=2.0',
    'skin': '/services/skincareCard.webp?v=2.0',
    'skin-aesthetics': '/services/skincareCard.webp?v=2.0',
    'nails': '/services/nailsCard.webp?v=2.0',
    'nail-hand-feet': '/services/nailsCard.webp?v=2.0'
  };

  return (
    <section className="py-20 sm:py-28 bg-[var(--color-bg-base)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3">
            OUR EXPERTISE
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[var(--color-text-primary)] font-normal">
            Signature Salon Services
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-3 max-w-lg">
            From precision layered haircuts and organic nanoplastia to HD bridal makeup and dermal skin therapy.
          </p>
          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-6" />
        </div>

        {/* 4 Core Pillars Grid with Custom Card Background Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 sm:mb-16">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = iconsMap[cat.id] || Sparkles;
            const bgImage = bgMap[cat.id];

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[28px] overflow-hidden min-h-[380px] sm:min-h-[420px] border border-[var(--color-border-medium)] hover:border-[var(--color-gold-accent)] transition-all duration-500 shadow-xl"
              >
                {/* Custom Card Background Image */}
                {bgImage && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0 pointer-events-none"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />
                )}

                {/* Dark Gradient Overlay for Maximum Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40 z-10 group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/50 transition-colors duration-500 pointer-events-none" />

                {/* Card Content Top */}
                <div className="relative z-20 space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-black/60 backdrop-blur-md border border-[var(--color-gold-accent)]/50 text-[var(--color-gold-accent)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-gold-accent)] group-hover:text-[#070707] transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold-accent)] font-bold block pt-1">
                    {cat.tagline || 'Pillar'}
                  </span>

                  <h3 className="font-serif-display text-2xl sm:text-3xl text-white font-normal leading-snug drop-shadow-sm">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-white/80 leading-relaxed font-sans">
                    {cat.description}
                  </p>
                </div>

                {/* Card Bottom CTA */}
                <div className="relative z-20 pt-4 border-t border-white/20 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-[var(--color-gold-accent)] font-mono bg-black/60 px-2.5 py-1 rounded-full border border-[var(--color-gold-accent)]/30 backdrop-blur-sm">
                    From {cat.startingPrice}
                  </span>
                  <Link
                    to={`/services?category=${cat.id}`}
                    className="text-xs text-white group-hover:text-[var(--color-gold-accent)] font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    View Menu <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to Full Services Catalogue */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-gold-accent)] text-[#070707] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-gold-light)] transition-all duration-300 rounded-[16px] shadow-[0_4px_20px_rgba(214,180,92,0.3)]"
          >
            Explore Full Price Menu & Search Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
