export interface Plan {
  id: string;
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter Presence",
    price: "₹4,999",
    billing: "/month",
    description:
      "Best for small businesses and brands beginning their social media journey.",
    features: [
      "Social media strategy and basic content planning",
      "Management of one selected social media platform",
      "Up to 8 creative posts per month",
      "Basic captions and hashtag research",
      "Monthly content calendar",
      "Basic monthly performance summary",
      "WhatsApp support for routine coordination",
    ],
    cta: "Choose Starter",
  },
  {
    id: "growth",
    name: "Growth Accelerator",
    price: "₹9,999",
    billing: "/month",
    description:
      "Best for growing businesses that want consistent content and a stronger digital presence.",
    features: [
      "Everything in Starter Presence",
      "Management of up to two selected social media platforms",
      "Up to 12 creative posts per month",
      "Up to 4 Reels per month (subject to agreed scope)",
      "Monthly campaign planning",
      "Meta Ads campaign setup and management",
      "Basic lead generation strategy",
      "Monthly performance review and recommendations",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    id: "performance",
    name: "Performance Pro",
    price: "₹19,999",
    billing: "/month",
    description:
      "Best for established businesses seeking more active campaign management and lead generation.",
    features: [
      "Everything in Growth Accelerator",
      "Management of up to three selected social media platforms",
      "Up to 16 creative posts per month",
      "Up to 8 Reels per month (subject to agreed scope)",
      "Advanced campaign optimization",
      "Lead generation campaign management",
      "Audience and creative testing",
      "Landing page strategy and conversion recommendations",
      "Detailed monthly campaign reporting",
      "Priority communication",
    ],
    cta: "Choose Performance",
  },
];

export const landingPagePlan = {
  id: "landing-page",
  name: "Landing Page Creation",
  price: "₹4,999",
  billing: "one-time",
  description:
    "For businesses that need a professional landing page to promote a service, product, offer, or advertising campaign.",
  features: [
    "One custom-designed landing page",
    "Mobile-responsive layout",
    "Hero, services or offer, benefits, and contact sections",
    "WhatsApp and enquiry form integration",
    "Basic on-page SEO setup",
    "Deployment assistance",
  ],
  cta: "Build My Landing Page",
};

export const pricingNote =
  "These are proposed starting prices, presented as editable sample pricing until final scope and commercial terms are confirmed. Final scope and pricing depend on your requirements. Advertising spend, premium third-party tools, additional production requirements, and other external costs are excluded unless explicitly included in the agreed quotation.";
