import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element once any part of it enters the viewport.
 * Uses threshold 0 + a small negative bottom margin so tall blocks
 * (grids, two-column layouts) never sit invisible while on screen.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    // Already on screen (e.g. hash navigation / short pages) — reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
