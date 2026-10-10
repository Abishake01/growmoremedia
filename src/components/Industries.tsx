import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { industries } from "../data/industries";

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Industries We Serve</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Helping Businesses Stand Out in Every Industry.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.id} delay={0.04 * i}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border-soft bg-surface/40 px-5 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-surface">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-soft bg-ink">
                    <Icon size={20} className="text-cyan" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{industry.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <span className="text-white/50">...and many more</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-surface"
            >
              Discuss Your Custom Requirements
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
