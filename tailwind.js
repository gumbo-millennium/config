const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const { brand } = require('./src/branding');

module.exports = {
  extends: {
    theme: {
      // Center containers
      container: {
        center: true,
      },

      // Custom title font
      fontFamily: {
        title: ['Poppins', ...defaultTheme.fontFamily.sans],
      },

      // Custom brand color
      colors: {
        brand,
      },
    },
  },

  // Two base plugins
  plugins: [forms, aspectRatio],
};
