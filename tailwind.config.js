/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vixxel: {
          primary: '#00A2FF',
          secondary: '#007ACC',
          dark: '#111111',
          light: '#F2F4F5',
        }
      }
    },
  },
  plugins: [],
}
