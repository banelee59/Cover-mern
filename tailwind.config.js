/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'primary-dark': '#2980b9',
      }
    },
  },
  plugins: [],
} 