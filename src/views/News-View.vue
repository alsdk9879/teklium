<template lang="pug">
section.dark(style="padding-top: 12rem")
    .inner
        h1(v-if="currentNews" style="font-size: 3rem; margin-bottom:0; word-break: break-all") {{ currentNews?.subject }}

section.white 
    .inner
        template(v-if="currentNews")
            div(v-html="newsHtml")

            br
            br

            div(style="text-align:center")
                button.fullButton(@click="router.push('/news')") Back
        template(v-else)
            Loading

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
// import { releases, getNewsletters } from '@/assets/js/news'
import { ref, onMounted } from 'vue';
import Loading from '@/components/Loading.vue'

const router = useRouter();
const route = useRoute();

let currentNews = ref(null);
let newsHtml = ref('');

let fetchNews = async () => {
    // await getNewsletters();
    currentNews.value = releases.value[route.params.id];

    if (currentNews.value) {
        let url = currentNews.value.url;
        let res = await fetch(url);
        let html = await res.text();

        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        let images = doc.querySelectorAll('img');

        images.forEach(img => {
            img.parentNode.classList.add('image');
            img.parentNode.style.margin = '0 auto';
            img.parentNode.style.maxWidth = '600px';
            img.parentNode.style.height = '400px';
            img.parentNode.style.overflow = 'hidden';

            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'center';
        });

        newsHtml.value = doc.body.innerHTML;
    }
};

onMounted(() => {
    fetchNews();
})
</script>

<style scoped lang="less">
ul {
    padding-left: 1rem;

    li {
        margin-bottom: 1.2rem;

        &:last-child {
            margin-bottom: 0;
        }
        p {
            color: #999;
            margin: 0;
        }
    }
}
</style>