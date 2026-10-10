interface LogoProps {
  className?: string;
  mark?: boolean;
}

export default function Logo({ className = "", mark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark && (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gm-logo-grad" x1="0" y1="34" x2="34" y2="0">
              <stop offset="0%" stopColor="#39ff88" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <rect width="34" height="34" rx="9" fill="#0a0f1e" />
          <rect width="34" height="34" rx="9" stroke="url(#gm-logo-grad)" strokeOpacity="0.5" />
          <path
            d="M8 22L14.5 15L19 19.5L26 11"
            stroke="url(#gm-logo-grad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 11H26V16.5"
            stroke="url(#gm-logo-grad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="font-display font-semibold tracking-tight text-lg leading-none">
        <span className="text-white">Growmore</span>
        <span className="text-gradient"> Media</span>
      </span>
    </div>
  );
}
