/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0d0b14',
        'bg-light': '#161224',
        'bg-lightest': '#2a2342',
        'text-light': '#fdfcff',
        'text-dim': '#a9a3bf',
        'accent': '#c084fc',
        'accent-tint': 'rgba(192, 132, 252, 0.15)',
        'glass-bg': 'rgba(18, 14, 28, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
