import { Button } from "@/components/Button";
import s from "./pages.module.css";

export default function NotFound() {
  return (
    <section className={s.pageHero} aria-labelledby="nf-title">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 id="nf-title" className={s.pageTitle}>This page wandered off.</h1>
        <p className={`lead muted ${s.pageIntro}`}>The link may be broken or the page may have moved.</p>
        <div style={{ marginTop: "var(--space-6)" }}>
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
