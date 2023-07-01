/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#006666',
        tertiary: '#333333',
        textcolor: '#ffffff',
        fondo: '#000000'
      }
    }
  },
  plugins: []
}
