"use client";

import Image from "next/image";
import type { ProjectImage } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "./Icons";
import { useScroller } from "./useScroller";
import s from "./ProjectGallery.module.css";

/** Responsive image carousel: swipe / scroll, arrow buttons, keyboard arrows and dot navigation. */
export function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const { ref, index, atStart, atEnd, go, onKeyDown } = useScroller<HTMLUListElement>();
  if (!images.length) return null;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className={s.gallery} aria-roledescription="carousel" aria-label={`${title} — project images`}>
      <ul ref={ref} role="list" className={s.track} tabIndex={0} onKeyDown={onKeyDown} aria-label="Slides">
        {images.map((img, i) => (
          <li key={img.src} className={s.slide} aria-roledescription="slide" aria-label={`${i + 1} of ${images.length}`}>
            <figure className={s.figure}>
              <div className={s.frame}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 1440px) 1200px, (min-width: 768px) 84vw, 92vw"
                  priority={i === 0}
                  className={s.img}
                />
              </div>
              <figcaption className={s.caption}>{img.alt}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className={`container ${s.controls}`}>
        <p className={s.counter} aria-live="polite">
          <span className={s.current}>{pad(index + 1)}</span> / {pad(images.length)}
        </p>
        <div className={s.dots}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`${s.dot} ${i === index ? s.dotActive : ""}`}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i, true)}
            />
          ))}
        </div>
        <div className={s.buttons}>
          <button type="button" className={s.btn} onClick={() => go(-1)} disabled={atStart} aria-label="Previous image">
            <ArrowLeft size={18} />
          </button>
          <button type="button" className={s.btn} onClick={() => go(1)} disabled={atEnd} aria-label="Next image">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
