<template lang="pug">
section.dark.img(style="padding-top: 12rem")
    .inner
        h1.title News & Insights
        p.yellow(style="max-width: 700px") Stay updated with the latest developments at Teklium as well as in-depth insights into our technological advancements and industry impact.
        img.bgi(src="/assets/img/news_bg.png" style="filter: brightness(1.3);")

section.white    
    .inner 
        h1(style="text-align:center") News

        template(v-if="fetching")
            Loading
        div(v-else-if="!Object.keys(releases).length" style="text-align:center; color:#999; padding:9rem 0 6rem")
            img(src="/assets/img/error.svg" style="width:3rem; opacity:0.7")
            p No notice has been uploaded
        .cardWrap(v-else)
            //- a.card(v-for="r in releases" :href="r.url")
            router-link.card(v-for="r in releases" :to="'/news/' + r.message_id")
                .image(v-if="r.img")
                    img(:src="r.img")
                    //- img(v-else src="/assets/img/teklium.png" style="width:40px; height:40px; opacity:0.5;")
                .content 
                    .date(style="color:#999") {{ formatTimestamp(r.timestamp) }}
                    h2 {{ r.subject }}
                    p(:class="{'long' : !r.img}") {{ r.cont }}
                .button Read More >


//- section.white
    br
    br
    br

    .inner
        h1(style="text-align:center") White Papers

        .cardWrap 
            router-link.card(v-for="p in papers" :to="'/news/' + p.tit.replaceAll(' ', '-').toLowerCase()")
                .image 
                    img(:src="'/assets/img/' + p.img")
                .content 
                    .date.sky {{ p.date }}
                    h2 {{ p.tit }}
                    p {{ p.cont }}
                .button Read More >

    br
    br
    br
    br

br
br
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { releases, fetching, getNewsletters, endOfList } from '@/assets/js/news'
import Loading from '@/components/Loading.vue'

const router = useRouter();
const route = useRoute();

if (!endOfList.value) {
    getNewsletters();
}

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
.content {
    h2 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        min-height: 64px;
        max-height: 64px;
    }
    // p {
    //     min-height: 56px;
    //     max-height: 84px;
    // }
}
.cardWrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.card {
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    width: 32%;
    // min-width: 320px;
    padding: 1rem;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .05);
    transform: translateY(0px);
    transition: all 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 1rem;
    width: 100%;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .1);

        .button {
            color: #ff5151;
        }
    }
    .image {
        width: 100%;
        height: 300px;
        text-align: center;
        line-height: 320px;
        border: #ddd 1px solid;
        // background-color: #999;
        // background: linear-gradient(150deg, rgba(6,23,65,1) 0%, rgba(9,51,121,1) 33%, rgba(119,247,180,1) 100%);

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

        &.long {
            -webkit-line-clamp: 15; 
        }
    }
    .button {
        transition: all .3s;
    }
}

@media (max-width: 991px) {
    .cardWrap {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 693px) {
    .content {
        h2 {
            min-height: auto;
            max-height: initial;
        }
        // p {
        //     min-height: auto;
        //     max-height: initial;
        // }
    }
    .cardWrap {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>