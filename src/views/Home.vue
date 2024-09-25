<template lang="pug">
section.top-area
    .inner
        h1(style="font-size:3rem;margin-bottom:0;color:#fff;") Teklium
        p.green Pioneering new environmentally sustainable technologies #[br] to revolutionize the way we live, work, and play.
        //- img.bgi(src="/assets/img/teklium.png" style="right:-0.7rem; bottom:-3rem; width:50%; max-width:500px")

    br
    br

section.white 
    br
    br
    br
    br
    br

    .inner 
        .wrap
            .image
                img(src="/assets/img/tech.jpg")
            .content(style="display:inline-block")
                h1.blue Who We Are
                strong.sky Pioneering the Future #[span.wordset of Semiconductor Technologies]
                p.ellipsis We are a seasoned collective of scientists with extensive expertise in aerospace, mechanical engineering, energy, artificial intelligence, and semiconductor technology. Notably, the team includes individuals with significant contributions to cutting-edge projects, like those related to the F-35, the United States' most advanced jet fighter.
                button.lineButton(@click="router.push('/about')" style="color:#000") View more
    br
    br
    br
    br
    br

section.dark.serve
    br
    br
    br

    .inner
        h1(style="text-align:center") We are serve 

        br
        br
        br

        .wrap(data-aos="fade-up" data-aos-duration="1000")
            .image(style="max-width:300px")
                img(src="/assets/img/ai.jpg" style="height: 200px")
            .content 
                h2 Artificial Intelligence
                p Data centers and AI-centric businesses can benefit from our state-of-the-art AI processors and memory solutions, which support AI's increasing computational demands.

        br
        br
        br
        br
        br
        br
        br

        .wrap(data-aos="fade-up" data-aos-duration="1000")
            .image(style="max-width:300px")
                    img(src="/assets/img/space.jpg" style="height: 200px")
            .content
                h2 Aerospace and Defense
                p Our aerospace and defense experience include providing rugged high-performance technologies for military applications.
        
        br
        br
        br
        br
        br
        br
        br

        .wrap(data-aos="fade-up" data-aos-duration="1000")
            .image(style="max-width:300px") 
                img(src="/assets/img/electronic.jpg" style="height: 200px")
            .content
                h2 Consumer Electronics
                p We bring next-generation computing power to consumer electronics such as smartphones and gaming consoles.

        br
        br
        br
        br
        br
        br
        br

        .wrap(data-aos="fade-up" data-aos-duration="1000")
            .image(style="max-width:300px") 
                img(src="/assets/img/automotive.jpg" style="height: 200px")
            .content
                h2 Automotive
                p The auto industry is revolutionizing thanks to our advanced in-car system-processing power and autonomous driving capabilities.

    
    br
    br
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
            .card(data-aos="fade-up" data-aos-duration="1000")
                .num.blue 1
                h2 Advanced Carbon Semiconductor Technologies
                strong Unlocking Superior Performance with Carbon-Based Chips
                p Our cutting-edge carbon semiconductors represent a leap forward from traditional silicon chips, offering unparalleled performance, power efficiency, and heat dissipation. Developed in collaboration with leading partners like Nantero and Visual Link, our technology incorporates multi-layered 3D semiconductor structures and Carbon Nanotubes (CNT). These advancements not only extend the lifespan of chips to up to 100 years but also ensure their reliable operation even in extreme conditions.

            .card(data-aos="fade-up" data-aos-duration="700" data-aos-delay="300")
                .num.blue 2
                h2 Innovative Solutions for a Digital World
                strong Revolutionizing Data and Connectivity with Advanced Technologies
                p We are at the forefront of transforming digital infrastructure with several groundbreaking solutions. Our Reusable Chip technology promotes sustainability by allowing chips to be reused, while the Memory-Mapped CPU enhances data processing speed and efficiency. Quantum Communications provide a new level of security, and Content Aware Memory improves memory management. Additionally, our vision for a Super Internet, featuring Quantum Spooling and Atomic Routing, aims to redefine global internet infrastructure with superior security and faster speeds.

            .card(data-aos="fade-up" data-aos-duration="700" data-aos-delay="600")
                .num.blue 3
                h2 Strategic Business Innovations
                strong Redefining Technology Access and Sustainability with New Models
                p Our innovative business strategies are designed to drive both technological advancement and sustainable development. AI City, supported by strategic partnerships, aims to boost broadband accessibility and improve data center efficiency, contributing to sustainable economic growth. Meanwhile, our Chip Subscription model offers a modern solution to keep consumers up-to-date with the latest technology while reducing electronic waste through a subscription-based access model.

    br
    br

section.grad
    .inner(data-aos="fade-up" data-aos-duration="1000" style="text-align:center")
        h1(style="color:#fff") Teklium – Leading the Way in Innovation. #[br]Connecting Technology and the Future.
        button.lineButton(@click="router.push('/tech')") View more

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
.top-area {
    background-image: linear-gradient(to bottom right, #4b85a0, #061741);
    padding-top: 15rem;
    position: sticky;
    top: 0;
    z-index: -1;

    .inner {
        position: relative;

        &:before {
            content:'';
            display: block;
            width: 300px;
            height: 300px;
            background: url('/assets/img/teklium.svg') center / cover no-repeat;
            position: absolute;
            right: 0;
            bottom: -10%;
            filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.7)) opacity(0.6);
        }
    }
}
.serve {
    .wrap:nth-of-type(even) {
        flex-direction: row-reverse;
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
    h2 {
        min-height: 6rem;
    }
    strong {
        color: #5c6479;
        min-height: 5rem;
        display: block;
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
@media (max-width: 1031px) {
    .vision .card {
        h2 {
            min-height: auto;
        }
        strong {
            min-height: auto;
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
    .cardWrap {
        gap: 5rem;
    }
}
</style>