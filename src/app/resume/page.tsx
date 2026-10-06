import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { LinkedIn, Mail, MapPin } from "@/components/Icons";
import { PlaceholderTag } from "@/components/PlaceholderTag";
import { experience, skills, tools } from "@/data/experience";
import { profile } from "@/data/profile";
import s from "../pages.module.css";

const description =
  "Resume of Hasana Singh — Senior Product Designer with 10+ years in telecom & fintech CX, AI self-service and enterprise portals. Download the PDF.";

export const metadata: Metadata = {
  title: "Resume",
  description,
  alternates: { canonical: "/resume" },
  openGraph: { title: "Resume — Hasana Singh", description, url: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <section className={s.pageHero} aria-labelledby="resume-title">
        <div className={`container ${s.resumeHead}`}>
          <div>
            <p className="eyebrow">Resume</p>
            <h1 id="resume-title" className={s.pageTitle}>
              {profile.name}
            </h1>
            <p className={s.resumeRole}>{profile.role} · Telecom &amp; Fintech CX</p>
            <p className={`lead muted ${s.pageIntro}`}>{profile.hero.supporting}</p>
            <ul role="list" className={s.resumeContact}>
              <li>
                <MapPin size={16} /> {profile.location}
              </li>
              <li>
                <a className="link" href={`mailto:${profile.email}`}>
                  <Mail size={16} /> {profile.email}
                </a>
              </li>
              <li>
                <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedIn size={15} /> linkedin.com/in/hasanasingh<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={s.downloadBox}>
            <p className="muted">Prefer a PDF? Download a copy to share with your team.</p>
            <Button href={profile.resumeUrl} size="lg" icon="download" download={profile.resumeFileName}>
              Download Resume
            </Button>
            <p className={s.fileMeta}>PDF</p>
          </div>
        </div>
      </section>

      <div className={`container ${s.resumeBody}`}>
        <section className={s.resumeMain} aria-labelledby="r-exp">
          <h2 id="r-exp" className={s.resumeH2}>
            Experience
          </h2>
          <ExperienceTimeline items={experience} detailed />
        </section>

        <aside className={s.resumeAside} aria-label="Education, skills and certifications">
          <section aria-labelledby="r-edu" className={s.resumeBlock}>
            <h2 id="r-edu" className={s.resumeH2}>
              Education
            </h2>
            <h3 className="h4">Master of Business Administration — HR &amp; Marketing</h3>
            <p className="muted">{profile.education.institution}</p>
            <p className="subtle">{profile.education.years}</p>
          </section>

          <section aria-labelledby="r-skills" className={s.resumeBlock}>
            <h2 id="r-skills" className={s.resumeH2}>
              Skills
            </h2>
            <ul role="list" className={s.chips}>
              {skills.map((k) => (
                <li key={k} className="pill">
                  {k}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="r-tools" className={s.resumeBlock}>
            <h2 id="r-tools" className={s.resumeH2}>
              Tools
            </h2>
            <ul role="list" className={s.chips}>
              {tools.map((t) => (
                <li key={t.name} className="pill">
                  {t.name}
                </li>
              ))}
            </ul>
          </section>

          {profile.certifications.length > 0 && (
            <section aria-labelledby="r-cert" className={s.resumeBlock}>
              <h2 id="r-cert" className={s.resumeH2}>
                Certifications
              </h2>
              <ul role="list" className={s.certs}>
                {profile.certifications.map((c, i) => (
                  <li key={i}>
                    <p>
                      {c.name} <PlaceholderTag show={!!c.placeholder} />
                    </p>
                    <p className="subtle">
                      {c.issuer} · {c.year}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>

      <section className="section section--tight no-print">
        <div className={`container ${s.resumeFooter}`}>
          <Button href={profile.resumeUrl} size="lg" icon="download" download={profile.resumeFileName}>
            Download Resume
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
