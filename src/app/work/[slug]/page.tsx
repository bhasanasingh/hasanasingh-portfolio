import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/components/CaseStudySection";
import { FinalCTA } from "@/components/FinalCTA";
import { MetricCards } from "@/components/MetricCards";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectHero } from "@/components/ProjectHero";
import { ProjectNav } from "@/components/ProjectNav";
import { getNextProject, getProject, projects } from "@/data/projects";
import cs from "@/components/CaseStudy.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      type: "article",
      title: `${p.title} — Hasana Singh`,
      description: p.description,
      url: `/work/${p.slug}`,
      images: [{ url: p.thumbnail.src, width: p.thumbnail.width, height: p.thumbnail.height, alt: p.thumbnail.alt }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);
  const hasContent = project.sections.length > 0;

  return (
    <article>
      <ProjectHero project={project} />

      {project.gallery.length > 0 && (
        <div className="section--tight" style={{ paddingTop: 0 }}>
          <ProjectGallery images={project.gallery} title={project.title} />
        </div>
      )}

      {project.metrics && (
        <section className="section section--tight" aria-labelledby="impact-title">
          <div className="container">
            <h2 id="impact-title" className="eyebrow" style={{ marginBottom: "var(--space-5)" }}>
              Impact at a glance
            </h2>
            <MetricCards metrics={project.metrics} label={`${project.title} results`} columns={6} />
          </div>
        </section>
      )}

      {hasContent ? (
        project.sections.map((section) => <CaseStudySection key={section.id} section={section} />)
      ) : (
        <section className={cs.soon} aria-label="Case study status">
          <div className="container">
            <p className={cs.soonBox}>Full case study coming soon.</p>
          </div>
        </section>
      )}

      <ProjectNav next={next} />
      <FinalCTA eyebrow="Let's talk" title="Connect with me" button="Connect with me" />
    </article>
  );
}
