/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        wall: "url('./src/assets/images/bg.jpg')"
      },
      fontFamily: {
        marvel: 'Marvel-sans'
      },
      colors: {
        'carbon': '#242424',
        'dark-carbon': '#8c8c8c',
        'light-carbon': '#b5b5b5'
      }
    },
  },
  plugins: [],
}

