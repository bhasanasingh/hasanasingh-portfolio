"use client";
// NOTE: the track element must be `position: relative` so children offsetLeft is measured from it.

import { useCallback, useEffect, useRef, useState } from "react";

/** Shared logic for horizontal scroll-snap tracks: prev/next, current index, edge state. */
export function useScroller<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const left = el.scrollLeft;
    let best = 0;
    let bestDist = Infinity;
    items.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - left - parseFloat(getComputedStyle(el).scrollPaddingLeft || "0"));
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIndex(best);
    setAtStart(left <= 4);
    setAtEnd(left + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = useCallback((dir: 1 | -1 | number, absolute = false) => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const target = absolute ? dir : Math.max(0, Math.min(items.length - 1, index + dir));
    const item = items[target];
    if (!item) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft || "0");
    el.scrollTo({ left: item.offsetLeft - pad, behavior: reduce ? "auto" : "smooth" });
  }, [index]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    },
    [go],
  );

  return { ref, index, atStart, atEnd, go, onKeyDown };
}
