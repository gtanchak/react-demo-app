/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 15px 40px -20px rgba(40,44,63,.15)",
      },
    },
  },
  plugins: [],
};
