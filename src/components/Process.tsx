import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { processSteps } from "../data/process";

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Our Process</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From First Conversation to Sustainable Growth.
          </h2>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden lg:grid lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-border-soft to-transparent" />
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={0.1 * i}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border-soft bg-ink font-display text-lg font-semibold text-gradient">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-14 flex flex-col gap-8 lg:hidden">
          <div className="absolute bottom-0 left-7 top-0 w-px bg-border-soft" />
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={0.08 * i}>
              <div className="relative flex gap-5 pl-0">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border-soft bg-ink font-display text-lg font-semibold text-gradient">
                  {step.number}
                </div>
                <div className="pt-2.5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
