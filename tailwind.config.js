const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans Thai', 'Rubik', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        83: '20.75rem',
        92: '23rem',
      },
      colors: {
        primary: 'rgb(250, 169, 26)',
      },
    },
    minHeight: {
      137: '8.5rem',
    },
  },
  plugins: [],
}
