import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FinalCTA } from "@/components/FinalCTA";
import { ArrowDown, ArrowRight, ArrowUpRight } from "@/components/Icons";
import { MetricCards } from "@/components/MetricCards";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Recommendations } from "@/components/Recommendations";
import { SectionHeading } from "@/components/SectionHeading";
import { awards, contributions, signatureMetrics } from "@/data/home";
import { profile } from "@/data/profile";
import { featuredSlugs, getProject, type Project } from "@/data/projects";
import { siteUrl } from "@/lib/site";
import s from "./home.module.css";

export const metadata: Metadata = {
  title: { absolute: "Hasana Singh — Senior Product Designer" },
  alternates: { canonical: "/" },
};

const featured = featuredSlugs.map(getProject).filter(Boolean) as Project[];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  sameAs: [profile.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
};

export default function HomePage() {

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      {/* ───────────── Hero ───────────── */}
      <section className={s.hero} aria-labelledby="hero-title">
        <div className="container">
          <div className={s.heroCenter}>
            <div className={s.avatar}>
              {profile.portrait ? (
                <Image src={profile.portrait} alt={`Portrait of ${profile.name}`} fill priority sizes="112px" className={s.avatarImg} />
              ) : (
                <span className={s.avatarInitials} role="img" aria-label="Portrait placeholder">
                  {profile.initials}
                </span>
              )}
            </div>
            <p className={`eyebrow eyebrow--plain ${s.heroEyebrow}`}>
              <span className="status-dot" aria-hidden />
              {profile.eyebrow}
              <span className={s.heroLoc}>· {profile.location}</span>
            </p>
            <h1 id="hero-title" className={s.heroTitle}>
              <span className={s.heroLine}>Hasana</span>{" "}
              <span className={`${s.heroLine} ${s.heroItalic}`}>Singh</span>
            </h1>
            <div className={s.heroCopy}>
              <p className={`lead ${s.heroIntro}`}>{profile.hero.intro}</p>
              <p className="muted">{profile.hero.supporting}</p>
              <div className={s.heroCtas}>
                <Button href="/work" size="lg">
                  View My Work
                </Button>
                <Button href={profile.resumeUrl} variant="secondary" size="lg" icon="download" download={profile.resumeFileName}>
                  Download resume
                </Button>
              </div>
            </div>
          </div>

          <a href="#journey" className={s.scroll}>
            <span className={s.scrollLine} aria-hidden />
            <span>Scroll</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </section>

      {/* ───────────── Journey / metrics ───────────── */}
      <section id="journey" className="section" aria-labelledby="journey-title">
        <div className="container">
          <SectionHeading eyebrow="Journey" title="My signature contributions" id="journey-title" />
          <MetricCards metrics={signatureMetrics} label="Signature metrics" />

          <ul role="list" className={s.contribs}>
            {contributions.map((c, i) => (
              <li key={c.title} className={`card card--hover ${s.contrib}`} data-reveal style={{ ["--reveal-delay" as string]: i % 2 }}>
                <h3 className="h4">{c.title}</h3>
                <p className="muted">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Featured work ───────────── */}
      <section className={`section ${s.divided}`} aria-labelledby="featured-title">
        <div className="container">
          <SectionHeading
            eyebrow="Featured work"
            title="My creations"
            id="featured-title"
          />
          <ProjectGrid projects={featured} />
          <div className={s.viewAll} data-reveal>
            <Link href="/work" className={s.viewAllLink}>
              <span>View all my work</span>
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────── Awards ───────────── */}
      <section className={`section ${s.divided}`} aria-labelledby="awards-title">
        <div className="container">
          <SectionHeading eyebrow="Recognised for innovation & execution" title="Outcomes that got noticed beyond the design team" id="awards-title" />
          <ul role="list" className={s.awards}>
            {awards.map((a, i) => (
              <li key={a.title} className={`card card--hover ${s.award}`} data-reveal style={{ ["--reveal-delay" as string]: i }}>
                <h3 className="h3">
                  {a.href ? (
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className={s.awardLink}>
                      {a.title} <ArrowUpRight size={20} />
                      <span className="sr-only"> (opens Forbes in a new tab)</span>
                    </a>
                  ) : (
                    a.title
                  )}
                </h3>
                <p className="muted">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Recommendations ───────────── */}
      <section className={`section ${s.divided}`} aria-labelledby="evidence-title">
        <div className="container">
          <SectionHeading eyebrow="Evidence" title="What my leaders & peers think about me" id="evidence-title" />
        </div>
        <Recommendations />
      </section>

      {/* ───────────── Design philosophy ───────────── */}
      <section className={`section ${s.divided}`} aria-labelledby="approach-title">
        <div className={`container ${s.approach}`} data-reveal>
          <p className="eyebrow">Design philosophy</p>
          <h2 id="approach-title" className="h2">
            Research&#8209;first. <span className="italic accent">Evidence&#8209;led.</span> Human always.
          </h2>
          <p className={`lead muted ${s.approachText}`}>{profile.about.philosophyIntro}</p>
          <Link href="/about" className="link">
            More about me <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <FinalCTA eyebrow="Let's talk" title="Have a project in mind?" button="Get in Touch" />
    </>
  );
}
