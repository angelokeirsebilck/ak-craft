module.exports = {
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    colors: {
      bg:{
        'default': '#2F3137'
      },
      white:{
        'default': '#FFF'
      },
      primary:{
        'default': '#49F2CA'
      }
    },
    extend: {
      maxWidth:{
        'container' : '1440px'
      }
    },
  },
  plugins: [],
}
