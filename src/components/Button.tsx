import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Download } from "./Icons";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  icon?: "arrow" | "external" | "download" | "none";
  download?: string | boolean;
  external?: boolean;
  className?: string;
};

/** Link styled as a button. Internal links use next/link; external/download use <a>. */
export function Button({ href, children, variant = "primary", size = "md", icon = "arrow", download, external, className = "" }: Props) {
  const cls = `btn btn--${variant} ${size === "lg" ? "btn--lg" : ""} ${icon === "download" ? "btn--download" : ""} ${className}`.trim();
  const Icon = icon === "external" ? ArrowUpRight : icon === "download" ? Download : icon === "arrow" ? ArrowRight : null;
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={16} />}
    </>
  );

  if (download !== undefined || external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        {...(download !== undefined ? { download: download === true ? "" : download } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
