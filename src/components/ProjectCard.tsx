"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import { ArrowRight } from "./Icons";
import s from "./ProjectCard.module.css";

type Props = { project: Project; headingLevel?: "h2" | "h3"; priority?: boolean; sizes?: string };

export function ProjectCard({ project: p, headingLevel: H = "h3", priority, sizes = "(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw" }: Props) {
  const mediaRef = useRef<HTMLDivElement>(null);

  // Cursor-following "View" badge — fine pointers only; purely decorative.
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !mediaRef.current) return;
    const r = mediaRef.current.getBoundingClientRect();
    mediaRef.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    mediaRef.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  const href = `/work/${p.slug}`;

  return (
    <article className={s.card} onPointerMove={onMove}>
      <div ref={mediaRef} className={s.media} data-reveal="image">
        <Image
          src={p.thumbnail.src}
          alt={p.thumbnail.alt}
          width={p.thumbnail.width}
          height={p.thumbnail.height}
          sizes={sizes}
          priority={priority}
          className={s.img}
        />
        <span className={s.status}>
          <span className={s.statusDot} aria-hidden />
          {p.status}
        </span>
        <span className={s.cursor} aria-hidden>
          View
          <br />
          project
        </span>
      </div>

      <div className={s.body} data-reveal>
        <p className={s.category}>{p.category}</p>
        <H className={s.title}>
          <Link href={href} className={s.stretched}>
            {p.title}
          </Link>
        </H>
        <p className={s.summary}>{p.summary}</p>
        {p.cardMetrics && (
          <ul role="list" className={s.metrics} aria-label="Key results">
            {p.cardMetrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
        <span className={s.cta} aria-hidden>
          <span>{p.cta ?? "View project"}</span>
          <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );
}
