"use client";

import { useState } from "react";
import { Check, Copy } from "./Icons";

export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? "Copied" : "Copy email"}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
