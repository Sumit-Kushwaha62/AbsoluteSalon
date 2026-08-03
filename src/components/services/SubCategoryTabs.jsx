import React, { useRef, useEffect } from 'react';

/**
 * SubCategoryTabs Component
 * Secondary level sub-filter chips for specific service sections (Haircuts, Hair Spa, Richfeel, Medi-Facials, etc.)
 * Strictly clean text pills with zero icons or emojis.
 */
export const SubCategoryTabs = ({ items, activeSubCategory, onSelectSubCategory }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSubCategory]);

  if (!items || items.length <= 1) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 mb-6">
      <div
        ref={scrollRef}
        className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-1.5 px-1 -mx-1 focus:outline-none"
      >
        {/* All Items Pill */}
        <button
          type="button"
          data-active={activeSubCategory === 'all'}
          onClick={() => onSelectSubCategory('all')}
          className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all whitespace-nowrap shrink-0 ${
            activeSubCategory === 'all'
              ? 'bg-[var(--color-gold-accent)] text-[#070707] font-semibold shadow-sm scale-[1.02]'
              : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]'
          }`}
        >
          All Services
        </button>

        {/* Specific Sub-Category Item Pills */}
        {items.map((item) => {
          const isActive = activeSubCategory === item.id;
          const cleanName = item.name;

          return (
            <button
              key={item.id}
              type="button"
              data-active={isActive}
              onClick={() => onSelectSubCategory(item.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-[var(--color-gold-accent)] text-[#070707] font-semibold shadow-sm scale-[1.02]'
                  : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]'
              }`}
            >
              {cleanName}
            </button>
          );
        })}
      </div>
    </div>
  );
};
