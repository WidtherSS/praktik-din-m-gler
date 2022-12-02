/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { roboto: "Roboto", fontawesome: "FontAwesome" } },
    colors: {
      white: "#fff",
      gray: {
        "100": "#f8f8fb",
        "200": "#eef7ff",
        "300": "#d5e0ea",
        "400": "#d3dee8",
        "500": "#7b7b7b",
        "600": "#3679c5",
        "700": "#2f78cc",
        "800": "#3b5999",
        "900": "#33628d",
        "1000": "#455463",
        "1100": "#25517a",
        "1200": "#33485c",
        "1300": "#444",
        "1400": "#333",
        "1500": "#263048",
        "1600": "#2a2c30",
        "1700": "#162a41",
        "1800": "rgba(0, 0, 0, 0)",
      },
      black: "#000",
      turquoise: "#10ac84",
      brown: { "100": "#eb5757", "200": "#dd4b39" },
      gold: "#f2c94c",
      orange: "#f2994a",
      indigo: "#2f80ed",
    },
    fontSize: {
      xs: "12px",
      sm: "16px",
      base: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "28px",
      "3xl": "30px",
      "4xl": "33px",
      "5xl": "38px",
      "6xl": "50px",
      "7xl": "60px",
      "8xl": "200px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "800px" },
      sm: { max: "428px" },
    },
  },
  corePlugins: { preflight: false },
};