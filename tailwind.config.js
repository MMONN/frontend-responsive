/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: {
        min: "321px",
      },
      md: {
        min: "768px",
      },
    },
    extend: {},
  },
  plugins: [],
};
