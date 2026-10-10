export interface Project {
  id: string;
  title: string;
  category:
    | "Social Media Creatives"
    | "Reels & Video Campaigns"
    | "Brand Identity & Promotional Designs"
    | "Paid Advertising Campaigns"
    | "Landing Pages & Website Designs";
  description: string;
  accent: string;
}

export const projectCategories: Project["category"][] = [
  "Social Media Creatives",
  "Reels & Video Campaigns",
  "Brand Identity & Promotional Designs",
  "Paid Advertising Campaigns",
  "Landing Pages & Website Designs",
];

// Sample work — replace with real client projects as they become available.
export const projects: Project[] = [
  {
    id: "sample-social-1",
    title: "Sample: Café Launch Post Series",
    category: "Social Media Creatives",
    description:
      "A sample content series concept for a café brand launch, built around a consistent visual identity.",
    accent: "from-neon to-cyan",
  },
  {
    id: "sample-reel-1",
    title: "Sample: Salon Promo Reel Concept",
    category: "Reels & Video Campaigns",
    description:
      "A short-form video concept designed to showcase a beauty salon's services and offers.",
    accent: "from-cyan to-electric",
  },
  {
    id: "sample-brand-1",
    title: "Sample: Fitness Studio Brand Kit",
    category: "Brand Identity & Promotional Designs",
    description:
      "A sample branding direction including logo usage, color palette, and promotional templates.",
    accent: "from-electric to-violet",
  },
  {
    id: "sample-ads-1",
    title: "Sample: Local Retail Ad Creative Set",
    category: "Paid Advertising Campaigns",
    description:
      "A sample ad creative set designed for a retail business running Meta Ads campaigns.",
    accent: "from-violet to-neon",
  },
  {
    id: "sample-landing-1",
    title: "Sample: Service Enquiry Landing Page",
    category: "Landing Pages & Website Designs",
    description:
      "A sample mobile-responsive landing page layout built to convert visitors into enquiries.",
    accent: "from-neon to-electric",
  },
  {
    id: "sample-social-2",
    title: "Sample: Consultant Personal Brand Posts",
    category: "Social Media Creatives",
    description:
      "A sample content concept for a consultant building authority and engagement on social media.",
    accent: "from-cyan to-violet",
  },
];
