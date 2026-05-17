"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SafeMedia from "./SafeMedia";
import SectionHeader from "./SectionHeader";
import { contact, media } from "@/lib/data";

function IncomingFallback() {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="in-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9c890" />
          <stop offset="100%" stopColor="#b88752" />
        </linearGradient>
        <linearGradient id="in-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4b483" />
          <stop offset="100%" stopColor="#7a5a36" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#in-sky)" />
      <circle cx="650" cy="110" r="50" fill="#f4d28a" opacity="0.7" />
      {/* columns */}
      {[120, 200, 280, 360, 440].map((x) => (
        <rect key={x} x={x} y={220} width={28} height={220} fill="url(#in-stone)" />
      ))}
      <rect x={100} y={210} width={380} height={18} fill="#5e441f" />
      <rect x={100} y={440} width={380} height={20} fill="#3f2f17" />
      <path d="M0 440 L800 440 L800 500 L0 500 Z" fill="#2a1f10" opacity="0.7" />
    </svg>
  );
}

function OutgoingFallback() {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="og-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bcd0c8" />
          <stop offset="100%" stopColor="#688d8a" />
        </linearGradient>
        <linearGradient id="og-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a6b6a" />
          <stop offset="100%" stopColor="#1b3e3d" />
        </linearGradient>
        <linearGradient id="og-island" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3f6a4a" />
          <stop offset="100%" stopColor="#0B3D2E" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#og-sky)" />
      <path d="M280 360 Q400 100 520 360 Z" fill="url(#og-island)" />
      <path d="M0 360 L800 360 L800 500 L0 500 Z" fill="url(#og-sea)" />
      <ellipse cx="300" cy="380" rx="120" ry="6" fill="#ffffff" opacity="0.25" />
      <ellipse cx="540" cy="400" rx="160" ry="7" fill="#ffffff" opacity="0.2" />
    </svg>
  );
}

interface CardProps {
  title: string;
  text: string;
  cta: string;
  href: string;
  img?: string;
  alt: string;
  fallback: React.ReactNode;
  objectPosition?: string;
  delay?: number;
}

function TourismCard({
  title,
  text,
  cta,
  href,
  img,
  alt,
  fallback,
  objectPosition,
  delay = 0,
}: CardProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className="group relative block aspect-[16/11] overflow-hidden rounded-3xl shadow-card ring-1 ring-brand-green/10 sm:aspect-[5/4] lg:aspect-[16/11]"
    >
      <SafeMedia
        src={img}
        alt={alt}
        fallback={fallback}
        objectPosition={objectPosition}
        className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-greenDark/95 via-brand-greenDark/45 to-transparent" />
      {/* corner chip */}
      <span className="pointer-events-none absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-ivory-50/30 bg-ivory-50/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory-50 backdrop-blur-md">
        Tourism
      </span>
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <h3 className="font-serif text-2xl text-ivory-50 sm:text-[28px] md:text-3xl">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory-100/85">
          {text}
        </p>
        <span className="mt-5 inline-flex w-max items-center gap-2 rounded-full bg-ivory-50/95 px-5 py-2.5 text-xs font-semibold text-brand-green shadow-soft transition-transform group-hover:translate-x-1">
          {cta}
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.a>
  );
}

export default function Tourism() {
  return (
    <section id="tourism" className="bg-ivory-grain py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Explore The World With Us"
          title="Incoming & Outgoing Tourism"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <TourismCard
            title="Incoming Tourism"
            text="Discover Lebanon's beauty with curated experiences and local expertise — stays, transfers, and tailored tourism arrangements."
            cta="Explore Lebanon"
            href={contact.whatsappHref}
            img={media.tour}
            alt="Travelers exploring a coastal Mediterranean town"
            fallback={<IncomingFallback />}
            objectPosition="center center"
          />
          <TourismCard
            title="Outgoing Tourism"
            text="From iconic cities to hidden gems — we help organize travel arrangements for the destinations you've always dreamed of."
            cta="Explore Destinations"
            href={contact.whatsappHref}
            img={media.tourismAlt}
            alt="Mediterranean coastal town at sunset"
            fallback={<OutgoingFallback />}
            objectPosition="center center"
            delay={0.08}
          />
        </div>
      </div>
    </section>
  );
}
