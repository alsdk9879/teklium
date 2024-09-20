import { ref } from 'vue';
import { skapi } from '@/main'

export let releases = ref({});
export let endOfList = ref(false);
export let fetching = ref(false);
export let getNewsletters = async() => {
    fetching.value = true;

    let fetchedData = await skapi.getNewsletters();
    endOfList.value = fetchedData.endOfList;


    for(let k of fetchedData.list) {
        releases.value[k.message_id] = k;
    }

    let crawl = async(obj) => {
        // let decodedUrl = decodeURI(url);
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
    }

    for(let k in releases.value) {
        crawl(releases.value[k]);
    }

    fetching.value = false;
}