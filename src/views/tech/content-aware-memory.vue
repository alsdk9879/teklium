<template lang="pug">
br
br
br

.inner
    .image
        img(src="/assets/img/memory.jpg")

    br
    br

    p The semiconductor memory chip was pioneered by Texas Instruments in the early 1960s, followed by Intel's introduction of SRAM and DRAM chips in 1969 and 1970. Since their inception, the foundational architecture of memory has seen minimal evolution. However, modern computing, particularly with intensive applications like machine learning, necessitates vast memory capacities, placing significant strain on CPU resources.
    p The Memory-Mapped CPU introduces Content Aware Memory, integrating CPU pipelines directly within memory cells. This innovative architecture eliminates conventional memory addressing by enabling CPUs to specify data attributes, which Content Aware Memory autonomously retrieves. By circumventing traditional address generation, this approach drastically enhances system speed by at least tenfold while reducing power consumption to 10% or lower. Leveraging Nantero's Carbon Nanotube technology, Content Aware Memory signifies a substantial leap in semiconductor advancement.

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