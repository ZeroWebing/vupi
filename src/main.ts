// Vue core
import { createApp } from 'vue'
import App from './App.vue'

// Router and store
import router from "@/router"
import store from '@/store'

// Styles
import '@/style/index.scss'

// PrimeVue UI
import PrimeVue from 'primevue/config'
import MyPreset from '@/style/primevue/myPreset'
import 'primeicons/primeicons.css'

// UnoCSS
import "uno.css"

// vueuse/motion
import { MotionPlugin } from '@vueuse/motion'

// Create and mount app
const app = createApp(App)
app
  .use(router)
  .use(store)
  .use(PrimeVue, { theme: { preset: MyPreset } })
  .use(MotionPlugin)
  .mount('#app')
