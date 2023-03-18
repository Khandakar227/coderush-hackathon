/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'anek_bangla':  [ 'Anek Bangla', 'sans-serif' ],
      'inter':  ['Inter', 'sans-serif'],
      'lora':  ['Lora', 'sans-serif'],
    },
  },
  plugins: [],
}
