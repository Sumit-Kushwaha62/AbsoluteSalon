import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServicePriceRow } from './ServicePriceRow';
import { sanitizePricingLabel } from '../../utils/pricingFormatter';

/**
 * ServicePriceCatalogue Component
 * Premium salon menu catalogue rendering visual package groups, static headings,
 * package descriptions, and clean direct pricing rows.
 */
export const ServicePriceCatalogue = ({
  category,
  searchResults,
  searchQuery
}) => {
  // 1. Search Mode: Render matching price rows directly
  if (searchQuery && searchQuery.trim() !== '') {
    return (
      <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 transition-colors duration-300 max-w-[820px] mx-auto">
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

  // 2. Normal Category Mode: Package headers & clean price rows
  return (
    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-2xl sm:rounded-3xl p-4 sm:p-8 transition-colors duration-300 max-w-[820px] mx-auto">
      {/* Category Header */}
      <div className="pb-6 sm:pb-8 border-b border-[var(--color-border-medium)]">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold block mb-1">
          CATALOGUE MENU
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

      {/* Services List with Static Section Headings and Package Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-6 sm:mt-8 space-y-8 sm:space-y-10"
        >
          {category.items.map((item) => (
            <div key={item.id || item.name} className="space-y-4">
              {/* Item Heading */}
              <div className="pt-2 pb-1 border-b border-[var(--color-gold-accent)]/25 mb-4">
                <h3 className="font-serif-display text-xl sm:text-2xl text-[var(--color-text-primary)] font-normal tracking-wide">
                  {sanitizePricingLabel(item.name)}
                </h3>
                {item.shortDescription && (
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">
                    {sanitizePricingLabel(item.shortDescription)}
                  </p>
                )}
              </div>

              {/* Package Groups */}
              {item.priceGroups && item.priceGroups.length > 0 ? (
                item.priceGroups.map((group, gIdx) => (
                  <div
                    key={group.title || gIdx}
                    className="bg-[var(--color-bg-elevated)]/50 border border-[var(--color-border-subtle)] rounded-xl p-4 sm:p-5 mb-5 last:mb-0 shadow-xs"
                  >
                    {/* Group/Package Header */}
                    <div className="pb-2.5 mb-2.5 border-b border-[var(--color-border-subtle)]">
                      <h4 className="font-medium text-sm sm:text-base text-[var(--color-text-primary)]">
                        {sanitizePricingLabel(group.title)}
                      </h4>
                      {group.description && (
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                          {sanitizePricingLabel(group.description)}
                        </p>
                      )}
                    </div>

                    {/* Group Price Rows */}
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
                ))
              ) : item.priceRows && item.priceRows.length > 0 ? (
                /* Flat Price Rows Container */
                <div className="bg-[var(--color-bg-elevated)]/30 border border-[var(--color-border-subtle)] rounded-xl p-4 sm:p-5 mb-5">
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
                </div>
              ) : null}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


