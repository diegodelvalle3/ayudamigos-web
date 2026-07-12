/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF0',
        ink: '#1E2A47',
        sky: {
          DEFAULT: '#2EA8E0',
          light: '#8FD6F5',
          dark: '#1D7FB3',
        },
        sun: {
          DEFAULT: '#FFC845',
          light: '#FFE18C',
          dark: '#F0A800',
        },
        coral: {
          DEFAULT: '#EC4899',
          light: '#F9A8D4',
          dark: '#BE185D',
        },
        leaf: {
          DEFAULT: '#27B5A8',
          light: '#8FDCD3',
          dark: '#1B7F74',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'ui-rounded', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        blob: '40% 60% 60% 40% / 50% 45% 55% 50%',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(30, 42, 71, 0.18)',
        button: '0 6px 0 0 rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [flowbitePlugin],
};
