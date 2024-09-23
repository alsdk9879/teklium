import '@/assets/main.less';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Skapi } from 'skapi-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skapi = new Skapi(
  'ap21NMrFIOGHhIoTCmGr',
  '5750ee2c-f7f7-43ff-b6a5-cce599d30101',
  { autoLogin: true },
  { hostDomain: 'skapi.app', target_cdn: 'd1wrj5ymxrt2ir' }
);

const app = createApp(App);

app.use(router);

app.mount('#app');

// AOS 초기화
app.mixin({
  mounted() {
    AOS.init(); // AOS 초기화
  },
});

export { skapi };
