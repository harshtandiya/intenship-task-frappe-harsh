/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans' : ['Inter', 'ui-sans-serif',],
    }
  },
  plugins: [],
}
