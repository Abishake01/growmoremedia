import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "../config/site";
import { useScrolled, useScrollSpy } from "../lib/useScrollSpy";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const sectionIds = siteConfig.nav.map((item) => item.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-lg border-b border-border-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-neon to-cyan"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_24px_-6px_rgba(57,255,136,0.5)] transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Let's Grow Together
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border-soft bg-ink/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-white/85 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-neon to-cyan px-5 py-3 text-center text-sm font-semibold text-ink"
                >
                  Let's Grow Together
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
