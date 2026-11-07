/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#073B27',
          deep: '#0B291B',
          darkest: '#041B12',
          light: '#0F4C34',
          accent: '#165B3E',
        },
        gold: {
          DEFAULT: '#D5AD55',
          light: '#E8C872',
          pale: '#FFF4D2',
          dark: '#B8923C',
          deep: '#8F6E22',
        },
        burgundy: {
          DEFAULT: '#491D2B',
          dark: '#36141F',
          light: '#5E2637',
          wine: '#3D1522',
        },
        ivory: {
          DEFAULT: '#F5EBDD',
          light: '#FAF5EE',
          dark: '#E7D9C5',
        },
        darkbrown: {
          DEFAULT: '#291713',
          dark: '#1C0F0C',
          light: '#3E241E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
        display: ['"Cinzel"', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(213, 173, 85, 0.45)',
        'emerald-glow': '0 0 30px -5px rgba(7, 59, 39, 0.6)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(213, 173, 85, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFF4D2 0%, #D5AD55 50%, #B8923C 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D5AD55 0%, #FFF4D2 50%, #D5AD55 100%)',
        'emerald-dark': 'linear-gradient(180deg, #073B27 0%, #041B12 100%)',
        'burgundy-dark': 'linear-gradient(180deg, #491D2B 0%, #291713 100%)',
        'luxe-mix': 'linear-gradient(135deg, #073B27 0%, #0B291B 40%, #491D2B 100%)',
      }
    },
  },
  plugins: [],
}
