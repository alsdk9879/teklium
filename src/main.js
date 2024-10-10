import '@/assets/main.less';
import '@/assets/addon.less';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Skapi } from 'skapi-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// const skapi = new Skapi('ap22Qln8C2quyAnss5FH', '36e590fe-fc8d-45f3-8c12-5739e76d4e7f');
const skapi = new Skapi('ap22NMqyE0aASl1ogi5D', 'bf305ace-03b5-4f9d-b88f-291458748ca3');

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
