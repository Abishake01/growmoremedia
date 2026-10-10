import {
  Share2,
  Megaphone,
  Palette,
  Clapperboard,
  Target,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const services: Service[] = [
  {
    id: "social-media-marketing",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a consistent brand presence through content planning, account management, audience engagement, and platform-specific strategies.",
    gradient: "from-neon to-cyan",
  },
  {
    id: "meta-ads",
    icon: Megaphone,
    title: "Meta Ads & Paid Campaigns",
    description:
      "Create and optimize Facebook and Instagram advertising campaigns designed around your business goals, target audience, and budget.",
    gradient: "from-cyan to-electric",
  },
  {
    id: "creative-branding",
    icon: Palette,
    title: "Creative Designs & Branding",
    description:
      "Design engaging social media posts, promotional creatives, campaign graphics, and branded visual content.",
    gradient: "from-electric to-violet",
  },
  {
    id: "reels-video",
    icon: Clapperboard,
    title: "Reels & Video Content",
    description:
      "Develop short-form video concepts, Reels, promotional videos, and content ideas that help brands capture attention.",
    gradient: "from-violet to-neon",
  },
  {
    id: "lead-generation",
    icon: Target,
    title: "Lead Generation",
    description:
      "Create lead-focused campaigns, enquiry funnels, landing pages, and conversion-focused strategies to help businesses attract potential customers.",
    gradient: "from-neon to-electric",
  },
  {
    id: "landing-pages",
    icon: LayoutTemplate,
    title: "Landing Page Creation",
    description:
      "Build fast, mobile-friendly landing pages that communicate your offer clearly and encourage visitors to enquire, book, or purchase.",
    gradient: "from-cyan to-violet",
  },
];
