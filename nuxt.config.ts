import { defineNuxtConfig } from '@nuxt/bridge'
import { TYPE } from 'vue-toastification'
import { initializeStaticFiles } from './src/scripts/initializeStaticFiles'

const isDev = process.env.NODE_ENV !== 'production'
const isLive = process.env.LIVE === 'true'

initializeStaticFiles(process.env.SPA_URL)

export default defineNuxtConfig({
  srcDir: 'src',

  bridge: {
    nitro: true,
  },

  target: 'static',

  ssr: false,

  dev: isDev,

  telemetry: false,

  components: true,

  vue: {
    config: {
      productionTip: isDev,
      devtools: isDev,
      silent: !isDev,
      performance: isDev,
    },
  },

  build: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](node-libs-browser)[\\/]/,
            name: 'vendor',
          },
        },
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        [!isDev ? '@fullhuman/postcss-purgecss' : '']: !isDev
          ? {
              content: [
                './src/components/**/*.{vue,jsx?,tsx?}',
                './src/layouts/**/*.{vue,jsx?,tsx?}',
                './src/pages/**/*.{vue,jsx?,tsx?}',
                './src/composables/**/*.{vue,jsx?,tsx?}',
                './src/App.{vue,jsx?,tsx?}',
                './src/app.{vue,jsx?,tsx?}',
                './src/plugins/**/*.{js,ts}',
                './nuxt.config.{js,ts}',
                './node_modules/vuetify/dist/vuetify.js',
                './node_modules/vue-toastification/dist/index.css',
              ],
              safelist: [
                'body',
                'html',
                'nuxt-progress',
                '__nuxt',
                /^v-.+__.+$/, // vuetify
                /-(leave|enter|appear)(|-(to|from|active))$/,
                /^nuxt-link(|-exact)-active$/,
                /^(?!cursor-move).+-move$/,
                /.*data-v-.*/,
                /:slotted/,
                /:deep/,
                /:global/,
              ],
              extractors: [
                {
                  extractor: (content) =>
                    content.match(/[A-z0-9-:\\/]+/g) || [],
                  extensions: ['html', 'vue', 'js'],
                },
              ],
            }
          : null,
      },
    },
    devtools: false,
    transpile: ['vee-validate/dist/rules'],
    extractCSS: {
      ignoreOrder: true,
    },
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 30 * 1, // one month
    },
  },

  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Homepage | ',
    titleTemplate: '%s ' + process.env.SPA_NAME + ' - Emre Tepe',
    meta: [
      process.env.TEST_WEBSITE === 'true'
        ? {
            hid: 'robots',
            name: 'robots',
            content: 'noindex, nofollow',
          }
        : {
            hid: 'keywords',
            name: 'keywords',
            content: 'emre tepe, blockchain, developer',
          },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Emre Tepe is an ambitious and open-minded Web and Blockchain Developer who seriously cares about discipline. He likes following the pace of new technology.',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: 'rgb(0, 235, 255)',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: `Homepage | ${process.env.SPA_NAME} - Emre Tepe`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Emre Tepe is an ambitious and open-minded Web and Blockchain Developer who seriously cares about discipline. He likes following the pace of new technology.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.SPA_URL,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.SPA_URL}/qr.png`,
      },
      {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: process.env.SPA_NAME,
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: process.env.SPA_NAME,
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: process.env.SPA_NAME,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${process.env.SPA_URL}/twitter-img.png`,
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.SPA_ORIGIN,
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: `${process.env.SPA_URL}/apple-touch-icon.png`,
      },
    ],
  },

  css: ['@/assets/css/main.css'],

  env: {
    testWebsite: process.env.TEST_WEBSITE,
  },

  runtimeConfig: {
    public: {
      spaName: process.env.SPA_NAME,
      spaOrigin: process.env.SPA_ORIGIN,
      githubPersonalAccessToken: process.env.GH_PERSONAL_ACCESS_TOKEN,
      pageclipActionUrl: process.env.PAGECLIP_ACTION_URL,
      googleRecaptchaV2SiteKey: process.env.GOOGLE_RECAPTCHA_V2_SITE_KEY,
      googleRecaptchaV2Size: 'v2-normal',
      googleAnalytics4Id: process.env.GOOGLE_ANALYTICS_4_ID,
      ownerAddress: process.env.OWNER_ADDRESS,
      txConfirmationBlocks: parseInt(process.env.TX_CONFIRMATION_BLOCKS),
      repositoryUrl: process.env.REPOSITORY_URL,
      guestbookContractAddress: process.env.GUESTBOOK_CONTRACT_ADDRESS,
      guestbookContractChainId:
        '0x' + Number(process.env.GUESTBOOK_CONTRACT_CHAIN_ID).toString(16),
      guestbookContractChainName: process.env.GUESTBOOK_CONTRACT_CHAIN_NAME,
      lastModifiedAt: new Date().toUTCString().replace('GMT', 'UTC'),
    },
  },

  router: {
    base: process.env.SPA_PATH,
    options: {
      strict: false,
    },
  },

  app: {
    baseURL: isLive ? process.env.SPA_PATH : '/',
    buildAssetsDir: isLive ? '/_nuxt/' : undefined,
  },

  nitro: {
    baseURL: isLive ? undefined : '/',
  },

  imports: {
    dirs: ['stores'],
  },

  generate: {
    subFolders: false,
  },

  plugins: ['@/plugins/vue-gtag', '@/plugins/vee-validate'],

  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
  ],

  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/recaptcha',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'vue-toastification/nuxt',
  ],

  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },

  googleFonts: {
    families: {
      Roboto: true,
    },
    display: 'swap',
    subsets: 'latin',
    prefetch: false,
    preconnect: false,
    preload: false,
    useStylesheet: false,
    download: true,
    overwriting: true,
    inject: true,
    fontsPath: '@/assets/fonts',
  },

  moment: {
    defaultTimezone: 'UTC',
    timezone: {
      matchZones: ['UTC'],
      startYear: 2021,
      endYear: 2050,
    },
  },

  toast: {
    maxToasts: 3,
    timeout: 5000,
    toastDefaults: {
      [TYPE.SUCCESS]: {
        timeout: 3000,
      },
      [TYPE.INFO]: {
        timeout: 4000,
      },
      [TYPE.WARNING]: {
        timeout: 6000,
      },
      [TYPE.ERROR]: {
        timeout: 7000,
      },
    },
  },

  vuetify: {
    // customVariables: ['@/assets/css/vuetify.scss'], content-> $font-size-root: 50px; @import '~vuetify/src/styles/styles.sass';
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg',
    },
    treeShake: true,
    theme: {
      dark: true,
    },
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
    enabled: true,
    debug: false,
    scriptDefer: true,
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
  },

  recaptcha: {
    siteKey: process.env.GOOGLE_RECAPTCHA_V3_SITE_KEY,
    hideBadge: false,
    language: 'en',
    version: 3,
  },
})
