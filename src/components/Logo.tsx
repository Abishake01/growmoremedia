import logo from "../assets/brand/growmore-logo.png";

interface LogoProps {
  className?: string;
  mark?: boolean;
}

export default function Logo({ className = "", mark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]">
          <img
            src={logo}
            alt="Growmore Media logo"
            width={32}
            height={32}
            className="h-full w-full object-contain"
          />
        </span>
      )}
      <span className="font-display font-semibold tracking-tight text-lg leading-none">
        <span className="text-white">Growmore</span>
        <span className="text-gradient"> Media</span>
      </span>
    </div>
  );
}
