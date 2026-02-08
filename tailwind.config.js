/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "doz-bg": "#FFFFFF", // Pure white background
        "doz-surface": "#F1F5F9", // Very light grey for cards
        "doz-text-main": "#0F172A", // Deep navy for main text
        "doz-blue": "#0F4C81", // Brand primary
        "doz-teal": "#0D9488", // Darker teal for visibility on white
        "doz-dark": "#020617", // Legacy dark background (if needed)
        "doz-glass": "rgba(255, 255, 255, 0.7)", // White glass utility (for reference)
      },
    },
  },
  plugins: [],
};
