import { useMemo, useState } from "react";
import { ArrowUpRight, Image } from "lucide-react";
import Reveal from "../lib/Reveal";
import SectionLabel from "./SectionLabel";
import { projects, projectCategories } from "../data/projects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ideas Turned Into Digital Experiences.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {["All", ...projectCategories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "border-transparent bg-gradient-to-r from-neon to-cyan text-ink"
                    : "border-border-soft text-white/65 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={0.05 * i}>
              <div className="group overflow-hidden rounded-2xl border border-border-soft bg-surface/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${project.accent} opacity-80`}
                >
                  <Image size={36} className="text-ink/70" strokeWidth={1.5} />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan transition-colors group-hover:text-neon"
                  >
                    View Project
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
