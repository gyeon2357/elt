import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
const $axios = axios.create({
  baseURL: import.meta.env.VITE_APP_API || 'https://api.samworks.io',
  timeout: 2000
})
// Import the method.
import { useLoading } from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// import './assets/main.css'
import VueLazyLoad from 'vue3-lazyload'
const app = createApp(App)
app.provide('$axios', $axios)
app.use(router)
app.use(VueLazyLoad, {
  loading: '',
  error: '',
  lifecycle: {
    loading: (el) => {
      // console.log('loading', el)
    },
    error: (el) => {
      // console.log('error', el)
    },
    loaded: (el) => {
      // console.log('loaded', el)
    }
  }
})

app.mount('#app')
