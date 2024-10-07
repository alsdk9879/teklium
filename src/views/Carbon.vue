<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title The Carbon Alliance
        p.yellow Eco-Friendly Carbon Chips
    img.bgi(src="/assets/img/carbon_bg.png")

section.white.contextSection
    .inner
        .imgCont.wrap(style="align-items:unset")
            .image
                img(src="/assets/img/carbon_chips.jpg")
            .content
                h1 Pioneering Advanced Semiconductor Technologies
                p We are the leading global pioneer in semiconductors, developing advanced technologies to meet the evolving demands of AI and computing. Our eco-friendly carbon chips revolutionize the industry with unmatched performance, energy efficiency, and environmental sustainability.
                p Teklium has formed a strategic alliance with Nantero and Visual Link to advance Carbon Nanotube (CNT) semiconductor technology. Our focus on multi-layered 3D semiconductors and CNTs enables breakthroughs that surpass Moore's Law, reducing power consumption—even in standby mode—and operating at extreme temperatures with a lifespan of up to 100 years.

        br
        br

        .imgCont.wrap(style="flex-wrap: wrap-reverse;align-items: unset;")
            .content 
                h1 Unmatched Performance and Market Solutions
                p This innovation delivers the highest transistor density available, extending Moore's Law beyond its physical limitations. Unlike silicon semiconductors, carbon semiconductors excel in heat dissipation and power efficiency, offering sub-nanometer performance at 90% lower production costs. Nantero's carbon memory chips, produced using a 20 nm process, provide ten times faster read speeds and lower power consumption.
                p Our partnership enables us to deliver comprehensive solutions, develop ecosystems, and drive global market adoption.
            .image
                img(src="/assets/img/carbon.jpg")
        br

section.white(style='background-color: #f3f0e8;' data-aos="fade-up")
    .inner
        .wrap(style='box-shadow: none;')
            .image(style='width: 30%;height: 300px; padding: 1rem; background-color:white;')
                img(src="/assets/img/visuallink.jpg" style='object-fit: contain;')
            .content(style='padding: 0 0 1rem 1rem;')
                h2 Mark Bayliss
                strong President Visual link, Member of FCC technical advisory council.
                p The FCC’s Technology Advisory Council (TAC) provides technical advice to the FCC. The TAC is comprised of a diverse array of leading experts that will help the FCC identify important areas of innovation and develop informed technology policies supporting America’s competitiveness and job creation in the global economy.

        br
        br
        br
        br
        //- br
        //- br

section.dark(style='height: 70vw; max-height: 30vh;display:flex;align-items:center;justify-content:center;')
    .inner(data-aos="fade-up" data-aos-duration="1000" style="text-align:center; max-width: 1000px;")
        //- h1(style="color:#fff") Stay updated with the latest developments #[span.wordset at Teklium]
        h2(style="margin-top:0;color:#fff") Curious about how cutting-edge technologies and innovative solutions are shaping our future?
        button.fullButton(@click="router.push('/news')") View more
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
.wrap {
    box-shadow: 0 36px 32px -22px rgba(0, 0, 0, 0.1);
    .image {
        // max-width: 400px !important;
        max-height: 70vw;
    }
}
section {
    .title {
        color: #fff;
    }
    h1 {
        // color: #444;
    }
}
.contextSection{
    padding: 1rem;
}
.imgCont {
    // background: linear-gradient(180deg, white, transparent);
    // background-color: white;
    background-color: #f3f0e8;
    .content {
        padding: 0 1.5rem 1.5rem;
        
        // h1 {
        //     margin-top: .5em;
        // }
    }
    .image {
        width: 480px;
    }
}
@media (max-width: 600px) {
    // .linkWrap {
    //     .link {
    //         width: 100%;
    //     }
    // }
    .contextSection{
       padding: 1rem 0 0;
    }
}
</style>