import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parlem: {
          green: {
            50: "#eefcf3",
            100: "#d6f7e2",
            200: "#aeedc6",
            300: "#7adfa6",
            400: "#45cb82",
            500: "#22b366",
            600: "#159152",
            700: "#127343",
            800: "#125c38",
            900: "#114c30",
          },
          gray: {
            50: "#f8f9fa",
            100: "#f1f3f4",
            200: "#e4e7e9",
            300: "#d1d6d9",
            400: "#a8b0b5",
            500: "#7c878d",
            600: "#5c666b",
            700: "#454d51",
            800: "#2d3336",
            900: "#1b1f21",
          },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(20, 30, 25, 0.08), 0 1px 3px -1px rgba(20, 30, 25, 0.06)",
        card: "0 4px 20px -4px rgba(20, 30, 25, 0.10)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pop": {
          "0%": { transform: "scale(0.96)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.35s ease-out both",
        pop: "pop 0.2s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
