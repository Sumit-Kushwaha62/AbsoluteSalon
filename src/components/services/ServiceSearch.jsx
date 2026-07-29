import React from 'react';
import { Search, X } from 'lucide-react';

/**
 * ServiceSearch Component
 * Lightweight search bar for filtering services across names, variants, and categories.
 */
export const ServiceSearch = ({ searchQuery, onSearchChange, onClearSearch }) => {
  return (
    <div className="relative max-w-xl mx-auto mb-8 sm:mb-10 px-4">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-4 h-4 text-[var(--color-gold-accent)] pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search services, treatments, or prices..."
          aria-label="Search services"
          className="w-full bg-[var(--color-input-bg)] border border-[var(--color-input-border)] rounded-full pl-11 pr-10 py-3 text-xs sm:text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]/60 focus:outline-none focus:border-[var(--color-gold-accent)] focus:ring-1 focus:ring-[var(--color-gold-accent)] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={onClearSearch}
            aria-label="Clear search"
            className="absolute right-3.5 p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors rounded-full focus:outline-none focus:ring-1 focus:ring-[#D6B45C]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
