/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lemon-regular': ['LEMONMILK-Regular', 'sans'],
        'lemon-medium': ['LEMONMILK-Medium', 'sans'],
        'lemon-light': ['LEMONMILK-Light', 'sans'],
      },
      colors: {
        'eum-red': '#ED1C24',
        'eum-blue': '#094FA3',
      },
    },
  },
  plugins: [],
}
