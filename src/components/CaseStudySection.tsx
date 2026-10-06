import Image from "next/image";
import type { CaseSection } from "@/data/projects";
import { ArrowUpRight } from "./Icons";
import s from "./CaseStudy.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

/** Renders one case-study block. Add new block types to `CaseSection` in data/projects.ts and handle them here. */
export function CaseStudySection({ section }: { section: CaseSection }) {
  const headingId = `${section.id}-title`;

  switch (section.type) {
    case "text":
      return (
        <section className={`section ${s.section}`} aria-labelledby={headingId} id={section.id}>
          <div className={`container ${s.split}`}>
            <header className={s.head} data-reveal>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={headingId} className="h2">{section.heading}</h2>
            </header>
            <div className={s.content}>
              <div className={s.prose} data-reveal>
                {section.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "lead" : undefined}>{p}</p>
                ))}
              </div>
              {section.list && (
                section.listStyle === "numbered" ? (
                  <ol role="list" className={s.numbered} data-reveal>
                    {section.list.map((li, i) => (
                      <li key={li}>
                        <span className={s.num}>{pad(i + 1)}</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className={s.bullets} data-reveal>
                    {section.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )
              )}
              {section.cards && (
                <div className={s.subBlock}>
                  <h3 className={s.subTitle} data-reveal>{section.cards.title}</h3>
                  <ul role="list" className={s.cardGrid}>
                    {section.cards.items.map((c, i) => (
                      <li key={c.title} className="card card--hover" data-reveal style={{ ["--reveal-delay" as string]: i }}>
                        <h4 className="h4">{c.title}</h4>
                        <p className="muted">{c.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      );

    case "pills":
      return (
        <section className={`section ${s.section}`} aria-labelledby={headingId} id={section.id}>
          <div className={`container ${s.split}`}>
            <header className={s.head} data-reveal>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={headingId} className="h2">{section.heading}</h2>
            </header>
            <ul role="list" className={s.pills} data-reveal>
              {section.items.map((p) => (
                <li key={p} className="pill pill--lg">{p}</li>
              ))}
            </ul>
          </div>
        </section>
      );

    case "evolution":
      return (
        <section className={`section ${s.section}`} aria-labelledby={headingId} id={section.id}>
          <div className="container">
            <header className={s.headWide} data-reveal>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={headingId} className="h2">{section.heading}</h2>
            </header>
            <ol role="list" className={s.evolution}>
              {section.stages.map((st, i) => (
                <li key={st.title} className={s.stage}>
                  <div className={s.stageText} data-reveal>
                    <div className={s.stageMeta}>
                      <span className={s.stageNum}>{pad(i + 1)}</span>
                      {st.year && <span className="pill">{st.year}</span>}
                    </div>
                    <h3 className="h3">{st.title}</h3>
                    <p className="muted">{st.text}</p>
                  </div>
                  {st.image && (
                    <figure className={s.stageFigure} data-reveal="image">
                      <Image
                        src={st.image.src}
                        alt={st.image.alt}
                        width={st.image.width}
                        height={st.image.height}
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className={s.stageImg}
                      />
                    </figure>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "steps":
      return (
        <section className={`section ${s.section}`} aria-labelledby={headingId} id={section.id}>
          <div className="container">
            <header className={s.headWide} data-reveal>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={headingId} className="h2">{section.heading}</h2>
            </header>
            <ol role="list" className={s.steps} style={{ ["--n" as string]: section.steps.length }}>
              {section.steps.map((st, i) => (
                <li key={st.title} className={s.step} data-reveal style={{ ["--reveal-delay" as string]: i }}>
                  <span className={s.stepNum}>{pad(i + 1)}</span>
                  <h3 className="h4">{st.title}</h3>
                  <p className="muted">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "decisions":
      return (
        <section className={`section ${s.section}`} aria-labelledby={headingId} id={section.id}>
          <div className="container">
            <header className={s.headWide} data-reveal>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={headingId} className="h2">{section.heading}</h2>
            </header>
            <ol role="list" className={s.decisions}>
              {section.items.map((d, i) => (
                <li key={d.title} className={`card ${s.decision}`} data-reveal style={{ ["--reveal-delay" as string]: i % 2 }}>
                  <p className={s.decisionLabel}>Decision {pad(i + 1)}</p>
                  <h3 className="h3">{d.title}</h3>
                  <p className="muted">{d.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );

    case "recognition":
      return (
        <section className={`section ${s.section}`} aria-labelledby={headingId} id={section.id}>
          <div className={`container ${s.split}`}>
            <header className={s.head} data-reveal>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={headingId} className="h2">{section.heading}</h2>
            </header>
            <ul role="list" className={s.recognition}>
              {section.items.map((r) => (
                <li key={r.text} data-reveal>
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className={s.recLink}>
                      <span>{r.text}</span>
                      <ArrowUpRight size={20} />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <p>{r.text}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      );

    case "reflection":
      return (
        <section className={`section ${s.section} ${s.reflection}`} aria-labelledby={headingId} id={section.id}>
          <div className="container">
            <p className="eyebrow" data-reveal>{section.eyebrow}</p>
            <h2 id={headingId} className="sr-only">{section.heading ?? section.eyebrow}</h2>
            <div className={s.reflectionBody}>
              {section.body.map((p, i) => (
                <p key={i} data-reveal className={i === 0 ? s.reflectionLead : "lead muted"}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      );
  }
}
