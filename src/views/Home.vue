<template lang="pug">
section.top-area(style="padding: 16rem 1rem")
    .inner
        h1(data-aos="zoom-in" data-aos-duration="1000") Teklium
        p(data-aos="fade-up" data-aos-duration="1200") Pioneering new environmentally sustainable technologies #[br] to revolutionize the way we live, work, and play.

section.dark(style="padding: 16rem 1rem;")
    .inner
        //- h1(style="color:#fff") Who We Are
        .tit(style="display:flex; align-items:center;")
            img(src="/assets/img/teklium.png" style="width: 50px; margin-right: 1rem;")
            h1(style="font-weight:300;") Teklium
        br
        strong.yellow(style="font-size:1.1rem;") Pioneering the Future #[span.wordset of Semiconductor Technologies]
        p.ellipsis We are a seasoned collective of scientists with extensive expertise in aerospace, mechanical engineering, energy, artificial intelligence, and semiconductor technology. Notably, the team includes individuals with significant contributions to cutting-edge projects, like those related to the F-35, the United States' most advanced jet fighter.
        br
        br
        button.lineButton(@click="router.push('/about')") View more

section.serve(style="padding:5rem 0 6rem")
    .inner
        h1(style="text-align:center") We are serve

        .cont-wrap
            .wrap
                .image
                    img(src="/assets/img/ai.jpg" style="height: 200px")
                .content 
                    h2 Artificial Intelligence
                    p Data centers and AI-centric businesses can benefit from our state-of-the-art AI processors and memory solutions, which support AI's increasing computational demands.

            .wrap
                .image
                        img(src="/assets/img/space.jpg" style="height: 200px")
                .content
                    h2 Aerospace and Defense
                    p Our aerospace and defense experience include providing rugged high-performance technologies for military applications.

            .wrap
                .image 
                    img(src="/assets/img/electronic.jpg" style="height: 200px")
                .content
                    h2 Consumer Electronics
                    p We bring next-generation computing power to consumer electronics such as smartphones and gaming consoles.

            .wrap
                .image 
                    img(src="/assets/img/automotive.jpg" style="height: 200px")
                .content
                    h2 Automotive
                    p The auto industry is revolutionizing thanks to our advanced in-car system-processing power and autonomous driving capabilities.

    .inner(style="text-align:center")
        h1.blue Pioneering the Future #[br]of Semiconductor Technologies
        //- strong Revolutionizing Performance and #[span.wordset Efficiency with Carbon-Based Innovations]

        .cardWrap.vision 
            .card(data-aos="fade-up")
                .num.blue 1
                h2 Advanced Carbon Semiconductor Technologies
                strong Unlocking Superior Performance with Carbon-Based Chips
                p Our cutting-edge carbon semiconductors represent a leap forward from traditional silicon chips, offering unparalleled performance, power efficiency, and heat dissipation. Developed in collaboration with leading partners like Nantero and Visual Link, our technology incorporates multi-layered 3D semiconductor structures and Carbon Nanotubes (CNT). These advancements not only extend the lifespan of chips to up to 100 years but also ensure their reliable operation even in extreme conditions.

            .card(data-aos="fade-up")
                .num.blue 2
                h2 Innovative Solutions for a Digital World
                strong Revolutionizing Data and Connectivity with Advanced Technologies
                p We are at the forefront of transforming digital infrastructure with several groundbreaking solutions. Our Reusable Chip technology promotes sustainability by allowing chips to be reused, while the Memory-Mapped CPU enhances data processing speed and efficiency. Quantum Communications provide a new level of security, and Content Aware Memory improves memory management. Additionally, our vision for a Super Internet, featuring Quantum Spooling and Atomic Routing, aims to redefine global internet infrastructure with superior security and faster speeds.

            .card(data-aos="fade-up")
                .num.blue 3
                h2 Strategic Business Innovations
                strong Redefining Technology Access and Sustainability with New Models
                p Our innovative business strategies are designed to drive both technological advancement and sustainable development. AI City, supported by strategic partnerships, aims to boost broadband accessibility and improve data center efficiency, contributing to sustainable economic growth. Meanwhile, our Chip Subscription model offers a modern solution to keep consumers up-to-date with the latest technology while reducing electronic waste through a subscription-based access model.

section.dark
    .inner(data-aos="fade-up" data-aos-duration="1000" style="text-align:center")
        h1 Teklium – Leading the Way in Innovation. #[br]Connecting Technology and the Future.
        button.lineButton(@click="router.push('/tech')") View more
    br
    br

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
.top-area {
    padding-top: 15rem;
    text-align: center;

    h1 {
        font-size: 4rem;
        margin: 0;
        background-color: #aba89c;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
    }
}
.serve {
    .wrap {
        display: block;
        flex: 1;
        min-width: 270px;

        > div {
            min-width: initial;
            width: 100%;
        }
    }
}
.cont-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 4rem;
}
.vision .card {
    padding: 1rem;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .1);
    text-align: left;
    margin-top: 5rem;
    border-radius: 1rem;

    &:last-of-type {
        margin-bottom: 3rem;
    }

    .num {
        position: absolute;
        top: -2.8rem;
        left: 0.5rem;
        font-size: 4rem;
        font-weight: bold;
        opacity: 0.2;
    }
    strong {
        color: #ff5151;
        display: block;
    }
    p {
        font-size: 0.9rem;
        color: #000;
        overflow: hidden;
    }
}

@media (max-width: 1199px) {
     .top-area {
        .inner {
            &:before {
                width: 250px;
                height: 250px;
            }
        }
    }
}
@media (max-width: 768px) {
    .top-area {
        padding-top: 12rem;

        .inner {
            &:before {
                content: none;
            }
        }
    }
    .wrap .content {
        text-align: center;
    }
}
</style>