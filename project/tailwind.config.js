/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#006d77',
        secondary: '#83c5be',
        background: '#edf6f9',
      },
    },
  },
  plugins: [],
}

