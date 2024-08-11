/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',  // Example color
      },
      spacing: {
        '128': '32rem',  // Example spacing
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
        // You can add more rotations if needed
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}