<template lang="pug">
//- br
//- br
//- br

.inner
    .image
        img(src="/assets/img/carbon.jpg")

    br
    br
    br

    strong.red Today's Challenge

    p Industrialization, economics, science, and education are increasingly reliant on artificial intelligence (AI) and semiconductor technology. However, the computational capabilities of AI are advancing at a pace that far exceeds Moore's Law, doubling every three months. AI systems also consume significant amounts of electricity, computing power, and storage resources.
    p Current silicon-based AI chips struggle to keep pace with the rapid evolution of AI algorithms, falling short in terms of performance density, power efficiency, and storage capacity. While semiconductor development aims to enhance transistor density, speed, and efficiency, the physical limitations of shrinking components pose challenges. Integrating multiple silicon chips within a single package is hindered by issues such as heat dissipation and high failure rates.
    p Moreover, silicon semiconductor manufacturing carries a substantial environmental footprint, consuming up to 100 megawatt-hours of power per hour and millions of gallons of ultrapure water daily. This process contributes significantly to global greenhouse gas emissions, alongside air and water pollution, and the depletion of natural resources. Addressing these impacts requires adopting sustainable practices and investing in renewable energy sources.
    p Typically, silicon chips have a lifespan of 10-15 years, necessitating frequent replacements. Laptops are typically upgraded every three to five years, while smartphones have an average upgrade cycle of 3.6 years, contributing to electronic waste accumulation. In the US alone, approximately 151 million mobile phones are discarded annually, often ending up in landfills due to low recycling rates, concerns about data security, and limited access to recycling facilities.
    
    br
    br
    br

    strong.red A World of Opportunity
    
    p The development of Reusable Chips marks a significant advancement in mitigating the environmental impact associated with silicon-based semiconductors. These chips are designed to be repurposed multiple times, reducing production volumes and increasing their overall value. By extracting chips from outdated devices, reprogramming them with updated functionalities, and integrating them into new systems, users have the option to upgrade their devices rather than replacing them entirely.
    p Carbon nanotube-based chips offer exceptional performance with sub-nanometer PPAC characteristics and a lifespan of up to 100 years, making them ideally suited for reusable applications. Leveraging CSCC (Carbon Semiconductors on Carbon Chips) technology and a programmable architecture, Reusable Chips enable users to select and program netlists from various chip design firms. Featuring programmable logic cells interconnected through a switching network, these chips simplify programming processes and support repeated reprogramming efforts.
    p Teklium's CSCC technology enhances performance significantly, operating ten times faster and consuming only 10% of the power compared to high-end GPUs. This advancement in CNT (Carbon Nanotube) technology has the potential to surpass current semiconductor benchmarks, offering a compelling solution to address challenges related to AI processing power and reliability.
    
    br
    br
    br

    strong.red STATS & CITATIONS

    ul
        li R&D investment of the 3 nm process reaches $4-5 billion. 
        li It costs $15-$20 billion to build a 3-nanometer process production line with a monthly production capacity of 40,000 wafers.
        li The average cost of designing a 28 nm chip is $40 million US dollars, a 7 nm chip is $217 million, a 5 nm chip is $416 million, and 3 nm chip will cost up to $590 million according to International Business Strategies.

br
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
.image {
    margin: 0 auto;
    // max-width: 600px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        max-height: 33vh;
        @media (max-width: 768px) {
            max-height: 70vw;
        }
        object-fit: cover;
        // object-position: center;
        object-position: bottom;
    }
}

ul {
    li {
        margin-bottom: 1rem;
        line-height: 1.4;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>