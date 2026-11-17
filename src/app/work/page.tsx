import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";
import { ImpactReel } from "@/components/ImpactReel";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import s from "../pages.module.css";

const description = "Case studies in telecom billing, payments and AI self-service by Hasana Singh — thoughtfully designed products shaped by research, strategy, and measurable outcomes.";

export const metadata: Metadata = {
  title: "Selected Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Selected Work — Hasana Singh", description, url: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className={s.pageHero} aria-labelledby="work-title">
        <div className="container">
          <p className="eyebrow">Work</p>
          <h1 id="work-title" className={s.pageTitle}>
            Case studies in telecom billing, payments and <span className="italic accent">AI self-service</span>
          </h1>
          <p className={`lead muted ${s.pageIntro}`}>Thoughtfully designed products shaped by research, strategy, and measurable outcomes.</p>
        </div>
      </section>

      <section className="section" aria-label="Projects">
        <div className="container">
          <ProjectGrid projects={projects} headingLevel="h2" />
        </div>
      </section>

      <section className={s.impact} aria-labelledby="impact-title">
        <div className="container">
          <div className={s.impactHead} data-reveal>
            <p className="eyebrow">Impact at a glance</p>
            <h2 id="impact-title" className={s.impactTitle}>
              The numbers behind <span className="italic accent">the work</span>
            </h2>
            <p className="lead muted">Fourteen seconds on what these projects changed for customers and the business.</p>
          </div>
          <ImpactReel />
        </div>
      </section>

      <FinalCTA eyebrow="Let's talk" title="Have a project in mind?" button="Get in Touch" />
    </>
  );
}
