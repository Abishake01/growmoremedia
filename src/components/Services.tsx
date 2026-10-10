import { ArrowRight } from "lucide-react";
import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything Your Brand Needs to Grow Online.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-white/60">
            From building your digital identity to generating qualified leads, we help
            your business reach the right audience with the right strategy.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={0.06 * i}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-border-soft bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-surface">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
                  >
                    <Icon size={22} className="text-ink" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan transition-colors group-hover:text-neon"
                  >
                    Explore Service
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
