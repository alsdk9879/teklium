<template lang="pug">
section#intro.blue(style="padding-top: 12rem")
    .inner
        h1(style="margin-bottom:0") We are
        p Pioneering new environmentally sustainable technologies #[br] to revolutionize the way we live, work, and play.
    
    br
    br

section#we.white 
    br
    br

    .inner sssssssssss
    
    br
    br

section#serve.blue 
    br
    br

    .inner
        h2(style="text-align:center") We are serve 

        .cardWrap
            router-link.card(to="/serve") Artificial Intelligence
            router-link.card(to="/serve") Aerospace and Defense
            router-link.card(to="/serve") Consumer Electronics
            router-link.card(to="/serve") Automotive
    
    br
    br
    br

section.white
    br
    br

    .inner sssssssssssssss

    br
    br

section.white
    br
    br

    .inner sssssssssssssss

    br
    br
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
section {
    padding: 0 1rem;

    &.blue {
        color: #fff;
    }
    &.white {
        background-color: #fff;
        color: #000;
    }
    h1 {
        font-size: 3.5rem;
    }
    p {
        color: #77f7b4;
    }
    .inner {
        max-width: 1200px;
        margin: 0 auto;
    }
}
.cardWrap {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .card {
        position: relative;
        width: 23%;
        min-width: 250px;
        height: 12rem;
        line-height: 12rem;
        text-align: center;
        flex-grow: 1;
        background-color: #dddd;
        text-decoration: none;
        font-weight: 500;
        color: #fff;
        background-size: cover;
        isolation: isolate;

        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.5);
            z-index: -1;
        }
        &:first-child {
            background-image: url(@/assets/img/AI.webp);
        }
        &:nth-child(2) {
            background-image: url(@/assets/img/A&D.webp);
        }
        &:nth-child(3) {
            background-image: url(@/assets/img/CE.webp);
        }
        &:last-child {
            background-image: url(@/assets/img/AM.webp);
        }
    }
}
</style>