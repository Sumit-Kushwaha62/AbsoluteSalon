import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { LuxuryButton } from '../ui/LuxuryButton';
import { SmartImage } from '../ui/SmartImage';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070707] bg-noise-overlay pt-24 sm:pt-28 pb-16">
      {/* Background Image Layer (Instead of video) */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src="/media/hero/hero-poster.jpg"
          alt="Absolute Salon Luxury Hero Background"
          priority
          className="w-full h-full object-cover filter brightness-[0.7] scale-105"
        />

        {/* Dark Soft Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/35 to-[#070707]/65" />
      </div>

      {/* Hero Editorial Composition */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Micro-Stat Elements */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#EEE7DB] mb-6 font-sans max-w-full"
        >
          <span className="flex items-center gap-1 text-[#D6B45C] font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#D6B45C]" /> 4.9 Rating
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[#9C978F]">{BUSINESS_INFO.rating.reviewsCount}+ Reviews</span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-[#D6B45C] w-full sm:w-auto">Vijay Nagar, Jabalpur</span>
        </motion.div>

        {/* Responsive Clamp Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif-display text-[clamp(44px,9vw,150px)] font-normal text-[#F5F0E7] tracking-tight leading-[0.92] mb-4 max-w-full break-words"
        >
          ABSOLUTE SALON
        </motion.h1>

        {/* Italic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif-display text-xl sm:text-3xl md:text-4xl italic text-[#D6B45C] mb-4 font-light max-w-full"
        >
          “Where Beauty Becomes Art”
        </motion.p>

        {/* Service Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#9C978F] font-sans mb-8 sm:mb-10 max-w-lg"
        >
          HAIR • SKIN • MAKEUP • BRIDAL
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto max-w-full"
        >
          <LuxuryButton
            href={BUSINESS_INFO.whatsapp.getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full sm:w-auto text-center"
          >
            Book Your Appointment
          </LuxuryButton>

          <LuxuryButton
            to="/gallery"
            variant="secondary"
            className="w-full sm:w-auto text-center"
          >
            Explore Our Work
          </LuxuryButton>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2.2 } }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#9C978F]"
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-[#D6B45C] to-transparent" />
      </motion.div>
    </section>
  );
};
