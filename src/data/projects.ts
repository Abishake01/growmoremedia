import partha from "../assets/portfolio/partha.webp";
import remodj from "../assets/portfolio/remodj.webp";
import ems from "../assets/portfolio/ems.webp";

export interface Project {
  id: string;
  title: string;
  category:
    | "Social Media Creatives"
    | "Reels & Video Campaigns"
    | "Brand Identity & Promotional Designs"
    | "Paid Advertising Campaigns"
    | "Landing Pages & Website Designs"
    | "Web Apps & Dashboards";
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const projectCategories: Project["category"][] = [
  "Landing Pages & Website Designs",
  "Web Apps & Dashboards",
  "Social Media Creatives",
  "Reels & Video Campaigns",
  "Brand Identity & Promotional Designs",
  "Paid Advertising Campaigns",
];

export const projects: Project[] = [
  {
    id: "partha-mobile-shop",
    title: "Partha Mobile Shop — Inventory & Sales System",
    category: "Web Apps & Dashboards",
    description:
      "A full-stack admin dashboard built for a real mobile shop. Tracks product and phone inventory, records sales, generates reports, and manages customers, with role-based access for admins and staff.",
    image: partha,
    tags: ["React JS", "Tailwind CSS", "Supabase", "Responsive"],
    link: "https://inventory.luckyshopz.com/",
  },
  {
    id: "remo-dj",
    title: "Remo DJ — Sound & Events Website",
    category: "Landing Pages & Website Designs",
    description:
      "A bold, dark-themed landing page for a professional DJ and event management business. Features event types, equipment showcase, music genres, and direct WhatsApp booking, built for maximum impact and lead generation.",
    image: remodj,
    tags: ["React JS", "Tailwind CSS", "Responsive", "WhatsApp CTA"],
    link: "https://dj-ram-three.vercel.app/",
  },
  {
    id: "ems",
    title: "EMS — Employment Management System",
    category: "Web Apps & Dashboards",
    description:
      "An employment management dashboard for HR teams: employee records, shift scheduling, and attendance tracking. UI-focused admin tools for faster HR workflows.",
    image: ems,
    tags: ["React", "Tailwind CSS", "Admin UI", "Reports"],
    link: "https://ems-nine-ebon.vercel.app/",
  },
];
