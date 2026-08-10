"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Observes the returned ref with IntersectionObserver and reports whether
 * the element is currently in view. Unlike a "reveal once" hook, this
 * toggles back to `false` when the element scrolls out of view so callers
 * can drive a fade-in/fade-out effect that reacts to scroll in both
 * directions.
 */
export function useScrollFade<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
}
