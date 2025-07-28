/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#010101',
        foreground: '#010101',
        'dark-gray': '#A9A9A9',
        'promo-start': '#FC004E',
        'promo-end': '#10CBE0',
        'promo-accent': '#00E7F9',
        white: '#FFF',
        blue: '#00E7F9',
        'red-two': '#E00045',
        gray: '#ABABAB'
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif']
      }
    }
  },
  plugins: []
} 