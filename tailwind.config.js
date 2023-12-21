/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url("/parallax6.jpg")',
      },
    },
  },
  plugins: [require("daisyui")],
}

