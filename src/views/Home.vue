<template lang="pug">
section#intro.blue(style="padding-top: 12rem")
    h1(style="margin-bottom:0") We are
    p Pioneering new environmentally sustainable technologies #[br] to revolutionize the way we live, work, and play.
    br
    br

section#whoweare.white sssssssssss
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
}
</style>