/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#38B1ED',
        'bold-text': '#000A2D',
        'border': '#D1D1D1',
        'reg-text': '#616161'
      },
      backgroundImage: {
        'main-grad': 'linear-gradient(180deg, #38B1ED 0%, #245EA5 100%)',
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      addUtilities({
        '.bold-40': {
          'font-weight': 'bold',
          'font-size': '40px',
          'line-height': '40px',
        },
        '.bold-24': {
          'font-weight': 'bold',
          'font-size': '24px',
          'line-height': '24px'
        },
        '.bold-16': {
          'font-weight': 'bold',
          'font-size': '16px',
          'line-height': '16px'
        },
        '.bold-14': {
          'font-weight': 'bold',
          'font-size': '14px',
          'line-height': '14px'
        },
        '.reg-16' : {
          'font-weight': 'normal',
          'font-size': '16px',
          'line-height': '150%',
        },
        '.reg-14': {
          'font-weight': 'normal',
          'font-size': '14px',
          'line-height': '150%',
        },
        '.reg-12': {
          'font-weight': 'normal',
          'font-size': '12px',
        },
        '.reg-8': {
          'font-weight': 'normal',
          'font-size': '8px',
        },
        '.btn': {
          'padding': '12px 32px',
          'background': '#38B1ED',
          'border': '2px solid #38B1ED',
          'border-radius': '12px',
          'color': 'white',
          'font-size': '16px',
          'font-weight': 'bold',
          'text-align': 'center',
          'transition': '300ms',
        },
        '.btn:hover': {
          'background': 'white',
          'color': '#38B1ED',
          'cursor': 'pointer',
        }
      },);
    },
  ],
}