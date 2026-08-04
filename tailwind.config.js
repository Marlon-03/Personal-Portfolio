/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          accent: 'var(--color-accent)',
          surface: 'var(--color-surface)',
          soft: 'var(--color-surface-soft)',
        },
      },
    },
  },
  plugins: [],
}