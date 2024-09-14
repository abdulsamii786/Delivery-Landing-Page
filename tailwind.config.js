/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryClr: "#ff5331",
        primarLightClr: "#ffefec",
        blackClr: "#191720",
        whiteClr: "#ffffff",
        grayClr: "#807c7c",
        lightGrayClr: "#b5b2b2",
        bgGray: "#e6e6e6",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
