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
      },
      secondary:{
        'default': '#D14BE7'
      },
      transparent: 'transparent'
    },
    extend: {
      fontSize:{
        'copy': ['18px', {
          lineHeight: '30px',
        }],
      },
      maxWidth:{
        'container' : '1440px'
      },
      backgroundImage: {
        'underline': "url('/img/svg/underline.svg')",
      }
    },
  },
  plugins: [],
}
