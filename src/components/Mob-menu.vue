<template lang="pug">
.hamber(:class="{'show' : showMenu}" @click="showMenu = !showMenu")
nav#mobile-menu(:class="{'show' : showMenu}")
    ul
        li
            router-link(to="/about") About Us
        li
            router-link(to="/serve") Who We Serve
        li 
            router-link(to="/news") News & Insights
        li 
            router-link(to="/tech") Technologies
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
const route = useRoute();

let showMenu = ref(false);

watch(showMenu, (v) => {
    if (v) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'unset';
    }
})
watch(route, (o, n) => {
    if (n) {
        showMenu.value = false;
    }
})
</script>

<style scoped lang="less">
#mobile-menu {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    padding-top: 5rem;
    text-align: center;
    background-color: rgba(255,255,255,0.5);
    backdrop-filter: blur(10px);
    transition: all 0.3s;

    &.show {
       left: 0;
    }

    ul {
        padding: 0;
        margin: 0;

        li {
            list-style: none;
            margin-bottom: 1rem;

            &:hover {
                a {
                    font-weight: bold;
                }
            }

            a {
                text-decoration: none;
                font-size: 1.2rem;
                color: #000;
            }
        }
    }
}

.hamber {
    position: fixed;
    right: 1rem;
    width: 30px;
    height: 30px;
    cursor: pointer;
    z-index: 99;

    &::before, &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        transition: all 0.3s;
    }
    &::before {
        top: 9px;
        transform-origin: 13px 21px;
    }
    &::after {
        top: 19px;
        transform-origin: 14px -20px;
    }
    &.show {
        &::before, &::after {
            background-color: #000;
        }
        &::before {
            transform: rotate(-45deg);
        }
        &::after {
            transform: rotate(45deg);
        }
    }
}

@media (max-width: 920px) {
    .hamber, #mobile-menu {
        display: block;
    }
}
@media (min-width: 921px) {
    .hamber, #mobile-menu {
        display: none;
    }
}
</style>