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

    strong.red History of the Internet
    
    p Over four decades ago, the Internet emerged from ARPANET (Advanced Research Projects Agency Network), a project initiated and funded by the U.S. Department of Defense. Initially, ARPANET's developers aimed to create a network connecting a few million users at most, never anticipating that billions would eventually use the platform. ARPANET introduced two pivotal concepts: the network packet and the network protocol.
    p When people connect to the Internet, they do so either through Wi-Fi or cellular networks. While Wi-Fi routers must link to an Internet source like a broadband modem, cellular networks provide Internet service through cell towers or base stations. Despite the Internet's half-century-old architecture, which has never been updated, users continually desire faster and more reliable connections. Technological advancements over the past 50 years have not fully addressed these demands, prompting the development of the Super Internet. This innovative approach fundamentally addresses the most pressing Internet issues: privacy, security, and speed.
    
    br
    br
    br
    
    strong.red The Emergence of the Super Internet
    
    p With the advent of 5G wireless technology, a new solution merged Wi-Fi and cellular networks into one device. This hybrid device combines a 5G modem with a Wi-Fi router, leading to the development of wireless microcells. Microcells, which are low-power cellular base stations covering limited areas, are designed for crowded locations like malls, hotels, and transportation hubs. They use small antennas with a limited coverage radius, consuming significantly less power compared to base stations. This new small cell service model integrates microcells into streetlights and replaces rooftop base stations, reducing wireless pollution and energy costs.
    p Now another milestone is in the making: Teklium has successfully completed the structural design of a new Internet – the Super Internet. The first stage of the Super Internet platform is set to launch within a year and will feature Teklium's Cell Structured Computer Chip technology, which enables real-time Internet services. We have also achieved significant breakthroughs with Quantum Spooling and Atomic Routing, transforming the Super Internet from a concept to a practical solution. Quantum Spooling ensures secure network packets using Emulated Quantum Communication. The technologies will be offered soon, providing users and developers new, efficient, and secure ways to access and utilize the Internet.
    
    br
    br
    br

    strong.red Atomic Routing
    
    p A million IP-address based traffic routing mechanism was introduced by the initial internet developers without even considering billions of users. Due to increased size, traffic is slow, and routers are not secure. A compromised IP address or domain name can allow hackers to impersonate devices or hijack websites.
    p Atomic Routing incorporates an identity layer with a content access layer onto IP addresses for sophisticated addressing and routing in the Internet. This mechanism directs traffic on the Internet in a more efficient and secure manner based on the nature of the connection. There are three things to check when connecting to the internet: the user, the device, and the account. Meta-AI creates security criteria based on graphical responses that are generated collaboratively with users' involvement in pattern recognition. Accounts may be serviced through the user's web-browser, app or both depending on what he/she chose when authorizing the account. Quantum keys are generated based on device IDs.
    p By identifying content by its location (path) and name, Atomic Routing allows access to content without the need for IP addresses. In addition to Internet Protocol (IP) addressing, atomic routing supports direct radio ID connections between mobile devices over cellular networks without the need for Internet routers.
    p Following the implementation of EQC One, Meta-AI Run platform will be released with innovations such as Meta-AI-based identification systems and content access systems. Atomic Routing's complete package will be downloaded by users for testing performance and security.
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