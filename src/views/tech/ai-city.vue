<template lang="pug">
br
br
br

.inner
    .image
        img(src="/assets/img/AI.webp")

    br
    br

    p Visual Link has announced a groundbreaking project centered around the use of carbon semiconductors and their advanced functionalities, such as Reusable Chip, Memory-Mapped CPU, Content-Aware Memory, and Emulated Quantum Communication. This innovative project, called AI City, features a state-of-the-art datacenter campus that supports groundbreaking AI applications using cutting-edge U.S. technologies. A special group called the West Virginia Datacenter Group oversees the project. As part of the initial phase, the West Virginia State government has approved the deployment of a robust fiber optic network across the state that will connect directly to the world's primary Internet peering point. By connecting the datacenter campus and extending to every county in West Virginia, this network will enhance broadband accessibility and reduce backhaul bandwidth costs.
    p The West Virginia Datacenter Group is also planning to establish a microgrid tailored for datacenters within Grant County's Economic Development Area to advance artificial intelligence applications. There will be significant economic and infrastructure benefits for West Virginia where two data center campuses will be powered by a conventional power plant and a fuel cell-powered natural gas facility. Using natural CO2 emissions, this greenhouse will boost agricultural production on 100 acres. A collaboration with West Virginia University's agriculture department will facilitate the integration of the greenhouse into its practice of enhancing photosynthetic efficiency and water management. It will create diverse employment opportunities, transform West Virginia into a major vegetable exporter, and mark a major advancement in AI technology by using CNT chips exclusively for the AI data center.

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