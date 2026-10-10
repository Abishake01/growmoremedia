import { Compass, Sparkles, Crosshair, MessageSquare, TrendingUp, type LucideIcon } from "lucide-react";

export interface WhyUsItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyUs: WhyUsItem[] = [
  {
    id: "strategy-first",
    icon: Compass,
    title: "Strategy First",
    description: "Every campaign begins with your business goals and target audience.",
  },
  {
    id: "creative-that-connects",
    icon: Sparkles,
    title: "Creative That Connects",
    description: "We build memorable brand experiences through engaging content.",
  },
  {
    id: "audience-focus",
    icon: Crosshair,
    title: "Audience Focus",
    description: "We reach relevant audiences instead of chasing vanity metrics.",
  },
  {
    id: "transparent-communication",
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Deliverables, campaign scope, and reporting stay clear.",
  },
  {
    id: "continuous-improvement",
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We review campaign performance and refine strategies over time.",
  },
];
