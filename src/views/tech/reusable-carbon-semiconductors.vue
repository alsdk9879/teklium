<template lang="pug">
br
br
br

.inner
    .image
        img(src="/assets/img/carbon.webp")

    br
    br
    br

    strong.sky Today's Challenge

    p Industrialization, economics, science, and education heavily rely on artificial intelligence (AI) and semiconductor technology. Yet, the computing power of artificial intelligence doubles every three months, exceeding Moore's Law by far. AI also consumes a substantial amount of electricity, enormous computing power, and vast storage. 
    p Today's silicon-based AI chips struggle to keep up with rapidly evolving AI algorithms. These chips fall short of performance density, power consumption, and storage capacity. With increasing transistor numbers, semiconductor functionality and computing power increase. Modern chips contain over 50 billion transistors, but as components shrink, they face physical limits. Semiconductor development focuses on increasing transistor density, speed, and power efficiency. Stacking multiple silicon chips in a single package is difficult and costly due to heat dissipation issues and high failure rates caused by silicon's limitations.
    p There is also a significant environmental impact associated with silicon semiconductor manufacturing, consuming up to 100 megawatt-hours of power per hour and two to four million gallons of ultrapure water daily. Semiconductor manufacturing contributes to 31% of global greenhouse gas emissions, not to mention the tremendous amount of energy, water, and chemicals used in the production process, which results in air and water pollution and the depletion of natural resources. Mitigating these impacts requires sustainable practices and renewable energy investments.
    p Typically, silicon chips last between 10-15 years, which requires frequent replacements. Laptops have an average upgrade cycle of three to five years, while smartphones have an average upgrade cycle of 3.6 years, resulting in substantial electronic waste. An estimated 151 million mobile phones are discarded annually in the US, contributing to heavy metals in landfills because of low recycling rates, concerns about data security, and limited access to recycling facilities.
    
    br
    br
    br

    strong.sky A World of Opportunity
    
    p The Reusable Chip represents a pivotal development in mitigating environmental impacts associated with silicon-based semiconductors. By repurposing this chip multiple times, it reduces production volumes and enhances chip value. Removing chips from obsolete devices, reprogramming them with updated functionality, and integrating them into new computers enables users to upgrade their devices rather than buy new ones.
    p Chips made of carbon nanotubes have shown sub-nanometer PPAC performance and have a lifespan of 100 years, making them the ideal platform for reusable chips. With CSCC technology and a programmable architecture, Reusable Chips allow users to select and program netlists from various chip design firms. Featuring programmable logic cells interconnected by a switching network, these chips simplify programming and facilitate repeated programming.
    p As a result of Teklium's CSCC technology, which operates ten times faster and consumes only 10% of the power of a high-end GPU, the CNT technology has the potential to surpass current semiconductor benchmarks, creating a sought-after solution for AI processing power and reliability issues.
    
    br
    br
    br

    strong.sky INCLUDE STATS & CITATIONS

    ul
        li R&D Investment
            p The research and development investment for the 3 nm process reaches $4-5 billion.
        li Production Line Costs
            p Building a 3-nanometer process production line with a monthly production capacity of 40,000 wafers costs between $15 and $20 billion.
        li Chip Design Costs
            p According to International Business Strategies, the average cost of designing a 28 nm chip is $40 million, a 7 nm chip costs $217 million, a 5 nm chip costs $416 million, and a 3 nm chip design will cost up to $590 million.

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
    max-width: 600px;
    height: 400px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>