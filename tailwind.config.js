/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        'bg': 'var(--bg)',
        'text': 'var(--text)',
        'muted': 'var(--muted)',
        'accent': 'var(--accent)',
        'accent-600': 'var(--accent-600)',
        'success': 'var(--success)',
        'surface': 'var(--surface)',
        'surface-2': 'var(--surface-2)',
      },
      boxShadow: {
        'glow': '0 0 24px rgba(0, 230, 255, 0.35)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}
