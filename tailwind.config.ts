import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          900: "#1F3329",
          700: "#2C4A3E",
          500: "#4A6B5C",
          100: "#DDE6E0",
        },
        cream: {
          50: "#FBF7F0",
          100: "#F5EFE6",
          200: "#EBE2D2",
        },
        accent: {
          700: "#A4582F",
          500: "#C97B47",
          200: "#F0D9C4",
        },
        ink: {
          900: "#1F1B16",
          700: "#3F3933",
          500: "#6B655C",
          300: "#B8B1A6",
          100: "#E8E3D9",
        },
        success: "#4A6B3E",
        error: "#9C3B2A",
        info: "#3E5B6B",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-md": ["clamp(1.125rem, 1.5vw, 1.25rem)", { lineHeight: "1.3" }],
        "body-lg": ["clamp(1.125rem, 1.2vw, 1.25rem)", { lineHeight: "1.55" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        pill: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(31, 27, 22, 0.04)",
        md: "0 4px 12px rgba(31, 27, 22, 0.06)",
        lg: "0 12px 32px rgba(31, 27, 22, 0.08)",
        cta: "0 6px 20px rgba(201, 123, 71, 0.18)",
        "cta-hover": "0 8px 24px rgba(201, 123, 71, 0.24)",
        "cta-bloom": "0 10px 28px rgba(201, 123, 71, 0.32)",
      },
      maxWidth: {
        prose: "65ch",
        narrow: "720px",
      },
      transitionDuration: {
        "160": "160ms",
        "220": "220ms",
        "280": "280ms",
        "320": "320ms",
        "380": "380ms",
        "480": "480ms",
      },
      transitionTimingFunction: {
        warm: "cubic-bezier(0.32, 0.72, 0.36, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
        spring: "cubic-bezier(0.34, 1.36, 0.64, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "draw-line": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "ken-burns": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        "pulse-cta": {
          "0%, 100%": { boxShadow: "0 6px 20px rgba(201, 123, 71, 0.18)" },
          "50%": { boxShadow: "0 10px 28px rgba(201, 123, 71, 0.32)" },
        },
        "bloom-bg": {
          from: { backgroundColor: "transparent" },
          to: { backgroundColor: "#F5EFE6" },
        },
        "draw-check": {
          from: { strokeDashoffset: "60" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 220ms cubic-bezier(0.32, 0.72, 0.36, 1)",
        "accordion-up": "accordion-up 220ms cubic-bezier(0.32, 0.72, 0.36, 1)",
        "fade-up": "fade-up 480ms cubic-bezier(0.32, 0.72, 0.36, 1) both",
        "draw-line": "draw-line 600ms cubic-bezier(0.32, 0.72, 0.36, 1) both",
        "ken-burns": "ken-burns 14s cubic-bezier(0.32, 0.72, 0.36, 1) infinite",
        "pulse-cta-once": "pulse-cta 1.8s cubic-bezier(0.32, 0.72, 0.36, 1) 1",
        "bloom-bg-once": "bloom-bg 600ms cubic-bezier(0.32, 0.72, 0.36, 1) both",
        "draw-check": "draw-check 400ms cubic-bezier(0.32, 0.72, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
