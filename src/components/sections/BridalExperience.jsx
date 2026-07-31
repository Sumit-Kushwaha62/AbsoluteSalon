import React from 'react';
import { motion } from 'framer-motion';
import { MEDIA_ASSETS } from '../../data/media';
import { SmartImage } from '../ui/SmartImage';
import { LuxuryButton } from '../ui/LuxuryButton';
import { BUSINESS_INFO } from '../../data/business';

export const BridalExperience = () => {
  const bridalLooks = [
    {
      title: "Royal Bridal Makeup",
      desc: "Signature HD & Airbrush Heritage Glow",
      tag: "Wedding Collection",
      img: MEDIA_ASSETS.bridal.gallery[0].src
    },
    {
      title: "Signature Bridal Look",
      desc: "Sophisticated Elegance & Soft Radiant Skin",
      tag: "Bridal Collection",
      img: MEDIA_ASSETS.bridal.gallery[1].src
    },
    {
      title: "Reception Glam",
      desc: "High-Fashion Evening Transformations",
      tag: "Reception Party",
      img: MEDIA_ASSETS.bridal.gallery[2].src
    },
  ];

  return (
    <section id="bridal" className="py-24 sm:py-32 bg-[var(--color-bg-alt)] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 block">
              THE ABSOLUTE BRIDE
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-normal text-[var(--color-text-primary)] leading-tight">
              For moments <span className="italic font-light text-[var(--color-gold-accent)]">you remember forever</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <p className="font-serif-display text-2xl italic text-[var(--color-gold-accent)] mb-4">
              "Your day. Your glow. Your story."
            </p>
            <LuxuryButton
              href={BUSINESS_INFO.whatsapp.getUrl("Hi Absolute Salon, I would like to enquire about Bridal Packages.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Book Bridal Consultation
            </LuxuryButton>
          </div>
        </div>

        {/* 3-Column Portrait Grid — Full Face Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bridalLooks.map((look, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-[32px] card-editorial aspect-[3/4] shadow-[var(--shadow-editorial)]"
            >
              <SmartImage
                src={look.img}
                alt={look.title}
                _category="Bridal"
                title={look.title}
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold block mb-1">
                  {look.tag}
                </span>
                <h3 className="font-serif-display text-3xl text-white">
                  {look.title}
                </h3>
                <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                  {look.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
