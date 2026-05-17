"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Headphones,
  ClipboardList,
  Compass,
  CalendarCheck,
  Plane,
  type LucideIcon,
} from "lucide-react";
import SafeMedia from "./SafeMedia";
import { contact, media, processSteps } from "@/lib/data";

const stepIcons: LucideIcon[] = [
  Headphones,
  ClipboardList,
  CalendarCheck,
  Compass,
  Plane,
];

export default function TravelProcess() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* Background image — heavily dimmed, blurred — used only as atmosphere */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 -z-10"
      >
        <SafeMedia
          src={media.detail}
          alt=""
          className="h-full w-full object-cover opacity-20 blur-[4px]"
          fallbackClassName="absolute inset-0 bg-marble"
          objectPosition="center center"
        />
        {/* Strong dark-green overlay — darker on the left where the title sits */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,38,29,0.95) 0%, rgba(6,38,29,0.88) 45%, rgba(11,61,46,0.82) 100%)",
          }}
        />
        {/* Bottom vignette for extra depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,38,29,0.0) 0%, rgba(6,38,29,0.35) 100%)",
          }}
        />
        {/* Subtle marble noise for premium feel */}
        <div className="absolute inset-0 bg-marble opacity-40" />
      </motion.div>

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-14">
          {/* Title column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/70" />
              Travel Process
            </span>
            <h2 className="mt-5 font-serif text-[2rem] leading-[1.15] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] sm:text-[2.4rem] md:text-[2.6rem]">
              Travel Made Simple{" "}
              <span className="text-brand-gold">in 5 Steps</span>
            </h2>
            <p
              className="mt-5 text-[15px] leading-relaxed sm:text-base"
              style={{ color: "rgba(255,253,247,0.88)" }}
            >
              From the first message to the final details, Green Miles helps
              keep your trip organized.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-brand-greenDark shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8b656] hover:shadow-[0_18px_40px_-18px_rgba(201,162,39,0.7)]"
            >
              <MessageCircle className="h-4 w-4" />
              Start on WhatsApp
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Timeline column */}
          <div className="lg:col-span-8">
            {/* Desktop / tablet horizontal timeline */}
            <div className="hidden md:block">
              <div className="relative pt-2">
                {/* Connecting line — more visible than before, soft gold */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute left-8 right-8 top-9 h-[2px] origin-left rounded-full bg-gradient-to-r from-brand-gold/10 via-brand-gold/70 to-brand-gold/10"
                />
                <ol className="relative grid grid-cols-5 gap-4">
                  {processSteps.map((step, i) => {
                    const Icon = stepIcons[i] ?? Headphones;
                    return (
                      <motion.li
                        key={step.n}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                          delay: Math.min(i * 0.08, 0.4),
                        }}
                        className="flex flex-col items-center text-center"
                      >
                        <span className="relative z-10 inline-flex h-[68px] w-[68px] items-center justify-center rounded-full border border-brand-gold/60 bg-brand-greenDark text-brand-gold shadow-[0_0_0_6px_rgba(6,38,29,1),0_10px_24px_-10px_rgba(0,0,0,0.5)]">
                          <Icon className="h-[22px] w-[22px]" strokeWidth={1.6} />
                        </span>
                        <p className="mt-5 font-serif text-[17px] leading-snug text-white">
                          <span className="text-brand-gold">{step.n}.</span>{" "}
                          {step.title}
                        </p>
                        <p
                          className="mt-2 max-w-[190px] text-[13px] leading-relaxed"
                          style={{ color: "rgba(255,253,247,0.82)" }}
                        >
                          {step.description}
                        </p>
                      </motion.li>
                    );
                  })}
                </ol>
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <ol className="space-y-2 md:hidden">
              {processSteps.map((step, i) => {
                const Icon = stepIcons[i] ?? Headphones;
                return (
                  <motion.li
                    key={step.n}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {i < processSteps.length - 1 && (
                      <span className="absolute left-[27px] top-[60px] h-[calc(100%-3.75rem)] w-[2px] rounded-full bg-brand-gold/35" />
                    )}
                    <span className="relative inline-flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-brand-gold/60 bg-brand-greenDark text-brand-gold shadow-[0_0_0_4px_rgba(6,38,29,1)]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0 pt-1">
                      <p className="font-serif text-[17px] leading-snug text-white">
                        <span className="text-brand-gold">{step.n}.</span>{" "}
                        {step.title}
                      </p>
                      <p
                        className="mt-1.5 text-[14px] leading-relaxed"
                        style={{ color: "rgba(255,253,247,0.85)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
