export const siteConfig = {
  name: "Growmore Media",
  tagline: "Grow Your Brand. Reach More. Get More.",
  description:
    "We help ambitious businesses grow online through strategic social media marketing, high-performing ads, creative content, and lead generation.",

  contact: {
    email: "growmoredigitalads@gmail.com",
    phone: "+91 76675 73554",
    whatsapp: "+91 76675 73554",
    whatsappLink: "https://wa.me/917667573554",
    address: "India",
  },

  social: {
    instagram: "https://instagram.com/growmoremedia",
    facebook: "https://facebook.com/growmoremedia",
    linkedin: "https://linkedin.com/company/growmoremedia",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Our Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
