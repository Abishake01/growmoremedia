import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Heart, ArrowUpRight } from "lucide-react";
import Reveal from "../lib/Reveal";
import { InstagramIcon, FacebookIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-neon/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/60 px-4 py-1.5 text-xs font-medium text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
              </span>
              Helping Businesses Grow Online
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Business Deserves to{" "}
              <span className="text-gradient">Be Seen.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              We help ambitious businesses{" "}
              <span className="text-gradient font-medium">Grow Online</span> through
              strategic social media marketing, high-performing ads, creative content,
              and lead generation.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_rgba(57,255,136,0.5)] transition-transform hover:scale-[1.03]"
              >
                Explore Our Services
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-surface"
              >
                View Our Plans
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            {/* phone mockup */}
            <motion.div
              className="absolute inset-x-10 inset-y-4 rounded-[2.5rem] border border-border-soft bg-gradient-to-b from-navy-light to-navy p-4 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-full w-full rounded-[2rem] border border-white/5 bg-ink p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-2 w-16 rounded-full bg-white/10" />
                  <div className="h-2 w-2 rounded-full bg-neon" />
                </div>
                <div className="space-y-3">
                  <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-violet/30 via-electric/20 to-cyan/20" />
                  <div className="flex items-center gap-2 text-white/60">
                    <Heart size={14} className="text-neon" />
                    <div className="h-1.5 w-20 rounded-full bg-white/10" />
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10" />
                  <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                </div>
              </div>
            </motion.div>

            {/* floating icon: instagram */}
            <motion.div
              className="absolute -left-4 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border-soft bg-surface shadow-xl"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <InstagramIcon size={24} className="text-cyan" />
            </motion.div>

            {/* floating icon: facebook */}
            <motion.div
              className="absolute -right-2 top-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-border-soft bg-surface shadow-xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <FacebookIcon size={20} className="text-electric" />
            </motion.div>

            {/* floating analytics card */}
            <motion.div
              className="absolute -right-6 bottom-16 w-40 rounded-2xl border border-border-soft bg-surface/95 p-3 shadow-xl backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="flex items-center gap-1.5 text-xs text-white/60">
                <BarChart3 size={14} className="text-neon" />
                Engagement
              </div>
              <div className="mt-2 flex h-10 items-end gap-1">
                {[40, 65, 50, 80, 95, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-sm bg-gradient-to-t from-neon/40 to-cyan"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* floating growth chart */}
            <motion.div
              className="absolute -left-8 bottom-4 flex items-center gap-2 rounded-2xl border border-border-soft bg-surface/95 px-3 py-2.5 shadow-xl backdrop-blur"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <TrendingUp size={18} className="text-neon" />
              <span className="text-xs font-medium text-white/80">Reach growing</span>
            </motion.div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-20 max-w-xl px-5 text-center text-sm font-medium uppercase tracking-[0.2em] text-white/40">
          Creative Ideas. Strategic Marketing. Measurable Growth.
        </p>
      </Reveal>
    </section>
  );
}
