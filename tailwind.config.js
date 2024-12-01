/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5754a7', // Custom primary color
        secondary: '#EFF1F7', // Custom secondary color
        accent: {
          light: '#FDE68A', // Light accent color
          DEFAULT: '#F59E0B', // Default accent color
          dark: '#D97706', // Dark accent color
        },
      },
    },
  },
  plugins: [],
}

