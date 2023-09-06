/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Mono One", "sans-serif"],
        biriyani: ["Biryani", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        barcode: ["Libre Barcode 39 Text", "cursive"],
      },
    },
  },
  plugins: [],
};
