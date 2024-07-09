/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'codigo-certo-black': '#000000',
        'codigo-certo-red': '#e53939',
        'codigo-certo-white': '#ffffff',
        'codigo-certo-dark-bg': '#121212',
        'codigo-certo-dark-text': '#e0e0e0',
        'codigo-certo-light-bg': '#f5f5f5',
        'codigo-certo-light-text': '#333333',
      },
    },
  },
  plugins: [],
};
