// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue', './src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
