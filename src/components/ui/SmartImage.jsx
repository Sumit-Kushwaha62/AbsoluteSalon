import React, { useState } from 'react';

/**
 * SmartImage Component
 * High-performance image renderer with stable dimensions and native lazy loading.
 */
export const SmartImage = ({
  src,
  alt = '',
  _category = 'Beauty',
  title = '',
  width = 1200,
  height = 800,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false, // If true, eager load with fetchPriority="high"
  className = '',
  aspect = '',
  onClick
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        onClick={onClick}
        className={`relative overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] flex flex-col items-center justify-center p-6 text-center group ${aspect} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      >
        <div className="w-10 h-10 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center mb-2 text-[var(--color-gold-accent)]">
          <svg className="w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-sans">
          Image coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || title}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      draggable="false"
      onError={() => setHasError(true)}
      onClick={onClick}
      className={`object-cover w-full h-full ${className}`}
    />
  );
};
