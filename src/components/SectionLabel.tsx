interface SectionLabelProps {
  children: string;
  align?: "left" | "center";
}

export default function SectionLabel({ children, align = "center" }: SectionLabelProps) {
  return (
    <div className={`flex ${align === "center" ? "justify-center" : "justify-start"}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-cyan uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-neon animate-glow" />
        {children}
      </span>
    </div>
  );
}
