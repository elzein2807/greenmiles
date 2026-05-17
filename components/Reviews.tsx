"use client";

import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import ReviewCard from "./ReviewCard";
import SectionHeader from "./SectionHeader";
import { contact, reviews } from "@/lib/data";

export default function Reviews() {
  // Duplicate the array so the marquee loops seamlessly without a visible jump.
  const looped = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-ivory-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Trusted By Travelers"
          title="What They Say About Us"
          subtitle="Real feedback from travelers who trusted Green Miles for professional service, fair prices, and reliable support."
        />

        {/* Desktop / tablet: continuous marquee */}
        <div
          className="group relative mt-14 hidden overflow-hidden sm:block"
          aria-label="Customer reviews"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ivory-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ivory-50 to-transparent" />

          <div className="flex w-max animate-marquee gap-5 py-4 motion-safe-anim [animation-play-state:running] group-hover:[animation-play-state:paused]">
            {looped.map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} review={r} />
            ))}
          </div>
        </div>

        {/* Mobile: horizontal scroll-snap */}
        <div className="mt-12 sm:hidden">
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2">
            {reviews.map((r) => (
              <div key={r.name} className="snap-start">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={contact.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-b border-brand-green/30 pb-1 text-sm font-semibold text-brand-green transition-colors hover:border-brand-green"
          >
            <MapPin className="h-4 w-4" />
            Read More Reviews
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="hidden h-4 w-px bg-brand-green/20 sm:inline-block" />
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-ivory-50 transition-colors hover:bg-brand-greenDark"
          >
            <MessageCircle className="h-4 w-4" />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
