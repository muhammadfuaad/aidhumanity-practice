module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue': '#00ADE9',
        'night-blue': '#223879',
        'navy-blue': '#006BA3',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
