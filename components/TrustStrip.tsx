"use client";

import { motion } from "framer-motion";
import { trustStripItems } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section
      aria-label="Trusted travel support"
      className="relative -mt-10 sm:-mt-14"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl bg-marble shadow-card ring-1 ring-brand-gold/20"
        >
          {/* Desktop: grid */}
          <ul className="hidden divide-x divide-ivory-50/10 md:grid md:grid-cols-6">
            {trustStripItems.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="group flex items-center justify-center gap-3 px-4 py-5 text-ivory-50/85 transition-colors hover:text-ivory-50"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold transition-transform group-hover:-translate-y-0.5">
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  {title}
                </span>
              </li>
            ))}
          </ul>

          {/* Mobile: horizontal scroll-snap */}
          <div className="md:hidden">
            <ul className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 py-4">
              {trustStripItems.map(({ title, icon: Icon }) => (
                <li
                  key={title}
                  className="flex shrink-0 snap-start items-center gap-2 rounded-full bg-ivory-50/[0.06] px-4 py-2 text-ivory-50/90 ring-1 ring-brand-gold/20"
                >
                  <Icon className="h-4 w-4 text-brand-gold" strokeWidth={1.7} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
