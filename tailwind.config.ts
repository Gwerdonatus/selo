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
        background: "#1a0a2e",
        foreground: "#c4b5fd",
        muted: "#7c3aed",
        card: "#2d1b4e",
        "button-bg": "#7c3aed",
        "button-text": "#ede9fe",
        border: "#7c3aed",
        purple: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2d1b4e",
        },
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "nav": "0.8125rem",
        "product-name": "0.6875rem",
        "product-price": "0.6875rem",
        "footer": "0.6875rem",
        "detail-label": "0.875rem",
        "detail-value": "0.8125rem",
        "page-title": "0.875rem",
        "price": "1.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
