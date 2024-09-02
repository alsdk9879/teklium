import '@/assets/main.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Skapi } from "skapi-js"

const skapi = new Skapi("ap21NCPd16skyXP6bxgX", "e52fdefc-84f2-434c-9b86-4741d1ee115f", { autoLogin: true }, {"hostDomain": "skapi.app","target_cdn": "d1wrj5ymxrt2ir"});

const app = createApp(App)

app.use(router)

app.mount('#app')

export { skapi }