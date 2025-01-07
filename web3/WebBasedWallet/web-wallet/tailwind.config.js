/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this includes TypeScript files
  ],
  theme: {
    extend: {
      boxShadow: {
        floating: "10px 10px 10px rgba(255, 192, 203, 0.5)",
      }
    },
  },
  plugins: [],
};
