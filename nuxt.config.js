
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@500;600;700;900&display=swap' }
    ],
    
    script : [

      { src : 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js', defer: true },

    ]
  },

  
 
  loading: { color: '#fff' },
 
  css: [
  ],
  
  plugins: [

    { src: '~/plugins/jquery.client.js'},

  ],
  
  buildModules: [
    
    '@nuxtjs/tailwindcss',
  ],
  
  modules: [
    'nuxt-purgecss',
  ],

   purgeCSS: {
      mode: 'postcss'
   },


  build: {  
      postcss : {
          plugins : {
              tailwindcss : './tailwind.config.js',
              autoprefixer : {}
          }
      },
          extractCSS: true,
          extend (config, ctx) {
        }
    }
  }
