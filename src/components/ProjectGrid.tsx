import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import s from "./ProjectGrid.module.css";

/** Uniform list: one project per row (image + text side by side on desktop, stacked on mobile). */
export function ProjectGrid({ projects, headingLevel = "h3" }: { projects: Project[]; headingLevel?: "h2" | "h3" }) {
  return (
    <ul role="list" className={s.grid}>
      {projects.map((p, i) => (
        <li key={p.slug} className={s.item}>
          <ProjectCard
            project={p}
            headingLevel={headingLevel}
            priority={i === 0}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </li>
      ))}
    </ul>
  );
}
