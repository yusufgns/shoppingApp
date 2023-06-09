import './style.css'

import { createApp, watch } from 'vue'

import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import router from './router/index'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
