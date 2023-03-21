export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Upcycling App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Upcycling App' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap', rel: 'stylesheet' }
      ]
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '~/assets/css/main.css'
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '~/plugins/axios.js',
      '~/plugins/vue-infinite-loading.js',
      '~/plugins/vue-toastification.js'
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxtjs/eslint-module'
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth-next',
      'vue-scrollto/nuxt'
    ],
  
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      baseURL: process.env.API_BASE_URL || 'http://localhost:3000'
    },
  
    // Auth module configuration: https://auth.nuxtjs.org/
    auth: {
      strategies: {
        local: {
          token: {
            property: 'token',
            type: 'Bearer',
            maxAge: 1800
          },
          user: {
            property: false,
            autoFetch: true
          },
          endpoints: {
            login: { url: '/auth/login', method: 'post' },
            logout: { url: '/auth/logout', method: 'post' },
            user: { url: '/auth/user', method: 'get' }
          }
        }
      },
      redirect: {
        login: '/login',
        logout: '/',
        callback: false,
        home: '/'
      }
    },
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
  