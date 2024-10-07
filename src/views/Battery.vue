<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title Hydrogen Battery
        p.yellow Closed-Loop System
    img.bgi(src="/assets/img/about_bg.png")

//- section.white 
//-     .inner
//-         h1 Revolutionizing Closed-Loop Hydrogen Energy Systems
//-         p Teklium and Visual Link have #[strong.highlight developed a groundbreaking closed-loop hydrogen energy system] that efficiently generates electricity using water, hydrogen, and oxygen, #[strong.highlight marking a significant advancement in fuel cell technology.] While fuel cells offer advantages like over 80% energy efficiency and environmental friendliness, challenges such as high hydrogen production costs and expensive catalysts remain.
//-         p(style="margin-top: 2rem;") This innovative system addresses these issues by generating and distributing hydrogen internally, eliminating costly external processes and enhancing usability by producing hydrogen from water via standard household power outlets.
//-         p(style="margin-top: 2rem;") Looking ahead, Teklium is developing magnetic-driven fuel cell technology, poised to revolutionize catalyst cost reduction. This innovation represents the next generation of closed-loop hydrogen energy systems and #[strong.highlight holds immense economic potential, estimated in the hundreds of billions to trillions of US dollars, making it a highly sought-after product in the market.]

section.white.contextSection
    .inner
        .imgCont.wrap(style="align-items:unset")
            .image
                img(src="/assets/img/hydrogen.jpg")
            .content
                h1 Revolutionizing Closed-Loop Hydrogen Energy Systems
                p Teklium and Visual Link have developed a groundbreaking closed-loop hydrogen energy system that efficiently generates electricity using water, hydrogen, and oxygen, marking a significant advancement in fuel cell technology. While fuel cells offer advantages like over 80% energy efficiency and environmental friendliness, challenges such as high hydrogen production costs and expensive catalysts remain.
                p(style="margin-top: 2rem;") This innovative system addresses these issues by generating and distributing hydrogen internally, eliminating costly external processes and enhancing usability by producing hydrogen from water via standard household power outlets.

        br
        br

        .imgCont.wrap(style="flex-wrap: wrap-reverse;align-items: unset;")
            .content 
                h1 Technology with Economic Potential
                p Looking ahead, Teklium is developing magnetic-driven fuel cell technology, poised to revolutionize catalyst cost reduction.
                p(style="margin-top: 2rem;") This innovation represents the next generation of closed-loop hydrogen energy systems and holds immense economic potential, estimated in the hundreds of billions to trillions of US dollars, making it a highly sought-after product in the market.
            .image
                img(src="/assets/img/potential.jpg")
        br

.imgCont
    section.white(data-aos="fade-up")
        .inner
            .sectionTitle Technology
        
            br
            
            ul.innovate
                li Hydrogen Based Rechargeable Battery
                    p Water splits into hydrogen and oxygen during charging, then recombines during discharge.
                li AI-Based Power Management
                    p An AI program optimizes battery efficiency by precisely controlling air and fluid flows.

    section.white(data-aos="fade-up")
        .inner
            .sectionTitle Applications
            br
            
            ul.innovate
                li Home Hydrogen Refilling System for Hydrogen Cars
                    p This device uses electrolysis to generate hydrogen quickly, refilling vehicles in 20 minutes.
                li Rechargeable Hydrogen Battery for EV Cars
                    p This battery stores hydrogen and oxygen, providing a durable, eco-friendly alternative to lithium batteries.
                li Hydrogen Energy Pack for Hydrogen Vehicles
                    p This energy pack enhances hydrogen vehicles' range with smart flow control.

    section.white(data-aos="fade-up")
        .inner
            .sectionTitle Potential Market
            br
            
            ul.innovate
                li Hydrogen Cars
                    p Hydrogen fuel cell vehicle market to grow from $1.5B in 2022 to $57.9B by 2032.
                li EV Car Batteries
                    p Global EV car battery market projected to rise from $26B in 2021 to $475B by 2032.
                li Heavy Equipment and Vehicles
                    p Heavy construction equipment market expected to grow from $176.2B in 2020 to $273.5B by 2030.
                li Drones
                    p Global drone market forecasted to expand from $22.4B in 2022 to $166.7B by 2031.
            br
            br
            br
            br
</template>

<script setup>

</script>

<style scoped lang="less">
.imgCont {
    box-shadow: 0 36px 32px -22px rgba(0, 0, 0, 0.1);
    // background: linear-gradient(180deg, white, transparent);
    background-color: #f3f0e8;
    .content {
        padding: 0 1.5rem 1.5rem;
        
        // h1 {
        //     margin-top: .5em;
        // }
    }
    .image {
        width: 480px;
        max-height: 70vw;
    }
}

.contextSection{
    padding: 1rem;
}

.card {
    // width: 45%;
    min-width: 320px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 36px 32px -22px rgba(0,0,0,0.1);
    border-radius: 16px;
    padding: 1rem;

    h2 {
        margin: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0;
        color: #999;
        font-weight: 300;
    }

    hr {
        background: rgba(0, 0, 0, 0.15);
        height: 1px;
        border: 0;
        margin: 1rem 0;
    }

    ul {
        padding-left: 1rem;

        li {
            margin-bottom: 1.2rem;
            font-weight: bold;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
.innovate {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-left: 2rem;

    li {
        width: 45%;
        min-width: 300px;
        margin-bottom: 1rem;
        font-weight: bold;
        flex-grow: 1;

        p {
            margin: 0;
            margin-top: 0.5rem;
            color: #444;
            font-weight: normal;
        }
    }
}
// .linkWrap {
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: space-between;
//     gap: 1rem;

//     .link {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         padding: 0 1.2rem;
//         height: 70px;
//         border-radius: 24px;
//         box-shadow: inset 0 0px 10px 0 rgba(0, 0, 0, .07);
//         transition: all .3s;
//         overflow:hidden;
//         flex: 1;
//     }
//     a {
//         &:hover {
//             box-shadow: inset 0 3px 12px 0px rgba(0, 0, 0, .17);
//         }
//     }
//     img {
//         height: 2.2rem;
//     }
// }

// @media (max-width: 991px) {
//     .linkWrap {
//         .link {
//             width: calc(50% - 1rem);
//             flex: auto;
//         }
//     }
// }
@media (max-width: 600px) {
    // .linkWrap {
    //     .link {
    //         width: 100%;
    //     }
    // }
    .contextSection{
        padding: 0;
    }
}
</style>