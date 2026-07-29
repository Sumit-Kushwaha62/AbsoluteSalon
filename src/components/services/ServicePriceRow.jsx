import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';

/**
 * ServicePriceRow Component
 * Renders a scan-friendly, elegant luxury salon menu price row.
 * Supports single prices, multi-variant length rows, and grouped price blocks.
 */
export const ServicePriceRow = ({ service }) => {
  if (!service) return null;

  const getWhatsAppUrl = (variantName) => {
    const detail = variantName && variantName !== service.name ? ` - ${variantName}` : '';
    const message = `Hi Absolute Salon, I would like to enquire about ${service.name}${detail}.`;
    return BUSINESS_INFO.whatsapp.getUrl(message);
  };

  // Helper to render pricing rows
  const renderRowItem = (label, price, idx) => {
    const isMainName = !label || label === service.name || label.trim() === '';
    const displayLabel = isMainName ? null : label;

    return (
      <div
        key={`${label}-${idx}`}
        className="flex items-center justify-between gap-3 py-1.5 hover:bg-[var(--color-bg-elevated)] px-2 rounded-md transition-colors text-xs sm:text-sm"
      >
        {displayLabel ? (
          <span className="text-[var(--color-text-secondary)] leading-tight font-medium uppercase tracking-wider text-[11px] sm:text-xs">
            {displayLabel}
          </span>
        ) : (
          <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]/70">Standard</span>
        )}

        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono font-semibold text-[var(--color-gold-accent)] text-sm sm:text-base text-right tracking-tight">
            {price}
          </span>
          <a
            href={getWhatsAppUrl(displayLabel)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${service.name} ${displayLabel ? displayLabel : ''} on WhatsApp`}
            className="inline-flex items-center justify-center p-1.5 rounded-full bg-[var(--color-bg-elevated)] hover:bg-[var(--color-border-gold)] hover:text-[var(--color-gold-accent)] text-[var(--color-text-muted)] transition-all border border-[var(--color-border-subtle)] focus:outline-none focus:ring-1 focus:ring-[#D6B45C]"
            title="Book or enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="py-5 border-b border-[var(--color-border-subtle)] last:border-b-0 group transition-colors">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
        
        {/* Left Side: Service Name & Description (65-70%) */}
        <div className="md:w-[65%] space-y-1.5">
          <div className="flex items-baseline gap-3">
            <h4 className="font-serif-display text-xl sm:text-2xl text-[var(--color-text-primary)] group-hover:text-[var(--color-gold-accent)] transition-colors leading-snug font-normal">
              {service.name}
            </h4>
          </div>

          {service.shortDescription && (
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xl">
              {service.shortDescription}
            </p>
          )}
        </div>

        {/* Right Side: Pricing Area (30-35%) */}
        <div className="md:w-[35%] w-full shrink-0 flex flex-col justify-center space-y-1 bg-[var(--color-bg-elevated)] md:bg-transparent p-3 md:p-0 rounded-xl border border-[var(--color-border-subtle)] md:border-none">
          {/* Case 1: Grouped Prices */}
          {service.priceGroups && service.priceGroups.length > 0 ? (
            <div className="space-y-3">
              {service.priceGroups.map((group, gIdx) => (
                <div key={group.title || gIdx} className="space-y-1">
                  {group.title && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-accent)] font-semibold block px-2 pb-0.5 border-b border-[var(--color-gold-accent)]/20">
                      {group.title}
                    </span>
                  )}
                  {group.rows.map((row, rIdx) => renderRowItem(row.label, row.price, `${gIdx}-${rIdx}`))}
                </div>
              ))}
            </div>
          ) : service.priceRows && service.priceRows.length > 0 ? (
            /* Case 2: Flat Price Rows */
            <div className="space-y-1">
              {service.priceRows.map((row, rIdx) => renderRowItem(row.label, row.price, rIdx))}
            </div>
          ) : (
            /* Case 3: Starting / Custom Price Fallback */
            <div className="flex items-center justify-between gap-4 p-2 text-xs sm:text-sm">
              <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]/70">Price</span>
              <div className="flex items-center gap-3">
                <span className="font-mono font-semibold text-[var(--color-gold-accent)] text-sm sm:text-base">
                  {service.startingPrice || 'Price on consultation'}
                </span>
                <a
                  href={getWhatsAppUrl('')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${service.name} on WhatsApp`}
                  className="inline-flex items-center justify-center p-1.5 rounded-full bg-[var(--color-bg-elevated)] hover:bg-[var(--color-border-gold)] hover:text-[var(--color-gold-accent)] text-[var(--color-text-muted)] transition-all border border-[var(--color-border-subtle)] focus:outline-none focus:ring-1 focus:ring-[#D6B45C]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
