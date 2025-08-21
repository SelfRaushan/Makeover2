/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#C53030",
        brandGold: "#D4AF37",
        brandMaroon: "#800000",
      },
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
