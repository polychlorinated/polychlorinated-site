import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
    },
  },
  plugins: [],
};
