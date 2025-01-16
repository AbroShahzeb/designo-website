/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          peach: "#E7816B",
          black: "#1D1C1E",
          white: "#FFFFFF",
        },
        secondary: {
          "light-peach": "#FFAD9B",
          "dark-grey": "#333136",
          "light-grey": "#F1F3F5",
        },
      },
      backgroundImage: {
        "cta-gradient-mobile":
          "linear-gradient(to top, #1D1C1E 189px, transparent 189px)",
        "circle-pattern":
          "linear-gradient(90deg, rgba(93, 2, 2, 0.00) 0%, rgba(93, 2, 2, 0.50) 100%)",
      },
    },
    fontFamily: {
      jost: "Jost",
    },
    fontSize: {
      base: ["16px", { lineHeight: "26px" }],
      lg: ["20px", { lineHeight: "26px", letterSpacing: "5px" }],
      xl: ["40px", { lineHeight: "48px", letterSpacing: "2px" }],
      "2xl": ["48px", { lineHeight: "48px" }],
    },
  },
  plugins: [],
};
