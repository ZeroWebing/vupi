import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

/** pwa */
import { VitePWA } from 'vite-plugin-pwa'

/** primeVue */
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
/** UnoCSS */
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      manifest: {
        name: 'vupi',
        short_name: 'vupi',
        theme_color: '#FFFFFF',
        icons: [
          {
            src: 'icon.svg',
            sizes: '32x32',
            type: 'image/svg+xml',
            purpose: "any"
          },
          {
            src: 'icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "any"
          },
        ],
        screenshots: [
          {
            src: 'screenshot-desktop_1.webp', // 用于桌面设备
            sizes: '1920x1080',
            type: 'image/webp',
            form_factor: 'wide',
          },
          {
            src: 'screenshot-desktop_2.webp', // 用于桌面设备
            sizes: '1920x1080',
            type: 'image/webp',
            form_factor: 'wide',
          },
          {
            src: 'screenshot-desktop_1.webp', // 用于桌面设备
            sizes: '1920x1080',
            type: 'image/webp',
            form_factor: 'wide',
          },
          {
            src: 'screenshot-mobile.webp',// 用于移动设备
            sizes: '1080x1920',
            type: 'image/webp',
            form_factor: 'narrow',
          },
        ],
      }
    }),
    UnoCSS(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname)
    },
  },
})
