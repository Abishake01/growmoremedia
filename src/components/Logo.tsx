import logo from "../assets/brand/growmore-logo.png";

interface LogoProps {
  className?: string;
  mark?: boolean;
}

export default function Logo({ className = "", mark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark && (
        <img
          src={logo}
          alt="Growmore Media logo"
          width={38}
          height={38}
          className="h-9 w-9 shrink-0 object-contain"
        />
      )}
      <span className="font-display font-semibold tracking-tight text-lg leading-none">
        <span className="text-white">Growmore</span>
        <span className="text-gradient"> Media</span>
      </span>
    </div>
  );
}
