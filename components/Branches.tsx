"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { branches } from "@/lib/data";

export default function Branches() {
  return (
    <section
      id="branches"
      aria-labelledby="branches-heading"
      className="bg-ivory-grain py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Locations"
          title="Our Branches"
          subtitle="Contact the nearest Green Miles branch for travel support and assistance."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, i) => (
            <motion.article
              key={`${branch.region}-${branch.area}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: Math.min(i * 0.07, 0.21),
              }}
              className="group flex h-full flex-col rounded-3xl bg-ivory-50 p-6 shadow-ring ring-1 ring-brand-green/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-brand-gold/40 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                  <span className="h-px w-6 bg-brand-gold/60" />
                  {branch.name}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/5 text-brand-gold ring-1 ring-brand-gold/30">
                  <MapPin className="h-4 w-4" strokeWidth={1.7} />
                </span>
              </div>

              <h3 className="mt-5 font-serif text-[1.35rem] leading-snug text-brand-green">
                {branch.region}
                <span className="text-brand-gold"> — </span>
                {branch.area}
              </h3>

              <ul className="mt-5 space-y-2 border-t border-brand-green/10 pt-4">
                {branch.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="group/phone flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium text-brand-ink/85 transition-colors hover:bg-ivory-100 hover:text-brand-green"
                      aria-label={`Call ${branch.region} ${branch.area} branch at ${phone.display}`}
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10 text-brand-green transition-colors group-hover/phone:bg-brand-green group-hover/phone:text-ivory-50">
                        <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      <span className="tabular-nums">{phone.display}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
