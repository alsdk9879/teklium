<template lang="pug">
section.dark(style="padding-top: 12rem")
    .inner
        h1(style="font-size: 3.5rem; margin-bottom:0") Teklium
        p.green Pioneering new environmentally sustainable technologies #[br] to revolutionize the way we live, work, and play.
    
    br
    br

section.white 
    br
    br
    br

    .inner 
        .wrap
            .image
                img(src="@/assets/img/researcher.jpg")
            .content(style="display:inline-block")
                h1.blue Who We Are
                strong.sky Pioneering the Future #[span.wordset of Semiconductor Technologies]
                p.ellipsis We are a seasoned collective of scientists with extensive expertise in aerospace, mechanical engineering, energy, artificial intelligence, and semiconductor technology. Notably, the team includes individuals with significant contributions to cutting-edge projects, like those related to the F-35, the United States' most advanced jet fighter.
                button.lineButton(@click="router.push('/about')" style="color:#000") View more
        br
    br

section.dark 
    br
    br

    .inner
        h1(style="text-align:center") We are serve 

        .cardWrap.serve
            .card 
                .show Artificial Intelligence
                .hidden Artificial Intelligence: Data centers and AI-centric businesses can benefit from our state-of-the-art AI processors and memory solutions, which support AI's increasing computational demands.
            .card 
                .show Aerospace and Defense
                .hidden Aerospace and Defense: Our aerospace and defense experience include providing rugged high-performance technologies for military applications.
            .card 
                .show Consumer Electronics
                .hidden Consumer Electronics: We bring next-generation computing power to consumer electronics such as smartphones and gaming consoles.
            .card 
                .show Automotive
                .hidden Automotive: The auto industry is revolutionizing thanks to our advanced in-car system-processing power and autonomous driving capabilities.
    
    br
    br
    br

section.white
    br
    br
    br

    .inner(style="text-align:center")
        h1.blue Pioneering the Future #[br]of Semiconductor Technologies
        strong.sky Revolutionizing Performance and #[span.wordset Efficiency with Carbon-Based Innovations]

        br
        br
        br
        br

        .cardWrap.vision 
            .card 
                .num.blue 1
                h2 Advanced Carbon Semiconductor Technologies
                strong Unlocking Superior Performance with Carbon-Based Chips
                p Our cutting-edge carbon semiconductors represent a leap forward from traditional silicon chips, offering unparalleled performance, power efficiency, and heat dissipation. Developed in collaboration with leading partners like Nantero and Visual Link, our technology incorporates multi-layered 3D semiconductor structures and Carbon Nanotubes (CNT). These advancements not only extend the lifespan of chips to up to 100 years but also ensure their reliable operation even in extreme conditions.

            .card 
                .num.blue 2
                h2 Innovative Solutions for a Digital World
                strong Revolutionizing Data and Connectivity with Advanced Technologies
                p We are at the forefront of transforming digital infrastructure with several groundbreaking solutions. Our Reusable Chip technology promotes sustainability by allowing chips to be reused, while the Memory-Mapped CPU enhances data processing speed and efficiency. Quantum Communications provide a new level of security, and Content Aware Memory improves memory management. Additionally, our vision for a Super Internet, featuring Quantum Spooling and Atomic Routing, aims to redefine global internet infrastructure with superior security and faster speeds.

            .card 
                .num.blue 3
                h2 Strategic Business Innovations
                strong Redefining Technology Access and Sustainability with New Models
                p Our innovative business strategies are designed to drive both technological advancement and sustainable development. AI City, supported by strategic partnerships, aims to boost broadband accessibility and improve data center efficiency, contributing to sustainable economic growth. Meanwhile, our Chip Subscription model offers a modern solution to keep consumers up-to-date with the latest technology while reducing electronic waste through a subscription-based access model.

    br
    br

section.grad
    br
    br
    br
    br
    br

    .inner(style="text-align:center")
        h1(style="color:#fff") Teklium – Leading the Way in Innovation. #[br]Connecting Technology and the Future.
        button.lineButton(@click="router.push('/about')") View more
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
.serve .card {
    position: relative;
    width: 23%;
    min-width: 250px;
    height: 12rem;
    // line-height: 12rem;
    color: #fff;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .3s;
    overflow: hidden;
    isolation: isolate;
    user-select: none;

    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        transition: all 0.3s;
        z-index: -1;
    }
    &:hover {
        background-size: 110%;

        &::after {
            background-color: rgba(0,0,0,0.8);
        }
        .show {
            display: none;
        }
        .hidden {
            bottom: 1rem;
        }
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

    .show {
        line-height: 12rem;
    }
    .hidden {
        position: absolute;
        left: 0;
        bottom: -100%;
        transition: all .3s;
        line-height: 1.2;
    }
}
.vision .card {
    width: 32%;
    min-width: 320px;
    padding: 1rem;
    box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .05);

    .num {
        position: absolute;
        top: -2.8rem;
        left: 0.5rem;
        font-size: 4rem;
        font-weight: bold;
        opacity: 0.2;
    }
    strong {
        color: #5c6479;
    }
    p {
        font-size: 0.9rem;
        color: #999;
        overflow: hidden;
        // text-overflow: ellipsis;
        // display: -webkit-box;
        // -webkit-line-clamp: 10; 
        // -webkit-box-orient: vertical;
    }
}
</style>