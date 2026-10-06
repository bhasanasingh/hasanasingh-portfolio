/**
 * ─────────────────────────────────────────────────────────────
 *  EXPERIENCE, SKILLS & TOOLS
 *  Experience is shown on the Resume page. Add `placeholder: true`
 *  to any entry to show a "Placeholder" tag next to it.
 * ─────────────────────────────────────────────────────────────
 */

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  placeholder?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Verizon",
    role: "Senior Product Designer II",
    location: "Chennai, India",
    start: "2019",
    end: "Dec 2025",
    summary:
      "Led UX for billing, payments and reporting journeys on Verizon Business's MyBiz enterprise portal, serving small and medium business customers.",
    achievements: [
      "6× faster payments (90s → 15s) and an average of 10,000+ additional positive VoC comments per month, by redesigning the one-time payment transaction and merging it with future-dated payments.",
      "$2.9M saved per year by offloading 760K annual bill inquiries — pioneered the designs for the first-ever AI-funded project, a Google CCAI-powered agent that achieved 85% accuracy and a 70% containment rate.",
      "8× faster future-dated payments (under 2 minutes, compared with 16 minutes through assisted support) by designing a self-serve experience.",
      "4,000+ VoC data points from Medallia and Quantum Metric analysed and mapped to billing and payment transaction screens, identifying friction areas for UX improvements throughout the year.",
      "$3.5M in annual upsell and cross-sell opportunities (through PEGA recommendations) enabled by interactive dashboards that let business customers explore their financial and usage patterns without relying on sales reps; onboarded contractors and junior designers onto these complex data-visualisation projects.",
      "Institutionalised UserTesting.com across the lifecycle of all critical projects, running workshops on moderated and unmoderated testing protocols for peers and senior leadership to secure executive buy-in for data-informed decisions.",
      "Partnered with stakeholders on roadmap planning, aligning design delivery timelines and feature prioritisation with high-level business objectives.",
    ],
  },
  {
    company: "BNY Mellon",
    role: "Lead Experience Designer",
    location: "Chennai, India",
    start: "2014",
    end: "2019",
    summary:
      "Led the UX strategy for enterprise-scale disaster and leave management systems within a global banking environment.",
    achievements: [
      "37% fewer user errors and Employee Satisfaction (ESAT) up from 39% to 72%, by restructuring the information architecture, user role permissions and navigation framework.",
      "14 enterprise-grade applications aligned to one cohesive brand voice by standardising UI messaging — recognised by the innovation heads. Beyond verbiage, recommended navigation and functional refinements that streamlined complex user journeys.",
      "Collaborated with business and tech teams in an Agile environment, taking part in sprints and retrospectives to continuously improve the product experience.",
    ],
  },
  {
    company: "Ramco Systems & HCL",
    role: "Senior Technical Writer",
    location: "Chennai, India",
    start: "2012",
    end: "2014",
    summary: "Documentation for enterprise ERP applications and global clients.",
    achievements: [
      "Gathered requirements from business analysts and developed user manuals for ERP applications, following DDLC guidelines.",
      "Created, edited and developed templates for documenting runbooks for Novartis (client).",
    ],
  },
];

export const skills = [
  "UX Strategy",
  "Product Design",
  "AI Assistant UX",
  "Conversational UX",
  "Service Blueprinting",
  "Service Design",
  "VOC Analysis",
  "Usability Testing",
  "Adobe Analytics",
  "Accessibility",
  "User-Centered Design",
  "UX Research",
  "Customer Journey Mapping",
  "Stakeholder Management",
  "Design Systems",
  "Prototyping",
];

export const tools = [
  { name: "Figma", group: "Design" },
  { name: "FigJam", group: "Design" },
  { name: "Sketch", group: "Design" },
  { name: "Adobe Photoshop", group: "Design" },
  { name: "Medallia", group: "Research & data" },
  { name: "Adobe Analytics", group: "Research & data" },
  { name: "Tableau", group: "Research & data" },
  { name: "UserTesting", group: "Research & data" },
  { name: "Google Workspace", group: "Collaboration" },
  { name: "Gemini", group: "AI" },
  { name: "ChatGPT", group: "AI" },
  { name: "Claude", group: "AI" },
];
