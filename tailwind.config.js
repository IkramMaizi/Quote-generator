/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        transparentBlack: '#0000004D',
        fontColor: '#213547',
      }
    },
  },
  plugins: [],
}

