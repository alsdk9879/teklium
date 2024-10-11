import '@/assets/main.less';
import '@/assets/addon.less';
import { releases, getNewsletters, endOfList, fetching } from '@/assets/js/news';
import { ref, onMounted } from 'vue';
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

// Newsletter
let fetchedData = await skapi.getNewsletters();

console.log(fetchedData);

endOfList.value = fetchedData.endOfList;

let crawl = async (obj) => {
  let res = await fetch(obj.url);
  let html = await res.text();

  let parser = new DOMParser();
  let doc = parser.parseFromString(html, 'text/html');
  let imgTags = doc.querySelectorAll('img');
  let imageLinks = Array.from(imgTags).map((img) => img.src);
  let divTags = doc.querySelectorAll('div');
  let divContent = Array.from(divTags)
    .map((div) => div.textContent.trim())
    .filter((text) => text.length > 0);
  let preTags = doc.querySelectorAll('pre');
  let preContent = Array.from(preTags)
    .map((pre) => pre.textContent.trim())
    .filter((text) => text.length > 0);

  if (imageLinks.length) {
    obj.img = imageLinks[0];
  }
  if (divContent.length) {
    obj.cont = divContent[0];
  } else {
    obj.cont = preContent[0];
  }
};

await Promise.all(
  fetchedData.list.map(async (item) => {
    await crawl(item);
    console.log(crawl(item));
  })
);

sessionStorage.setItem('newsletters', JSON.stringify(fetchedData.list));

const storedData = sessionStorage.getItem('newsletters');

if (storedData) {
  releases.value = JSON.parse(storedData);
}

export { skapi };
