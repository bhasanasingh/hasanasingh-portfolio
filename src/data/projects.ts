/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — the single source of truth for Work + case studies.
 *
 *  To add a project:
 *   1. Drop images in public/images/projects/
 *   2. Add an entry to `projects` below (copy an existing one)
 *   3. Build `sections` from the building blocks in `CaseSection`
 *      (leave `sections: []` for a "coming soon" page)
 *  Routes, Work grid, Home featured list, sitemap and "Next project"
 *  links all update automatically.
 * ─────────────────────────────────────────────────────────────
 */

export type ProjectImage = { src: string; alt: string; width: number; height: number };
export type Metric = { value: string; label: string };

export type CaseSection =
  | {
      type: "text";
      id: string;
      eyebrow: string;
      heading: string;
      body: string[];
      list?: string[];
      listStyle?: "numbered" | "bullets";
      /** Optional card grid shown below (e.g. "Problems") */
      cards?: { title: string; items: { title: string; text: string }[] };
    }
  | { type: "pills"; id: string; eyebrow: string; heading: string; items: string[] }
  | {
      type: "evolution";
      id: string;
      eyebrow: string;
      heading: string;
      stages: { title: string; year?: string; text: string; image?: ProjectImage }[];
    }
  | {
      type: "steps";
      id: string;
      eyebrow: string;
      heading: string;
      intro?: string;
      steps: { title: string; text: string }[];
    }
  | {
      type: "decisions";
      id: string;
      eyebrow: string;
      heading: string;
      items: { title: string; text: string }[];
    }
  | {
      type: "recognition";
      id: string;
      eyebrow: string;
      heading: string;
      items: { text: string; href?: string }[];
    }
  | { type: "reflection"; id: string; eyebrow: string; heading?: string; body: string[] };

export type Project = {
  slug: string;
  status: "Shipped" | "In progress" | "Concept";
  category: string;
  title: string;
  /** Short line for cards */
  summary: string;
  /** Short metrics line for cards */
  cardMetrics?: string[];
  thumbnail: ProjectImage;
  /** Case-study hero */
  eyebrow: string;
  description: string;
  gallery: ProjectImage[];
  meta?: { client: string; platform: string; timeline: string; role: string };
  metrics?: Metric[];
  sections: CaseSection[];
  /** Label for the card link */
  cta?: string;
};

const img = (file: string, alt: string, width: number, height: number): ProjectImage => ({
  src: `/images/projects/${file}`,
  alt,
  width,
  height,
});

/* Image registry — reuse the same object wherever an image appears. */
const I = {
  pageLevel: img("ai-assistant-page-level.jpg", "Page-level AI Assistant for billing shown in a laptop browser window, answering why the current bill is higher", 1530, 1028),
  exploration: img("ai-assistant-conversational-exploration.jpg", "Grid of conversational AI exploration screens for the billing assistant, showing greetings, suggestion chips and response cards", 1600, 920),
  chart: img("ai-assistant-chart-response.jpg", "AI Assistant billing panel responding with a chart that compares recent bill amounts", 1574, 999),
  billingList: img("ai-assistant-billing-list.jpg", "Billing list view with the AI assistant panel open alongside it", 1536, 1024),
  compareBills: img("ai-assistant-compare-bills.jpg", "Compare your bills page with the floating AI assistant bubble in the corner", 1448, 1086),
  modal: img("ai-assistant-modal-late-fee.jpg", "Modal AI assistant explaining a late fee in detail over the billing page", 1448, 1086),
  secureMsg: img("ai-assistant-secure-messaging.jpg", "Digital bill inquiry self-service flow using secure messaging", 1536, 1024),
  floating: img("ai-assistant-floating-bubble.jpg", "Floating contextual assistant bubble opened on the compare bills page", 1600, 960),

  payThumb: img("payments-autopay-redesign-thumb.jpg", "Auto Pay redesign merged with one-time payment and promise-to-pay options", 1400, 933),
  payMvp1: img("payments-make-payment-mvp1.jpg", "Make a payment screen with MVP1 enhancements", 1600, 982),
  paySubmitted: img("payments-submitted-mvp2.jpg", "Payment submitted confirmation screen with MVP2 enhancements", 1536, 1024),
  payPtp: img("payments-ptp-otp-mvp1.jpg", "Promise-to-pay and one-time-payment integration, MVP1", 1536, 1024),
  payDevices: img("payments-make-payment-devices.jpg", "Unified Make a payment screen shown on laptop and mobile, with Pay now, Pay later and Setup autopay options, saved payment methods and a payment date selector", 825, 563),
  payAutopay: img("payments-autopay-merged.jpg", "Auto Pay redesign merged with one-time payment and promise-to-pay", 1536, 1024),

  initCollage: img("initiatives-collage.jpg", "Collage of four shipped billing initiatives: digital bill late fee, bill compare, bill overview analytics tile and reports preview page", 1600, 1066),
  initLateFee: img("initiatives-late-fee.jpg", "Digital bill page explaining a late fee", 1400, 933),
  initCompare: img("initiatives-bill-compare.jpg", "Bill compare experience", 1400, 875),
  initAnalytics: img("initiatives-analytics-tile.jpg", "Bill overview page with an analytics tile", 1400, 933),
  initReports: img("initiatives-reports-preview.jpg", "Reports to action preview page", 1400, 839),
};

export const projects: Project[] = [
  /* ───────────────────────── Project 1 ───────────────────────── */
  {
    slug: "billing-ai-assistant",
    status: "Shipped",
    category: "Telecom CX",
    title: "Scaling Billing AI Assistant for Telecom Self-Service",
    summary:
      "Evolved bill inquiry from a manual, support-heavy process into an AI-assisted digital experience across Verizon Business billing journeys.",
    cardMetrics: ["1.6M customers reached", "70% containment", "85% accuracy (up from 78%)"],
    thumbnail: I.pageLevel,
    cta: "Read the case study",
    eyebrow: "Telecom CX · AI Assistant UX · Billing Self-Service",
    description:
      "How we evolved bill inquiry from a manual, support-heavy process into an AI-assisted digital experience across Verizon Business billing journeys.",
    gallery: [I.exploration, I.pageLevel, I.chart, I.billingList, I.compareBills, I.modal],
    meta: {
      client: "Verizon",
      platform: "My Biz — Small & Medium business customers",
      timeline: "2024 – 2026",
      role: "Lead UX Strategy, Hands-on Design Direction, Stakeholder Alignment, AI Assistant UX, Design-System Execution",
    },
    metrics: [
      { value: "1.6M", label: "Customers reached" },
      { value: "70%", label: "Containment" },
      { value: "85%", label: "Accuracy (up from 78%)" },
      { value: "3.2s", label: "Avg. response time" },
      { value: "$192K", label: "Quarterly savings" },
      { value: "+38%", label: "Repeat interactions MoM" },
    ],
    sections: [
      {
        type: "text",
        id: "challenge",
        eyebrow: "The challenge",
        heading: "What we were solving for",
        body: [
          "Verizon Business customers often needed help understanding bill changes, credits, taxes, payments, discounts, late fees and account-level billing details. These questions created a high-volume customer care challenge — contributing to hundreds of thousands of annual bill inquiry calls and several million dollars in operational expense.",
          "The goal was to reduce service dependency, improve digital self-service and help customers get faster answers inside the billing experience itself.",
          "Billing is one of the most sensitive and high-volume areas in telecom. Customers don't just want a bill amount; they want to understand why something changed, whether a charge is valid, when a payment is due, how credits were applied and what to do next.",
        ],
        listStyle: "numbered",
        list: [
          "Help customers understand billing questions faster",
          "Reduce dependency on customer care calls",
          "Support common bill inquiry intents reliably",
          "Work within technical and AI-platform limitations",
          "Stay aligned with Verizon's design system and brand standards",
          "Evolve from a fixed page experience into contextual help across journeys",
        ],
        cards: {
          title: "Problems",
          items: [
            { title: "Bill confusion", text: "Customers don't understand a charge, credit or change." },
            { title: "Call-centre dependency", text: "Questions default to assisted-service channels." },
            { title: "High operational cost", text: "Hundreds of thousands of calls/year, millions in expense." },
            { title: "Need for self-service", text: "A faster, scalable digital answer path." },
          ],
        },
      },
      {
        type: "pills",
        id: "intent-map",
        eyebrow: "Intent map",
        heading: "What customers actually asked about",
        items: ["Bill changes", "Credits", "Payments", "Taxes", "Discounts", "Fees", "Promotions", "Account-level questions"],
      },
      {
        type: "text",
        id: "role",
        eyebrow: "My role",
        heading: "What I owned",
        body: [
          "Lead UX strategy, hands-on design direction, stakeholder alignment, design-system decisions and execution support.",
          "I led UX strategy and execution support while working hands-on across designs, flows and design-system decisions — translating ambiguity into a sequenced, shippable plan.",
        ],
        listStyle: "bullets",
        list: [
          "Translated business-defined bill inquiry intents into assistant experience flows",
          "Supported the transition from digital bill inquiry forms to AI-assisted self-service",
          "Explored conversational UI patterns using available design guidelines",
          "Adapted designs when technical feasibility limited the original direction",
          "Shaped page-level, floating and modal assistant patterns",
          "Partnered with business, product, engineering, AI&D, content, design ops and design-system teams",
          "Supported pre-launch and post-launch reviews",
          "Helped the team align customer needs, business outcomes and implementation constraints",
        ],
      },
      {
        type: "evolution",
        id: "evolution",
        eyebrow: "How the experience evolved",
        heading: "From a form to a floating assistant",
        stages: [
          {
            title: "Digital bill inquiry self-service",
            text: "Before any AI, we built a digital self-service foundation: account identification, inquiry type selection, submission, secure messaging, request tracking, and logged-in / logged-out support models. This structured the problem and surfaced common inquiry types, required inputs and routing needs.",
            image: I.secureMsg,
          },
          {
            title: "Conversational AI exploration",
            year: "2024",
            text: "With the self-service foundation in place, we explored how AI could resolve billing questions faster — assistant greeting, suggestion chips, reply states, response cards, accordions, actions, error states, feedback, loading states and chat-container behaviour.",
            image: I.exploration,
          },
          {
            title: "Pivot to a page-level assistant",
            text: "The preferred right-slider conversational model couldn't be fully implemented due to technical limitations in the available conversational-AI platform's playbook. Rather than force an ideal design that couldn't be built, we pivoted to a page-level AI Assistant — preserving the customer outcome while adapting to feasibility.",
            image: I.pageLevel,
          },
          {
            title: "Page-level AI Assistant",
            year: "2025",
            text: "The first scalable AI experience for billing support — handling questions about charges, credits, payments, promotions, taxes, fees and bill changes, and validating which intents and prompts customers actually used.",
            image: I.chart,
          },
          {
            title: "Floating contextual assistant",
            year: "2026",
            text: "The experience moved from a dedicated page into a floating contextual assistant — support became available where the customer needed it, improving discoverability, contextual access and adoption.",
            image: I.floating,
          },
          {
            title: "Future: modal assistant",
            text: "The next evolution gives the assistant more space for structured responses and richer support while keeping the customer connected to their billing context — completing the arc from form → page → floating → modal.",
            image: I.modal,
          },
        ],
      },
      {
        type: "steps",
        id: "pivot",
        eyebrow: "Design pivot",
        heading: "Adapting to technical feasibility",
        steps: [
          { title: "Preferred model", text: "Right-slider conversational assistant" },
          { title: "Constraint hit", text: "Conversational AI platform & implementation limitations" },
          { title: "Adapted to", text: "Page-level AI Assistant" },
          { title: "Evolved to", text: "Floating contextual assistant" },
        ],
      },
      {
        type: "steps",
        id: "conversation-flow",
        eyebrow: "Conversation flow",
        heading: "How a question gets resolved",
        steps: [
          { title: "Select intent", text: "Customer picks or types a billing question" },
          { title: "Assistant clarifies", text: "Confirms intent & gathers context" },
          { title: "Retrieves answer", text: "Pulls account & billing data" },
          { title: "Explains", text: "Plain-language response with detail on request" },
          { title: "Feedback / escalation", text: "Rate the answer or move to assisted support" },
        ],
      },
      {
        type: "decisions",
        id: "decisions",
        eyebrow: "Key design decisions",
        heading: "Choices that shaped the outcome",
        items: [
          {
            title: "Build self-service before scaling AI",
            text: "We first shipped digital bill inquiry so customers could raise and track inquiries online — a structured foundation before introducing AI.",
          },
          {
            title: "Use intents as the backbone",
            text: "Business-defined bill inquiry intents became the core of the assistant. Instead of a generic chatbot, we shaped it around high-frequency needs: charges, payments, credits, discounts, taxes, bill changes.",
          },
          {
            title: "Adapt to technical feasibility",
            text: "When the preferred conversational pattern wasn't feasible, we shifted to a page-level assistant — launching value faster while continuing to evolve the experience.",
          },
          {
            title: "Make AI contextual",
            text: "The assistant evolved from a destination to a floating, contextual experience — available across billing journeys instead of isolated on one page.",
          },
          {
            title: "Design for trust",
            text: "Billing requires clarity and confidence. The experience needed clear responses, transparent limitations, feedback options, legal states and a visible escalation path.",
          },
        ],
      },
      {
        type: "text",
        id: "outcome",
        eyebrow: "Outcome",
        heading: "What changed",
        body: [
          "The Billing AI Assistant scaled to 1.6M customers and reached 70% containment. Accuracy improved from 78% to 85%, with an average response time of 3.2 seconds. Repeat interactions increased 38% month-over-month, contributing an estimated $192K in quarterly savings.",
          "Beyond the metrics, the project shifted bill inquiry from a reactive service model toward a scalable digital self-service model — customers got answers faster, and the business reduced dependency on assisted support.",
        ],
      },
      {
        type: "recognition",
        id: "recognition",
        eyebrow: "Recognition",
        heading: "Noticed beyond the team",
        items: [
          {
            text: "Referenced by Verizon Business Chief Product & Marketing Officer Iris Meijer in a Forbes interview (July 2025)",
            href: "https://www.forbes.com/sites/billeehoward/2025/07/27/a-conversation-with-verizon-business-chief-product--marketing-officer-iris-meijer-on-synching-the-product--marketing-functions-to-innovate-the-customer-experiences-of-tomorrow/",
          },
          { text: "Recognized internally as a milestone in Verizon Business's AI self-service strategy" },
          {
            text: "Contributed to broader visibility for the Billing & Reporting design team through leadership forums, newsletters and internal recognition",
          },
        ],
      },
      {
        type: "reflection",
        id: "reflection",
        eyebrow: "Reflection",
        body: [
          "This project was never just about designing a chatbot interface. It was about designing a scalable service model for one of the most complex, high-volume areas of telecom: billing.",
          "It reflects my ability to lead through ambiguity, work hands-on, adapt design direction to technical constraints, align stakeholders and deliver measurable business outcomes through customer-centred design.",
          "The biggest learning: AI experiences need more than a good interface. They need clear intents, trustworthy responses, system alignment, operational readiness and continuous iteration.",
        ],
      },
    ],
  },

  /* ───────────────────────── Project 2 ───────────────────────── */
  {
    slug: "telecom-bill-payments",
    status: "Shipped",
    category: "Telecom CX",
    title: "Making Telecom Bill Payments 6× Faster",
    summary:
      "Used BRD analysis, heuristics, Adobe Analytics and a year of VOC data to find where the payment experience was losing customers — then redesigned it to be 6× faster and more consistent.",
    cardMetrics: ["6× faster payments (90s → 15s)", "+20% conversion", "−27% clicks to complete"],
    thumbnail: I.payThumb,
    cta: "Read the case study",
    eyebrow: "Telecom CX · Payments UX · Design Systems",
    description:
      "Reducing drop-offs and raising digital adoption in one of the highest-stakes transactions in the product: paying the bill.",
    gallery: [I.payMvp1, I.paySubmitted, I.payPtp, I.payDevices, I.payAutopay],
    meta: {
      client: "Verizon",
      platform: "My Biz — Small & Medium business customers",
      timeline: "2024 – 2025",
      role: "Research & Diagnosis, Heuristic Evaluation, Analytics & VOC Synthesis, Experience Redesign, Cross-functional Collaboration",
    },
    metrics: [
      { value: "6×", label: "Faster payments (90s → 15s)" },
      { value: "+20%", label: "Conversion" },
      { value: "−27%", label: "Clicks to complete" },
      { value: "81%", label: "Customer Effort Score (Apr '26)" },
      { value: "10K+", label: "Positive VOC comments / month" },
      { value: "2.9→3.1", label: "OSAT (quick-fix phase)" },
    ],
    sections: [
      {
        type: "text",
        id: "challenge",
        eyebrow: "The challenge",
        heading: "What we were solving for",
        body: [
          "Digital adoption for bill payment was sitting at 92%, and customer effort scores hadn't moved the way the business needed. Customers were dropping off mid-payment, calling in instead, or leaving frustrated feedback — for a transaction that should be one of the simplest in the product.",
          "I stepped in to run primary research to find the real experience gaps: going through BRDs, performing heuristic evaluations, layering in Adobe Analytics drop-off data page by page, and reading a year of voice-of-customer comments mapped to specific screens and transaction steps.",
          "That mapping surfaced a pattern: payment methods, scheduling and Auto Pay had each grown into their own separate experience over time — Pay Now (business card, credit/debit, bank account, gift card, or a split across methods), Schedule a Payment (one or two installments), and Auto Pay (set up, pause, turn off) — each with its own flow, inputs and inconsistencies.",
        ],
        listStyle: "numbered",
        list: [
          "Identify which UI-level and transaction-level moments were actually causing drop-off",
          "Separate true usability failures (e.g. information hierarchy, contextual placement of dependent inputs) from one-off complaints",
          "Propose fixes that could ship in ~2 months to move OSAT quickly",
          "Design a longer-term model that unifies three historically separate payment experiences",
          "Protect flexibility — multiple payment methods, split payments, multiple accounts — while reducing complexity",
        ],
      },
      {
        type: "text",
        id: "role",
        eyebrow: "My role",
        heading: "What I owned",
        body: [
          "Led primary research and diagnosis alongside a senior design teammate, then helped drive the redesign and phased rollout of a unified payment experience.",
          "I partnered with a senior designer teammate to turn a year of scattered signals — BRDs, heuristic findings, analytics, and VOC sentiment — into a single artifact: every drop-off and complaint mapped down to the exact UI component and transaction step that caused it.",
          "From that artifact, we proposed the top five fixes to ship as quick wins, then led the design for the longer-term unification of Pay Now, Schedule a Payment and Auto Pay into one consistent, flexible experience.",
        ],
        listStyle: "bullets",
        list: [
          "Audited BRDs against the live experience to find gaps between intent and implementation",
          "Ran heuristic evaluations against information hierarchy, contextual placement and task flow",
          "Layered Adobe Analytics drop-off data onto each screen in the payment journey",
          "Mapped a year of VOC sentiment to specific screens and transaction steps",
          "Identified dependency errors — e.g. asking for a payment date before the payment method that determines it",
          "Co-designed the unified Pay Now / Schedule / Auto Pay model and its phased rollout",
        ],
      },
      {
        type: "decisions",
        id: "decisions",
        eyebrow: "Key design decisions",
        heading: "Choices that shaped the outcome",
        items: [
          {
            title: "Diagnose before redesigning",
            text: "We resisted jumping to a redesign. The artifact mapping VOC, analytics and heuristics down to the component level made the fixes obvious and defensible to stakeholders.",
          },
          {
            title: "Ship quick fixes first",
            text: "Five targeted fixes were scoped to land in two months — addressing the highest-friction, highest-frequency issues without waiting for the full unified redesign.",
          },
          {
            title: "Fix sequencing, not just layout",
            text: "A recurring failure was asking for information before its dependency was known — like a payment date before the payment method that determines available dates. Fixing the order of inputs mattered as much as the visuals.",
          },
          {
            title: "Unify, don't just patch",
            text: "Pay Now, Schedule a Payment and Auto Pay were merged into one consistent model so customers can manage any payment activity in one place, then rolled out in phases — Auto Pay merging in a later phase.",
          },
        ],
      },
      {
        type: "text",
        id: "outcome",
        eyebrow: "Outcome",
        heading: "What changed",
        body: [
          "Within three months of the quick-fix launch, negative VOC sentiment declined and customers could complete a payment in about 15 seconds instead of 90 — a 6× improvement — with 20% higher conversion and 27% fewer clicks.",
          "The pilot of the unified payment experience added 10,000+ positive VOC comments per month and pushed Customer Effort Score above 80% for the first time, hitting 81% in April 2026. Auto Pay is now merging in phases, and the team is extending the same model to multiple-account payment experiences.",
        ],
      },
      {
        type: "recognition",
        id: "recognition",
        eyebrow: "Recognition",
        heading: "Noticed beyond the team",
        items: [
          { text: "Recognized by leadership as a model for using VOC + analytics + heuristics together to prioritize fixes" },
          { text: "Contributed to a consistently “Leading” performance rating, 2024 – 2025" },
        ],
      },
      {
        type: "reflection",
        id: "reflection",
        eyebrow: "Reflection",
        body: [
          "The redesign worked because it didn't start with a blank Figma file. It started with evidence — a year of customer voice, real drop-off data, and a clear-eyed audit of where the experience broke its own design principles.",
          "Sequencing mattered: ship the fast wins that move OSAT in weeks, then earn the room to do the deeper unification that removes the underlying inconsistency for good.",
        ],
      },
    ],
  },

  /* ───────────────────────── Project 3 ───────────────────────── */
  {
    slug: "shipped-initiatives",
    status: "Shipped",
    category: "Telecom CX",
    title: "32 More Shipped Initiatives",
    summary:
      "A broader look at the roadmap: 32 additional shipped and in-flight initiatives across payments, billing self-service, reporting and paper bill experiences.",
    thumbnail: I.initCollage,
    cta: "Read the case study",
    eyebrow: "Telecom CX · Billing · Payments · Reporting",
    description:
      "A broader look at the roadmap: 32 additional shipped and in-flight initiatives across payments, billing self-service, reporting and paper bill experiences.",
    /* Case study content to be added later — empty sections render a clean placeholder page. */
    gallery: [],
    sections: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

/** Projects shown in "Featured work" on the Home page (in order). */
export const featuredSlugs = ["billing-ai-assistant", "telecom-bill-payments", "shipped-initiatives"];
