/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'easy-blue': '#3e91fd',
        'easy-blue-dark': '#2d7be8',
        'easy-blue-light': '#EBF3FE',
      },
    },
  },
  plugins: [],
}
