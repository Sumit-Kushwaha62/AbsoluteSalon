import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Volume2, VolumeX, ArrowUpRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/gallery';
import { SmartImage } from '../ui/SmartImage';
import { InstagramIcon as Instagram } from '../ui/InstagramIcon';
import { BUSINESS_INFO } from '../../data/business';

export const Gallery = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const [isLightboxMuted, setIsLightboxMuted] = useState(true);

  const lightboxVideoRef = useRef(null);

  // Group items into distinct sections without any tab filters
  const hairReels = GALLERY_ITEMS.filter((item) => item.category === 'Hair Cut & Treatments');
  const beforeAfterReels = GALLERY_ITEMS.filter((item) => item.category === 'Before & After Reels');
  const galleryPhotos = GALLERY_ITEMS.filter((item) => item.category === 'Bridal & Makeup' || item.category === 'Salon Studio');

  const openLightboxByItem = (item) => {
    const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
      setIsLightboxMuted(true);
    }
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevLightboxImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
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
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex]);

  const activeItem = activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[var(--color-bg-base)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-24 sm:space-y-32">
        
        {/* ========================================================
            SECTION 1: HAIR CUTS & TREATMENTS REELS
           ======================================================== */}
        <div>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> INSTAGRAM REELS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--color-text-primary)] font-normal">
              Hair Cuts, Nanoplastia & Treatments
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-2 max-w-lg">
              Explore precision hair cuts, silk botox therapies, and dimensional balayage reels downloaded directly from our Instagram.
            </p>
            <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairReels.map((item) => {
              const isHovered = hoveredVideoId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightboxByItem(item)}
                  onMouseEnter={() => setHoveredVideoId(item.id)}
                  onMouseLeave={() => setHoveredVideoId(null)}
                  className="group relative cursor-pointer overflow-hidden rounded-[24px] card-editorial aspect-[3/4] shadow-[var(--shadow-editorial)]"
                >
                  {isHovered ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={item.poster}
                      className="w-full h-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <SmartImage
                      src={item.poster}
                      alt={item.title}
                      _category={item.category}
                      title={item.title}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md border border-[var(--color-gold-accent)]/40 text-[var(--color-gold-accent)] text-[10px] uppercase tracking-wider font-semibold rounded-full shadow-lg">
                    <Play className="w-3 h-3 fill-[var(--color-gold-accent)]" />
                    <span>Hair Reel</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif-display text-2xl text-white leading-snug mb-1">
                      {item.title}
                    </h4>
                    <div className="mt-3 flex items-center gap-1 text-xs text-[var(--color-gold-accent)] font-medium">
                      <Play className="w-3.5 h-3.5 fill-current" /> Watch Reel
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            SECTION 2: BEFORE & AFTER TRANSFORMATION REELS
           ======================================================== */}
        <div className="pt-8 border-t border-[var(--color-border-medium)]">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> VISUAL REALS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--color-text-primary)] font-normal">
              Before & After Transformation Reels
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-2 max-w-lg">
              Watch step-by-step makeover reels showing hair smoothing, balayage repairs, and royal bridal reveals.
            </p>
            <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterReels.map((item) => {
              const isHovered = hoveredVideoId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightboxByItem(item)}
                  onMouseEnter={() => setHoveredVideoId(item.id)}
                  onMouseLeave={() => setHoveredVideoId(null)}
                  className="group relative cursor-pointer overflow-hidden rounded-[24px] card-editorial aspect-[9/16] shadow-[var(--shadow-editorial)]"
                >
                  {isHovered ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={item.poster}
                      className="w-full h-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <SmartImage
                      src={item.poster}
                      alt={item.title}
                      _category={item.category}
                      title={item.title}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md border border-[var(--color-gold-accent)]/40 text-[var(--color-gold-accent)] text-[10px] uppercase tracking-wider font-semibold rounded-full shadow-lg">
                    <Play className="w-3 h-3 fill-[var(--color-gold-accent)]" />
                    <span>Before/After Reel</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 p-5 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif-display text-xl text-white leading-snug mb-1">
                      {item.title}
                    </h4>
                    <div className="mt-2 flex items-center gap-1 text-xs text-[var(--color-gold-accent)] font-medium">
                      <Play className="w-3.5 h-3.5 fill-current" /> Watch Reel
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            SECTION 3: BRIDAL & HIGH-DEFINITION MAKEUP GALLERY
           ======================================================== */}
        <div className="pt-8 border-t border-[var(--color-border-medium)]">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> BRIDAL & SUITE
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[var(--color-text-primary)] font-normal">
              Bridal Artistry & Studio Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-2 max-w-lg">
              High-definition bridal makeup portraits, engagement glows, and our vanity suite in Vijay Nagar.
            </p>
            <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightboxByItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] card-editorial aspect-[3/4] shadow-[var(--shadow-editorial)]"
              >
                <SmartImage
                  src={item.src}
                  alt={item.title}
                  _category={item.category}
                  title={item.title}
                  className="group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif-display text-2xl text-white leading-snug mb-1">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-1 text-xs text-[var(--color-gold-accent)] font-medium">
                    <ArrowUpRight className="w-4 h-4" /> View Full Photo
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Instagram Follow Strip */}
        <div className="text-center pt-8 border-t border-[var(--color-border-medium)]">
          <a
            href={BUSINESS_INFO.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-gold-accent)] hover:text-[#070707] transition-all duration-300 rounded-[16px] shadow-xl"
          >
            <Instagram className="w-4 h-4" />
            Explore More Reels on Instagram {BUSINESS_INFO.socials.instagram.handle}
          </a>
        </div>
      </div>

      {/* Lightbox Modal (Supports Images & Videos) */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 text-white hover:text-[var(--color-gold-accent)] focus:outline-none z-50 rounded-full bg-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={prevLightboxImage}
              className="absolute left-4 sm:left-8 p-3.5 rounded-full floating-glass text-white hover:text-[var(--color-gold-accent)] focus:outline-none z-50"
              aria-label="Previous Item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextLightboxImage}
              className="absolute right-4 sm:right-8 p-3.5 rounded-full floating-glass text-white hover:text-[var(--color-gold-accent)] focus:outline-none z-50"
              aria-label="Next Item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Body Container */}
            <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center p-2 z-40">
              <div className="relative max-h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-[24px] border border-white/10 shadow-2xl bg-black">
                {activeItem.type === 'video' ? (
                  <div className="relative w-full h-[65vh] flex items-center justify-center bg-black">
                    <video
                      ref={lightboxVideoRef}
                      key={activeItem.id}
                      controls
                      autoPlay
                      playsInline
                      muted={isLightboxMuted}
                      poster={activeItem.poster}
                      className="max-h-[65vh] w-auto max-w-full object-contain"
                    >
                      <source src={activeItem.src} type="video/mp4" />
                    </video>

                    {/* Mute / Unmute Toggle */}
                    <button
                      type="button"
                      onClick={() => setIsLightboxMuted(!isLightboxMuted)}
                      className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/75 text-white border border-white/20 hover:text-[var(--color-gold-accent)] transition-colors z-50"
                      title={isLightboxMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isLightboxMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[var(--color-gold-accent)]" />}
                    </button>
                  </div>
                ) : (
                  <SmartImage
                    src={activeItem.src}
                    alt={activeItem.title}
                    _category={activeItem.category}
                    title={activeItem.title}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                )}
              </div>

              {/* Caption Footer */}
              <div className="mt-4 text-center max-w-lg space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold block">
                  {activeItem.category} ({activeLightboxIndex + 1} / {GALLERY_ITEMS.length})
                </span>
                <h3 className="font-serif-display text-2xl text-white font-normal">
                  {activeItem.title}
                </h3>
                {activeItem.caption && (
                  <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                    {activeItem.caption}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
