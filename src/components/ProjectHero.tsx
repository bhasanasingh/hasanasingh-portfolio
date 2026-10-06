import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowLeft } from "./Icons";
import s from "./CaseStudy.module.css";

export function ProjectHero({ project: p }: { project: Project }) {
  return (
    <section className={s.hero} aria-labelledby="project-title">
      <div className="container">
        <Link href="/work" className={`link ${s.back}`}>
          <ArrowLeft size={16} /> All work
        </Link>
        <p className="eyebrow">{p.eyebrow}</p>
        <h1 id="project-title" className={s.heroTitle}>
          {p.title}
        </h1>
        <p className={`lead muted ${s.heroDesc}`}>{p.description}</p>

        {p.meta && (
          <dl className={s.meta}>
            <div>
              <dt>Client</dt>
              <dd>{p.meta.client}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{p.meta.platform}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{p.meta.timeline}</dd>
            </div>
            <div className={s.metaWide}>
              <dt>My role</dt>
              <dd>{p.meta.role}</dd>
            </div>
          </dl>
        )}
      </div>
    </section>
  );
}
