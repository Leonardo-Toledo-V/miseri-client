/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: ['var(--font-lato)', ...fontFamily.sans],
        playfair: ['var(--font-playfair)', ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}
