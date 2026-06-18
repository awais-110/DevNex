import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        line: "var(--border)",
        "line-bright": "var(--border-bright)",
        primary: "var(--accent-primary)",
        cyan: "var(--accent-secondary)",
        warm: "var(--accent-warm)",
        "text-main": "var(--text-primary)",
        "text-soft": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 4s ease-in-out infinite",
        mesh: "mesh 20s ease-in-out infinite alternate",
        blink: "blink 1.1s steps(2, start) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        mesh: {
          "0%": { transform: "translate3d(-2%, -2%, 0) scale(1)" },
          "100%": { transform: "translate3d(2%, 3%, 0) scale(1.08)" },
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
