import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServicePriceRow } from './ServicePriceRow';

/**
 * ServicePriceCatalogue Component
 * Premium salon menu catalogue rendering service rows in a clean, scan-friendly table layout.
 * Supports second-level subcategory filters and search results.
 */
export const ServicePriceCatalogue = ({
  category,
  activeSubcategory,
  onSelectSubcategory,
  searchResults,
  searchQuery
}) => {
  // If search query is active, render filtered search results across categories
  if (searchQuery && searchQuery.trim() !== '') {
    return (
      <div className="card-editorial bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-[var(--shadow-editorial)] transition-colors duration-300">
        <div className="pb-6 border-b border-[var(--color-border-medium)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold">
              SEARCH RESULTS
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[var(--color-text-primary)] mt-1 font-normal">
              Matches for &ldquo;{searchQuery}&rdquo;
            </h3>
          </div>
          <span className="text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full border border-[var(--color-border-subtle)] w-fit">
            {searchResults.length} {searchResults.length === 1 ? 'service found' : 'services found'}
          </span>
        </div>

        {searchResults.length > 0 ? (
          <div className="mt-6 divide-y divide-[var(--color-border-subtle)]">
            {searchResults.map((item) => (
              <ServicePriceRow key={`${item.categoryId}-${item.id}`} service={item} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-[var(--color-text-muted)] space-y-3">
            <p className="font-serif-display text-2xl text-[var(--color-text-primary)]">No matching services found</p>
            <p className="text-xs max-w-sm mx-auto">
              Try adjusting your search terms or browse our category menu above.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (!category) return null;

  // Filter items by subcategory if selected
  const itemsToDisplay = activeSubcategory && activeSubcategory !== 'all'
    ? category.items.filter((item) => item.id === activeSubcategory)
    : category.items;

  return (
    <div className="card-editorial bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-[var(--shadow-editorial)] transition-colors duration-300">
      {/* Category Header */}
      <div className="pb-8 border-b border-[var(--color-border-medium)]">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold block mb-1">
          CATALOGUE MENU
        </span>
        <h3 className="font-serif-display text-3xl sm:text-4xl text-[var(--color-text-primary)] font-normal leading-tight">
          {category.name}
        </h3>
        {category.description && (
          <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
            {category.description}
          </p>
        )}

        {/* Optional Second-Level Subcategory Filter Pills */}
        {category.items && category.items.length > 1 && (
          <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            <button
              type="button"
              onClick={() => onSelectSubcategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-[#D6B45C] ${
                !activeSubcategory || activeSubcategory === 'all'
                  ? 'bg-[var(--color-gold-accent)]/20 text-[var(--color-gold-accent)] font-semibold border border-[var(--color-gold-accent)]/40'
                  : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-transparent'
              }`}
            >
              All {category.name}
            </button>

            {category.items.map((subItem) => (
              <button
                key={subItem.id}
                type="button"
                onClick={() => onSelectSubcategory(subItem.id)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-[#D6B45C] ${
                  activeSubcategory === subItem.id
                    ? 'bg-[var(--color-gold-accent)]/20 text-[var(--color-gold-accent)] font-semibold border border-[var(--color-gold-accent)]/40'
                    : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border border-transparent'
                }`}
              >
                {subItem.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Services List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${category.id}-${activeSubcategory || 'all'}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mt-6"
        >
          {itemsToDisplay.map((subGroup) => (
            <div key={subGroup.id || subGroup.name} className="mb-8 last:mb-0">
              {/* Subgroup Heading */}
              {itemsToDisplay.length > 1 && (
                <div className="pt-4 pb-2 mb-2 border-b border-[var(--color-gold-accent)]/20">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold">
                    {subGroup.name}
                  </h4>
                </div>
              )}

              {/* Service Row */}
              <ServicePriceRow service={subGroup} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
