import { skapi } from '@/main';
import { ref } from 'vue';

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

  const urlurlIndex = html.indexOf('$urlurl:');
  if (urlurlIndex !== -1) {
    // '$urlurl:' 다음에 오는 <a> 태그를 찾기
    const anchorTag = doc.querySelector('a');

    // <a> 태그가 존재하는 경우 href 속성 가져오기
    if (anchorTag) {
      const url = anchorTag.href;

      obj.src = url; // 객체에 담기
    }
  }

  return obj;
};

let releases = ref(null);
let fetching = ref(true);

let getNews = () => {
  let cachedReleases = sessionStorage.getItem('releases');

  if (cachedReleases) {
    cachedReleases = JSON.parse(cachedReleases);
    releases.value = cachedReleases;
    fetching.value = false;
    console.log('session');
  } else {
    skapi.getNewsletters().then(async (r) => {
      releases.value = await Promise.all(r.list.map(crawl));
      sessionStorage.setItem('releases', JSON.stringify(releases.value));
      fetching.value = false;
      console.log('server');
    });
  }
};

export { fetching, releases, getNews };
