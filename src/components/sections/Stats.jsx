import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';

export const Stats = () => {
  const statsList = [
    { label: "Years Experience", value: BUSINESS_INFO.experienceYears, icon: Award },
    { label: "Google Rating", value: `${BUSINESS_INFO.rating.score} ★`, icon: Star },
    { label: "Google Reviews", value: `${BUSINESS_INFO.rating.reviewsCount}+`, icon: MessageSquare },
  ];

  return (
    <section className="py-16 bg-[var(--color-bg-alt)] border-y border-[var(--color-border-medium)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center p-8 bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] relative group hover:border-[var(--color-border-gold)] transition-colors rounded-[24px] shadow-[var(--shadow-editorial)]"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-gold)] flex items-center justify-center text-[var(--color-gold-accent)] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-serif-display text-5xl md:text-6xl text-[var(--color-gold-accent)] font-semibold mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-primary)] font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
