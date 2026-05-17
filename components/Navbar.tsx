"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { contact, navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory-50/90 shadow-soft backdrop-blur"
          : "bg-ivory-50/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center" aria-label="Green Miles home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand-green focus:outline-none focus-visible:text-brand-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-medium text-ivory-50 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-brand-greenDark lg:inline-flex"
        >
          Plan Your Journey
          <CalendarDays className="h-4 w-4" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-green/15 text-brand-green lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl border border-brand-green/10 bg-ivory-50 p-5 shadow-card">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-brand-ink/90 transition-colors hover:bg-ivory-100 hover:text-brand-green"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 text-sm font-medium text-ivory-50"
              >
                Plan Your Journey
                <CalendarDays className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
