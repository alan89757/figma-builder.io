/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#f7f7f7',
          400: '#828282',
          600: '#666666',
          900: '#000000',
        },
      },
      boxShadow: {
        'tab-bar': '0 -0.5px 0 0 rgba(0, 0, 0, 0.10)',
      },
      backdropBlur: {
        'tab-bar': '10px',
      },
    },
  },
  plugins: [],
}
