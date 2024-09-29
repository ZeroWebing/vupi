import { createApp } from 'vue'
import './style.css'


import App from './App.vue'

/** primeVue UI */
import PrimeVue from 'primevue/config'
import MyPreset from './style/primevue/myPreset'
import 'primeicons/primeicons.css'

/** UnoCSS */
import "uno.css"

const app = createApp(App)
app
  .use(PrimeVue, { theme: { preset: MyPreset } })
  .mount('#app')
