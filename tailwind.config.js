/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0D9488', // Teal-600
        'brand-secondary': '#0F766E', // Teal-700
        'brand-accent': '#14B8A6', // Teal-500
        'dark-bg': '#111827', // Gray-900
        'dark-card': '#1F2937', // Gray-800
        'dark-text': '#E5E7EB', // Gray-200
        'dark-text-secondary': '#9CA3AF', // Gray-400
      }
    }
  },
  plugins: [],
};
