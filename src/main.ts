import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// // main.js router global
// router.beforeEach((to, from, next) => {
//     // Código antes do router entrar
//     console.log('beforeEach')
//     console.log(to)
//     console.log(from)
//     next()
// })

// router.afterEach((to, from) => {
//     // Código após do router entrar
//     console.log('afterEach')
//     console.log(to)
//     console.log(from)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
