import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/** primeVue */
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

/** UnoCSS */
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
})
