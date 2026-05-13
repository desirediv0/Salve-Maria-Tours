import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A6B",
        sky: "#29ABE2",
        orange: "#E8630A",
        "light-blue": "#F0F6FF",
        ink: "#1a1a2e",
        "footer-dark": "#0f1e3d",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 25px 50px -12px rgba(27, 58, 107, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 20px 60px rgba(27, 58, 107, 0.15)",
        "nav-scrolled": "0 8px 32px rgba(27, 58, 107, 0.12)",
        "cta-glow": "0 8px 30px rgba(232, 99, 10, 0.35)",
        "cta-glow-hover": "0 12px 40px rgba(232, 99, 10, 0.5)",
        "wa-float": "0 8px 30px rgba(37, 211, 102, 0.4)",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "50%": { boxShadow: "0 0 0 16px rgba(37, 211, 102, 0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.9" },
          "50%": { transform: "translateY(10px)", opacity: "0.45" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.2s ease-in-out infinite",
        "scroll-hint": "scroll-hint 1.6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
