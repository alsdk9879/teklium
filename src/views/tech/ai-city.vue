<template lang="pug">
//- br
//- br
//- br

.inner
    .image
        img(src="/assets/img/aicity.jpg")

    br
    br

    p Visual Link has announced a groundbreaking project leveraging advanced functionalities of carbon semiconductors, including the Reusable Chip, Memory-Mapped CPU, Content-Aware Memory, and Emulated Quantum Communication. Named AI City, this innovative project features a state-of-the-art data center campus supporting cutting-edge AI applications using U.S. technologies. The West Virginia Datacenter Group oversees the project.
    p In the initial phase, the West Virginia State government has approved deploying a robust fiber optic network across the state, connecting directly to the world's primary Internet peering point. This network will link the data center campus and extend to every county in West Virginia, enhancing broadband accessibility and reducing backhaul bandwidth costs.
    p The West Virginia Datacenter Group also plans to establish a microgrid tailored for data centers within Grant County's Economic Development Area to advance AI applications. This initiative will bring significant economic and infrastructure benefits to West Virginia, where two data center campuses will be powered by a conventional power plant and a fuel cell-powered natural gas facility. Using natural CO2 emissions, a greenhouse will boost agricultural production on 100 acres. In collaboration with West Virginia University's agriculture department, this greenhouse will enhance photosynthetic efficiency and water management. The project will create diverse employment opportunities, transform West Virginia into a major vegetable exporter, and mark a significant advancement in AI technology by exclusively using CNT chips for the AI data center.

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
        object-position: center;
    }
}
</style>