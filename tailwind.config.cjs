// @ts-check

const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('tailwindcss').Config} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('tailwindcss').Config}}
 */
function defineTailwindConfig(config) {
  return config;
}

module.exports = defineTailwindConfig({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      animation: {
        wave: 'wave 2.25s ease-in-out infinite',
      },
      backgroundOpacity: {
        15: '0.15',
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#eaeaeb',
          200: '#cacbcd',
          300: '#a7a9ac',
          400: '#696c71',
          500: '#282d34',
          600: '#24292f',
          700: '#181b20',
          800: '#121518',
          900: '#0c0e10',
        },
        primary: {
          50: '#32a4ff',
          100: '#289aff',
          200: '#1e90ff',
          300: '#1486ff',
          400: '#0a7cff',
          500: '#0072ff',
          600: '#0068f5',
          700: '#005eeb',
          800: '#0054e1',
          900: '#004ad7',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
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
      // saturate: {
      //   DEFAULT: {
      //     200: 'saturate(2)',
      //   },
      // },
      transformOrigin: {
        70: '70% 70%',
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              maxWidth: '100%',
            },
          },
        },
      },
    },
    typography: {
      DEFAULT: {
        css: {
          pre: {
            marginTop: '0 !important',
            borderTopLeftRadius: '0 !important',
            borderTopRightRadius: '0 !important',
          },
        },
      },
    },
  },
})
