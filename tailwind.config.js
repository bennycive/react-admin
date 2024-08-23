/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:
         {
          'dark-purple':"#172554",
          'light-white':"#fafaf9"
         }
    },
  },
  plugins: [],
}


