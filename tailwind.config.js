/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          mid: '#3D3D3D',
          light: '#6B6B6B',
        },
        nude: {
          50: '#FBF8F5',
          100: '#F5EFE8',
          200: '#EBE0D3',
          300: '#DDC9B5',
          400: '#C9AB8E',
          500: '#A8876A',
        },
        pink: {
          50: '#FDF6F4',
          100: '#FAE9E6',
          200: '#F5D3CD',
          300: '#EDB4AB',
          400: '#E08B7E',
          500: '#C66A5C',
        },
        bone: '#FAF7F2',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
