<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title The Carbon Alliance
        p.yellow Eco-Friendly carbon chips
    img.bgi(src="/assets/img/carbon_bg.png")

section.white 
    .inner
        .wrap(style="align-items:unset")
            .image
                img(src="/assets/img/eco_friendly.jpg")
            .content
                h1 Eco-Friendly, High-Performance Carbon Semiconductor Tech
                p We are the leading global pioneer in semiconductors, creating advanced technologies to meet the evolving requirements of AI and computing. #[strong.highlight By means of eco-friendly carbon chips we are revolutionizing the industry by providing unrivaled performance, energy efficiency, and environmental friendliness.]
                p A strategic alliance has been formed between Teklium, Nantero, and Visual Link to advance CNT semiconductor technology. Specifically, we are leading the way on carbon semiconductors, a breakthrough technology utilizing multi-layered 3D semiconductor technology and Carbon Nanotubes (CNT), which overcome Moore's Law by lowering power consumption, including in standby mode, and operating at extreme temperatures with a lifespan of up to 100 years.

        br
        br
        br
        br

        .wrap(style="flex-wrap: wrap-reverse;align-items: unset;")
            .content 
                h1 Superior Heat Dissipation #[span.wordset and Cost Efficiency]
                p The highest transistor density is now available on the market due to this advancement that extends Moore's Law beyond physical limitations. #[strong.highlight In contrast to silicon semiconductors, carbon semiconductors excel at heat dissipation and power efficiency, resulting in sub-nanometer performance and 90% lower production costs.] Using a 20 nm process, Nantero's carbon memory chips offer ten times faster reading speeds and lower power consumption.
                p This close partnership allows us to focus on comprehensive solutions, ecosystem development, and global market adoption.
            .image
                img(src="/assets/img/memory_chip.jpg")

section.white 
    .inner
        .wrap
            .image
                img(src="/assets/img/fcc.svg" style="filter: brightness(0);")
            .content
                h1 Mark Bayliss
                strong President Visual link, Member of FCC technical advisory council.
                p(style="color:#999") The FCC’s Technology Advisory Council (TAC) provides technical advice to the FCC. The TAC is comprised of a diverse array of leading experts that will help the FCC identify important areas of innovation and develop informed technology policies supporting America’s competitiveness and job creation in the global economy.

        br
        br
        br
        br

        .wrap 
            .image
                img(src="/assets/img/nantero.svg" style="filter: brightness(0);")
            .content
                h1 Nantero 
                strong Developing a new generation of super-fast, energy-efficient and secure non-volatile memory with the highest endurance.
                p(style="color:#999") Nantero has developed the industry’s only non-volatile memory made with carbon nanotubes, enabling a new generation of super-fast, energy-efficient and secure memory with the highest endurance.  These NRAM™ storage solutions will enable Nantero to drive new innovations in consumer electronics, computing, automotive, space exploration, industrial, enterprise networks, and more

section.dark
    .inner(data-aos="fade-up" data-aos-duration="1000" style="text-align:center; max-width: 1000px;")
        //- h1(style="color:#fff") Stay updated with the latest developments #[span.wordset at Teklium]
        h1(style="color:#fff") Curious about how cutting-edge technologies and innovative solutions are shaping our future?
        button.lineButton(@click="router.push('/news')") View more
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
.wrap {
    .image {
        max-width: 400px !important;
    }
}
section {
    .title {
        color: #fff;
    }
    h1 {
        color: #444;
    }
}
.highlight {
    background-color: #fff2be;
    color: #666;
    padding: 0 0.25rem;
}
</style>