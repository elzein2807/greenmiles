/**
 * Small inline brand-style social glyphs.
 *
 * The Lucide Instagram/Facebook icons read like generic line-art, which makes
 * the footer/contact social links feel weak. These compact filled marks are
 * instantly recognizable while staying premium and on-brand (a single solid
 * mark colored from the parent via `currentColor`).
 */

interface GlyphProps {
  className?: string;
}

export function InstagramGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.4-2.95a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
    </svg>
  );
}

export function FacebookGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.5 22v-8.25h2.79l.42-3.24H13.5V8.45c0-.94.26-1.58 1.6-1.58l1.71-.01V3.96A22.7 22.7 0 0 0 14.31 3.8c-2.47 0-4.16 1.51-4.16 4.28v2.43H7.34v3.24h2.81V22h3.35Z" />
    </svg>
  );
}
