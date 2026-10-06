/** Home-page content: metrics, contributions, awards and recommendations. */

export type Metric = { value: string; label: string };

export const signatureMetrics: Metric[] = [
  { value: "6×", label: "faster payments" },
  { value: "1.6M", label: "customers reached by AI assistant" },
  { value: "$2.9M", label: "operational costs saved per year" },
  { value: "85%", label: "AI assistant accuracy" },
  { value: "34+", label: "projects shipped in 2 years" },
];

export const contributions = [
  {
    title: "Cross-domain experience ownership",
    text: "Drove end-to-end design beyond Billing. Owned experiences for Upgrades, Packages & Bundles, and Software products for business users, ensuring design consistency across the full customer lifecycle.",
  },
  {
    title: "Project knowledge centre",
    text: "Authored a living knowledge base covering problem statement, delivery timelines, launch details, primary & secondary research, usability tests, design audits, critical VoC, and post-launch enhancements.",
  },
  {
    title: "Capability metrics, sitemap & task flows",
    text: "Built the foundational artefacts for the entire Billing & Payments module — capability metrics, a comprehensive sitemap, and task flows — creating the single source of truth no one had documented before.",
  },
  {
    title: "Annual design progress reports",
    text: "Created and socialised annual reports with design leadership. Documented the full year's progress across Billing & Payments, giving the team a strategic narrative and benchmarking baseline.",
  },
];

export const awards = [
  {
    title: "Forbes feature",
    text: "Billing AI Assistant referenced by Verizon Business Chief Product & Marketing Officer Iris Meijer in a Forbes interview, July 2025.",
    href: "https://www.forbes.com/sites/billeehoward/2025/07/27/a-conversation-with-verizon-business-chief-product--marketing-officer-iris-meijer-on-synching-the-product--marketing-functions-to-innovate-the-customer-experiences-of-tomorrow/",
  },
  {
    title: "Customer Experience recognition",
    text: "Acknowledged by business and tech teams directly for impact on customer-facing billing journeys.",
  },
  {
    title: "Product & Marketing recognition",
    text: "Acknowledged for analysing VOCs and reimagining the payment experiences for S&M business customers.",
  },
];

/** `tone` picks one of the muted card colours in tokens.css (--tone-1 … --tone-5). `photo` lives in public/images/people/. */
export const recommendations = [
  {
    name: "Sharmeen Haque",
    title: "Associate Director",
    photo: "/images/people/sharmeen-haque.jpg",
    tone: 1,
    quote: [
      "Hasana bridges the gap between design and data, leveraging usability tests & surveys to ensure every creative decision is validated by authentic feedback.",
      "Beyond her technical expertise, she brings a calm, collaborative energy to the team and is always open to feedback and iteration. She is a designer who is strategic, detail-oriented, and genuinely passionate about creating great user experiences.",
    ],
  },
  {
    name: "Douglas Mark",
    title: "Senior Product Manager",
    photo: "/images/people/douglas-mark.jpg",
    tone: 2,
    quote: [
      "Hasana doesn't just 'execute' — she is a creative partner. What I appreciated most is that she strikes the perfect balance of honouring the project's requirements (whether they are a few or many) while also presenting innovative options that the team hadn't considered.",
      "Beyond the design work, Hasana is a data-driven professional who excels at using prototypes and user surveys to refine her designs based on real feedback. She is receptive to critique, a brilliant brainstormer, and a genuine joy to be around.",
    ],
  },
  {
    name: "Jivtesh Singh Aulakh",
    title: "Lead Designer",
    photo: "/images/people/jivtesh-singh-aulakh.jpg",
    tone: 3,
    quote: [
      "Hasana is a one-woman army who goes above & beyond when it comes to work. She handles multiple projects simultaneously, managing UX strategy, conducting research, and consistently delivering viable design solutions. Her ability to hold the big picture while staying precise in execution is something truly rare. Her readiness to learn, explore and do more makes her a great contributor.",
    ],
  },
  {
    name: "Venkat P",
    title: "Senior Designer",
    photo: "/images/people/venkat-p.jpg",
    tone: 4,
    quote: [
      "Hasana quickly mastered a completely new domain while building an AI-powered billing agent, taking the time to deeply understand how support agents actually resolve billing queries — not just the tools, but the judgment calls behind them. Her approach was defined by genuine curiosity: she asked why, not just how, until she grasped the underlying logic. Working with her reshaped how I think about cross-functional design, and reflected real curiosity, humility, and partnership.",
    ],
  },
  {
    name: "Aarthi Kumar",
    title: "Technical Writer",
    photo: "/images/people/aarthi-kumar.jpg",
    tone: 5,
    quote: [
      "Having known Hasana since our days as technical writers together, I watched her skills translate naturally into UX design — her instinct for clear structure, precise language, and reader empathy became the foundation for structuring user flows and testing whether designs actually work. Her core character has stayed constant: a proactive go-getter with relentless attention to detail who generously shares her thinking with teammates. The shift from technical writing to UX design was a genuine transformation that Hasana made look effortless, and she has my unhesitating recommendation.",
    ],
  },
];
