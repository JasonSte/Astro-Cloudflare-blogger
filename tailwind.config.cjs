/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'mobile': '640px',
      'tablet': '900px',
      'desktop': '1400px',
    },
    extend: {
      fontFamily: {
        'serif': ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
        'sans': ['Comfortaa', ...defaultTheme.fontFamily.sans],
        'mono': ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        platinum: '#E5E4E2',
        lightgray: '#D3D3D3',
        silver: '#C0C0C0',
        slategray: '#708090',
        steelgray: '#71797E',
        charcoal: '#36454F',
        teal: {
          '50': '#f1f7f7',
          '100': '#d6f0f7',
          '200': '#a7e2ee',
          '300': '#71c6d8',
          '400': '#38a4bb',
          '500': '#29869e',
          '600': '#246d84',
          '700': '#1f5367',
          '800': '#17394b',
          '900': '#0f2334',
        },
        navy: {
          'light': '#b5dff4',
          'dark': '#2a4883',
        },
        blue: {
          light: '#c7daf7',
          dark: '#2a2a70',
        },
        gold: '#855310',
        lemon: '#efde73'
      }
    }
  },
  plugins: [
  ],
}
