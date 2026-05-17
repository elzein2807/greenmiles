"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Plane, Star } from "lucide-react";
import SafeMedia from "./SafeMedia";
import { contact, media } from "@/lib/data";

const titleLine = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-ivory-50 pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-[440px] w-[440px] rounded-full bg-brand-green/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-[320px] w-[320px] rounded-full bg-brand-gold/[0.06] blur-3xl" />

      {/* Decorative dotted plane path SVG */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-32 hidden h-44 w-full text-brand-gold/40 lg:block"
        viewBox="0 0 1280 200"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.6 }}
          d="M0 160 C 280 30, 560 30, 840 110 S 1180 200, 1280 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 pb-24 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32">
        {/* Left: content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="lg:col-span-6"
        >
          <motion.span
            variants={titleLine}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold"
          >
            <span className="h-px w-8 bg-brand-gold/60" />
            Travel With Confidence
          </motion.span>

          <h1 className="mt-5 font-serif text-[2.7rem] leading-[1.02] tracking-tight text-brand-green sm:text-[3.4rem] md:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.5rem]">
            <span className="block overflow-hidden">
              <motion.span
                variants={titleLine}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="block"
              >
                Travel Beyond
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={titleLine}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="block italic text-brand-greenDark"
              >
                Expectations
              </motion.span>
            </span>
          </h1>

          <motion.div
            variants={titleLine}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 h-px w-14 bg-brand-gold/70"
          />

          <motion.p
            variants={titleLine}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 max-w-md text-[16px] leading-relaxed text-brand-ink/75 sm:text-[17px]"
          >
            Personalized travel support from planning to arrival.
            Every detail, handled with care.
          </motion.p>

          <motion.div
            variants={titleLine}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-sm font-medium tracking-wide text-ivory-50 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-greenDark hover:shadow-card"
            >
              Plan Your Journey
              <CalendarDays className="h-4 w-4 transition-transform group-hover:rotate-6" />
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-green/15 bg-ivory-50 px-7 py-3.5 text-sm font-medium tracking-wide text-brand-green transition-colors hover:bg-ivory-100"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={titleLine}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-5 border-t border-brand-green/10 pt-6"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/10 text-xs font-semibold text-brand-green">
                9+
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                Years of Trust
              </span>
            </div>
            <span className="hidden h-4 w-px bg-brand-green/15 sm:inline-block" />
            <div className="flex items-center gap-2">
              <Plane className="h-4 w-4 -rotate-45 text-brand-gold" strokeWidth={1.7} />
              <span className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                Lebanon &amp; Worldwide
              </span>
            </div>
            <span className="hidden h-4 w-px bg-brand-green/15 sm:inline-block" />
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-brand-gold" strokeWidth={1.7} />
              <span className="text-xs uppercase tracking-[0.22em] text-brand-muted">
                Easy WhatsApp
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: image collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:max-w-none">
            {/* Main hero image */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 7,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="relative overflow-hidden rounded-[28px] shadow-card ring-1 ring-brand-green/10"
            >
              <div className="aspect-[5/6] sm:aspect-[4/5]">
                <SafeMedia
                  src={media.hero}
                  alt="Premium coastal travel destination with sea-view terrace"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                  loading="eager"
                  objectPosition="center center"
                />
              </div>
              <span className="pointer-events-none absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/40 bg-ivory-50/15 text-ivory-50 backdrop-blur-md">
                <Plane className="h-4 w-4 -rotate-45" strokeWidth={1.6} />
              </span>
              <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />
            </motion.div>

            {/* Small overlapping card 1 — Hotel Bookings */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
              className="absolute -right-3 top-6 z-10 hidden h-32 w-44 overflow-hidden rounded-2xl shadow-card ring-1 ring-brand-green/10 sm:block sm:-right-6 sm:h-36 sm:w-56 lg:-right-8 lg:h-40 lg:w-60"
            >
              <SafeMedia
                src={media.hotel}
                alt="Luxury hotel suite with sea view"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
                objectPosition="center center"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ivory-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green shadow-soft">
                Hotel Bookings
              </span>
            </motion.div>

            {/* Small overlapping card 2 — Flight Tickets */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
              className="absolute -left-4 bottom-14 z-10 hidden h-36 w-48 overflow-hidden rounded-2xl shadow-card ring-1 ring-brand-green/10 sm:block sm:-left-6 sm:h-40 sm:w-60 lg:-left-8 lg:h-44 lg:w-64"
            >
              <SafeMedia
                src={media.airport}
                alt="Premium airport lounge"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
                objectPosition="center right"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ivory-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green shadow-soft">
                Flight Tickets
              </span>
            </motion.div>

            {/* Floating 9+ badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
              className="absolute -bottom-6 right-4 z-20 flex items-center gap-3 rounded-2xl bg-brand-green px-5 py-3.5 text-ivory-50 shadow-card ring-1 ring-brand-gold/30 sm:-bottom-5 sm:right-12 lg:right-16"
            >
              <Star className="h-5 w-5 fill-brand-gold text-brand-gold" strokeWidth={0} />
              <div className="leading-tight">
                <p className="font-serif text-xl">9+ Years</p>
                <p className="text-[9px] tracking-[0.28em] text-ivory-100/80">
                  OF TRUST
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
