import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/work", "/about", "/resume", "/contact"].map((p, i) => ({
    url: `${siteUrl}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: i === 0 ? 1 : 0.8,
  }));
  const cases = projects.map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...cases];
}
