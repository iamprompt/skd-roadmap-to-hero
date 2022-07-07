const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Anuphan', 'Rubik', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        83: '20.75rem',
        92: '23rem',
        140: '35rem',
      },
      height: {
        hero: '46rem',
      },
      colors: {
        skooldio: '#FFA629',
      },
    },
    minHeight: {
      137: '8.5rem',
    },
  },
  plugins: [],
}
