import './assets/styles/main.sass' //подключили свои стили sass
import ElementPlus from 'element-plus' //подключили element-plus
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus) // включили в работу element plus

app.mount('#app')
