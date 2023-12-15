/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'tailwind.config.{js,cjs,mjs,ts}'],
  theme: {
    extend: {
    
      fontFamily: {
        'mine': ['Roboto', 'sans-serif']
        
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


