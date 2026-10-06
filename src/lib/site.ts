/**
 * Site URL used for canonical links, Open Graph and the sitemap.
 * On Vercel this resolves automatically from the production domain.
 * To use a custom domain, set NEXT_PUBLIC_SITE_URL in Vercel → Settings → Environment Variables.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "Hasana Singh";
