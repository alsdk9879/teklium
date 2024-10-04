<template lang="pug">
br
br
br

.inner
    .image
        img(src="/assets/img/internet.jpg")

    br
    br
    br

    p Over forty years ago, the Internet emerged from ARPANET (Advanced Research Projects Agency Network), a project funded by the U.S. Department of Defense. Initially intended to connect a few million users, ARPANET introduced foundational concepts like network packets and protocols. Today, billions of users rely on the Internet, which has seen minimal architectural updates despite ongoing demands for faster and more reliable connectivity.
    p Advancements such as 5G technology have converged Wi-Fi and cellular networks into single devices, exemplified by hybrid modems combining 5G capabilities with Wi-Fi routers. This innovation has led to the deployment of wireless microcells—low-power cellular base stations tailored for high-density areas like malls and transportation hubs. Microcells, equipped with small antennas and limited coverage radius, offer energy-efficient alternatives to traditional base stations by integrating into infrastructure like streetlights.
    p Teklium has now achieved a milestone with the structural design completion of the Super Internet. The initial phase of this platform is scheduled for launch within a year, featuring Teklium's Cell Structured Computer Chip technology to enable real-time Internet services. This advancement integrates Quantum Spooling for secure network packet transmission through Emulated Quantum Communication, alongside Atomic Routing technologies.
    p These innovations are poised to offer users and developers efficient, secure, and advanced Internet access and utilization methods in the near future.
    
    br
    br
    br

    strong.red Atomic Routing
    
    p The initial developers of the Internet introduced a traffic routing mechanism based on IP addresses, originally designed for a million users, without anticipating the needs of billions of users today. This outdated approach has led to slow traffic and vulnerabilities in router security. Compromised IP addresses or domain names can be exploited by hackers to impersonate devices or hijack websites.
    p Atomic Routing represents a modern solution by integrating an identity layer and content access layer onto IP addresses, enhancing the sophistication of addressing and routing on the Internet. This method optimizes traffic direction based on connection characteristics, improving efficiency and security. When connecting to the Internet, three critical elements are verified: the user, the device, and the account. Meta-AI generates security criteria through collaborative pattern recognition involving graphical responses from users. Accounts can be managed via web browsers, apps, or both, based on user preferences during authorization, with Quantum keys generated from device IDs.
    p Atomic Routing identifies content based on its location (path) and name, enabling access without reliance on traditional IP addresses. Beyond IP addressing, it supports direct radio ID connections between mobile devices over cellular networks, bypassing the need for Internet routers.
    p Following the launch of EQC One, Teklium plans to release the Meta-AI Run platform featuring innovations such as Meta-AI-driven identification and content access systems. Users will be able to download the complete package of Atomic Routing to test its performance and security enhancements.
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

// strong {
//     font-size: 1.4rem;
// }
</style>