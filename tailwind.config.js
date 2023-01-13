/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#faf4f4",
      "orange": "#ef962e",
      "brown": "#9c5619",
      "brown-light": "#5b4012",
      "floral-white": "#fffaf0",
    },
    extend: {},
  },
  plugins: [],
}
