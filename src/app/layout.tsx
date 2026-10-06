import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { profile } from "@/data/profile";
import { siteName, siteUrl } from "@/lib/site";
import "@/styles/globals.css";
import "@/styles/components.css";

const serif = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const sans = localFont({
  src: "../fonts/geist-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const description =
  "Hasana Singh is a senior product designer with 10 years of UX experience across telecom and fintech — AI-powered self-service, billing & payments, and enterprise platforms serving millions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — Senior Product Designer`, template: `%s — ${profile.name}` },
  description,
  applicationName: siteName,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: ["Hasana Singh", "Product Designer", "UX Designer", "Lead Designer", "AI Assistant UX", "Telecom", "Fintech", "Chennai", "Portfolio"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_IN",
    url: "/",
    title: `${profile.name} — Senior Product Designer`,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${profile.name} — Senior Product Designer` }],
  },
  twitter: { card: "summary_large_image", title: `${profile.name} — Senior Product Designer`, description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
