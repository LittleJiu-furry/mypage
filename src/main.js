import { createApp } from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { VueShowdown } from 'vue-showdown'

const app = createApp(App)
app.component('VueShowdown', VueShowdown)
app.use(router)
app.mount('#app')
