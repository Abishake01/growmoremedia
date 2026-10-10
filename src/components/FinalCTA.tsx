import { MessageCircle, ArrowUpRight } from "lucide-react";
import Reveal from "../lib/Reveal";
import { siteConfig } from "../config/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-neon/10 via-cyan/10 to-violet/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to <span className="text-gradient">Grow</span> Your Business Online?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-white/65">
            Tell us about your business, your goals, and where you want to grow. Let's
            create a digital strategy that moves your brand forward.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_rgba(57,255,136,0.5)] transition-transform hover:scale-[1.03]"
            >
              Start a Conversation
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-surface"
            >
              Explore Pricing
            </a>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              <MessageCircle size={16} className="text-neon" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
