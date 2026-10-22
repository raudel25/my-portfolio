const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ink: "#0E1626",
        surface: "#15203A",
        line: "#253250",
        fg: "#E9EDF5",
        muted: "#9BA7BE",
        gold: {
          DEFAULT: "#E5B54B",
          dark: "#C99A2E",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"STIX Two Text"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
