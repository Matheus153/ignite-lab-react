/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*tsx'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32

      },

      colors: {
        black: '#000000',
        white: '#ffffff',

        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#c4c4c4',
          100: '#e1e1e6',
        },

        cyan: {
          500: '#81d8f7',
          300: '#9be1fb',
        }

      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
