import '@/assets/main.less';
import '@/assets/addon.less';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Skapi } from 'skapi-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { fetching } from './assets/js/news';

const skapi = new Skapi('ap22NMqyE0aASl1ogi5D','bf305ace-03b5-4f9d-b88f-291458748ca3');

let crawl = async(obj) => {
    let res = await fetch(obj.url);
    let html = await res.text();

    let parser = new DOMParser();
    let doc = parser.parseFromString(html, 'text/html');
    let imgTags = doc.querySelectorAll('img');
    let imageLinks = Array.from(imgTags).map(img => img.src);
    let divTags = doc.querySelectorAll('div');
    let divContent = Array.from(divTags).map(div => div.textContent.trim()).filter(text => text.length > 0);
    let preTags = doc.querySelectorAll('pre');
    let preContent = Array.from(preTags).map(pre => pre.textContent.trim()).filter(text => text.length > 0);

    if(imageLinks.length) {
        obj.img = imageLinks[0];
    }
    if(divContent.length) {
        obj.cont = divContent[0];
    } else {
        obj.cont = preContent[0];
    }
    
    return obj;
}

// Get news & insight
let news = {};

skapi.getNewsletters().then(async(data) => {
    console.log({data})
    // fetching.value = true;
    sessionStorage.setItem('endOfList', JSON.stringify(data.endOfList));

    for(let k of data.list) {
        news[k.message_id] = k;
    }

    let wait = [];
    for(let k in news) {
        wait.push(crawl(news[k]));
    }

    await Promise.all(wait);

    let n = JSON.stringify(news, null, 2);
    // console.log(n)
    console.log('i set rel', {n})
    sessionStorage.setItem('releases', n);
    // fetching.value = false;
})


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
