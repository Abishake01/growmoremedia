import { Check, Sparkles } from "lucide-react";
import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { plans, landingPagePlan, pricingNote } from "../data/plans";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Simple, Transparent Pricing</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Right Growth Plan for Your Business.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-white/60">
            Choose a plan based on your current goals. Whether you are building your
            online presence or scaling your campaigns, we can help you find the right
            approach.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={0.08 * i}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.featured
                    ? "border-transparent bg-gradient-to-b from-navy-light to-surface shadow-[0_0_0_1.5px_rgba(57,255,136,0.4),0_0_50px_-15px_rgba(34,211,238,0.4)]"
                    : "border-border-soft bg-surface/40"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-neon to-cyan px-4 py-1.5 text-xs font-semibold text-ink">
                    <Sparkles size={13} />
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/55">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-semibold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/50">{plan.billing}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-white/75">
                      <Check size={16} className="mt-0.5 shrink-0 text-neon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                    plan.featured
                      ? "bg-gradient-to-r from-neon to-cyan text-ink shadow-[0_0_24px_-6px_rgba(57,255,136,0.5)]"
                      : "border border-border-soft text-white hover:border-white/30"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-between gap-6 rounded-2xl border border-border-soft bg-surface/40 p-7 sm:flex-row">
            <div>
              <h4 className="font-display text-lg font-semibold text-white">
                {landingPagePlan.name}
              </h4>
              <p className="mt-1 text-sm text-white/55">{landingPagePlan.description}</p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-semibold text-white">
                  {landingPagePlan.price}
                </span>
                <span className="text-sm text-white/50">{landingPagePlan.billing}</span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-border-soft bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30"
            >
              {landingPagePlan.cta}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-white/40">
            {pricingNote}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-white/70">
              Not sure which plan fits your business? Let's discuss your goals and
              create a suitable package.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_24px_-6px_rgba(57,255,136,0.5)] transition-transform hover:scale-[1.03]"
            >
              Get a Custom Quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
