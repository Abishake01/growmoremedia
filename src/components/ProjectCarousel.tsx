import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "../data/projects";

interface ProjectCarouselProps {
  images: ProjectImage[];
  alt: string;
}

export default function ProjectCarousel({ images, alt }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  function go(delta: number) {
    setIndex((prev) => (prev + delta + images.length) % images.length);
  }

  return (
    <div className="group/carousel relative aspect-[16/10] overflow-hidden bg-ink">
      <img
        src={images[index].src}
        alt={`${alt} — ${images[index].label}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      <span className="absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {images[index].label}
      </span>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.preventDefault();
              go(-1);
            }}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur transition-opacity group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.preventDefault();
              go(1);
            }}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur transition-opacity group-hover/carousel:opacity-100"
          >
            <ChevronRight size={16} />
          </button>

          <div className="absolute right-3 top-3 flex gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.label}
                type="button"
                aria-label={`Show ${img.label}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                }}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-neon" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
