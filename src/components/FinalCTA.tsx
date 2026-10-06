import { profile } from "@/data/profile";
import { Button } from "./Button";
import s from "./FinalCTA.module.css";

type Props = { eyebrow?: string; title: string; button: string; href?: string };

export function FinalCTA({ eyebrow = "Next step", title, button, href = "/contact" }: Props) {
  return (
    <section className={`section ${s.wrap}`} aria-labelledby="final-cta">
      <div className={`container ${s.inner}`} data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="final-cta" className={s.title}>
          {title}
        </h2>
        <div className={s.actions}>
          <Button href={href} size="lg">
            {button}
          </Button>
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
