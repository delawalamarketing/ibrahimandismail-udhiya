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
      },
      maxWidth: {
        prose: "65ch",
        narrow: "720px",
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
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
        "fade-up": "fade-up 400ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
