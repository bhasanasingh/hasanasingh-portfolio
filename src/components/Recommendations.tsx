import Image from "next/image";
import { recommendations } from "@/data/home";
import s from "./Recommendations.module.css";

type Rec = (typeof recommendations)[number];

function Card({ r }: { r: Rec }) {
  return (
    <li className={s.card} style={{ ["--bg" as string]: `var(--tone-${r.tone}-bg)`, ["--fg" as string]: `var(--tone-${r.tone}-fg)` }}>
      <figure className={s.figure}>
        <figcaption className={s.who}>
          {r.photo ? (
            <Image src={r.photo} alt="" width={48} height={48} className={s.avatar} />
          ) : (
            <span className={s.avatarFallback} aria-hidden>
              {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </span>
          )}
          <span className={s.whoText}>
            <span className={s.name}>{r.name}</span>
            <span className={s.role}>{r.title}</span>
          </span>
        </figcaption>
        <span className={s.mark} aria-hidden>
          &ldquo;
        </span>
        <blockquote className={s.quote}>
          {r.quote.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </blockquote>
      </figure>
    </li>
  );
}

/**
 * Auto-scrolling (marquee) recommendations. Pauses on hover and keyboard focus;
 * with "reduce motion" it becomes a normal horizontally scrollable row.
 */
export function Recommendations() {
  return (
    <div className={s.marquee} tabIndex={0} aria-label="Recommendations from leaders and peers (auto-scrolling, pauses on hover or focus)" role="region">
      <div className={s.track}>
        <ul role="list" className={s.group}>
          {recommendations.map((r) => (
            <Card key={r.name} r={r} />
          ))}
        </ul>
        {/* Duplicate set for a seamless loop — hidden from assistive tech */}
        <ul role="list" className={`${s.group} ${s.clone}`} aria-hidden>
          {recommendations.map((r) => (
            <Card key={`${r.name}-clone`} r={r} />
          ))}
        </ul>
      </div>
    </div>
  );
}
