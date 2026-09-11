/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { kanit: ["Kanit", "sans-serif"] },
      colors: { ink: "#0C0C0C", paper: "#F4F4F0", soft: "#D7E2EA", accent: "#E50914" }
    }
  },
  plugins: []
}