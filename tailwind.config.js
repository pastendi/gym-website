/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGray: '#D9D9D9',
        gray: '#9c9c9c',
        darkGray: '#464D53',
        mediumGray: '#656565',
      },
    },
  },
  plugins: [],
}
