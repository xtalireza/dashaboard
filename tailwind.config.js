/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors:{
      white:"#ffffff",
      boldwhite:"#F8F8F8",
      blue:"#397FFE",
      black:"#000000",
      transparent:"transparent"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '1rem',
      },
    },
    extend: {},
  },
  plugins: [],
}

