/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["CustomFont", "sans-serif"],
        body: ["Cabin", "sans-serif"]
      },
      colors: {
        background: "#1A1A1A",
        nav: "#2D2C2C",
        title: "#00FFFF",
        secondary: "#FFA500"
      }
    }
  },
  plugins: []
};