/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          50: "#fff1f0",
          100: "#ffdfdc",
          200: "#ffc5c0",
          300: "#ff9c94",
          400: "#ff6356",
          500: "#ff3322",
          600: "#ff1502",
          700: "#d81100",
          800: "#b91002",
          900: "#931409",
          950: "#510600",
        },
      },
    },
    fontFamily: {
      body: ["Plus Jakarta Sans"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
