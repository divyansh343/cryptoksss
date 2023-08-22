/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        "yalgaar": {

            
      
          "primary": "#15db78",
          
          "secondary": "#037505",
                   
          "accent": "#c59ae2",
                   
          "neutral": "#171926",
                   
          "base-100": "#fde047",
                   
          "info": "#768ed6",
                   
          "success": "#31c484",
                   
          "warning": "#f4992a",
                   
          "error": "#f77064", 
        },
      }
    ],
  },

  plugins: [require("daisyui")],
}