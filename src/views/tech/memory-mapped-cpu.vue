<template lang="pug">
br
br
br

.inner
    .image
        img(src="/assets/img/cpu.jpg")

    br
    br

    p An average CPU consists of three primary functional components: a memory management unit (MMU), a control unit, and an arithmetic logic unit (ALU). When loading programs or retrieving data, the MMU manages memory access across internal cache, memory chips, and storage devices. By decoding instructions, managing data flow, and coordinating component interactions, the control unit oversees instruction execution, while the ALU performs arithmetic operations like addition and subtraction, as well as logical operations like AND, OR, and NOT. By dividing instructions into sequential stages, the control unit and ALU can efficiently process each stage, thereby enhancing CPU performance. Data dependencies, system calls, or internal errors can stall pipelines, leading to idle periods known as "pipeline bubbles."
    p With CSCC architecture and Nantero's CNT technology, Teklium is developing a Memory-Mapped CPU that integrates CPU and memory into a single chip to significantly enhance performance. A CNT chip's 3D structure provides ten times more memory cells than a silicon memory chip. CPUs based on memory-mapped architecture provide near-instantaneous results for complex computations by converting certain CPU pipeline functions to dynamic memory tables. Using memory-mapped CPUs, tensor operations are executed directly on CNT memory, enabling them to deliver performance comparable to GPUs while consuming only 10% of the power. Memory-mapped CPUs also optimize energy efficiency and resource utilization by dividing computing tasks across multiple CPUs. Advanced CNT technology enables true parallel processing, effectively resolving data contention issues and marking a technological breakthrough in semiconductors.

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