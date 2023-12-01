/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      custom: ['Roboto'],
    },
    extend: {
      backgroundImage: { 'plastic-texture': "url('./src/assets/Plastic-Texture.png')" }
    },
  },
  plugins: [],
}
