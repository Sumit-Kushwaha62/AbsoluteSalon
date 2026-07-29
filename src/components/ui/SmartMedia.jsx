import React, { useState } from 'react';

/**
 * SmartMedia Component
 * Clean, production-hardened media loader with quiet visual fallback when media fails or is absent.
 */
export const SmartMedia = ({
  type = 'image', // 'image' | 'video'
  src,
  poster,
  alt = 'Absolute Salon',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  onClick
}) => {
  const [hasError, setHasError] = useState(false);
  const [_isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        onClick={onClick}
        className={`relative overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] flex flex-col items-center justify-center p-6 text-center group ${aspectRatio} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      >
        <div className="w-10 h-10 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-medium)] flex items-center justify-center mb-2 text-[var(--color-gold-accent)]">
          <svg className="w-5 h-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-[10px] text-[var(--color-text-muted)] font-sans tracking-wider uppercase">
          Media coming soon
        </span>
      </div>
    );
  }

  if (type === 'video') {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${className}`} onClick={onClick}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload="metadata"
          onError={() => setHasError(true)}
          onLoadedData={() => setIsLoaded(true)}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`} onClick={onClick}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </div>
  );
};
