'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LoadingScreen from './LoadingScreen';

/**
 * Shows the LoadingScreen overlay during client-side navigation between
 * pages, with a guaranteed minimum visible duration so the animation is
 * actually perceivable (Next.js route changes are often too fast to see
 * the framework-provided loading.tsx).
 *
 * The overlay is triggered when the user clicks an internal <a>/<Link>
 * and hidden once the pathname updates AND the minimum duration has
 * elapsed.
 */
const MIN_DURATION = 800; // ms — long enough to register, short enough not to annoy
const FAILSAFE = 2500;    // ms — hide even if pathname never changes

export default function RouteTransition() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const startRef = useRef<number>(0);
  const failsafeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Intercept internal-link clicks to show the overlay immediately
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Ignore non-left clicks and modifier combos (new tab, etc.)
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest('a');
      if (!anchor) return;

      // Skip external links, new tab, anchors, mailto/tel
      if (anchor.target === '_blank') return;
      const raw = anchor.getAttribute('href');
      if (!raw) return;
      if (raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return;

      let nextPath: string;
      try {
        const url = new URL(anchor.href, window.location.href);
        if (url.origin !== window.location.origin) return;
        nextPath = url.pathname + url.search;
      } catch {
        return;
      }

      // Same-route click — nothing to load
      if (nextPath === pathname || nextPath === `${pathname}${window.location.search}`) return;

      startRef.current = Date.now();
      setVisible(true);

      if (failsafeRef.current) clearTimeout(failsafeRef.current);
      failsafeRef.current = setTimeout(() => setVisible(false), FAILSAFE);
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
      if (failsafeRef.current) clearTimeout(failsafeRef.current);
    };
  }, [pathname]);

  // When the pathname updates, hide the overlay after the minimum duration
  useEffect(() => {
    if (!visible) return;
    const elapsed = Date.now() - startRef.current;
    const remaining = Math.max(0, MIN_DURATION - elapsed);
    const t = setTimeout(() => {
      setVisible(false);
      if (failsafeRef.current) {
        clearTimeout(failsafeRef.current);
        failsafeRef.current = null;
      }
    }, remaining);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!visible) return null;
  return <LoadingScreen />;
}
