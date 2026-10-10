export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, target audience, goals, existing online presence, and budget.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Develop a customized marketing approach, service scope, content plan, and campaign direction.",
  },
  {
    number: "03",
    title: "Create & Launch",
    description:
      "Produce approved creatives, publish content, set up campaigns, and launch the agreed activities.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "Review available performance data, share reports, and refine the approach based on results.",
  },
];
