/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",        // All pages/components in app/
    "./src/components/**/*.{js,ts,jsx,tsx}", // All components
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // If you have pages/ folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
