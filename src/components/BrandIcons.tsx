interface IconProps {
  size?: number;
  className?: string;
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 8.5h2V5.5h-2.3C12 5.5 11 6.7 11 8.8v2.2H9v3h2V21h3v-7h2.2l.4-3H14v-1.6c0-.6.3-.9.1-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.5" cy="8" r="1.1" fill="currentColor" />
      <path d="M7.5 11v6M11 11v6M11 13.5c0-1.4 1-2.5 2.3-2.5 1.3 0 2.2 1 2.2 2.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
