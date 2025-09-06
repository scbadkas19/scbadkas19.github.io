import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-accent': {
          100: '#E6FFFF',
          200: '#B3FFFF',
          300: '#80FFFF',
          400: '#4DFFFF',
          500: '#00FFFF',  // Cyan
          600: '#00CCCC',
          700: '#009999',
          800: '#006666',
          900: '#003333'
        }
      },
      fontFamily: {
        signature: ['Georgia', 'serif'],
      },
      animation: {
        'glow-dark': 'glow-dark 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-dark': {
          '0%': { 'box-shadow': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' },
          '100%': { 'box-shadow': '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
