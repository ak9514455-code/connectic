/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        navy: '#0B1F4D',
        softblue: '#60A5FA',
        canvas: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '72rem',
        prose: '40rem',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        glass: '0 8px 32px -8px rgba(11, 31, 77, 0.12)',
        'glass-lg': '0 24px 64px -16px rgba(11, 31, 77, 0.18)',
        soft: '0 2px 24px -8px rgba(11, 31, 77, 0.08)',
        glow: '0 0 80px -20px rgba(37, 99, 235, 0.35)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(28px) translateX(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scale-in 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 18s ease-in-out infinite',
        'float-slow': 'float-slow 24s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 18s ease infinite',
        'spin-slow': 'spin-slow 80s linear infinite',
      },
    },
  },
  plugins: [],
};
