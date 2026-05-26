/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6B1A1A',
          light: '#8B2A2A',
          dark: '#4A1010',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D9B85C',
          dark: '#B9983C',
        },
        cream: '#FAF6EE',
        charcoal: '#1C1C1E',
        beige: '#F0E8D5',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
