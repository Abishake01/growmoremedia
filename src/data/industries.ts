import {
  Scissors,
  UtensilsCrossed,
  Car,
  HeartPulse,
  Dumbbell,
  Store,
  Users,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  icon: LucideIcon;
  label: string;
}

export const industries: Industry[] = [
  { id: "beauty", icon: Scissors, label: "Beauty Salons & Parlours" },
  { id: "restaurants", icon: UtensilsCrossed, label: "Restaurants & Cafés" },
  { id: "auto", icon: Car, label: "Auto Service & Repair Shops" },
  { id: "healthcare", icon: HeartPulse, label: "Healthcare & Wellness" },
  { id: "fitness", icon: Dumbbell, label: "Fitness & Training" },
  { id: "retail", icon: Store, label: "Retail & Local Businesses" },
  { id: "consultants", icon: Users, label: "Coaches, Consultants & Service Pros" },
  { id: "startups", icon: Rocket, label: "Startups & Growing Brands" },
];
