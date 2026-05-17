"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plane } from "lucide-react";
import { useEffect, useState } from "react";

const SESSION_KEY = "gm_intro_seen_v1";

/** Safe viewport hook — only reads window after mount, no SSR mismatch. */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function IntroScene() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  // Session-once: only play the intro once per browser session.
  useEffect(() => {
    setMounted(true);
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage may be unavailable (private mode); fall through and play.
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

  // Hide intro after the sequence completes.
  useEffect(() => {
    if (!visible) return;
    const duration = reduce ? 1000 : 2000;
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [visible, reduce]);

  if (!mounted) return null;

  // Responsive scale + size values.
  const planeStart = isMobile ? 0.12 : 0.15;
  const planeMid = isMobile ? 0.55 : 0.8;
  const planeFinal = isMobile ? 3.2 : 6;
  const titleFontSize = isMobile
    ? "clamp(1.8rem, 9vw, 3rem)"
    : "clamp(2rem, 5vw, 5rem)";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-marble"
          aria-hidden="true"
        >
          {/* Subtle gold route line drawn across the canvas */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <motion.path
              d="M-2 78 C 25 55, 50 38, 75 26 S 100 6, 102 -4"
              fill="none"
              stroke="#C9A227"
              strokeWidth="0.18"
              strokeDasharray="0.5 1.2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                reduce
                  ? { pathLength: 1, opacity: 0.4 }
                  : { pathLength: 1, opacity: [0, 0.55, 0.35] }
              }
              transition={{
                duration: reduce ? 0.3 : 1.2,
                ease: "easeInOut",
              }}
            />
          </svg>

          {!reduce && (
            <>
              {/* Plane fly-through — small → mid → passes the camera */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-brand-gold"
                initial={{ scale: planeStart, opacity: 0, rotate: -45 }}
                animate={{
                  scale: [planeStart, planeMid, planeFinal, planeFinal],
                  opacity: [0, 1, 1, 0],
                  rotate: [-45, -42, -38, -38],
                }}
                transition={{
                  duration: 1.1,
                  times: [0, 0.5, 0.85, 1],
                  ease: "easeIn",
                }}
                style={{ willChange: "transform, opacity" }}
              >
                <Plane
                  className="h-10 w-10"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Soft ivory / gold flash wipe as the plane passes */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.85, 0] }}
                transition={{
                  delay: 0.95,
                  duration: 0.45,
                  times: [0, 0.4, 1],
                  ease: "easeOut",
                }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(248,243,234,0.95) 0%, rgba(201,162,39,0.35) 38%, transparent 72%)",
                }}
              />
            </>
          )}

          {/* Brand reveal — fits on mobile via clamp() */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduce ? 0.2 : 1.35,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="relative z-10 max-w-[92vw] px-6 text-center"
          >
            <h1
              className="font-serif font-semibold leading-[1.02] text-ivory-50"
              style={{ fontSize: titleFontSize }}
            >
              Green Miles
            </h1>
            <p className="mt-2 text-[11px] tracking-[0.4em] text-ivory-100/80 sm:mt-3 sm:text-xs">
              TRAVEL &amp; TOURISM
            </p>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: reduce ? 0.4 : 1.6,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="mx-auto mt-4 h-px w-16 origin-center bg-brand-gold/70"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
