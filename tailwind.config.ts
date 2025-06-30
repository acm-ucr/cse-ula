/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ula: {
          "blue-accent": "#003DA5",
          "yellow-accent": "#FFB81C",
          "blue-primary": "#45ABFF",
          "yellow-primary": "#FBC754",
        },
      },
    },
  },
  plugins: [],
};
