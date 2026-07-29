import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const LuxuryButton = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'text'
  to,
  href,
  onClick,
  icon = true,
  className = '',
  target,
  rel,
  ariaLabel
}) => {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';

  const baseStyles = "inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-[#CDA647]";
  
  const variantStyles = isPrimary
    ? "btn-champagne-primary px-7 py-3.5"
    : isSecondary
    ? "btn-champagne-secondary px-7 py-3.5"
    : "text-[var(--color-text-primary)] hover:text-[var(--color-gold-accent)] px-3 py-2";

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current" />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`group ${baseStyles} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={`group ${baseStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`group ${baseStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
};
