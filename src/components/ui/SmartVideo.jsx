import { useEffect, useRef, useState } from 'react';

export const SmartVideo = ({
  src,
  poster,
  muted = true,
  loop = true,
  autoPlay = true,
  controls = false,
  className = '',
  onError,
  ariaLabel,
}) => {
  const videoRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener?.('change', updatePreference);
    return () => mediaQuery.removeEventListener?.('change', updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === 'undefined') {
      setIsNearViewport(true);
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setIsNearViewport(true);
      },
      { rootMargin: '250px 0px', threshold: 0.05 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isNearViewport || !autoPlay || prefersReducedMotion) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [autoPlay, isNearViewport, isVisible, prefersReducedMotion]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay && !prefersReducedMotion}
      muted={muted}
      loop={loop}
      controls={controls || prefersReducedMotion}
      playsInline
      poster={poster}
      preload={isNearViewport ? 'metadata' : 'none'}
      onError={onError}
      aria-label={ariaLabel}
      className={className}
    >
      {isNearViewport && <source src={src} type="video/mp4" />}
    </video>
  );
};
