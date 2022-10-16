/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-ribbon': {
          DEFAULT: '#0D6EFD',
          '50': '#C3DBFF',
          '100': '#AFCFFE',
          '200': '#86B7FE',
          '300': '#5E9EFE',
          '400': '#3586FD',
          '500': '#0D6EFD',
          '600': '#0255D0',
          '700': '#013E99',
          '800': '#012861',
          '900': '#001129'
        },
      },
      boxShadow: {
        '3xl': '15px 15px 24px rgba(22, 51, 102, 0.25)',
      }
    },
  },
  plugins: [],
}