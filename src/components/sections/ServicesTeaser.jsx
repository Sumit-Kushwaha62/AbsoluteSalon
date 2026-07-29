import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Sparkles, Heart, Feather } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/services';

export const ServicesTeaser = () => {
  const iconsMap = {
    'hair-care-styling': Scissors,
    'bridal-makeup': Sparkles,
    'skin-aesthetics': Feather,
    'nail-hand-feet': Heart
  };

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg-base)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
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

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = iconsMap[cat.id] || Sparkles;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-8 rounded-[24px] card-editorial bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] shadow-[var(--shadow-editorial)] hover:border-[var(--color-gold-accent)]/50 transition-all duration-500"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] text-[var(--color-gold-accent)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[var(--color-gold-accent)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold block mb-1">
                    {cat.tagline || 'Pillar'}
                  </span>

                  <h3 className="font-serif-display text-2xl text-[var(--color-text-primary)] mb-3">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border-medium)] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--color-gold-accent)] font-mono">
                    From {cat.startingPrice}
                  </span>
                  <Link
                    to={`/services?category=${cat.id}`}
                    className="text-xs text-[var(--color-text-primary)] group-hover:text-[var(--color-gold-accent)] font-semibold flex items-center gap-1 transition-colors"
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
