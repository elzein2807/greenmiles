"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

/** Large filled jet silhouette — scales crisply because it's vector. */
function JetPlane({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {/* Side-view jet: fuselage, wings, tail. Subtle stylized look. */}
      <path d="M93 50 L42 38 L32 18 L26 18 L31 38 L14 41 L8 32 L4 32 L7 50 L4 68 L8 68 L14 59 L31 62 L26 82 L32 82 L42 62 L93 50 Z" />
    </svg>
  );
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

  // Lock body scroll while the intro overlay is visible.
  useEffect(() => {
    if (!visible || typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  // Auto-dismiss timer.
  useEffect(() => {
    if (!visible) return;
    const duration = reduce ? 1200 : 2700;
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [visible, reduce]);

  if (!mounted) return null;

  // Responsive scale values.
  const planeStart = isMobile ? 0.12 : 0.15;
  const planeMid = isMobile ? 0.6 : 0.95;
  const planeFinal = isMobile ? 4.2 : 7.5;
  // Base plane render size — already large so even mid-scale dominates.
  const planeBaseClass = isMobile ? "h-32 w-32" : "h-48 w-48";
  // Brand title responsive size via clamp.
  const titleFontSize = isMobile
    ? "clamp(2rem, 11vw, 3.4rem)"
    : "clamp(2.6rem, 6vw, 5.4rem)";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 40%, #0B3D2E 0%, #06261D 65%, #04190f 100%)",
          }}
          aria-hidden="true"
          role="presentation"
        >
          {/* Soft gold glow behind the plane / brand */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(40% 30% at 50% 50%, rgba(201,162,39,0.18) 0%, transparent 70%)",
            }}
          />

          {/* Subtle gold route line drawn across the canvas */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <motion.path
              d="M-4 80 C 22 58, 48 40, 72 26 S 100 6, 104 -4"
              fill="none"
              stroke="#C9A227"
              strokeWidth="0.22"
              strokeDasharray="0.6 1.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                reduce
                  ? { pathLength: 1, opacity: 0.5 }
                  : { pathLength: 1, opacity: [0, 0.7, 0.45] }
              }
              transition={{
                duration: reduce ? 0.35 : 1.5,
                ease: "easeInOut",
              }}
            />
          </svg>

          {!reduce && (
            <>
              {/* Plane fly-through — small → mid → camera */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-brand-gold"
                style={{
                  filter: "drop-shadow(0 24px 60px rgba(201,162,39,0.25))",
                  willChange: "transform, opacity",
                }}
                initial={{ scale: planeStart, opacity: 0, rotate: -22 }}
                animate={{
                  scale: [planeStart, planeMid, planeFinal, planeFinal],
                  opacity: [0, 1, 1, 0],
                  rotate: [-22, -18, -10, -10],
                }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.55, 0.88, 1],
                  ease: "easeIn",
                }}
              >
                <JetPlane className={planeBaseClass} />
              </motion.div>

              {/* Soft ivory / gold flash wipe as the plane passes the camera */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.92, 0] }}
                transition={{
                  delay: 1.3,
                  duration: 0.55,
                  times: [0, 0.4, 1],
                  ease: "easeOut",
                }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(248,243,234,0.97) 0%, rgba(201,162,39,0.42) 38%, transparent 72%)",
                }}
              />
            </>
          )}

          {/* Brand reveal — centered, fits on mobile via clamp() */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduce ? 0.25 : 1.8,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative z-10 max-w-[92vw] px-6 text-center"
          >
            <h1
              className="font-serif font-semibold leading-[1.02] text-ivory-50"
              style={{
                fontSize: titleFontSize,
                textShadow: "0 2px 18px rgba(0,0,0,0.35)",
              }}
            >
              Green Miles
            </h1>
            <p className="mt-2 text-[11px] tracking-[0.4em] text-ivory-100/85 sm:mt-3 sm:text-xs">
              TRAVEL &amp; TOURISM
            </p>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: reduce ? 0.45 : 2.1,
                duration: 0.45,
                ease: "easeOut",
              }}
              className="mx-auto mt-5 h-px w-20 origin-center bg-brand-gold/80 sm:w-24"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
