"use client";

import { useState, type CSSProperties } from "react";

interface SafeMediaProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallback?: React.ReactNode;
  loading?: "lazy" | "eager";
  objectPosition?: string;
  /** Static zoom applied to the image (in addition to any hover scale done in CSS). */
  zoom?: number;
  /** CSS filter string applied to the image. */
  filter?: string;
}

/**
 * Renders an <img> if the src loads; otherwise shows a premium ivory/green
 * gradient fallback. Never displays a broken-image icon.
 */
export default function SafeMedia({
  src,
  alt,
  className,
  fallbackClassName,
  fallback,
  loading = "lazy",
  objectPosition,
  zoom,
  filter,
}: SafeMediaProps) {
  const [errored, setErrored] = useState(!src);

  if (errored || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={
          fallbackClassName ??
          `relative h-full w-full overflow-hidden bg-gradient-to-br from-ivory-100 via-ivory-50 to-[#e1d6b8] ${className ?? ""}`
        }
      >
        {fallback ?? <DefaultFallbackShapes />}
      </div>
    );
  }

  const style: CSSProperties = {};
  if (objectPosition) style.objectPosition = objectPosition;
  if (filter) style.filter = filter;
  if (zoom && zoom !== 1) style.transform = `scale(${zoom})`;
  const hasStyle = Object.keys(style).length > 0;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setErrored(true)}
      className={className}
      style={hasStyle ? style : undefined}
    />
  );
}

function DefaultFallbackShapes() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky-fb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0e9d2" />
          <stop offset="100%" stopColor="#ddd0b0" />
        </linearGradient>
        <linearGradient id="land-fb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15543F" />
          <stop offset="100%" stopColor="#06261D" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#sky-fb)" />
      <circle cx="320" cy="70" r="32" fill="#C9A227" opacity="0.55" />
      <path d="M0 220 L80 180 L160 210 L240 170 L320 200 L400 180 L400 300 L0 300 Z" fill="url(#land-fb)" opacity="0.85" />
      <path d="M0 250 L60 230 L140 245 L220 220 L300 240 L400 225 L400 300 L0 300 Z" fill="#06261D" opacity="0.9" />
    </svg>
  );
}
