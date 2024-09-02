<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1(style="font-size: 3.5rem; margin-bottom:0") A Carbon Alliance
        p.green eco-friendly carbon chips
    img.bgi(src="@/assets/img/c.png")

    br
    br

section.white 
    br
    br
    br

    .inner
        .wrap
            .image(style="max-width:500px")
                img(src="@/assets/img/carbon.webp")
            .content
                p We are the leading global pioneer in semiconductors, creating advanced technologies to meet the evolving requirements of AI and computing. #[strong.sky By means of eco-friendly carbon chips we are revolutionizing the industry by providing unrivaled performance, energy efficiency, and environmental friendliness.]
                p A strategic alliance has been formed between Teklium, Nantero, and Visual Link to advance CNT semiconductor technology. Specifically, we are leading the way on carbon semiconductors, a breakthrough technology utilizing multi-layered 3D semiconductor technology and Carbon Nanotubes (CNT), which overcome Moore's Law by lowering power consumption, including in standby mode, and operating at extreme temperatures with a lifespan of up to 100 years.

        br
        br
        br

        .wrap(style="flex-wrap: wrap-reverse")
            .content 
                p The highest transistor density is now available on the market due to this advancement that extends Moore's Law beyond physical limitations. #[strong.sky In contrast to silicon semiconductors, carbon semiconductors excel at heat dissipation and power efficiency, resulting in sub-nanometer performance and 90% lower production costs.] Using a 20 nm process, Nantero's carbon memory chips offer ten times faster reading speeds and lower power consumption.
                p This close partnership allows us to focus on comprehensive solutions, ecosystem development, and global market adoption.
            .image(style="max-width:400px")
                img(src="@/assets/img/carbon2.webp")
    br
    br
    br

//- section.grad
    br
    br
    br
    br
    br

    .inner(style="text-align:center")
        h1(style="color:#fff") Stay updated with the latest developments #[span.wordset at Teklium]
        button.lineButton(@click="router.push('/news')") View more
    br
    br
    br
    br
    br
    br
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">

</style>