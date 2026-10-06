import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { FinalCTA } from "@/components/FinalCTA";
import { PlaceholderTag } from "@/components/PlaceholderTag";
import { SectionHeading } from "@/components/SectionHeading";
import { skills, tools } from "@/data/experience";
import { profile } from "@/data/profile";
import s from "../pages.module.css";

const description =
  "About Hasana Singh — telecom UX and product designer in Chennai with 10+ years designing complex B2B and enterprise journeys across billing, payments, reporting and AI-assisted self-service.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About — Hasana Singh", description, url: "/about" },
};

const toolGroups = Array.from(new Set(tools.map((t) => t.group)));

export default function AboutPage() {
  return (
    <>
      {/* Intro: portrait + Hi, I'm Hasana */}
      <section className={s.pageHero} aria-labelledby="about-title">
        <div className={`container ${s.profile}`}>
          <div className={s.portrait} data-reveal>
            {profile.portrait ? (
              <Image src={profile.portrait} alt={`Portrait of ${profile.name}`} fill priority sizes="(min-width: 1024px) 34vw, 100vw" className={s.portraitImg} />
            ) : (
              <div className={s.portraitPlaceholder} role="img" aria-label="Portrait placeholder">
                <span className={s.portraitInitials}>{profile.initials}</span>
                <span className={s.portraitNote}>
                  <PlaceholderTag /> Add your photo at <code>public/images/portrait.jpg</code> and set <code>portrait</code> in <code>src/data/profile.ts</code>
                </span>
              </div>
            )}
          </div>
          <div className={s.profileBody}>
            <p className="eyebrow">About</p>
            <h1 id="about-title" className="h1">
              Hi, I&apos;m {profile.shortName}.
            </h1>
            {profile.about.bio.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
            <dl className={s.facts}>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Most recent role</dt>
                <dd>{profile.about.mostRecentRole}</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>{profile.yearsOfExperience} years</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd className={s.statusDd}>
                  <span className="status-dot" aria-hidden /> {profile.availability.short}
                </dd>
              </div>
            </dl>
            <div className={s.actions}>
              <Button href="/resume">View resume</Button>
              <Button href="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Approach statement */}
      <section className={`section ${s.divided}`} aria-labelledby="approach-title">
        <div className="container">
          <h2 id="approach-title" className={s.statement} data-reveal>
            Structured for ambiguous, <span className="italic accent">high-stakes</span> design problems.
          </h2>
          <div className={s.statementBody} data-reveal>
            {profile.about.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : "muted"}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`section ${s.divided}`} aria-labelledby="skills-title">
        <div className="container">
          <SectionHeading eyebrow="Skills" title="What I bring to the table" id="skills-title" />
          <ul role="list" className={s.skillPills} data-reveal>
            {skills.map((sk) => (
              <li key={sk}>{sk}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section className={`section ${s.divided}`} aria-labelledby="tools-title">
        <div className="container">
          <SectionHeading eyebrow="Tools" title="My everyday toolkit" id="tools-title" />
          <div className={s.toolGroups}>
            {toolGroups.map((g) => (
              <div key={g} className={s.toolGroup} data-reveal>
                <h3 className={s.toolGroupTitle}>{g}</h3>
                <ul role="list" className={s.toolList}>
                  {tools
                    .filter((t) => t.group === g)
                    .map((t) => (
                      <li key={t.name} className={s.tool}>
                        <span className={s.toolMono} aria-hidden>
                          {t.name.replace(/^Adobe /, "").slice(0, 2)}
                        </span>
                        {t.name}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={`section ${s.divided}`} aria-labelledby="education-title">
        <div className={`container ${s.eduGrid}`}>
          <div data-reveal>
            <p className="eyebrow">Education</p>
            <h2 id="education-title" className="sr-only">
              Education
            </h2>
          </div>
          <div className={`card ${s.eduCard}`} data-reveal>
            <p className={s.eduYears}>{profile.education.years}</p>
            <h3 className="h3">{profile.education.degree}</h3>
            <p className="muted">{profile.education.detail}</p>
            <p>{profile.education.institution}</p>
            <p className="subtle">{profile.education.affiliation}</p>
          </div>
        </div>
      </section>

      {/* Beyond work */}
      <section className={`section ${s.divided}`} aria-labelledby="beyond-title">
        <div className={`container ${s.eduGrid}`}>
          <div data-reveal>
            <p className="eyebrow">Beyond work</p>
            <h2 id="beyond-title" className="sr-only">
              Beyond work
            </h2>
          </div>
          <p className={`lead muted ${s.beyond}`} data-reveal>
            {profile.about.beyondWork}
          </p>
        </div>
      </section>

      <FinalCTA eyebrow="Let's talk" title="Have a project in mind?" button="Get in Touch" />
    </>
  );
}
