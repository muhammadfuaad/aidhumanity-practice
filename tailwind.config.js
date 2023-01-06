module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "headings": "#1D1D1D",
        "body": "#444445",
        "primary": "#00ADE9",
        "primary-dark": "#102558",
        "primary-light": "#E0F7FF",
        "footer-text": "#8892AC",
        "amber": "#FFC100"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
