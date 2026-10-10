import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./BrandIcons";
import Logo from "./Logo";
import { siteConfig } from "../config/site";
import { services } from "../data/services";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-soft bg-navy/60 pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Growmore Media helps ambitious businesses grow online through strategic
              social media marketing, high-performing ads, creative content, and lead
              generation.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href={siteConfig.social.instagram} label="Instagram">
                <InstagramIcon size={16} />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.facebook} label="Facebook">
                <FacebookIcon size={16} />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
                <LinkedinIcon size={16} />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/55 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-white/55 hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white"
                >
                  <Mail size={15} className="text-cyan" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/55 hover:text-white"
                >
                  <Phone size={15} className="text-cyan" />
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-soft py-7 sm:flex-row">
          <p className="text-sm font-medium text-white/50">{siteConfig.tagline}</p>
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Growmore Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-white/70 transition-colors hover:border-cyan/50 hover:text-cyan"
    >
      {children}
    </a>
  );
}
