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
          bg: '#120e0b',
          surface: '#1f1712',
          card: '#2b2019',
          line: '#564235',
          primary: '#9f1d20',
          accent: '#d6b26f',
          soft: '#efe8df'
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
