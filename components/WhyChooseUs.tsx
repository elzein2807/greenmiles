"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { benefits } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory-grain py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Why Green Miles"
          title="Why Choose Green Miles?"
          subtitle="A simple, reliable travel partner with the services you actually need."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {benefits.map(({ title, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: Math.min(i * 0.04, 0.25),
              }}
              className="group flex flex-col items-start gap-3 rounded-2xl bg-ivory-50 p-5 shadow-ring transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-ivory-100 to-ivory-200 text-brand-gold ring-1 ring-brand-gold/30 transition-colors group-hover:from-brand-green/5">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-sm font-medium leading-snug text-brand-ink/85">
                {title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
