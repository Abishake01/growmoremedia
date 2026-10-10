import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { whyUs } from "../data/whyUs";

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Why Growmore</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            More Than Marketing. A Partner in Your Growth.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-5">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={item.id} delay={0.06 * i}>
                <div
                  className={`flex flex-col items-center gap-6 rounded-2xl border border-border-soft bg-surface/40 p-7 sm:flex-row ${
                    reversed ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-soft bg-ink">
                    <Icon size={24} className="text-neon" />
                  </div>
                  <div className={`text-center ${reversed ? "sm:text-right" : "sm:text-left"}`}>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
