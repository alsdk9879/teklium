<template lang="pug">
br
br
br

.inner
    .image
        img(src="/src/assets/img/spooling.webp")

    br
    br

    p Quantum Spooling makes sure only one device can read a network packet, regardless of how many copies there are. As an example, when User A sends data to User B, Quantum Spooling encapsulates the data in a quantum packet. Once a device reads one quantum packet, all the others become invalid. Emulated Quantum Communication (EQC) encrypts each packet uniquely, so eavesdropping isn't possible. The system alerts both sender and receiver if a packet is intercepted, keeping its integrity and making hacking virtually impossible.
    p By using quantum uncertainty and entanglement, quantum spooling has led to the development of Quantum Gate, a security system that replaces firewalls. The Quantum Gate reduces network latency by up to 90% by blocking packets without proper identification, resulting in faster and more secure network operations. Teklium plans to launch the EQC One platform within a year, letting users download the full package of EQC services, including Quantum Spooling and Quantum Gate, and inviting developers to create apps using the EQC SDK.

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