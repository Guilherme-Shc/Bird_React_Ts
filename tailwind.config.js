/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,tsx,js}"
    ],
    theme: {
      extend: {
        dropShadow: {
          'tiktokStyle': '3px 2px #44307d',
        },
      } 
    },
    plugins: [],
  }