/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary text & dark accents — warm plum (replaces pure black)
        ink: {
          DEFAULT: '#2A1822',
          soft: '#3D2531',
          mid: '#5E3A4B',
          light: '#8A6975',
        },
        // Soft pink-beige neutrals (was "nude")
        nude: {
          50: '#FFF9F6',
          100: '#FDEFEB',
          200: '#FADDD3',
          300: '#F4C0B0',
          400: '#E89A85',
          500: '#D17560',
        },
        // Brand pink — modern, vibrant rose
        pink: {
          50: '#FFF5F8',
          100: '#FFE6EF',
          200: '#FFCBDE',
          300: '#FFA3C5',
          400: '#FF6FA3',
          500: '#FF3D7F',
          600: '#E8266B',
          700: '#C01856',
        },
        // Warm cream background (was "bone")
        bone: '#FFF9F6',
        // Optional fuchsia accent
        rose: {
          50: '#FFF0F7',
          100: '#FFD9EA',
          500: '#EC4899',
          600: '#DB2777',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        soft: '0 4px 20px -8px rgba(255, 61, 127, 0.15)',
        glow: '0 10px 40px -10px rgba(255, 61, 127, 0.25)',
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(135deg, #FFE6EF 0%, #FFCBDE 100%)',
        'rose-gradient': 'linear-gradient(135deg, #FF6FA3 0%, #FF3D7F 100%)',
      },
    },
  },
  plugins: [],
};
