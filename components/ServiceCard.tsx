"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import SafeMedia from "./SafeMedia";
import type { OverlayDirection } from "@/lib/data";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  objectPosition?: string;
  zoom?: number;
  filter?: string;
  overlay: OverlayDirection;
  tag: string;
  featured?: boolean;
  index: number;
}

const overlayClass: Record<OverlayDirection, string> = {
  "bottom-emerald":
    "bg-gradient-to-t from-brand-green/55 via-brand-green/10 to-transparent",
  "bottom-gold":
    "bg-gradient-to-t from-[#5a3f12]/45 via-[#7a5212]/8 to-transparent",
  "left-green":
    "bg-gradient-to-r from-brand-greenDark/55 via-brand-green/10 to-transparent",
  "right-emerald":
    "bg-gradient-to-l from-brand-green/55 via-brand-green/10 to-transparent",
  "top-gold":
    "bg-gradient-to-b from-[#5a3f12]/40 via-[#7a5212]/8 to-transparent",
  "bottom-dark":
    "bg-gradient-to-t from-brand-greenDark/65 via-brand-greenDark/15 to-transparent",
  "diagonal-green-gold":
    "bg-[linear-gradient(135deg,rgba(11,61,46,0.55)_0%,rgba(11,61,46,0.08)_45%,rgba(201,162,39,0.18)_100%)]",
};

const tagClass: Record<OverlayDirection, string> = {
  "bottom-emerald": "bg-ivory-50/95 text-brand-green",
  "bottom-gold": "bg-ivory-50/95 text-[#7a5212]",
  "left-green": "bg-ivory-50/95 text-brand-greenDark",
  "right-emerald": "bg-ivory-50/95 text-brand-green",
  "top-gold": "bg-ivory-50/95 text-[#7a5212]",
  "bottom-dark": "bg-ivory-50/95 text-brand-greenDark",
  "diagonal-green-gold": "bg-ivory-50/95 text-brand-green",
};

const tagPositionClass: Record<OverlayDirection, string> = {
  "bottom-emerald": "bottom-5 left-5",
  "bottom-gold": "bottom-5 left-5",
  "left-green": "top-5 right-5",
  "right-emerald": "top-5 left-5",
  "top-gold": "bottom-5 left-5",
  "bottom-dark": "top-5 right-5",
  "diagonal-green-gold": "top-5 left-5",
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  objectPosition,
  zoom,
  filter,
  overlay,
  tag,
  featured = false,
  index,
}: ServiceCardProps) {
  const tagBadge = (
    <span
      className={`absolute ${tagPositionClass[overlay]} z-10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] shadow-soft ${tagClass[overlay]}`}
    >
      {tag}
    </span>
  );

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: Math.min(index * 0.05, 0.3),
        }}
        className="group relative col-span-1 flex flex-col overflow-hidden rounded-3xl bg-ivory-50 shadow-ring ring-1 ring-brand-green/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:ring-brand-gold/40 sm:col-span-2 lg:col-span-3 lg:flex-row"
      >
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-auto lg:w-1/2">
          <SafeMedia
            src={image}
            alt={title}
            objectPosition={objectPosition}
            zoom={zoom}
            filter={filter}
            className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.05]"
          />
          <div className={`absolute inset-0 ${overlayClass[overlay]}`} />
          {tagBadge}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent lg:hidden" />
        </div>

        <div className="flex grow flex-col p-7 sm:p-8 lg:w-1/2 lg:p-10">
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ivory-100 text-brand-gold ring-1 ring-brand-gold/30">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <h3 className="font-serif text-2xl leading-snug text-brand-green">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-brand-ink/70">
            {description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold/90">
            Learn More
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: Math.min(index * 0.06, 0.3),
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ivory-50 shadow-ring ring-1 ring-brand-green/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:ring-brand-gold/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <SafeMedia
          src={image}
          alt={title}
          objectPosition={objectPosition}
          zoom={zoom}
          filter={filter}
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
        />
        <div className={`absolute inset-0 ${overlayClass[overlay]}`} />
        {tagBadge}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
        <span className="absolute -bottom-6 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ivory-50 text-brand-gold shadow-soft ring-1 ring-brand-gold/30 transition-colors group-hover:bg-brand-green group-hover:text-brand-gold">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
      </div>

      <div className="flex grow flex-col p-6 pt-9 sm:p-7 sm:pt-10">
        <h3 className="font-serif text-[1.2rem] leading-snug text-brand-green">
          {title}
        </h3>
        <p className="mt-2 grow text-sm leading-relaxed text-brand-ink/70">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold/90 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Learn More
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.article>
  );
}
