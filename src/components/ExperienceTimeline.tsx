import type { Experience } from "@/data/experience";
import { PlaceholderTag } from "./PlaceholderTag";
import s from "./ExperienceTimeline.module.css";

type Props = { items: Experience[]; detailed?: boolean; headingLevel?: "h3" | "h4" };

/** Vertical timeline. `detailed` adds location + key achievements (used on the Resume page). */
export function ExperienceTimeline({ items, detailed = false, headingLevel: H = "h3" }: Props) {
  return (
    <ol role="list" className={s.list}>
      {items.map((e, i) => (
        <li key={`${e.company}-${i}`} className={s.item} data-reveal>
          <div className={s.when}>
            <span>
              {e.start} — {e.end}
            </span>
            {detailed && <span className={s.location}>{e.location}</span>}
          </div>
          <div className={s.what}>
            <H className={s.role}>
              {e.role} <PlaceholderTag show={!!e.placeholder} />
            </H>
            <p className={s.company}>{e.company}</p>
            <p className={s.summary}>{e.summary}</p>
            {detailed && e.achievements.length > 0 && (
              <ul className={s.achievements}>
                {e.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
