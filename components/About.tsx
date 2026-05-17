"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import SafeMedia from "./SafeMedia";
import { aboutFeatures, media } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-ivory-grain py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 lg:order-1 lg:col-span-6"
        >
          <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
            <span className="h-px w-8 bg-brand-gold/60" />
            About Us
          </span>
          <h2 className="mt-4 font-serif text-[2.1rem] leading-[1.08] text-brand-green sm:text-4xl md:text-[2.6rem]">
            Your Journey, <em className="not-italic text-brand-greenDark">Our Commitment</em>
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-brand-ink/75">
            <p>
              At Green Miles Travel &amp; Tourism, we help clients organize
              their travel needs with care, reliability, and personal attention.
            </p>
            <p>
              From tour packages, hotel bookings, and flight tickets to
              insurance, visa services, car rental, and freight support, our
              team makes the process clearer and easier from start to finish.
            </p>
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutFeatures.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="flex items-center gap-3 rounded-xl bg-ivory-50 px-4 py-3 shadow-ring ring-1 ring-brand-green/8"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-ivory-100 to-ivory-200 text-brand-gold ring-1 ring-brand-gold/30">
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <span className="text-sm font-medium text-brand-ink/85">
                  {title}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="group mt-8 inline-flex items-center gap-2 border-b border-brand-green/30 pb-1 text-sm font-semibold text-brand-green transition-colors hover:border-brand-green"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Image collage — landscape-friendly */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative order-1 lg:order-2 lg:col-span-6"
        >
          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            {/* Main large landscape image — travel-detail per image guide */}
            <div className="relative col-span-12 aspect-[16/10] overflow-hidden rounded-[22px] shadow-card ring-1 ring-brand-green/10">
              <SafeMedia
                src={media.detail}
                alt="Premium travel planning details and documents"
                className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                objectPosition="center center"
              />
              <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
            </div>
            {/* Two smaller landscape images — hotel + airport */}
            <div className="relative col-span-6 aspect-[4/3] overflow-hidden rounded-[22px] shadow-card ring-1 ring-brand-green/10">
              <SafeMedia
                src={media.hotel}
                alt="Luxury hotel suite with a sea view"
                className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                objectPosition="center center"
              />
            </div>
            <div className="relative col-span-6 aspect-[4/3] overflow-hidden rounded-[22px] shadow-card ring-1 ring-brand-green/10">
              <SafeMedia
                src={media.airport}
                alt="Traveler in a premium airport lounge"
                className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                objectPosition="center right"
              />
            </div>
          </div>

          {/* Floating excellence badge */}
          <div className="absolute -bottom-5 left-5 z-10 sm:-bottom-6 sm:left-6">
            <div className="flex items-center gap-3 rounded-2xl bg-brand-green px-5 py-3.5 text-ivory-50 shadow-card ring-1 ring-brand-gold/30">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-greenDark text-brand-gold ring-1 ring-brand-gold/40">
                <Award className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg">
                  9<span className="text-brand-gold">+</span> Years
                </p>
                <p className="text-[9px] tracking-[0.28em] text-ivory-100/80">
                  OF EXCELLENCE
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
