"use client";

import { useEffect, useRef, useState } from "react";
import s from "./ImpactReel.module.css";

/**
 * Silent 14-second impact reel. Autoplays muted on loop, with a pause/play control.
 * With "reduce motion" turned on it does not autoplay — the visitor can press play.
 * Replace public/video/impact-reel.mp4 (and the poster) to update it.
 */
export function ImpactReel() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className={s.wrap} data-reveal>
      <div className={s.frame}>
        <video
          ref={ref}
          className={s.video}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/impact-reel-poster.jpg"
          aria-describedby="reel-caption"
          width={1280}
          height={720}
        >
          <source src="/video/impact-reel.mp4" type="video/mp4" />
          <source src="/video/impact-reel.webm" type="video/webm" />
        </video>
        <button type="button" className={s.toggle} onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M7 4.5v15l13-7.5z" /></svg>
          )}
          <span>{playing ? "Pause" : "Play"}</span>
        </button>
      </div>
      <figcaption id="reel-caption" className={s.caption}>
        Impact at a glance — 6× faster payments, 1.6M customers reached, $2.9M saved per year, 85% AI Assistant accuracy, 120K+ calls deflected per quarter, and 32+ projects shipped in 2 years.
      </figcaption>
    </figure>
  );
}
