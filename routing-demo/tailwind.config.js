/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",        // include your app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // include components inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
