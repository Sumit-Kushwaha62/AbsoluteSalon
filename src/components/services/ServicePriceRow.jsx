import React from 'react';
import { extractRowVariant } from '../../utils/pricingFormatter';

/**
 * ServicePriceRow Component
 * Render clean 2-column pricing rows [Service Name | Compact Variant + Price Meta].
 */
export const ServicePriceRow = ({
  label,
  price,
  variant: rawVariant,
  description,
  context
}) => {
  if (!label && !price) return null;

  const { cleanTitle, variant } = extractRowVariant(label, rawVariant);
  const displayTitle = cleanTitle || label;

  // Suppress variant if it duplicates the display title
  const isDuplicateVariant =
    variant &&
    displayTitle &&
    displayTitle.trim().toLowerCase() === variant.trim().toLowerCase();

  const showVariant = variant && !isDuplicateVariant;

  return (
    <div className="py-2.5 px-2.5 sm:px-3 border-b border-[var(--color-border-subtle)] last:border-b-0 group transition-colors hover:bg-[var(--color-bg-elevated)]/40 rounded-lg">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        {/* Left Column: Service Title + Variant Badge + Description */}
        <div className="min-w-0 flex-1 flex flex-col justify-start pr-1 [overflow-wrap:anywhere] break-words">
          {context && (
            <span className="text-[10px] uppercase tracking-wider text-[var(--color-gold-accent)] font-semibold mb-0.5 block">
              {context}
            </span>
          )}
          
          <div className="flex flex-wrap items-center gap-1.5 leading-snug">
            <span className="text-xs sm:text-sm text-[var(--color-text-primary)] font-normal group-hover:text-[var(--color-gold-accent)] transition-colors break-words">
              {displayTitle}
            </span>
            
            {showVariant && (
              <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-gold-accent)] bg-[var(--color-bg-elevated)] border border-[var(--color-gold-accent)]/30 rounded-md shrink-0">
                {variant}
              </span>
            )}
          </div>

          {description && (
            <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed break-words">
              {description}
            </p>
          )}
        </div>

        {/* Right Column: Price Only (Clean, Isolated, Uncrowded) */}
        <div className="shrink-0 pt-0.5 text-right whitespace-nowrap">
          <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--color-gold-accent)] tracking-tight">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};




