/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": "#018ABE",
        "light-secondary": "#97CADB",
        "light-white": "#D6EBEE",
        "dark-primary": "#02457A",
        "dark-secondary": "#001B4B"
      }
    },
  },
  plugins: [],
}
