import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f3f7f4",
          100: "#e3ece6",
          200: "#c8d9cd",
          300: "#a0bfa8",
          400: "#729f7e",
          500: "#528261",
          600: "#3f684d",
          700: "#34533f",
          800: "#2b4335",
          900: "#24382c",
          950: "#121f18",
        },
        earth: {
          50: "#f9f6f1",
          100: "#f0e9dc",
          200: "#e0d0b8",
          300: "#ccb08f",
          400: "#b8906a",
          500: "#a97852",
          600: "#9c6647",
          700: "#82523c",
          800: "#6a4435",
          900: "#57392e",
          950: "#2f1d17",
        },
        mist: {
          50: "#f6f8f9",
          100: "#eceff2",
          200: "#d5dde3",
          300: "#b0bfc9",
          400: "#859bab",
          500: "#667f91",
          600: "#516778",
          700: "#435462",
          800: "#3a4853",
          900: "#343e47",
          950: "#222930",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
