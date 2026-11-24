/**
 * ─────────────────────────────────────────────────────────────
 *  32 MORE SHIPPED INITIATIVES — content for /work/shipped-initiatives
 *  Order matters: categories and items render exactly as listed.
 *  Images live in public/images/initiatives/.
 * ─────────────────────────────────────────────────────────────
 */
import type { ProjectImage } from "./projects";

export type Initiative = { title: string; text: string; outcomes: string[]; image: ProjectImage };
export type InitiativeCategory = { name: string; items: Initiative[] };

const img = (n: number, alt: string, width: number, height: number): ProjectImage => ({
  src: `/images/initiatives/${String(n).padStart(2, "0")}.jpg`,
  alt,
  width,
  height,
});

export const initiativeCategories: InitiativeCategory[] = [
  {
    name: "Payments",
    items: [
      {
        title: "Payment enhancements MVP1",
        text: "Incremental enhancements to payment method updates, including eliminating discounts on debit cards.",
        outcomes: ["Multi-million dollar annual savings", "Fewer negative VOC comments on payments", "Reduced assisted-channel calls"],
        image: img(1, "Payment enhancements MVP1 screen design", 1400, 859),
      },
      {
        title: "Payment enhancements MVP2",
        text: "Cleaned up the Review & Submit and Confirmation pages with an overall content sanity check.",
        outcomes: ["Fewer negative VOC comments on payments", "Reduced assisted-channel calls"],
        image: img(2, "Payment enhancements MVP2 screen design", 1400, 933),
      },
      {
        title: "Split and pay",
        text: "New split-pay capability for customers to pay with two payment methods in a single transaction.",
        outcomes: ["Increased digital mix adoption", "Increased conversion rate", "Decreased fallout"],
        image: img(3, "Split and pay screen design", 1400, 933),
      },
      {
        title: "Gift card payment",
        text: "New gift card capability for MyBiz customers to pay their invoices.",
        outcomes: ["Increased digital mix adoption", "Increased conversion rate", "Decreased fallout"],
        image: img(4, "Gift card payment screen design", 1400, 933),
      },
      {
        title: "PTP & OTP integration MVP1",
        text: "Made payment-arrangement self-serve available to all eligible customers, reducing roughly 30K monthly assisted-channel requests.",
        outcomes: ["~30K fewer monthly assisted-channel calls", "Seamless experience across the portal, IVR and support"],
        image: img(5, "PTP & OTP integration MVP1 screen design", 1400, 933),
      },
      {
        title: "PTP & OTP integration MVP2",
        text: "Made Auto Pay and device-agreement payoff transactions consistent with the updated PTP & OTP experience.",
        outcomes: ["Avoided multiple, inconsistent payment experiences", "Reduced cognitive load"],
        image: img(6, "PTP & OTP integration MVP2 screen design", 1400, 933),
      },
      {
        title: "Auto Pay redesign (merge with OTP & PTP)",
        text: "Merged Auto Pay into the new OTP/PTP payment framework for consistency and adoption.",
        outcomes: ["Increased Auto Pay adoption rate", "Reduced cognitive load"],
        image: img(7, "Auto Pay redesign (merge with OTP & PTP) screen design", 1400, 933),
      },
    ],
  },
  {
    name: "Billing & Self-Service",
    items: [
      {
        title: "Bill Inquiry",
        text: "Digital capability for customers to submit and track Bill Inquiries through quick tasks (logged out) and secure messaging (logged in).",
        outcomes: ["120K+ calls deflected per quarter", "2–6% reduction in negative comments", "+7% digital billing mix"],
        image: img(8, "Bill Inquiry screen design", 1400, 933),
      },
      {
        title: "AI Assistant",
        text: "Extended the Bill Inquiry AI agent across all Billing pages via a floating UI, instead of one dedicated page.",
        outcomes: ["85% accuracy", "3.2s average response time", "70% call containment"],
        image: img(9, "AI Assistant screen design", 1400, 933),
      },
      {
        title: "Display service credits",
        text: "Brought device credits and service credits together into one recurring-credits summary, switchable with a simple tab.",
        outcomes: ["Clarity and transparency on credits", "Fewer calls and tickets to support"],
        image: img(10, "Display service credits screen design", 1400, 933),
      },
      {
        title: "Display adjustments",
        text: "Displayed adjustments on the Quick Bill Summary page to better explain the real-time balance.",
        outcomes: ["Better customer experience with accurate, explained figures"],
        image: img(11, "Display adjustments screen design", 1400, 933),
      },
      {
        title: "Late fee credit automation",
        text: "Self-serve refund flow for international customers to securely submit bank details for late-fee refunds, instead of emailing an agent.",
        outcomes: ["Eliminated paper-based refund requests", "Reduced offline refund assistance", "Increased digital adoption"],
        image: img(12, "Late fee credit automation screen design", 1400, 933),
      },
      {
        title: "Digital Bill — Late Fee",
        text: "Late-fee messaging for standard and non-standard customers, aligned with legal and compliance feedback.",
        outcomes: ["Clarity on late-fee charges", "Reduced compliance risk"],
        image: img(13, "Digital Bill — Late Fee screen design", 1400, 933),
      },
      {
        title: "Bill compare (VEC)",
        text: "Lets customers compare their two most recent bills at an account and line level to understand what changed.",
        outcomes: ["+7% digital billing mix", "Thousands of assisted tickets/year converted to digital"],
        image: img(14, "Bill compare (VEC) screen design", 1400, 875),
      },
      {
        title: "Video Bill (Next Bill Estimate)",
        text: "Explains upcoming bill changes — new charges, plan or product changes, taxes — through a 'next bill estimate' CTA in pre- and post-order flows.",
        outcomes: ["Reduced bill shocks, inquiries and calls", "Increased digital adoption", "Call containment within 24 hours"],
        image: img(15, "Video Bill (Next Bill Estimate) screen design", 1400, 933),
      },
      {
        title: "Bill overview — Analytics tile",
        text: "New section on the Bill overview page showing charges by category in both visual graph and tabular form.",
        outcomes: ["Anticipated call deflection"],
        image: img(16, "Bill overview — Analytics tile screen design", 1400, 933),
      },
    ],
  },
  {
    name: "Reporting & QBR",
    items: [
      {
        title: "QBR Design",
        text: "Replaced manually-shared quarterly business review slide decks with a self-service capability inside the portal.",
        outcomes: ["Increased digital mix", "Reduction in assisted-channel calls"],
        image: img(17, "QBR Design screen design", 1400, 933),
      },
      {
        title: "QBR: Pega recommendation tiles",
        text: "Revisited the design and content of Pega-driven recommendation tiles inside QBR based on technical feasibility.",
        outcomes: ["Grew services-led sales revenue", "Increased digital mix", "Reduction in assisted-channel calls"],
        image: img(17, "QBR: Pega recommendation tiles screen design", 1400, 933),
      },
      {
        title: "Billing dashboard",
        text: "New billing landing page with data visualizations and next-best-action highlights.",
        outcomes: ["+7% digital billing mix", "Thousands of assisted tickets/year converted to digital"],
        image: img(18, "Billing dashboard screen design", 1400, 933),
      },
      {
        title: "Reporting landing page",
        text: "New reporting landing page with a clear hierarchy of standard and custom reports, built to scale toward notifications, recommendations and analytics.",
        outcomes: ["Improved findability of reports", "Simplified report-position selection"],
        image: img(19, "Reporting landing page screen design", 1400, 933),
      },
      {
        title: "Reporting position",
        text: "Improved usability of 'reporting position' — letting customers view reports by their own org or billing structure.",
        outcomes: ["OSAT improved 2.8 → 3.2", "+7% digital reporting mix"],
        image: img(20, "Reporting position screen design", 1400, 933),
      },
      {
        title: "Reports to action — Landing page",
        text: "Added visualizations to recommendation tiles and expanded the reports table to the full page width.",
        outcomes: ["Multi-million dollar churn-benefit potential", "Increased ARPU through plan step-ups"],
        image: img(21, "Reports to action — Landing page screen design", 1400, 933),
      },
      {
        title: "Reports to action — Preview page",
        text: "Surfaced the report information that matters most upfront, so users can act without opening the full report.",
        outcomes: ["Faster, clearer decisions from report previews"],
        image: img(22, "Reports to action — Preview page screen design", 1400, 839),
      },
      {
        title: "Scheduling Frequency",
        text: "Added daily, weekly and multi-day-of-month scheduling options for recurring reports.",
        outcomes: ["OSAT improved 2.8 → 3.2", "+7% digital adoption", "Fewer calls to customer service"],
        image: img(23, "Scheduling Frequency screen design", 1400, 933),
      },
      {
        title: "Create custom report redesign",
        text: "Simplified the custom-report builder — removing empty fields, reorganizing headers and tiles, and making search and sequencing easier.",
        outcomes: ["More efficient report-creation flow", "Reduction in assisted-channel calls"],
        image: img(24, "Create custom report redesign screen design", 1400, 839),
      },
      {
        title: "Reporting overview section",
        text: "Introduced an overview section above the reporting table, surfacing key insights and trends as tiles with numbers and line graphs.",
        outcomes: ["Helps customers spot and act on overage and plan issues at a glance"],
        image: img(25, "Reporting overview section screen design", 1400, 839),
      },
      {
        title: "Recommendations",
        text: "Brought Pega-driven recommendations onto reporting landing and preview pages, tied to customers' plans and lines.",
        outcomes: ["New services-led sales channel from reporting", "Increased digital mix"],
        image: img(26, "Recommendations screen design", 1400, 839),
      },
    ],
  },
  {
    name: "Paper Bill",
    items: [
      {
        title: "Paper Bill MVP1",
        text: "Redesigned paper bill page 1 with a clear snapshot of the bill, QR code and Auto Pay information.",
        outcomes: ["Reduction in assisted-channel calls", "Fewer negative VOC comments"],
        image: img(27, "Paper Bill MVP1 screen design", 1400, 839),
      },
      {
        title: "Paper Bill MVP2",
        text: "Repositioned and enlarged the QR code, aligning it with the bill snapshot for visibility.",
        outcomes: ["Reduction in assisted-channel calls", "Fewer negative VOC comments"],
        image: img(28, "Paper Bill MVP2 screen design", 1400, 839),
      },
      {
        title: "Paper Bill MVP3",
        text: "Added Auto Pay, payment and adjustment-summary information, plus a changes-since-last-bill summary.",
        outcomes: ["Reduction in assisted-channel calls", "Fewer negative VOC comments"],
        image: img(29, "Paper Bill MVP3 screen design", 1400, 839),
      },
      {
        title: "Paper Bill MVP4",
        text: "Merged pages 2 and 3 to save on printing — combining the bill summary, changes-since-last-bill and ways-to-pay.",
        outcomes: ["Reduction in assisted-channel calls", "Fewer negative VOC comments"],
        image: img(30, "Paper Bill MVP4 screen design", 1400, 839),
      },
      {
        title: "Paper Bill — Late fee",
        text: "Late-fee messaging for standard and non-standard customers on the paper bill, aligned with legal and compliance feedback.",
        outcomes: ["Clarity on late-fee charges", "Reduced compliance risk"],
        image: img(31, "Paper Bill — Late fee screen design", 1400, 839),
      },
    ],
  },
];
