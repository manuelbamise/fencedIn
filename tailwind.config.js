/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'stapleGreen':'#00fd00',
        'hoverStaple':'#01d201'
      },
    },
  },
  plugins: [],
}

