import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/gallery';
import { SmartImage } from '../ui/SmartImage';

export const GalleryTeaser = () => {
  const [hoveredVideoId, setHoveredVideoId] = useState(null);

  // Take top 4 highlights for the Home page preview
  const teaserItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg-alt)] border-t border-[var(--color-border-medium)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> RECENT INSTAGRAM WORK
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[var(--color-text-primary)] font-normal">
            Visual Showcase
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-3 max-w-lg">
            A glimpse into our real client hair cuts, nanoplastia treatments, and HD bridal makeovers.
          </p>
          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-6" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teaserItems.map((item, idx) => {
            const isVideo = item.type === 'video';
            const isHovered = hoveredVideoId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => isVideo && setHoveredVideoId(item.id)}
                onMouseLeave={() => isVideo && setHoveredVideoId(null)}
                className="group relative overflow-hidden rounded-[24px] card-editorial aspect-[3/4] shadow-[var(--shadow-editorial)]"
              >
                {isVideo && isHovered ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={item.poster}
                    preload="none"
                    aria-label={item.title}
                    className="w-full h-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <SmartImage
                    src={isVideo ? item.poster : item.src}
                    alt={item.title}
                    _category={item.category}
                    title={item.title}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {isVideo && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md border border-[var(--color-gold-accent)]/40 text-[var(--color-gold-accent)] text-[10px] uppercase tracking-wider font-semibold rounded-full shadow-lg">
                    <Play className="w-3 h-3 fill-[var(--color-gold-accent)]" />
                    <span>Reel</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300 p-5 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium group-hover:text-[var(--color-gold-accent)] transition-colors">
                    <Eye className="w-3.5 h-3.5" /> View Photo
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to Full Gallery Page */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-gold-accent)] hover:text-[#070707] transition-all duration-300 rounded-[16px] shadow-xl"
          >
            View Full Gallery & Instagram Video Reels
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
