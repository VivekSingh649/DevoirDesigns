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
          50: "#eef5ff",
          100: "#dae8ff",
          200: "#bdd8ff",
          300: "#8fbfff",
          400: "#5a9bff",
          500: "#246bfd",
          600: "#1d55f3",
          700: "#1640df",
          800: "#1835b5",
          900: "#1a328e",
          950: "#152156",
        },
      },
    },
    fontFamily: {
      body: ["Plus Jakarta Sans"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
