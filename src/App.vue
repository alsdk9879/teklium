<template lang="pug">
header(:class="{'hide':scroll}")
    router-link(to="/")
        h2(style="margin: 0;") TEKLIUM INC.
    DeskMenu
    MobMenu
main
    router-view
footer
    div
        router-link(to="/" style="flex-grow:3")
            h2(style="margin: 0;") TEKLIUM INC.

        br

        p(style="margin:0; font-size:0.8rem;") Privacy Policy | Terms & Conditions
        p(style="margin:0; font-size:0.8rem;") © #[span {{new Date().getFullYear()}}] teklium. All rights reserved.

    .routeWrap
        //- .route
            .title News & Insight
            p Explore news and thought leadership about water and sustainability.
        .route 
            .title Location 
            p Teklium Inc., 2880 Zanker Road, San Jose, CA 95134
        .route
            .title Contact Us
            p Should you wish to reach out to us, you can send us an email.
            router-link(to="/contact" style="font-size: 0.9rem") Get in touch >

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

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

watch(route, (nv) => {
    if (nv) {
        window.scrollTo(0, 0);
    }
})
</script>

<style scoped lang="less"> 
header, footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    // background-color: #061741;
    background-color: #000;
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
    // background-image: linear-gradient(to bottom right, #4b85a0, #061741)
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
            // color: #0078ff;
            color: #a5ae66;
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