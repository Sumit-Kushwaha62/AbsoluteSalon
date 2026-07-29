import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * ServiceCategoryTabs Component
 * Accessible, scan-friendly category navigation tabs with gold luxury styling.
 * Supports sticky header offset, desktop horizontal pills, and mobile horizontal scrolling.
 */
export const ServiceCategoryTabs = ({ categories, activeCategory, onSelectCategory }) => {
  const tabsRef = useRef(null);

  // Auto-scroll active tab into view on mobile when changed
  useEffect(() => {
    if (tabsRef.current) {
      const activeEl = tabsRef.current.querySelector('[aria-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[70px] sm:top-[76px] z-30 bg-[var(--color-header-glass)] backdrop-blur-xl border-b border-[var(--color-border-medium)] py-3 mb-8 sm:mb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Service Categories"
          className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none py-1 px-1 -mx-1 focus:outline-none"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B45C] ${
                  isActive
                    ? 'text-[#070707] font-semibold shadow-[0_4px_20px_rgba(214,180,92,0.3)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)] border border-transparent'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E2C978] via-[#CDA647] to-[#B88A2F]"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
