import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url"
import vue from '@vitejs/plugin-vue'
import vuePugPlugin from 'vue-pug-plugin'
import * as path from 'path'

import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'

import dns from 'dns'
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          plugins: [
            vuePugPlugin
          ]
        },
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },        
      }        
    }),
    Components({
      resolvers: [BootstrapVueNextResolver()]
    })    
  ],
  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
    ]
  },
  resolve: {
    alias: [ { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },]
  },  
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${path.resolve(__dirname, 'src/css/global.styl')}"`
      }
    }
  },


})
