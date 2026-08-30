import { useEffect, useRef, useState } from 'react';

// Reveals an element the first time it scrolls into view. Falls back to
// "always visible" when IntersectionObserver isn't available, and also
// force-reveals after a timeout no matter what — content must never stay
// permanently hidden just because an observer callback didn't fire (e.g.
// full-page captures, print views, or a missed frame).
export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px', ...options }
    );

    observer.observe(node);
    const fallback = setTimeout(() => setInView(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return [ref, inView];
}
