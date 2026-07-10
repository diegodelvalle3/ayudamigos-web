/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
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
          DEFAULT: '#FF6F59',
          light: '#FF9C8C',
          dark: '#E4523C',
        },
        leaf: {
          DEFAULT: '#4CB963',
          light: '#8FDA9E',
          dark: '#379149',
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
  plugins: [],
};
