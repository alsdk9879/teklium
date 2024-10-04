<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title The Carbon Alliance
        p.yellow Eco-Friendly Carbon Chips
    img.bgi(src="/assets/img/carbon_bg.png")

section.white 
    .inner
        .wrap(style="align-items:unset")
            .image
                img(src="/assets/img/carbon_chips.jpg")
            .content
                h1 Pioneering Advanced Semiconductor Technologies
                p We are the leading global pioneer in semiconductors, developing advanced technologies to meet the evolving demands of AI and computing. Our eco-friendly carbon chips revolutionize the industry with unmatched performance, energy efficiency, and environmental sustainability.
                p Teklium has formed a strategic alliance with Nantero and Visual Link to advance Carbon Nanotube (CNT) semiconductor technology. Our focus on multi-layered 3D semiconductors and CNTs enables breakthroughs that surpass Moore's Law, reducing power consumption—even in standby mode—and operating at extreme temperatures with a lifespan of up to 100 years.

        br
        br
        br
        br

        .wrap(style="flex-wrap: wrap-reverse;align-items: unset;")
            .content 
                h1 Unmatched Performance and Market Solutions
                p This innovation delivers the highest transistor density available, extending Moore's Law beyond its physical limitations. Unlike silicon semiconductors, carbon semiconductors excel in heat dissipation and power efficiency, offering sub-nanometer performance at 90% lower production costs. Nantero's carbon memory chips, produced using a 20 nm process, provide ten times faster read speeds and lower power consumption.
                p Our partnership enables us to deliver comprehensive solutions, develop ecosystems, and drive global market adoption.
            .image
                img(src="/assets/img/carbon.jpg")

section.white 
    .inner
        .wrap
            .image(style='height: 300px; padding: 1rem; border: 1px solid #ddd; border-radius: .625rem;')
                img(src="/assets/img/visuallink.jpg" style='object-fit: contain;')
            .content
                h1 Mark Bayliss
                strong President Visual link, Member of FCC technical advisory council.
                p(style="color:#999") The FCC’s Technology Advisory Council (TAC) provides technical advice to the FCC. The TAC is comprised of a diverse array of leading experts that will help the FCC identify important areas of innovation and develop informed technology policies supporting America’s competitiveness and job creation in the global economy.

        br
        br
        br
        br

section.dark
    .inner(data-aos="fade-up" data-aos-duration="1000" style="text-align:center; max-width: 1000px;")
        //- h1(style="color:#fff") Stay updated with the latest developments #[span.wordset at Teklium]
        h1(style="color:#fff") Curious about how cutting-edge technologies and innovative solutions are shaping our future?
        button.fullButton(@click="router.push('/news')") View more
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
</style>