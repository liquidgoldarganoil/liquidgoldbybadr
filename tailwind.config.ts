import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#07060a",
          soft: "#0d0b12",
          card: "#121017",
        },
        gold: {
          50: "#faf5e6",
          100: "#f1e2b6",
          200: "#e8c873",
          300: "#d9b45a",
          DEFAULT: "#c9a24b",
          400: "#c9a24b",
          500: "#b08c3e",
          600: "#8a6d2f",
          700: "#6b5424",
        },
        ivory: "#f4eee2",
        wine: "#4a1116",
        line: "rgba(201,162,75,0.16)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(110deg, #8a6d2f 0%, #e8c873 30%, #f8e9c1 50%, #e8c873 70%, #8a6d2f 100%)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(201,162,75,0.14) 0%, rgba(7,6,10,0) 70%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
