/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary-base': '#1B3A5F',
        'primary-lighter': '#2D5280',
        'primary-darker': '#0F2440',
        'accent-gold': '#D4A745',
        'accent-gold-light': '#E8C976',
        'accent-gold-dark': '#B8903A',
      },
      lineHeight: {
        'base': '1.6',
      },
    },
  },
  plugins: [],
}

