/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            pink: {
              500: '#EC4899',
              600: '#DB2777',
            },
            yellow: {
              500: '#FBBF24',
              600: '#F59E0B',
            },
            gradientStart: '#3b82f6', // Blue
        gradientEnd: '#9333ea', // Purple
          },
      },
      darkMode: 'class', // Enable dark mode support
    },
    plugins: [],
  }