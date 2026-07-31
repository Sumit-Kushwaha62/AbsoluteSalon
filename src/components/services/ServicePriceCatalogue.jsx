import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServicePriceRow } from './ServicePriceRow';
import { sanitizePricingLabel } from '../../utils/pricingFormatter';

/**
 * ServicePriceCatalogue Component
 * Clean, structured salon menu catalogue inspired by premium salon directory UIs.
 * Renders unified service cards with prominent top header banners, clear section tags,
 * and edge-to-edge pricing rows.
 */
export const ServicePriceCatalogue = ({
  category,
  searchResults,
  searchQuery,
  activeSubCategory = 'all'
}) => {
  // 1. Search Mode: Render matching price rows directly
  if (searchQuery && searchQuery.trim() !== '') {
    return (
      <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 transition-colors duration-300 max-w-[820px] mx-auto shadow-sm">
        <div className="pb-4 sm:pb-6 border-b border-[var(--color-border-medium)] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold">
              SEARCH RESULTS
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[var(--color-text-primary)] mt-0.5 font-normal">
              Matches for &ldquo;{searchQuery}&rdquo;
            </h3>
          </div>
          <span className="text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-3 py-1 rounded-full border border-[var(--color-border-subtle)] w-fit">
            {searchResults.length} {searchResults.length === 1 ? 'service found' : 'services found'}
          </span>
        </div>

        {searchResults.length > 0 ? (
          <div className="mt-4 sm:mt-6 divide-y divide-[var(--color-border-subtle)]">
            {searchResults.map((row, idx) => (
              <ServicePriceRow
                key={`${row.context}-${row.label}-${idx}`}
                label={row.label}
                price={row.price}
                variant={row.variant}
                description={row.description}
                context={row.context}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 sm:py-16 text-center text-[var(--color-text-muted)] space-y-2">
            <p className="font-serif-display text-xl sm:text-2xl text-[var(--color-text-primary)]">
              No matching services found
            </p>
            <p className="text-xs max-w-sm mx-auto">
              Try adjusting your search terms or select a category tab above.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (!category) return null;

  const displayedItems = activeSubCategory === 'all'
    ? category.items
    : category.items.filter((item) => item.id === activeSubCategory);

  return (
    <div className="max-w-[820px] mx-auto space-y-6 sm:space-y-8">
      {/* Category Overview Header */}
      <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-colors duration-300 shadow-xs">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-bold block mb-1">
          SALON MENU & PRICE LIST
        </span>
        <h2 className="font-serif-display text-2xl sm:text-4xl text-[var(--color-text-primary)] font-normal leading-tight">
          {category.name}
        </h2>
        {category.description && (
          <p className="mt-2 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
            {category.description}
          </p>
        )}
      </div>

      {/* Services Directory: Unified Cards Per Sub-Category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${category.id}-${activeSubCategory}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          {displayedItems.map((item) => (
            <div
              key={item.id || item.name}
              className="bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm transition-all hover:border-[var(--color-gold-accent)]/50"
            >
              {/* Clean Top Header Banner Bar */}
              <div className="bg-[var(--color-bg-elevated)]/70 border-b border-[var(--color-border-medium)] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5 min-w-0 flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-bold block">
                    {category.name}
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl text-[var(--color-text-primary)] font-normal leading-snug">
                    {sanitizePricingLabel(item.name)}
                  </h3>
                  {item.shortDescription && (
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pt-0.5">
                      {sanitizePricingLabel(item.shortDescription)}
                    </p>
                  )}
                </div>

                {item.startingPrice && (
                  <span className="text-[11px] font-mono text-[var(--color-gold-accent)] font-semibold px-3 py-1 rounded-full bg-[var(--color-gold-accent)]/15 border border-[var(--color-gold-accent)]/30 shrink-0 self-start sm:self-center">
                    From {item.startingPrice}
                  </span>
                )}
              </div>

              {/* Card Content Body: Groups or Flat Price Rows */}
              <div className="p-3 sm:p-5">
                {item.priceGroups && item.priceGroups.length > 0 ? (
                  <div className="space-y-5">
                    {item.priceGroups.map((group, gIdx) => (
                      <div key={group.title || gIdx} className="space-y-1">
                        {/* Sub-Group Header Bar */}
                        <div className="px-2 py-1.5 bg-[var(--color-bg-elevated)]/40 rounded-lg border-l-2 border-[var(--color-gold-accent)] mb-2 flex flex-col sm:flex-row sm:items-center justify-between">
                          <h4 className="font-semibold text-xs sm:text-sm text-[var(--color-text-primary)] tracking-wide">
                            {sanitizePricingLabel(group.title)}
                          </h4>
                          {group.description && (
                            <span className="text-[11px] text-[var(--color-text-muted)] font-normal">
                              {sanitizePricingLabel(group.description)}
                            </span>
                          )}
                        </div>

                        {/* Sub-Group Price Rows */}
                        <div className="divide-y divide-[var(--color-border-subtle)]">
                          {group.rows.map((row, rIdx) => (
                            <ServicePriceRow
                              key={`${group.title}-${rIdx}`}
                              label={row.label}
                              price={row.price}
                              variant={row.variant}
                              description={row.description || ''}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : item.priceRows && item.priceRows.length > 0 ? (
                  /* Flat Price Rows Container */
                  <div className="divide-y divide-[var(--color-border-subtle)]">
                    {item.priceRows.map((row, rIdx) => (
                      <ServicePriceRow
                        key={`${item.id}-${rIdx}`}
                        label={row.label || item.name}
                        price={row.price}
                        variant={row.variant}
                        description={
                          row.description ||
                          (item.priceRows.length === 1 ? item.shortDescription : '')
                        }
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
