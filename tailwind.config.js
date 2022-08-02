const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
