/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#0F0F0F",
        "black-w": "#F0F0F0",
        background: {
          "0-t": "#09090A99",
          "1-t": "#16161899",
          "2-t": "#27272a99",
          "3-t": "#34343999",
          "4-t": "#43434999",
          "5-t": "#5e5e6699",
          "6-t": "#87879399",
          "0-t-w": "#F6F6F599",
          "1-t-w": "#E9E9E799",
          "2-t-w": "#D8D8D599",
          "3-t-w": "#CBCBC699",
          "4-t-w": "#BCCBB699",
          "5-t-w": "#A1A19999",
          "6-t-w": "#78786C99",
        },
        label: {
          2: "#ebebf599",
          3: "#ebebf54d",
          4: "#ebebf52e",
          5: "#ebebf51a",
          "1-w": "#303030",
          "2-w": "#303030B3",
          "3-w": "#30303066",
          "4-w": "#30303047",
          "5-w": "#30303033",
        },
        indigo: {
          default: "#3d3d99",
          t: "#5151cc",
        },
        red: {
          default: "#991f1f",
          t: "#cc2929",
        },
        green: {
          default: "#1f9947",
          t: "#29cc5f",
        },
      },
      borderRadius: {
        default: "24px",
        small: "12px",
      },
    },
  },
  plugins: [],
};
