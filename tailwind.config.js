/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js.ts,jsx,tsx}",
    "./components/**/*.{js.ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        tanpearl: ["tanpearl", "cursive"],
        safiramarch: ["safiramarch", "cursive"]
      },
      colors: {
        primaryDark: '#382c26',
        beige: '#dfd7cc',
        darkBeige: '#A7998B',
        lightGray: '#f6f5f5'
        // #382c26 => black
        // #ffffff => white
        // #dfd7cc => beige
      },
    },
  },
  plugins: [],
}