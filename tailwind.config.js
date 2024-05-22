/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["CustomFont", "sans-serif"],
        body: ["Cabin", "sans-serif"]
      }
    }
  },
  plugins: []
};