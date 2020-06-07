module.exports = {
  purge: {
    enabled : process.env.NODE_ENV === 'production',
    content : [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.vue',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      fontSize : {
        '13' : '13px',
        '15' : '15px',
        '60' : '60px',
        '36' : '36px',
        '0.9' : '.9rem'
      },
      spacing : {
        '165' : '165px',
        '190' : '190px',
        '200' : '200px',
        '100' : '100px',
        '175' : '175px',
        '65' : '21rem'
      },

      height : {
        'img-height' : '400px',
        'img-350' : '350px'
      },

      transitionDelay: {
        '0': '0ms',
      },

      width : {
        'img-width' : '300px',
        'cont-width' : '1170px',
      }, 

      boxShadow : {
        'img-shadow' : '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);',
        'contact-shadow' : '0 9px 25px 0 rgba(132,128,177,0.28);',
        'header-shadow' : '0 1px 3px rgba(50, 50, 50, 0.4);'
      },

      inset: {
        '120' : '120px',
        '200' :  '200px',
        '20' : '20px',
        '10' : '10px',
        '40' : '40px',
        '52-per' : '52%',
        '25-per' : '25%',
        'b-100' : '-100px'
      },

      borderColor : {
        'input' : '#0057ff'
      },

      maxHeight : {
          '40' : '40px'
      },

      maxWidth : {
        '190' : '190px'
      },

      flex : {
        '2' : '2'
      },

      backgroundColor: {
        'freeman-secondary' : '#FFE2AF',
        'freeman-dark' : '#212121',
        'theme-bg' : '#fff6e7',
        'footer' : '#f7f7f7'
      },

      textColor : {
        'freeman-dark' : '#212121',
        'freeman-primary' : '#757575',
        'footer' : '#5a5a5a',
        'footer-hover' : '#888888'
      },

      fontFamily: {
        'heading' : [
          'Montserrat',
          'sans-serif'
        ],
        sans: [
          'Lato',
        ]
      }
    },
  },
  variants: {},
  plugins: [],
}
