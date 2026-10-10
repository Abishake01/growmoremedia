import shopDash from "../assets/portfolio/shop_dash.webp";
import shopProduct from "../assets/portfolio/shop_product.webp";
import shopPhones from "../assets/portfolio/shop_phones.webp";
import shopSales from "../assets/portfolio/shop_sales.webp";
import shopReport from "../assets/portfolio/shop_report.webp";

import djOpening from "../assets/portfolio/dj_opening.webp";
import djEvent from "../assets/portfolio/dj_event.webp";
import djPer from "../assets/portfolio/dj_per.webp";
import djMusic from "../assets/portfolio/dj_music.webp";
import djContact from "../assets/portfolio/dj_contact.webp";

import emsDash from "../assets/portfolio/ems_dash.webp";
import emsEmp from "../assets/portfolio/ems_emp.webp";
import emsAna from "../assets/portfolio/ems_ana.webp";

import beautybee from "../assets/portfolio/beautybee.webp";

export interface ProjectImage {
  src: string;
  label: string;
}

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
  images: ProjectImage[];
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
    images: [
      { src: shopDash, label: "Dashboard" },
      { src: shopProduct, label: "Product Inventory" },
      { src: shopPhones, label: "Phone Inventory" },
      { src: shopSales, label: "Sales History" },
      { src: shopReport, label: "Reports" },
    ],
    tags: ["React JS", "Tailwind CSS", "Supabase", "Responsive", "Role-Based Auth"],
    link: "https://inventory.luckyshopz.com/",
  },
  {
    id: "remo-dj",
    title: "Remo DJ — Sound & Events Website",
    category: "Landing Pages & Website Designs",
    description:
      "A bold, dark-themed landing page for a professional DJ and event management business. Features event types, equipment showcase, music genres, and direct WhatsApp booking, built for maximum impact and lead generation.",
    images: [
      { src: djOpening, label: "Hero" },
      { src: djEvent, label: "Event" },
      { src: djPer, label: "Performance" },
      { src: djMusic, label: "Music" },
      { src: djContact, label: "Contact" },
    ],
    tags: ["React JS", "Tailwind CSS", "Responsive", "WhatsApp CTA", "Dark Theme"],
    link: "https://dj-ram-three.vercel.app/",
  },
  {
    id: "ems",
    title: "EMS — Employment Management System",
    category: "Web Apps & Dashboards",
    description:
      "An employment management dashboard for HR teams: employee records, shift scheduling, and attendance tracking. UI-focused admin tools for faster HR workflows.",
    images: [
      { src: emsDash, label: "Dashboard" },
      { src: emsEmp, label: "Employees" },
      { src: emsAna, label: "Analytics" },
    ],
    tags: ["React", "Tailwind CSS", "Admin UI", "Reports"],
    link: "https://ems-nine-ebon.vercel.app/",
  },
  {
    id: "beautybee",
    title: "Beautybee Makeover — Beauty Parlour & Bridal Website",
    category: "Landing Pages & Website Designs",
    description:
      "A warm, elegant landing page for a beauty parlour and bridal services studio. Covers services, bridal packages, gallery, and testimonials, with a prominent appointment-booking flow.",
    images: [{ src: beautybee, label: "Hero" }],
    tags: ["React JS", "Tailwind CSS", "Responsive", "Appointment Booking"],
    link: "https://beautybee-psi.vercel.app/",
  },
];
