/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          bg: 'rgb(var(--museum-bg) / <alpha-value>)',
          surface: 'rgb(var(--museum-surface) / <alpha-value>)',
          card: 'rgb(var(--museum-card) / <alpha-value>)',
          line: 'rgb(var(--museum-line) / <alpha-value>)',
          primary: 'rgb(var(--museum-primary) / <alpha-value>)',
          accent: 'rgb(var(--museum-accent) / <alpha-value>)',
          soft: 'rgb(var(--museum-soft) / <alpha-value>)'
        }
      },
      boxShadow: {
        museum: '0 20px 60px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(159,29,32,0.18), transparent 50%)'
      }
    }
  }
};
