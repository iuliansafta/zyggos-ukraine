const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
    colors: {
      ucyellow: '#FFE200',
      ucblue: '#035AB9',
      grey: '#707070',
      popupsbg: colors.white,
      neutral: colors.slate,
      primary: colors.indigo,
      primarytxt: colors.white, 
      warning: colors.yellow,
      warningtxt: colors.black,
      black: colors.black,
      error: colors.red,
      errortxt: colors.white,
      white: colors.white,
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      varela: ['Varela Round', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
}