import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { InstagramIcon as Instagram } from '../ui/InstagramIcon';
import { MEDIA_ASSETS } from '../../data/media';
import { BUSINESS_INFO } from '../../data/business';
import { SmartImage } from '../ui/SmartImage';
import { SmartVideo } from '../ui/SmartVideo';

export const SocialReels = () => {
  const [mutedStates, setMutedStates] = useState(
    MEDIA_ASSETS.reels.reduce((acc, reel) => ({ ...acc, [reel.id]: true }), {})
  );
  const [videoErrors, setVideoErrors] = useState({});

  const toggleMute = (id) => {
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleVideoError = (id) => {
    setVideoErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="reels" className="py-16 sm:py-20 md:py-32 bg-[var(--color-bg-alt)] border-t border-[var(--color-border-medium)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> INSTAGRAM REELS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[var(--color-text-primary)] font-normal">
            BEAUTY IN MOTION
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-3 max-w-md">
            Watch real haircut perfection, nanoplastia treatments, and balayage styling reels directly from our Instagram.
          </p>
          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-6" />
        </div>

        {/* Reels Responsive Grid */}
        <div className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:grid-cols-3 gap-4 sm:gap-6 pb-5 md:pb-0 scrollbar-none mb-10 sm:mb-12 scroll-px-4">
          {MEDIA_ASSETS.reels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="w-[82vw] max-w-[310px] sm:w-auto sm:min-w-[300px] sm:max-w-none md:min-w-0 flex-shrink-0 md:flex-shrink snap-start sm:snap-center relative group rounded-[20px] sm:rounded-[24px] overflow-hidden card-editorial aspect-[4/5] sm:aspect-[3/4] md:aspect-[9/16]"
            >
              {!videoErrors[reel.id] ? (
                <SmartVideo
                  src={reel.video}
                  poster={reel.poster}
                  muted={mutedStates[reel.id]}
                  onError={() => handleVideoError(reel.id)}
                  className="w-full h-full object-cover object-center scale-[1.08] sm:scale-105 md:scale-100 transition-transform duration-500"
                />
              ) : (
                <SmartImage
                  src={reel.poster}
                  alt={reel.title}
                  _category="Instagram Reel"
                  title={reel.title}
                />
              )}

              {/* Reel Dark Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity p-4 sm:p-5 flex flex-col justify-between">
                
                {/* Top Header info */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-black/70 backdrop-blur-md border border-[var(--color-gold-accent)]/40 text-[var(--color-gold-accent)] text-[10px] uppercase font-semibold rounded-full">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Reel</span>
                  </div>

                  {!videoErrors[reel.id] && (
                    <button
                      type="button"
                      onClick={() => toggleMute(reel.id)}
                      className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:text-[var(--color-gold-accent)] transition-colors"
                      aria-label={mutedStates[reel.id] ? "Unmute reel video" : "Mute reel video"}
                    >
                      {mutedStates[reel.id] ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-[var(--color-gold-accent)]" />
                      )}
                    </button>
                  )}
                </div>

                {/* Bottom Details */}
                <div className="z-10">
                  <h4 className="font-serif-display text-lg sm:text-xl text-white mb-2 leading-snug">
                    {reel.title}
                  </h4>
                  <a
                    href={BUSINESS_INFO.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-gold-accent)] hover:underline uppercase tracking-wider font-semibold"
                  >
                    View on Instagram →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow Instagram Button */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-bg-card)] border border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-gold-accent)] hover:text-[#070707] transition-all duration-300 rounded-[16px] shadow-xl"
          >
            <Instagram className="w-4 h-4" />
            FOLLOW {BUSINESS_INFO.socials.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
};
