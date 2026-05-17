import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FBF7EE",
          100: "#F6F0E0",
          200: "#ECE2C8",
          300: "#DFD3B2",
        },
        brand: {
          green: "#0B3D2E",
          greenDark: "#06261D",
          greenSoft: "#15543F",
          gold: "#C9A227",
          goldSoft: "#D9B656",
          ink: "#161616",
          muted: "#6E6F6B",
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      letterSpacing: {
        widest2: "0.32em",
        eyebrow: "0.28em",
      },
      boxShadow: {
        soft: "0 8px 28px -16px rgba(11, 61, 46, 0.18)",
        card: "0 20px 50px -28px rgba(11, 61, 46, 0.35)",
        ring: "0 0 0 1px rgba(11, 61, 46, 0.08)",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
