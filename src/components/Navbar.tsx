"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { MobileMenu } from "./MobileMenu";
import s from "./Navbar.module.css";

export const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`${s.header} ${scrolled || open ? s.scrolled : ""}`}>
      <div className={`container ${s.inner}`}>
        <Link href="/" className={s.brand} aria-label={`${profile.name} — home`}>
          <span className={s.brandMark} aria-hidden>
            {profile.initials}
          </span>
          <span className={s.brandName}>{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className={s.desktopNav}>
          <ul role="list" className={s.list}>
            {navLinks.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link href={l.href} className={`${s.link} ${active ? s.active : ""}`} aria-current={active ? "page" : undefined}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {profile.availability.isAvailable && (
          <Link href="/contact" className={s.status}>
            <span className="status-dot" aria-hidden />
            <span>{profile.availability.short}</span>
          </Link>
        )}

        <button
          type="button"
          className={`${s.burger} ${open ? s.burgerOpen : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}
