"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  variant?: "light" | "dark";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "light",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const titleColor =
    variant === "dark" ? "text-ivory-50" : "text-brand-green";
  const subColor =
    variant === "dark" ? "text-ivory-100/80" : "text-brand-muted";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
          <span className="h-px w-8 bg-brand-gold/60" />
          {eyebrow}
          <span className="h-px w-8 bg-brand-gold/60" />
        </span>
      )}
      <h2
        className={`mt-4 font-serif text-3xl leading-[1.1] sm:text-4xl md:text-[2.4rem] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl text-[15px] leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
