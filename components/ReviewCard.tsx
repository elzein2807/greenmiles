"use client";

import { Quote, Star } from "lucide-react";
import type { Review } from "@/lib/data";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const initial = review.name.charAt(0).toUpperCase();

  return (
    <article className="flex h-full w-[280px] shrink-0 flex-col rounded-2xl bg-ivory-50 p-6 shadow-soft ring-1 ring-brand-green/8 sm:w-[320px]">
      <Quote className="h-5 w-5 -rotate-180 text-brand-gold/60" strokeWidth={1.5} />
      <div
        className="mt-3 flex items-center gap-1 text-brand-gold"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-gold" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-3 grow text-[15px] leading-relaxed text-brand-ink/80">
        {review.review}
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-brand-green/10 pt-4">
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/10 text-sm font-semibold text-brand-green"
        >
          {initial}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-brand-ink">{review.name}</p>
          <p className="text-xs text-brand-muted">{review.date}</p>
        </div>
      </div>
    </article>
  );
}
