/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{,js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors: {
        'charcoal': '#2e4052',
        'cambridge': '#82a3a1',
        'sunglow': '#ffc857',
        'sunglow-dark': '#FFA26F',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

