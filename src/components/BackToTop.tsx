"use client";

import { ArrowUp } from "./Icons";

export function BackToTop({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
    >
      <span>Back to top</span>
      <ArrowUp size={16} />
    </button>
  );
}
