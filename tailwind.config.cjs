/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-orange": "#e9ab53",
        "soft-red": "#f15e50",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "inter-regular": ["Inter Regular", "sans-serif"],
        "inter-bold": ["Inter Bold", "sans-serif"],
        "inter-extrabold": ["Inter ExtraBold", "sans-serif"],
      },
      letterSpacing: {
        "0.2": "0.2em",
      },
    },
  },
  plugins: [],
}
