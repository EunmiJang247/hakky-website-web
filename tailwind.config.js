/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-bodies/**/*.{js,ts,jsx,tsx}',
    './modal-bodies/**/*.{js,ts,jsx,tsx}',
  ],
  content: [],
  theme: {
    screens: {
      lg: { min: '1420px' },
      md: { min: '0', max: '1420px' },
      sm: { min: '0', max: '940px' },
    },
    extend: {
      backgroundImage: {
        gradient: "url('../images/bg/gradient-background.png')",
        banner: "url('../images/bg/banner-background.png')",
      },
      colors: {
        'gradient-start': '#5E65AA',
        'gradient-middle': '#901B8C',
        'gradient-end': '#E20B30',
        'main-blue': '#0D2ACD',
        'light-gray': '#727272',
        'dark-gray': '#323232',
        'darker-gray': '#242424',
        'gray-9292': '#929292',
      },
      height: {
        calendarHeight: 'calc(100% - 40px)',
      }
    },
  },
  plugins: [],
};
