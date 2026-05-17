"use client";

import { Plane } from "lucide-react";

interface LogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
}

export default function Logo({ variant = "dark", compact = false }: LogoProps) {
  const textColor = variant === "light" ? "text-ivory-50" : "text-brand-green";
  const subColor = variant === "light" ? "text-ivory-100/80" : "text-brand-muted";
  const ringColor =
    variant === "light"
      ? "border-ivory-50/40 text-brand-gold"
      : "border-brand-gold/60 text-brand-gold";

  return (
    <div className="flex items-center gap-3">
      <span
        className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border ${ringColor}`}
        aria-hidden="true"
      >
        <Plane className="h-4 w-4 -rotate-45" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span
            className={`block font-serif text-base font-semibold tracking-[0.22em] ${textColor}`}
          >
            GREEN MILES
          </span>
          <span
            className={`block text-[10px] tracking-[0.32em] ${subColor}`}
          >
            TRAVEL &amp; TOURISM
          </span>
        </span>
      )}
    </div>
  );
}
