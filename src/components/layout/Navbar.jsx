import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { LuxuryButton } from '../ui/LuxuryButton';
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', end: true },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 pointer-events-none max-w-full overflow-hidden">
        <div
          className={`w-full max-w-[1500px] mx-auto transition-all duration-500 pointer-events-auto rounded-[22px] px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between min-w-0 navbar-glass-strip ${
            isScrolled ? 'shadow-xl' : ''
          }`}
        >
          {/* Logo & Brand Branding - Left Aligned */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Absolute Salon Home"
            className="flex items-center gap-2 sm:gap-3 focus:outline-none min-w-0 flex-shrink-0"
          >
            <img
              src="/brand/absolute-salon-logo.webp?v=2.0"
              alt="Absolute Salon Logo"
              width="512"
              height="512"
              decoding="async"
              className="h-8 w-8 xs:h-9 xs:w-9 sm:h-11 sm:w-11 object-contain shrink-0 bg-transparent"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-serif-display text-sm xs:text-base sm:text-lg md:text-xl font-bold tracking-wide text-[var(--color-text-primary)] whitespace-nowrap">
                ABSOLUTE SALON
              </span>
              <span className="text-[8px] xs:text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.2em] uppercase text-[var(--color-gold-accent)] font-bold whitespace-nowrap">
                JABALPUR • EST. 15+ YRS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (>= 768px / md:) */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-6 sm:space-x-8 min-w-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.18em] transition-colors relative py-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B45C] rounded-sm ${
                    isActive
                      ? 'text-[var(--color-gold-accent)] font-semibold'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--color-gold-accent)]"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Book Appointment CTA & Theme Toggle (>= 768px / md:) */}
          <div className="hidden md:flex items-center justify-end gap-3 flex-shrink-0 min-w-0">
            <ThemeToggle />

            <LuxuryButton
              href={BUSINESS_INFO.whatsapp.getUrl("Hi Absolute Salon, I would like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="py-2.5 px-4 sm:px-5 text-[10px] sm:text-[11px] whitespace-nowrap flex-shrink-0"
              ariaLabel="Book Appointment on WhatsApp"
            >
              Book Appointment
            </LuxuryButton>
          </div>

          {/* Mobile Actions: Theme Toggle + Hamburger (< 768px) */}
          <div className="md:hidden flex items-center justify-end gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="p-2 text-[var(--color-text-primary)] hover:text-[var(--color-gold-accent)] focus:outline-none focus:ring-2 focus:ring-[#D6B45C] rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-base)] flex flex-col justify-between p-8 pt-28 overflow-y-auto border-b border-[var(--color-border-medium)]"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--color-border-medium)] pb-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold-accent)] font-semibold">
                  Menu Navigation
                </span>
                <ThemeToggle />
              </div>

              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.03 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.end}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-serif-display text-3xl transition-colors block ${
                        isActive
                          ? 'text-[var(--color-gold-accent)] font-semibold'
                          : 'text-[var(--color-text-primary)] hover:text-[var(--color-gold-accent)]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--color-border-medium)] pt-6 space-y-4">
              <LuxuryButton
                href={BUSINESS_INFO.whatsapp.getUrl("Hi Absolute Salon, I would like to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 text-xs"
              >
                Book Appointment
              </LuxuryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
