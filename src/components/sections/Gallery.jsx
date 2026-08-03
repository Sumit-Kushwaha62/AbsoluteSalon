import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, Eye } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../data/gallery';
import { SmartImage } from '../ui/SmartImage';
import { InstagramIcon as Instagram } from '../ui/InstagramIcon';
import { BUSINESS_INFO } from '../../data/business';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const closeButtonRef = useRef(null);

  // Filter gallery items based on active tab
  const filteredItems = activeCategory === 'All Work'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const prevLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    if (activeLightboxIndex !== null) {
      const previouslyFocused = document.activeElement;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        previouslyFocused?.focus?.();
      };
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, filteredItems.length]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[var(--color-bg-base)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Portfolio Showcase
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-[var(--color-text-primary)] font-normal leading-tight">
            Client Transformations & Artistry
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-3 max-w-lg">
            Explore authentic bridal makeovers, engagement looks, Mehendi glam, party transformations, and precision hair styling by Absolute Salon.
          </p>
          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-5" />
        </div>

        {/* Category Tabs Strip for Mobile & Desktop */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none px-2 max-w-full">
          {GALLERY_CATEGORIES.map((cat) => {
            const count = cat === 'All Work'
              ? GALLERY_ITEMS.length
              : GALLERY_ITEMS.filter((i) => i.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveLightboxIndex(null);
                }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[var(--color-gold-accent)] text-[#070707] shadow-lg shadow-[var(--color-gold-accent)]/20 font-bold scale-[1.02]'
                    : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-medium)]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-black/20 text-[#070707]' : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.button
                type="button"
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                onClick={() => openLightbox(index)}
                aria-label={`Open ${item.title}`}
                className="group relative cursor-pointer overflow-hidden rounded-[18px] sm:rounded-[24px] card-editorial aspect-[3/4] shadow-[var(--shadow-editorial)] bg-[var(--color-bg-card)] border border-[var(--color-border-medium)]"
              >
                <SmartImage
                  src={item.src}
                  alt={item.title}
                  _category={item.category}
                  title={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay & Content (Clean Minimalist — No Title Text) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300 p-3 sm:p-5 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-accent)] font-semibold mb-1 truncate">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium group-hover:text-[var(--color-gold-accent)] transition-colors">
                    <Eye className="w-3.5 h-3.5" /> View Photo
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Instagram Connect CTA */}
        <div className="text-center pt-8 border-t border-[var(--color-border-medium)]">
          <a
            href={BUSINESS_INFO.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-gold-accent)] hover:text-[#070707] transition-all duration-300 rounded-[16px] shadow-xl"
          >
            <Instagram className="w-4 h-4" />
            Follow {BUSINESS_INFO.socials.instagram.handle} on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal (Clean Minimalist Viewer) */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              ref={closeButtonRef}
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 text-white hover:text-[var(--color-gold-accent)] focus:outline-none z-50 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={prevLightboxImage}
              className="absolute left-2 sm:left-6 p-3 sm:p-4 rounded-full bg-black/60 border border-white/20 text-white hover:text-[var(--color-gold-accent)] hover:bg-black/90 focus:outline-none z-50 transition-all"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextLightboxImage}
              className="absolute right-2 sm:right-6 p-3 sm:p-4 rounded-full bg-black/60 border border-white/20 text-white hover:text-[var(--color-gold-accent)] hover:bg-black/90 focus:outline-none z-50 transition-all"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Modal Image & Counter Container */}
            <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center p-2 z-40">
              <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-[20px] sm:rounded-[28px] border border-white/10 shadow-2xl bg-black">
                <SmartImage
                  src={activeItem.src}
                  alt={activeItem.title}
                  _category={activeItem.category}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Minimal Counter & Instagram Action */}
              <div className="mt-4 text-center space-y-2 px-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold block">
                  {activeItem.category} • Photo {activeLightboxIndex + 1} of {filteredItems.length}
                </span>

                <a
                  href={BUSINESS_INFO.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-[var(--color-gold-accent)] transition-colors pt-1"
                >
                  <Instagram className="w-3.5 h-3.5 text-[var(--color-gold-accent)]" />
                  View More Work on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
