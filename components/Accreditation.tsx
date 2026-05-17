"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SafeMedia from "./SafeMedia";
import SectionHeader from "./SectionHeader";
import { accreditations } from "@/lib/data";

export default function Accreditation() {
  return (
    <section
      id="accreditation"
      aria-labelledby="accreditation-heading"
      className="bg-ivory-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Verified & Accredited"
          title="Recognized by Trusted Travel Bodies"
          subtitle="Green Miles Travel & Tourism is proudly recognized by trusted travel industry organizations."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {accreditations.map((item, i) => (
            <motion.article
              key={item.shortName}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: Math.min(i * 0.1, 0.2),
              }}
              className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl bg-[#FFFDF7] p-6 text-center shadow-ring ring-1 ring-brand-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-brand-gold/50 sm:p-7"
            >
              {/* Logo plate — preserves the original logo via object-contain */}
              <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-ivory-50 px-6 py-4 ring-1 ring-brand-green/8 sm:h-36">
                <SafeMedia
                  src={item.logo}
                  alt={item.alt}
                  className="max-h-full max-w-[180px] object-contain sm:max-w-[200px]"
                  loading="lazy"
                />
              </div>

              {/* Verified label — centered, own line, bold deep green, with check icon */}
              <div className="mt-6 inline-flex items-center justify-center gap-2 text-[#0B3D2E]">
                <CheckCircle2
                  className="h-[18px] w-[18px] fill-[#0B3D2E] text-[#FFFDF7]"
                  strokeWidth={2.4}
                />
                <span className="text-[13px] font-bold uppercase tracking-[0.22em]">
                  Verified
                </span>
              </div>

              <div className="mt-3">
                <h3 className="font-serif text-2xl leading-tight text-brand-green">
                  {item.shortName}
                </h3>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
                  {item.fullName}
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-brand-ink/70">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-brand-muted">
          These recognitions reflect our professional commitment to reliable
          travel and tourism services.
        </p>
      </div>
    </section>
  );
}
