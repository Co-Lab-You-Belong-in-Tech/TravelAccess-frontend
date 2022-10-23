/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F7173',
        secondary: '#117E81',
        tertiary: '#5451D6',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      plugins: [],
    },
  },
};
