/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1122px",
      "2xl": "1536px",
      laptop: "1537px",
    },
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        red: "#FF0000",
        green: "#317B01",
        yellow: "#FAC900",
        orange: "#FE8E00",
        black1: "#232323",
        white1: "#FAFBFE",
        white2: "#DFDFDF",
        gray1: "#B8B8B8",
      },
    },
  },
  plugins: [],
};
