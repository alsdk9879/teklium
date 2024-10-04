<template lang="pug">
nav#desktop-menu
    ul
        li 
            router-link(to="/tech") Technologies
        li
            router-link(to="/carbon") The Carbon Alliance
        li 
            router-link(to="/news") News & Insights
        li 
            router-link(to="/about") About Us
    button.fullButton(@click="router.push('/contact')") Contact Us
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
#desktop-menu {
    margin-left: auto;
    
    ul {
        display: inline-block;
        li {
            display: inline-block;
            list-style: none;
            margin-right: 1.2rem;

            a {
                text-decoration: none;
                color: #000;
                mix-blend-mode: difference;
            }
        }
    }

    &.dark-mode {
        ul li a{
            color: #fff;
        }
    }
}

@media (max-width: 920px) {
    #desktop-menu {
        display: none;
    }
}
@media (min-width: 921px) {
    #desktop-menu {
        display: block;
    }
}
</style>