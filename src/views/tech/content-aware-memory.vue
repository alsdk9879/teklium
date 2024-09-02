<template lang="pug">
br
br
br

.inner
    .image
        img(src="/src/assets/img/memory.webp")

    br
    br

    p The first semiconductor memory chips were produced by Texas Instruments in the early 1960s, followed by Intel's introduction of SRAM and DRAM chips in 1969 and 1970. Since their adoption, the fundamental memory architecture has remained largely unchanged. In today's computing environment, however, massive memory demands, such as machine learning, require many millions of addresses, consuming a lot of CPU processing power.
    p The Memory-Mapped CPU creates Content Aware Memory by embedding CPU pipelines inside memory cells. By eliminating traditional memory addresses, this new architecture allows the CPU to describe data attributes, which Content Aware Memory autonomously retrieves. It reduces inefficiencies and energy waste associated with address generation, improving system speed at least tenfold while reducing power consumption to 10% or less. Taking advantage of Nantero's Carbon Nanotube technology, Content Aware Memory represents a major step forward in semiconductor innovation.

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