import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  as?: "h1" | "h2" | "h3";
  intro?: ReactNode;
  align?: "start" | "split";
  action?: ReactNode;
  id?: string;
};

/** Eyebrow + title (+ optional intro/action). Titles are "subtle" h2s by default. */
export function SectionHeading({ eyebrow, title, as: Tag = "h2", intro, align = "start", action, id }: Props) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <Tag className="h2 section-heading__title" id={id}>
          {title}
        </Tag>
      </div>
      {(intro || action) && (
        <div className="section-heading__aside">
          {intro && <p className="muted">{intro}</p>}
          {action}
        </div>
      )}
    </div>
  );
}
