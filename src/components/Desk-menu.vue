<template lang="pug">
nav#desktop-menu
    ul
        li 
            router-link(to="/about") About Us
        li
            router-link(to="/serve") Who We Serve
        li 
            router-link(to="/news") News & Insights
        li 
            router-link(to="/tech") Technologies
    button(@click="router.push('/contact')") Contact Us
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
#desktop-menu {
    ul {
        display: inline-block;
        li {
            display: inline-block;
            list-style: none;
            margin-right: 1.2rem;

            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
    button {
        display: inline-block;
        background-color: unset;
        border: 2px solid #77F7B4;
        border-radius: 1rem;
        font-size: 0.9rem;
        color: #fff;
        padding: 0.4rem 0.9rem;
        cursor: pointer;

        &:hover {
            background-color: #77F7B4;
            color: #061741;
        }
    }
}
</style>