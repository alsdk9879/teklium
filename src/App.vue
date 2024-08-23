<template lang="pug">
header(:class="{'hide':scroll}")
    router-link(to="/")
        h2(style="margin: 0;") TEKLIUM INC.
    DeskMenu
    MobMenu
main
    router-view
footer
    router-link(to="/" style="flex-grow:3")
        h2(style="margin: 0;") TEKLIUM INC.
    .routeWrap
        .route
            .title News & Insight
            p Explore news and thought leadership about water and sustainability.
        .route
            .title Contact Us
            p Learn more or get started with a project today.

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

import DeskMenu from '@/components/Desk-menu.vue'
import MobMenu from '@/components/Mob-menu.vue'

const router = useRouter();
const route = useRoute();

let scroll = ref(false);
let previousScrollY = window.scrollY;

window.addEventListener('scroll', (e) => {
    const currentScrollY = window.scrollY;

    currentScrollY > previousScrollY ? scroll.value = true : scroll.value = false;

    previousScrollY = currentScrollY;
})
</script>

<style scoped lang="less"> 
header, footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #061741;
    color: #fff;
}
header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    transition: all 0.3s;

    &.hide {
        top: -100%;
    }
}
main {
    background-image: linear-gradient(to bottom right, #030D26, #061741)
}
footer {
    padding: 3rem 1rem 2rem 1rem;
    gap: 3rem;

    .routeWrap {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .route {
        max-width: 320px;
        flex-grow: 1;

        .title {
            font-weight: bold;
            color: #0078ff;
        }
        p {
            font-size: 0.9rem;
        }
    }
}
a {
    text-decoration: none;
    color: #fff;
}
</style>