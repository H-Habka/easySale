/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      animation: {
        fill: "fillBar 2s ease-in-out forwards",
      },
      keyframes: {
        fillBar: {
          "0%": { width: "0%" },
          "100%": { width: "45%" },
        },
      },
      screens: {
        380: "380px",
        420: "420px",
        480: "480px",
        600: "600px",
        620: "620px",
        640: "640px",
        680: "680px",
        750: "750px",
        700: "700px",
        768: "768px",
        920: "920px",
        960: "960px",
        1024: "1024px",
        1230: "1230px",
        1366: "1366px",
        1440: "1440px",
        1500: "1500px",
      },
      colors: {
        primary: {
          100: "#bf9d59",
          200: "#c7a76b",
          300: "#cfb27d",
          400: "#d6bd8f",
          500: "#dec7a1",
          600: "#e5d2b3",
        },
        dark: {
          100: "#27374d",
          200: "#3d4a5f",
          300: "#535f71",
          400: "#6a7484",
          500: "#818998",
          600: "#99a0ac",
        },
        mixed: {
          100: "#38404f",
          200: "#4c5361",
          300: "#606673",
          400: "#757a86",
          500: "#8b8f99",
          600: "#a1a5ac",
        },
        light: {
          100: "#DDE6ED",
          200: "#9DB2BF",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtil = {
        ".grid-layout": {
          display: "grid",
        },
        ".hide-item-from-view": {
          display: "none !important",
        },
      }
      addUtilities(newUtil, ["hover"])
    },
  ],
}

// ;("our_atest")
// ;("best_seller")
// ;("best_value")
// ;("Occasions")
