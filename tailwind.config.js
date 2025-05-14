/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{css,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores personalizada para la marca
        'ochoo': '#8B4513',    // Color principal, madera ochoo
        'tierra': '#654321',   // Color secundario, tierra
        'verde-pampa': '#2F4F2F', // Color acento, vegetación
        'beni': '#D2691E'      // Color regional, Beni
      }
    },
  },
  plugins: [],
} 