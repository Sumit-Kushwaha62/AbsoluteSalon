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
}) => {
  const videoRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    if (!video || !isNearViewport || !autoPlay) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [autoPlay, isNearViewport, isVisible]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      poster={poster}
      preload={isNearViewport ? 'metadata' : 'none'}
      onError={onError}
      className={className}
    >
      {isNearViewport && <source src={src} type="video/mp4" />}
    </video>
  );
};