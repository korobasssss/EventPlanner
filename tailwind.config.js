/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./src/**/*.tsx", 
    "./node_modules/antd/dist/**/*.css"],
  theme: {
    extend: {
      colors: {
        app_white: '#FFFFFF',
        app_dark_white: '#FAFAFA',
        app_light_gray: '#EFEFEF',
        app_gray: '#B3B3BC',
        app_light_purple: '#EFDAFC',
        app_purple: '#6C27A3',
        app_green: '#23AE00',
        app_red: '#F51B1B',
        app_black: '#0D0C0C',
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        m: '24px',
        l: '64px'
      },
      fontSize: {
        xxs: '14px',
        xs: '18px',
        s: '20px',
        m: '24px',
        l: '26px',
        xl: '36px',
        xxl: '64px',
      },
      fontFamily: {
        redcollar: ['Red Collar', 'sans-serif'],
        ttcommons: ['TT Commons', 'sans-serif'],
        ttcommons_semibold: ['TT Commons Semibold', 'sans-serif'],
      },
      padding : {
        xs: '0 16px',
        s: '21px 30px'
      },
      width: {
        px53: '53px',
        px124: '124px'
      },
      height: {
        px31: '31px',
        px48: '48px',
        60: '60px'
      },
      spacing: {
        px8: '8px',
        px19: '19px',
        px35: '35px',
        px60: '60px'
      }
    },
  },
  plugins: [],
}

