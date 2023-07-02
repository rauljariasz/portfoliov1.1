/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Orbitron',
        secondary: 'Rajdhani',
        tertiary: 'Aldrich'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px'
      },
      colors: {
        primary: '#111111',
        secondary: '#005555',
        tertiary: '#222222',
        textcolor: '#ffffff',
        fondo: '#000000'
      }
    }
  },
  plugins: []
}
