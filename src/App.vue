<template lang="pug">
header#header(:class="{'hide':scroll, 'dark-mode':darkMode}")
    router-link.tit(to="/" style="display:flex; align-items:center;")
        img(v-if="darkMode" src="/assets/img/teklium_dark.png" style="width:10rem")
        img(v-else src="/assets/img/teklium_bright.png" style="width:10rem")
    DeskMenu(:class="{'dark-mode':darkMode}")
    MobMenu(:class="{'dark-mode':darkMode}")

//- main(:class="{'animation': (route.name == 'about' || route.name == 'contact')}")
main
    router-view
footer
    div
        router-link(to="/" style="flex-grow:3")
            img(src="/assets/img/teklium_dark.png" style="width:10rem; margin: 0 0 12px -12px")
            //- h2(style="margin: 0;") TEKLIUM INC.

        br

        a.policy(href="http://teklium.skapi.com/policy.html" target="_blank" style="margin:0; font-size:0.8rem;") Privacy Policy |
        a.policy(href="http://teklium.skapi.com/terms.html" target="_blank" style="margin:0; font-size:0.8rem; margin-left: 0.25rem;") Terms & Conditions
        p(style="margin:0; font-size:0.8rem;") © #[span {{new Date().getFullYear()}}] teklium. All rights reserved.

    .routeWrap
        .route 
            .title.yellow Location 
            p Teklium Inc., 2880 Zanker Road, San Jose, CA 95134
        .route
            .title.yellow Contact Us
            router-link(to="/contact" style="font-size: 0.9rem;text-decoration:underline") Get in Touch >

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

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
        darkMode.value = true;

        // if (nv.name == 'home') {
        //     darkMode.value = false;
        // } else {
        //     darkMode.value = true;
        // }
    }
}, {immediate: true})
</script>

<style scoped lang="less"> 
main {
    // background-color: #eeebdc;
    // background-color: #f1efea;
    // background-color: white;
    background-color: #eee9dc;
}
// @keyframes bganimation {
//     0% {
//         background-position: -100% -100%, 200% 200%, -100% 200%, 200% -100%;
//     }
//     50% {
//         background-position: 150% 100%, -200% 100%, 100% 0%, 0% 100%;
//     }
//     100% {
//         background-position: -100% -100%, 200% 200%, -100% 200%, 200% -100%;
//     }
// }
// .animation {
//     background: radial-gradient(
//         ellipse at center,
//         rgba(0, 0, 255, 0.3) 0%,
//         rgba(0, 0, 0, 0) 70%
//         ),
//         radial-gradient(
//             ellipse at center,
//             rgba(255, 0, 0, 0.3) 0%,
//             rgba(29, 21, 21, 0) 70%
//         ),
//         radial-gradient(
//             ellipse at center,
//             rgba(0, 255, 0, 0.3) 0%,
//             rgba(0, 0, 0, 0) 70%
//         ),
//         #efebdb;
//     background-repeat: no-repeat, no-repeat, no-repeat;
//     // background-size: 900px 900px, 900px 900px, 900px 900px;
//     background-size: 900px 1500px, 1500px 900px, 1100px 1800px;
//     background-attachment: fixed;
//     animation: bganimation 30s infinite;
// }


header, footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(24px);
}
header {
    position: fixed;
    // position: sticky;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    transition: all 0.3s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

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
    background-color: #222;
    color: #fff;
    padding: 3rem 1rem 2rem 1rem;
    gap: 3rem;
    cursor: default;

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
        }
        p {
            font-size: 0.9rem;
        }
    }
}
a {
    text-decoration: none;

    &.policy {
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>