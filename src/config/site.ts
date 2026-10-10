export const siteConfig = {
  name: "Growmore Media",
  tagline: "Grow Your Brand. Reach More. Get More.",
  description:
    "We help ambitious businesses grow online through strategic social media marketing, high-performing ads, creative content, and lead generation.",

  // Replace with verified business details before launch.
  contact: {
    email: "hello@growmoremedia.in",
    phone: "+91 90000 00000",
    whatsapp: "+91 90000 00000",
    whatsappLink: "https://wa.me/919000000000",
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
