/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      red: '#ED1818',
      purple: '#5C16E6',
      white: '#FFFFFF',
      black: '#000000',
      avanzado: '#C61360',
      interpretacion: '#2F4858',
      camara: '#993783',
      improvisacion: '#354D77',
      corto: '#60498A',
    },
    screens: {
      xsm: '475px',
      ...defaultTheme.screens,
      wide: '1980px',
    },
    extend: {
      dropShadow: {
        '3xl': '-5px 5px 3px rgba(92, 22, 230, 0.25)',
      },
      screens: {
        'min-tall-mobile': { raw: '(min-height: 600px)' },
      },
      fontFamily: {
        title: [
          'League Spartan',
          ...defaultTheme.fontFamily.sans,
        ],
        text: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
