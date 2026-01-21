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
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#9CA3AF',
            '--tw-prose-headings': '#E5E7EB',
            '--tw-prose-lead': '#9CA3AF',
            '--tw-prose-links': '#14B8A6',
            '--tw-prose-bold': '#E5E7EB',
            '--tw-prose-counters': '#9CA3AF',
            '--tw-prose-bullets': '#14B8A6',
            '--tw-prose-hr': 'rgba(255, 255, 255, 0.1)',
            '--tw-prose-quotes': '#E5E7EB',
            '--tw-prose-quote-borders': '#14B8A6',
            '--tw-prose-captions': '#9CA3AF',
            '--tw-prose-code': '#14B8A6',
            '--tw-prose-pre-code': '#E5E7EB',
            '--tw-prose-pre-bg': 'rgba(255, 255, 255, 0.05)',
            '--tw-prose-th-borders': 'rgba(255, 255, 255, 0.1)',
            '--tw-prose-td-borders': 'rgba(255, 255, 255, 0.05)',
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
