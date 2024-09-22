/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
      },
      transitionDuration: {
        350: "350ms",
      },
    },
  },
  plugins: [],
};
