import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router)

app.mount('#app')
