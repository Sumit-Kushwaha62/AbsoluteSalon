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

  return (
    <div className="py-2 px-2.5 sm:px-3 border-b border-[var(--color-border-subtle)] last:border-b-0 group transition-colors hover:bg-[var(--color-bg-elevated)]/40 rounded-md">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:gap-5">
        {/* Left Column: Service Title */}
        <div className="min-w-0 flex flex-col justify-center">
          {context && (
            <span className="text-[10px] uppercase tracking-wider text-[var(--color-gold-accent)] font-semibold mb-0.5">
              {context}
            </span>
          )}
          <span className="text-xs sm:text-sm text-[var(--color-text-primary)] font-normal leading-snug group-hover:text-[var(--color-gold-accent)] transition-colors">
            {displayTitle}
          </span>
          {description && (
            <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] mt-0.5 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Right Column: Compact Inline Flex Group (Variant + Price as ONE unit) */}
        <div className="inline-flex items-center justify-end gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
          {variant && (
            <span className="text-xs text-[var(--color-text-muted)] font-medium">
              {variant}
            </span>
          )}
          <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--color-gold-accent)] tracking-tight">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};




