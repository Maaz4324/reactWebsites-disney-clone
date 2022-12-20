/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#131A27',
        'boxDark': '#030B17',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'franchiseCard' : "#1F2B43"
      },
      backgroundImage: {
        'andor': "linear-gradient(to right, rgb(3,11,23, 4.99), rgba(0, 0, 0, 0)),url('./images/andor.jpg')",
        'goghs': "linear-gradient(to right, rgb(3,11,23, 4.99), rgba(0, 0, 0, 0)),url('./images/goghs.jpg')",
        'avatar1': "linear-gradient(to right, rgb(3,11,23, 4.99), rgba(0, 0, 0, 0)),url('./images/avatar1.jpg')",
        'zootopia': "linear-gradient(to right, rgb(3,11,23, 4.99), rgba(0, 0, 0, 0)),url('./images/zootopia.png')",
      },
      height: {
        'set': '53vh',
      } 
    },
  },
  plugins: [],
}
