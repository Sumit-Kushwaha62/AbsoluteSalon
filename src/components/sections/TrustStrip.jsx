import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../../data/business';

export const TrustStrip = () => {
  const stats = [
    { label: "15+ Years", sub: "Master Experience" },
    { label: `${BUSINESS_INFO.rating.score} ★ Rating`, sub: `${BUSINESS_INFO.rating.reviewsCount}+ Client Reviews` },
    { label: "100% Certified", sub: "Hygiene & Premium Care" },
    { label: "Bridal Artistry", sub: "Signature Transformations" },
  ];

  return (
    <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border-medium)] py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[var(--color-border-subtle)]">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="font-serif-display text-2xl md:text-3xl text-[var(--color-text-primary)] font-normal mb-1">
                {item.label}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
