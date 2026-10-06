/**
 * ─────────────────────────────────────────────────────────────
 *  PROFILE DATA — edit this file to change personal details.
 *  Anything marked `placeholder: true` or "[PLACEHOLDER]" still
 *  needs your real content. Components read from here only.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Hasana Singh",
  shortName: "Hasana",
  initials: "HS",
  role: "Senior Product Designer",
  eyebrow: "Product designer",
  location: "Chennai, India",
  yearsOfExperience: "10+",
  email: "b.hasanasingh@gmail.com",
  linkedin: "https://www.linkedin.com/in/hasanasingh",

  /** Path under /public. Set to null to show the styled placeholder. */
  portrait: "/images/portrait.jpg" as string | null, // set to null to show the placeholder

  /** Resume download. Replace the file at public/assets/resume.pdf — no UI change needed. */
  resumeUrl: "/assets/resume.pdf",
  resumeFileName: "Hasana-Singh-Resume.pdf",

  /** Small status shown in the navigation and on the Contact page. */
  availability: {
    isAvailable: true,
    short: "Open to lead roles",
    long: "Open to Lead Product Designer roles in Chennai, Hyderabad or Bangalore — and available for select freelance projects.",
  },

  hero: {
    intro:
      "Designing experiences across telecom and fintech, from AI-powered self-service to enterprise platforms serving millions of customers.",
    supporting:
      "With 10 years of UX experience across telecom and fintech, I've led critical, large-scale products that serve millions. I translate dense data and intricate systems into experiences people actually understand and trust. I work with a research-first mindset, let data guide every design decision, and increasingly leverage AI to automate workflows and accelerate delivery without sacrificing quality.",
  },

  footerTagline:
    "Senior Product Designer — Telecom & Fintech CX, AI self-service & Enterprise portals. Based in Chennai, open to Hyderabad / Bangalore.",

  contact: {
    heading: "Let's create something meaningful.",
    copy: "I'm currently based in Chennai, India, and actively looking for lead design roles in Chennai / Hyderabad / Bangalore. I'm also available for select freelance projects. Open to a quick call or async conversation — whichever's easier for you.",
  },

  about: {
    heading: "Structured for ambiguous, high-stakes design problems.",
    intro: [
      "I'm a senior product designer who works where the stakes are high and the systems are dense — billing, payments and AI-assisted self-service for business customers at telecom scale.",
      "I started my career as a technical writer, which gave me an instinct for structure, precise language and reader empathy. That foundation still shapes how I design: I untangle complex information until it reads as simple, obvious and trustworthy.",
      "My approach is research-first and evidence-led. I combine voice-of-customer data, analytics, heuristics and usability testing to find where an experience is really breaking — then sequence the work so quick wins ship fast and the deeper structural fixes follow.",
    ],
    /** "Hi, I'm Hasana" section (first section of the About page) */
    bio: [
      "I'm a telecom UX and product designer with 10+ years designing complex B2B and enterprise journeys across billing, payments, reporting, service, sales, onboarding and AI-assisted self-service. My portfolio currently includes crafting billing & reporting experiences for Verizon Business across its MyBiz enterprise portal.",
      "I combine hands-on design craft with customer research, VOC analysis, Adobe Analytics, journey mapping, design systems, and stakeholder management to simplify high-volume telecom journeys, improve digital adoption, reduce customer effort, and scale self-service.",
    ],
    /** Home page "Design philosophy" section */
    philosophyIntro:
      "I design at the intersection of complexity and clarity. My strength is translating dense data and intricate systems into experiences people actually understand and trust. I work with a research-first mindset, let data guide every design decision, and increasingly leverage AI to automate workflows and accelerate delivery without sacrificing quality.",
    /** Shown on the About page after Education */
    beyondWork:
      "Outside of work, I'm endlessly curious. I enjoy cooking, long drives, movies and everyday conversations. You'll often find me sketching ideas in a notebook, experimenting with side projects, or diving into topics far outside design because inspiration rarely stays within one discipline.",
    mostRecentRole: "Senior Product Designer II, Verizon",
  },

  education: {
    degree: "Master of Business Administration — HR & Marketing",
    detail: "Dual specialisation in Human Resources & Marketing",
    institution: "Jagan's Institute of Management Studies, Nellore",
    affiliation: "Affiliated to Sri Venkateswara University, Tirupati",
    years: "2003 – 2005",
  },

  /** Optional. Leave the array empty to hide the Certifications section. */
  certifications: [
    { name: "[Placeholder] Certification name", issuer: "Issuing organisation", year: "20XX", placeholder: true },
    { name: "[Placeholder] Certification name", issuer: "Issuing organisation", year: "20XX", placeholder: true },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
