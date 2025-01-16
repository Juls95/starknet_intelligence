/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Switzer, system-ui, sans-serif',
        display: 'Switzer, system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        slate: {
          850: '#1e293b',
          950: '#020617',
        }
      }
    },
  },
  plugins: [],
}
