/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-grad': 'linear-gradient(180deg, #38B1ED 0%, #245EA5 100%)',
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      addUtilities({
        '.bold-40' : {
          'font-weight': 'bold',
          'font-size': '40px',
        },
        '.bold-24' : {
          'font-weight': 'bold',
          'font-size': '24px',
        },
        '.bold-12' : {
          'font-weight': 'bold',
          'font-size': '12px',
        },
        '.bold-16' : {
          'font-weight': 'bold',
          'font-size': '16px',
        },
        '.reg-16' : {
          'font-weight': 'normal',
          'font-size': '16px',
          'line-height': '150%',
        },
        '.reg-14' : {
          'font-weight': 'normal',
          'font-size': '14px',
        },
        '.reg-12' : {
          'font-weight': 'normal',
          'font-size': '12px',
        },
        '.reg-8' : {
          'font-weight': 'normal',
          'font-size': '8',
        },
      });
    },
  ],
}