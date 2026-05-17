"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plane } from "lucide-react";
import { useEffect, useState } from "react";

const SESSION_KEY = "gm_intro_seen_v1";

export default function IntroScene() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // ignore (private mode, etc.)
    }
    if (!seen) {
      setVisible(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = reduce ? 900 : 2200;
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [visible, reduce]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-marble"
          aria-hidden="true"
        >
          <div className="relative flex h-full w-full max-w-xl items-center justify-center px-6">
            {!reduce && (
              <motion.div
                initial={{ x: "-60vw", y: -8, opacity: 0 }}
                animate={{ x: "60vw", y: 8, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 text-brand-gold"
              >
                <div className="relative">
                  <span className="absolute right-full top-1/2 mr-3 h-px w-[44vw] -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-gold/50 to-brand-gold" />
                  <Plane className="h-7 w-7 -rotate-45" strokeWidth={1.5} />
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: reduce ? 0.1 : 1.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative z-10 text-center"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/60 text-brand-gold">
                <Plane className="h-5 w-5 -rotate-45" strokeWidth={1.5} />
              </span>
              <h1 className="mt-4 font-serif text-2xl tracking-[0.22em] text-ivory-50 sm:text-3xl">
                GREEN MILES
              </h1>
              <p className="mt-1 text-[10px] tracking-[0.4em] text-ivory-100/70 sm:text-xs">
                TRAVEL &amp; TOURISM
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
