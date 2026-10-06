import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "./Icons";
import s from "./CaseStudy.module.css";

export function ProjectNav({ next }: { next: Project }) {
  return (
    <nav aria-label="Project navigation" className={`section section--tight ${s.projectNav}`}>
      <div className={`container ${s.projectNavInner}`}>
        <Link href="/work" className={`btn btn--secondary ${s.backBtn}`}>
          <ArrowLeft size={16} />
          <span>Back to all projects</span>
        </Link>
        <Link href={`/work/${next.slug}`} className={s.next}>
          <span className={s.nextLabel}>
            Next project <ArrowRight size={16} />
          </span>
          <span className={s.nextTitle}>{next.title}</span>
        </Link>
      </div>
    </nav>
  );
}
