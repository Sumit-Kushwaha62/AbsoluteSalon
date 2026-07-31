import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { MEDIA_ASSETS } from '../../data/media';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export const Transformations = () => {
  if (!MEDIA_ASSETS.beforeAfter || MEDIA_ASSETS.beforeAfter.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-[var(--color-bg-base)] border-t border-[var(--color-border-medium)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> BRIDAL & PARTY MAKEUP TRANSFORMATIONS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[var(--color-text-primary)] font-normal">
            Before & After Makeup Artistry
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-3 max-w-md">
            Drag the interactive slider to experience real client bridal and engagement makeup transformations by Absolute Salon.
          </p>
          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-6" />
        </div>

        {/* 2-Column Interactive Image Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MEDIA_ASSETS.beforeAfter.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-4"
            >
              <div className="text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold">
                  {item.category}
                </span>
              </div>

              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
                title={item.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
