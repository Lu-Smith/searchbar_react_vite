/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { transform: 'translateX(-30vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        disappear: {
          '0%': { transform: 'translateX(30vw)' },
          '100%': { transform: 'translateX(-30vw)' },
        }
      },
      animation: {
        'disappearFromLeft': 'disappear 3s linear',
        'appearFromLeft': 'appear 3s linear',
      }
    },
  },
  plugins: [],
}

