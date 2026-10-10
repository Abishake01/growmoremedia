import { Star } from "lucide-react";
import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Kind Words</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-2xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What Our Clients Say.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={0.08 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface/40 p-7">
                <div className="flex items-center gap-1 text-neon">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-white/70">
                  {t.wrapInQuotes ? `"${t.quotePrefix}"` : t.quotePrefix}
                  {t.linkLabel && t.linkHref && (
                    <a
                      href={t.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan underline underline-offset-2 hover:text-neon"
                    >
                      {t.linkLabel}
                    </a>
                  )}
                  {t.quoteSuffix}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-ink text-sm font-semibold text-white/80">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
