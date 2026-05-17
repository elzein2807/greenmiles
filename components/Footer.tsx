"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { FacebookGlyph, InstagramGlyph } from "./SocialGlyphs";
import { contact, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ivory-100">
      <div className="border-t border-brand-green/10">
        <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Logo />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-ink/70">
                {contact.tagline}
              </p>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Get in Touch
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-ink/80 transition-colors hover:text-brand-green"
                  >
                    <MessageCircle className="h-4 w-4 text-brand-gold" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={contact.phoneHref}
                    className="flex items-center gap-2 text-brand-ink/80 transition-colors hover:text-brand-green"
                  >
                    <Phone className="h-4 w-4 text-brand-gold" />
                    {contact.phoneDisplay}
                  </a>
                </li>
              </ul>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-xs font-semibold text-ivory-50 transition-colors hover:bg-brand-greenDark"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Follow Us
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={contact.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 font-semibold text-brand-green transition-colors hover:text-brand-greenDark"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-green/8 text-brand-green ring-1 ring-brand-gold/30 transition-colors group-hover:bg-brand-green group-hover:text-ivory-50">
                      <InstagramGlyph className="h-3.5 w-3.5" />
                    </span>
                    <span>Instagram</span>
                    <span className="text-brand-muted/80">·</span>
                    <span className="font-medium text-brand-ink/75">
                      {contact.instagramHandle}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.facebookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 font-semibold text-brand-green transition-colors hover:text-brand-greenDark"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-green/8 text-brand-green ring-1 ring-brand-gold/30 transition-colors group-hover:bg-brand-green group-hover:text-ivory-50">
                      <FacebookGlyph className="h-3.5 w-3.5" />
                    </span>
                    <span>Facebook</span>
                    <span className="text-brand-muted/80">·</span>
                    <span className="font-medium text-brand-ink/75">
                      {contact.facebookHandle}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                Our Location
              </h3>
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-brand-ink/80 transition-colors hover:text-brand-green"
              >
                <MapPin className="h-4 w-4 text-brand-gold" />
                {contact.location}
              </a>

              <div className="mt-5">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                  Explore
                </h4>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-brand-ink/75 transition-colors hover:text-brand-green"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark green copyright strip */}
      <div className="bg-brand-greenDark">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-2 px-5 py-4 text-xs text-ivory-100/75 sm:flex-row sm:items-center sm:px-8 lg:px-10">
          <p>
            © {year} {contact.business}. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-ivory-100/60">
            <span className="inline-block h-1 w-1 rounded-full bg-brand-gold" aria-hidden="true" />
            Verified by IATA &amp; ATTAL
          </p>
        </div>
      </div>
    </footer>
  );
}
