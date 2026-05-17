"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { FacebookGlyph, InstagramGlyph } from "./SocialGlyphs";
import SectionHeader from "./SectionHeader";
import { contact } from "@/lib/data";

type IconRenderer = LucideIcon | (({ className }: { className?: string }) => React.JSX.Element);

interface ContactCardProps {
  icon: IconRenderer;
  label: string;
  value: string;
  href: string;
  primary?: boolean;
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  primary = false,
}: ContactCardProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group flex items-start gap-4 rounded-2xl border p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${
        primary
          ? "border-brand-green/30 bg-brand-green text-ivory-50 hover:bg-brand-greenDark"
          : "border-brand-green/10 bg-ivory-50 text-brand-ink hover:border-brand-green/25"
      }`}
    >
      <span
        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          primary
            ? "bg-ivory-50/15 text-brand-gold"
            : "bg-brand-green/5 text-brand-gold ring-1 ring-brand-gold/30"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            primary ? "text-ivory-100/80" : "text-brand-muted"
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-1 break-words text-base font-semibold ${
            primary ? "text-ivory-50" : "text-brand-green"
          }`}
        >
          {value}
        </p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Plan Your Next Journey"
          subtitle="Reach out to Green Miles Travel & Tourism for travel support, tourism coordination, and personalized assistance."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value={contact.whatsappDisplay}
            href={contact.whatsappHref}
            primary
          />
          <ContactCard
            icon={Phone}
            label="Call Us"
            value={contact.phoneDisplay}
            href={contact.phoneHref}
          />
          <ContactCard
            icon={MapPin}
            label="Location"
            value={contact.location}
            href={contact.mapsHref}
          />
          <ContactCard
            icon={InstagramGlyph}
            label="Instagram"
            value={contact.instagramHandle}
            href={contact.instagramHref}
          />
          <ContactCard
            icon={FacebookGlyph}
            label="Facebook"
            value={contact.facebookHandle}
            href={contact.facebookHref}
          />
          <div className="rounded-2xl border border-brand-green/10 bg-ivory-grain p-5 shadow-soft sm:col-span-2 lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-gold">
              Hours
            </p>
            <p className="mt-2 font-serif text-lg text-brand-green">
              We reply quickly on WhatsApp
            </p>
            <p className="mt-1 text-sm text-brand-ink/70">
              Send us a message anytime — we'll get back to you as soon as
              possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
