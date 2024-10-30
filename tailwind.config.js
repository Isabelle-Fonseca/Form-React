/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-base': '#5d586e', 
        'bg-form': '#2b2738', 
        'bg-input': '#3b364c', 
        'text-input': '#5d596b', 
        'purple': '#6e54b5', 
        'text-label': '#8c8994', 
        'purple-light': '#7c74b7' 
      },
    },
  },
  plugins: [],
}

