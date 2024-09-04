<template lang="pug">
section.dark(style="padding-top: 12rem")
    .inner
        h1.title News & Insight
        p.green Stay updated with the latest developments at Teklium
    
    br
    br

section.white
    br
    br
    br
    
    .inner 
        h1(style="text-align:center") Press Releases

        .loading(v-if="fetching") ...
        .cardWrap(v-else)
            //- a.card(v-for="r in releases" :href="r.url")
            router-link.card(v-for="r in releases" :to="'/news/' + r.message_id")
                .image
                    template(v-if="r.img")
                        img(:src="r.img")
                .content 
                    .date.sky {{ formatTimestamp(r.timestamp) }}
                    h2 {{ r.subject }}
                    p {{ r.cont }}
                .button Read More >

    br
    br

//- section.white
    br
    br
    br

    .inner
        h1(style="text-align:center") White Papers

        .cardWrap 
            router-link.card(v-for="p in papers" :to="'/news/' + p.tit.replaceAll(' ', '-').toLowerCase()")
                .image 
                    img(:src="'/src/assets/img/' + p.img")
                .content 
                    .date.sky {{ p.date }}
                    h2 {{ p.tit }}
                    p {{ p.cont }}
                .button Read More >

    br
    br
    br
    br
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { skapi } from '@/main'
import { releases } from '@/assets/js/news'

const router = useRouter();
const route = useRoute();

let fetching = ref(false);

let getNewsletters = async() => {
    fetching.value = true;

    let fetchedData = await skapi.getNewsletters();

    releases.value = fetchedData.list;
    console.log(releases.value)

    let crawl = async(obj) => {
        // let decodedUrl = decodeURI(url);
        let res = await fetch(obj.url);
        let html = await res.text();
        // console.log(html)

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

    for(let i=0; i < releases.value.length; i++) {
        crawl(releases.value[i])
    }


    // for(let i=0; i < fetchedData.list.length; i++) {
    //     crawl(fetchedData.list[i])
    //     releases.value[fetchedData.list[i].message_id] = fetchedData.list[i];
    // }

    fetching.value = false;
}
getNewsletters();

let formatTimestamp = (timestamp) => {
    let date = new Date(timestamp);
    let year   = date.getFullYear().toString();
    let month  = ("0" + (date.getMonth() + 1)).slice(-2);
    let day    = ("0" + date.getDate()).slice(-2);

    let formattedDateTime = `${year}/${month}/${day}`;

    return formattedDateTime;
}

// let papers = [
//     {
//         img: "communication.webp",
//         tit: "Emulated Quantum Communication",
//         cont: "Discover the benefits of our new chip technology and the environmental advantages it brings, alongside our strategic partnership with Mark Bayliss and Rick Ridgley.",
//         date: "2024.01.01"
//     }
// ]
</script>

<style scoped lang="less">
.loading {
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    opacity: 0.5;
    padding: 1rem 0 5rem 0;
}
.card {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 32%;
    min-width: 320px;
    padding: 1rem;
    box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .05);
    transform: translateY(0px);
    transition: all 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: #000;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .1);
    }
    .image {
        width: 100%;
        height: 300px;
        // background-color: #999;
        background: linear-gradient(150deg, rgba(6,23,65,1) 0%, rgba(9,51,121,1) 33%, rgba(119,247,180,1) 100%);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    .content {
        flex-grow: 1;
    }
    p {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
}
</style>