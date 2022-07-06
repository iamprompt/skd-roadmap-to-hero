const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        83: '20.75rem',
        92: '23rem',
      },
    },
  },
  plugins: [],
}
