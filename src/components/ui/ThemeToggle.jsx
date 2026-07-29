import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`min-w-[40px] min-h-[40px] p-2.5 rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-[#D6B45C]/40 text-[#9C978F] hover:text-[#D6B45C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B45C] ${
        isDark ? 'bg-white/5' : 'bg-black/5'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
