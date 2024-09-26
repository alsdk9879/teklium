<template lang="pug">
header#header(:class="{'hide':scroll, 'dark-mode':darkMode}")
    router-link(to="/" style="font-size:1.5em; font-weight:bold") TEKLIUM INC.
    DeskMenu(:class="{'dark-mode':darkMode}")
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
let darkMode = ref(false);
let previousScrollY = window.scrollY;

let checkHeaderColor = () => {
    const header = document.getElementById('header');
    const sections = document.getElementsByTagName('section');

    console.log('ddd')

    Array.from(sections).forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            section.classList.contains('dark') ? darkMode.value = true : darkMode.value = false;
        }
    });
}

window.addEventListener('scroll', (e) => {
    const currentScrollY = window.scrollY;

    currentScrollY > previousScrollY ? scroll.value = true : scroll.value = false;
    previousScrollY = currentScrollY;

    checkHeaderColor();
})

watch(route, (ov, nv) => {
    if (nv) {
        window.scrollTo(0, 0);
        checkHeaderColor();

        if (nv.name == 'home') {
            darkMode.value = false;
        } else {
            darkMode.value = true;
        }
    }
}, {immediate: true})
</script>

<style scoped lang="less"> 
header, footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
}
header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    transition: all 0.3s;

    a {
        color: #000;
        mix-blend-mode: difference;
    }
    // &.hide {
    //     top: -100%;
    // }
    &.dark-mode {
        a {
            color: #fff !important;
        }
        ul {
            li {
                a {
                    color: #fff o !important;
                }
            }
        }
    }
}
main {
    // background-image: linear-gradient(to bottom right, #4b85a0, #061741)
}
footer {
    background-color: #000;
    color: #fff;
    padding: 3rem 1rem 2rem 1rem;
    gap: 3rem;

    a {
        color: #fff;
    }
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
}
</style>