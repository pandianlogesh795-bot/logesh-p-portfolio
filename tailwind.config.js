/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          950: '#0c0b10', // Deepest warm espresso obsidian
          900: '#121118',
          850: '#181722',
          800: '#1f1e2b',
          700: '#2b293b',
        },
        studio: {
          gold: '#f59e0b',      // Warm Champagne Gold
          amber: '#d97706',     // Deep Amber
          coral: '#f43f5e',     // Sunset Rose Coral
          terracotta: '#ea580c',// Warm Earth Terracotta
          violet: '#8b5cf6',    // Royal Amethyst
          emerald: '#10b981',   // Forest Emerald
          ivory: '#fdfbf7',     // Pure Warm Alabaster
          sand: '#e7e2d9',      // Soft Sandstone
          muted: '#a8a29e',     // Warm Muted Stone
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-warm': 'pulseWarm 4s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'marquee': 'marquee 34s linear infinite',
        'marquee-reverse': 'marquee-reverse 34s linear infinite',
      },
      keyframes: {
        pulseWarm: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 35px -8px rgba(245, 158, 11, 0.35)',
        'coral-glow': '0 0 35px -8px rgba(244, 63, 94, 0.35)',
        'violet-glow': '0 0 35px -8px rgba(139, 92, 246, 0.35)',
        'luxury-card': '0 25px 60px -15px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
}
