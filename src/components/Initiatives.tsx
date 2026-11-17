"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { InitiativeCategory } from "@/data/initiatives";
import { ArrowLeft, ArrowRight } from "./Icons";
import s from "./Initiatives.module.css";

/** Categorised grid of initiatives with a keyboard-accessible image lightbox. */
export function Initiatives({ categories }: { categories: InitiativeCategory[] }) {
  const all = categories.flatMap((c) => c.items);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const show = (i: number, el: HTMLElement) => {
    lastTrigger.current = el;
    setOpen(i);
  };
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + all.length) % all.length)), [all.length]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open !== null && !dlg.open) dlg.showModal();
    if (open === null && dlg.open) {
      dlg.close();
      lastTrigger.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  let index = -1;
  const current = open !== null ? all[open] : null;

  return (
    <>
      <p className={`container ${s.hint}`}>Tap any image to view it larger.</p>

      {categories.map((cat) => (
        <section key={cat.name} className={`section ${s.category}`} aria-labelledby={`cat-${cat.name}`}>
          <div className="container">
            <header className={s.catHead} data-reveal>
              <p className="eyebrow">
                {cat.items.length} initiatives
              </p>
              <h2 id={`cat-${cat.name}`} className="h2">
                {cat.name}
              </h2>
            </header>
            <ul role="list" className={s.grid}>
              {cat.items.map((it) => {
                index += 1;
                const i = index;
                return (
                  <li key={`${cat.name}-${it.title}`} className={s.card} data-reveal style={{ ["--reveal-delay" as string]: i % 2 }}>
                    <button type="button" className={s.media} onClick={(e) => show(i, e.currentTarget)} aria-label={`View larger: ${it.title}`}>
                      <Image src={it.image.src} alt={it.image.alt} width={it.image.width} height={it.image.height} sizes="(min-width: 1024px) 44vw, (min-width: 768px) 50vw, 100vw" className={s.img} />
                      <span className={s.zoom} aria-hidden>
                        View larger
                      </span>
                    </button>
                    <div className={s.body}>
                      <h3 className="h3">{it.title}</h3>
                      <p className="muted">{it.text}</p>
                      <ul className={s.outcomes}>
                        {it.outcomes.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <dialog ref={dialogRef} className={s.dialog} onClose={close} onClick={(e) => e.target === dialogRef.current && close()} aria-label={current ? current.title : "Image viewer"}>
        {current && (
          <div className={s.viewer}>
            <div className={s.viewerTop}>
              <p className={s.viewerTitle}>
                <span className={s.viewerCount}>
                  {String((open ?? 0) + 1).padStart(2, "0")} / {all.length}
                </span>
                {current.title}
              </p>
              <button type="button" className={s.close} onClick={close} aria-label="Close image viewer">
                ✕
              </button>
            </div>
            <div className={s.viewerImg}>
              <Image key={current.image.src + open} src={current.image.src} alt={current.image.alt} width={current.image.width} height={current.image.height} sizes="92vw" loading="eager" className={s.viewerPic} />
            </div>
            <div className={s.viewerNav}>
              <button type="button" className={s.navBtn} onClick={() => step(-1)} aria-label="Previous image">
                <ArrowLeft size={18} />
              </button>
              <button type="button" className={s.navBtn} onClick={() => step(1)} aria-label="Next image">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
