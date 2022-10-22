/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 74%) ",
        Green: "hsl(154, 59%, 51%)",
        Blue: "hsl(248, 32%, 49%)",
        DarkBlue: "hsl(249, 10%, 26%) ",
        GrayishBlue: "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        popins: ["Poppins"],
      },
      backgroundImage: {
        "bg-phone": "url ('/src/images/bg-intro-mobile.png') ",
        "bg-desktop": "url ('/src/images/bg-intro-desktop.png') ",
      },
    },
  },
  plugins: [],
};
