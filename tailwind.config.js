module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{vue,js}',
      './components/**/*.{vue,js}',
      './assets/css/*.css'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
