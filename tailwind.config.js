/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/demo/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        signature: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        'brand-primary': '#0D9488',
        'brand-secondary': '#0F766E',
        'brand-accent': '#14B8A6',
        'brand-soft': '#5EEAD4',
        'dark-bg': '#0a0f1a',
        'dark-surface': '#0e1523',
        'dark-card': '#111827',
        'dark-elevated': '#141c2e',
        'dark-text': '#E5E7EB',
        'dark-text-secondary': '#9CA3AF',
        'dark-muted': '#6B7280',
      },
      borderColor: {
        hairline: 'rgba(255, 255, 255, 0.07)',
        'hairline-strong': 'rgba(255, 255, 255, 0.12)',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 40px -24px rgba(0,0,0,0.6)',
        'card-hover': '0 1px 0 0 rgba(255,255,255,0.08) inset, 0 30px 60px -24px rgba(0,0,0,0.7), 0 0 0 1px rgba(20,184,166,0.25)',
        glow: '0 0 0 1px rgba(20,184,166,0.35), 0 12px 40px -8px rgba(20,184,166,0.45)',
        'glow-sm': '0 8px 24px -8px rgba(20,184,166,0.5)',
      },
      letterSpacing: {
        tightest: '-0.04em',
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
          '50%': { transform: 'translateY(-14px)' },
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
        'ping-soft': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
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
        'ping-soft': 'ping-soft 2.4s cubic-bezier(0, 0, 0.2, 1) infinite',
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
