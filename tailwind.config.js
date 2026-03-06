/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/demo/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#0D9488',
        'brand-secondary': '#0F766E',
        'brand-accent': '#14B8A6',
        'dark-bg': '#0a0f1a',
        'dark-card': '#111827',
        'dark-text': '#E5E7EB',
        'dark-text-secondary': '#9CA3AF',
      },
      keyframes: {
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal-scale': {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'counter-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-up-delay-1': 'fade-up 0.7s ease-out 0.15s forwards',
        'fade-up-delay-2': 'fade-up 0.7s ease-out 0.3s forwards',
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-scale': 'reveal-scale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gradient-x': 'gradient-x 6s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'slide-right': 'slide-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'counter-up': 'counter-up 0.6s ease-out forwards',
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
