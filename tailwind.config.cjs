// @ts-check

const defaultColors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const { colors } = require('./src/utils/colors')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './src/components/**/*.{astro,js,ts,jsx,tsx}',
    './src/layouts/**/*.{astro,js,ts,jsx,tsx}',
    './src/pages/**/*.{astro,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      animation: {
        dash: 'dash 2s forwards ease-in-out',
        wave: 'wave 2.25s ease-in-out infinite',
      },
      colors,
      fontFamily: {
        sans: ['var(--font-inter)', ...(defaultTheme.fontFamily.sans || [])],
      },
      keyframes: {
        dash: {
          from: {
            'stroke-dashoffset': 822,
          },
          to: {
            'stroke-dashoffset': 0,
          },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      transformOrigin: {
        70: '70% 70%',
      },
    },
  },
};
