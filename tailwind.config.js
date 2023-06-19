/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-basic": "#7380ec",
        "primary": "#399BFE",
        "brand": "#399BFE",
        "danger": "#ff7782",
        "warning": "#ffbb55",
        "success": "#41f1b6",
        "white": "#fff",
        "info-dark": "#7d8da1",
        "info-light": "#dce1eb",
        "dark": "#363949",
        "light": "rgba(132, 139, 200, 0.18)",
        "primary-variant": "#111e88",
        "dark-variant": "#677483",
        "background": "#f6f6f9",
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
    strategy: 'class'
  })
],
}
