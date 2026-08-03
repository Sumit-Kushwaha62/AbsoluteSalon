import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { SmartMedia } from './SmartMedia';

export const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      aria-label={`Before and after image comparison slider for ${title || 'transformation'}`}
      role="slider"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuetext={`${Math.round(sliderPosition)} percent before image visible`}
      className="relative w-full max-w-md mx-auto aspect-[9/16] sm:aspect-[4/5] overflow-hidden select-none rounded-[24px] card-editorial border border-[var(--color-border-medium)] focus:outline-none focus:ring-2 focus:ring-[#CDA647] shadow-[var(--shadow-editorial)]"
    >
      {/* 1. After Image (Base Full Width) */}
      <div className="absolute inset-0 w-full h-full">
        <SmartMedia src={afterImage} alt={`${title || 'Transformation'} After`} aspectRatio="w-full h-full" />
        <span className="absolute top-4 right-4 z-10 bg-black/75 backdrop-blur-md text-[var(--color-gold-accent)] text-[9px] uppercase tracking-widest px-3 py-1 font-semibold rounded-full border border-[var(--color-gold-accent)]/40 shadow-lg">
          After
        </span>
      </div>

      {/* 2. Before Image (Clipped Overlay - Exact Container Width Match) */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
        >
          <SmartMedia src={beforeImage} alt={`${title || 'Transformation'} Before`} aspectRatio="w-full h-full" />
          <span className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-md text-white text-[9px] uppercase tracking-widest px-3 py-1 font-semibold rounded-full border border-white/20 shadow-lg">
            Before
          </span>
        </div>
      </div>

      {/* 3. Slider Handle Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[var(--color-gold-accent)] z-20 shadow-[0_0_12px_var(--color-gold-accent)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[var(--color-bg-base)] border-2 border-[var(--color-gold-accent)] text-[var(--color-gold-accent)] flex items-center justify-center shadow-2xl">
          <MoveHorizontal className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
