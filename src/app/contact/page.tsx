import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CopyEmail } from "@/components/CopyEmail";
import { ArrowUpRight, LinkedIn, Mail, MapPin } from "@/components/Icons";
import { profile } from "@/data/profile";
import s from "../pages.module.css";

const description =
  "Get in touch with Hasana Singh — based in Chennai, open to lead design roles in Chennai, Hyderabad and Bangalore, and available for select freelance projects.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Hasana Singh", description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <section className={s.contact} aria-labelledby="contact-title">
      <div className="container">
        <p className={`eyebrow eyebrow--plain ${s.availability}`}>
          <span className="status-dot" aria-hidden />
          {profile.availability.long}
        </p>
        <h1 id="contact-title" className={s.contactTitle}>
          Let&apos;s create something <span className="italic accent">meaningful.</span>
        </h1>
        <p className={`lead muted ${s.contactCopy}`}>{profile.contact.copy}</p>

        <div className={s.emailBlock}>
          <p className={s.emailLabel}>Write to me</p>
          <a href={`mailto:${profile.email}`} className={s.email}>
            {profile.email}
            <ArrowUpRight size={28} />
          </a>
          <div className={s.emailActions}>
            <Button href={`mailto:${profile.email}`} size="lg" icon="none">
              Email me
            </Button>
            <CopyEmail email={profile.email} className={`btn btn--secondary btn--lg ${s.copyBtn}`} />
          </div>
        </div>

        <ul role="list" className={s.contactCards}>
          <li className="card card--hover">
            <Mail size={20} className={s.cardIcon} />
            <h2 className={s.cardLabel}>Email</h2>
            <a href={`mailto:${profile.email}`} className={`link ${s.cardValue}`}>
              {profile.email}
            </a>
          </li>
          <li className="card card--hover">
            <LinkedIn size={20} className={s.cardIcon} />
            <h2 className={s.cardLabel}>LinkedIn</h2>
            <a href={profile.linkedin} className={`link link--up ${s.cardValue}`} target="_blank" rel="noopener noreferrer">
              in/hasanasingh <ArrowUpRight size={16} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li className="card">
            <MapPin size={20} className={s.cardIcon} />
            <h2 className={s.cardLabel}>Location</h2>
            <p className={s.cardValue}>{profile.location}</p>
            <p className="subtle">Open to Hyderabad / Bangalore</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
