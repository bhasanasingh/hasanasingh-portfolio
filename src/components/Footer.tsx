import Link from "next/link";
import { navLinks, profile } from "@/data/profile";
import { BackToTop } from "./BackToTop";
import { LinkedIn, Mail } from "./Icons";
import s from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <div className={s.brand}>
            <p className={s.name}>{profile.name}</p>
            <p className={s.tagline}>{profile.footerTagline}</p>
          </div>

          <nav aria-label="Footer" className={s.col}>
            <p className={s.colTitle}>Navigate</p>
            <ul role="list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={s.col}>
            <p className={s.colTitle}>Connect</p>
            <ul role="list">
              <li>
                <a href={`mailto:${profile.email}`} className="link">
                  <Mail size={15} /> {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} className="link" target="_blank" rel="noopener noreferrer">
                  <LinkedIn size={14} /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.bottom}>
          <p>© {year} {profile.name}. All rights reserved.</p>
          <BackToTop className={s.toTop} />
        </div>
      </div>
    </footer>
  );
}
