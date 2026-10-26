/** Brand-inspired plate and cutlery, kept as SVG to avoid mobile emoji rendering. */
export function PlateMark() {
  return (
    <span className="ticker-mark" aria-hidden="true">
      <svg viewBox="0 0 28 28" fill="none">
        <circle
          cx="14"
          cy="14"
          r="10.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth=".7" />
        <path
          d="M9 7v6m-1.7-6v3.8A1.7 1.7 0 0 0 11 11V7m-1.1 6v8m9-14c-1.5 1.6-2 3.3-2 5.4 0 1.4.8 2.3 2.2 2.3V21m-.2-14v7"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
