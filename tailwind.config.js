/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00c2ff',
        'primary-dark': '#00b3eb',
      }
    },
  },
  plugins: [],
} 