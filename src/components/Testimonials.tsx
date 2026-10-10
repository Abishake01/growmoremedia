import { MessageCircleHeart } from "lucide-react";
import Reveal from "../lib/Reveal";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What Our Clients Say.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border-soft bg-surface/30 px-8 py-14">
            <MessageCircleHeart size={32} className="text-cyan" strokeWidth={1.5} />
            <p className="text-lg font-medium text-white/80">Client stories coming soon.</p>
            <p className="max-w-md text-sm text-white/50">
              We're gathering feedback from the businesses we work with. Genuine client
              reviews and case studies will appear here once available.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
