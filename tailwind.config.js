/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F2',
        rose: {
          50: '#FBF1F1',
          100: '#F8E5E5',
          200: '#F4D9DD',
          300: '#EBC0C8',
          400: '#D88B9A',
          500: '#C4737F',
          600: '#A55A66',
        },
        mauve: {
          100: '#EDE4DC',
          200: '#D6C5B8',
          500: '#8B6B73',
          700: '#6B4A52',
          900: '#4A2F36',
        },
        peach: {
          100: '#F0E4D8',
          200: '#E8C4A0',
          400: '#D9A578',
        },
        lavender: {
          100: '#E8E0EC',
          200: '#D4C5DE',
          400: '#C5B3D1',
        },
        sage: {
          100: '#DCE8E0',
          200: '#C5D9CC',
          400: '#B8D1C0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
