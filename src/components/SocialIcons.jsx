// lucide-react no longer ships trademarked brand glyphs, so these three
// social icons are small hand-rolled SVGs sized to match lucide's 24px grid.

export function FacebookIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H8v3h2V19h3v-4.5h2.2l.8-3H13v-1.5c0-.55.45-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19 6.6c-.6.3-1.2.5-1.9.6.7-.4 1.2-1.1 1.4-1.9-.6.4-1.4.7-2.1.8-.6-.7-1.5-1.1-2.4-1.1-1.8 0-3.3 1.5-3.3 3.3 0 .3 0 .5.1.7-2.6-.1-4.9-1.4-6.5-3.3-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.3-1.1.9-2.5 1.4-4 1.4-.3 0-.5 0-.8-.1 1.4.9 3.1 1.5 4.9 1.5 5.9 0 9.1-4.9 9.1-9.1v-.4c.6-.5 1.2-1.1 1.6-1.8z"
        fill="currentColor"
      />
    </svg>
  );
}
