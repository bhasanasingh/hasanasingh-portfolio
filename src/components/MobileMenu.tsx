"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { navLinks, profile } from "@/data/profile";
import { LinkedIn, Mail } from "./Icons";
import s from "./Navbar.module.css";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

type Props = { open: boolean; onClose: () => void; pathname: string };

/** Full-screen mobile/tablet navigation with focus trap, Esc to close and scroll lock. */
export function MobileMenu({ open, onClose, pathname }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const panel = ref.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        document.querySelector<HTMLButtonElement>('[aria-controls="mobile-menu"]')?.focus();
      }
      if (e.key === "Tab") {
        // Keep focus inside the menu + the toggle button
        const toggle = document.querySelector<HTMLElement>('[aria-controls="mobile-menu"]');
        const items = [...focusables(), ...(toggle ? [toggle] : [])];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1024 && onClose();
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={ref}
      className={`${s.mobile} ${open ? s.mobileOpen : ""}`}
      aria-hidden={!open}
      inert={!open}
    >
      <nav aria-label="Mobile" className={`container ${s.mobileInner}`}>
        <ul role="list" className={s.mobileList}>
          {navLinks.map((l, i) => {
            const active = isActive(pathname, l.href);
            return (
              <li key={l.href} style={{ ["--i" as string]: i }}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  className={`${s.mobileLink} ${active ? s.mobileActive : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className={s.mobileIndex} aria-hidden>0{i + 1}</span>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={s.mobileFoot}>
          <p className={s.mobileStatus}>
            <span className="status-dot" aria-hidden /> {profile.availability.short}
          </p>
          <a href={`mailto:${profile.email}`} className="link">
            <Mail size={16} /> {profile.email}
          </a>
          <a href={profile.linkedin} className="link" target="_blank" rel="noopener noreferrer">
            <LinkedIn size={15} /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
