import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(navbar|modal).js',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
        glitch: ['var(--font-doctorGlitch)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(1, 35, 64, 0.4)',
      },
      colors: {
        dark: '#13131f',
        light: '#F2F2F0',
        pinkPhase: {
          100: '#E02DD4',
          200: '#C327B8',
          300: '#A6219D',
          400: '#891B81',
          500: '#6D1667',
          600: '#4F104A',
          700: '#320A2F',
        },
        bluePhase: {
          100: '#05F2F2',
          200: '#04D5D5',
          300: '#04B8B8',
          400: '#039B9B',
          500: '#037E7E',
          600: '#026161',
          700: '#014343',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
