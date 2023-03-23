import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
const $axios = axios.create({
  baseURL: import.meta.env.VITE_APP_API || 'https://api.samworks.io',
  timeout: 2000
})
// import './assets/main.css'

const app = createApp(App)
app.provide('$axios', $axios)
app.use(router)

app.mount('#app')
