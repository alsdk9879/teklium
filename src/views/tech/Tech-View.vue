<template lang="pug">
section.dark(style="padding-top: 12rem")
    .inner
        h1.title {{ route.path.split('/')[2].replaceAll('-', ' ') }}
    
section.white.tech-view
    router-view

    br
    br
    
    div(style="text-align:center")
        button.fullButton(@click="router.push('/tech')") Back 

    br
    br
    //- br
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

// let params = {
//     ai: {
//         tit: 'AI city',
//         img: 'aicity.webp',
//         cont: ``
//     },
//     chip: {
//         tit: 'Chip Subscription Business',
//         img: 'chip.webp',
//         cont: `<p>Due to its ability to generate consistent and recurring revenue, the subscription business model has gained widespread adoption across various industries, allowing for better revenue forecasting and streamlined planning. Subscriptions facilitate upselling and cross-selling by encouraging ongoing relationships with customers and promoting loyalty. It offers convenience, personalized experiences, and added value for both businesses and consumers, resulting in a trillion-dollar subscription economy. </p>
//         <p>By enabling semiconductor chip subscriptions - a milestone semiconductor firms long coveted but without a practical near-term strategy - the Reusable Chip represents a pivotal advancement. By combining the simplicity of programming reusable chips with the long lifespan of carbon semiconductors, parallel processing capabilities of memory-mapped CPUs, and performance enhancements made possible by memory-aware memory and memory-centric architecture, chip subscription models are feasible. By paying a monthly fee, subscribers can access the latest and most advanced chips for their devices, switching between designs tailored for different uses. Carbon semiconductors are poised to be a disruptive force in the shift from chip sales to subscriptions by enabling users to retain their existing computer boards while upgrading peripherals. This transformation, driven by Nantero, Visual Link, and Teklium's carbon alliance, sets the stage for historic changes in the semiconductor industry.</p>`
//     },
//     memory: {
//         tit: 'Content Aware Memory',
//         img: 'memory.webp',
//         cont: `<p>The first semiconductor memory chips were produced by Texas Instruments in the early 1960s, followed by Intel's introduction of SRAM and DRAM chips in 1969 and 1970. Since their adoption, the fundamental memory architecture has remained largely unchanged. In today's computing environment, however, massive memory demands, such as machine learning, require many millions of addresses, consuming a lot of CPU processing power.</p>
//         <p>The Memory-Mapped CPU creates Content Aware Memory by embedding CPU pipelines inside memory cells. By eliminating traditional memory addresses, this new architecture allows the CPU to describe data attributes, which Content Aware Memory autonomously retrieves. It reduces inefficiencies and energy waste associated with address generation, improving system speed at least tenfold while reducing power consumption to 10% or less. Taking advantage of Nantero's Carbon Nanotube technology, Content Aware Memory represents a major step forward in semiconductor innovation.</p>`
//     },
//     cpu: {
//         tit: 'Memory Mapped CPU',
//         img: 'cpu.webp',
//         cont: `<p>An average CPU consists of three primary functional components: a memory management unit (MMU), a control unit, and an arithmetic logic unit (ALU). When loading programs or retrieving data, the MMU manages memory access across internal cache, memory chips, and storage devices. By decoding instructions, managing data flow, and coordinating component interactions, the control unit oversees instruction execution, while the ALU performs arithmetic operations like addition and subtraction, as well as logical operations like AND, OR, and NOT. By dividing instructions into sequential stages, the control unit and ALU can efficiently process each stage, thereby enhancing CPU performance. Data dependencies, system calls, or internal errors can stall pipelines, leading to idle periods known as "pipeline bubbles."</p>
//         <p>The West Virginia Datacenter Group is also planning to establish a microgrid tailored for datacenters within Grant County's Economic Development Area to advance artificial intelligence applications. There will be significant economic and infrastructure benefits for West Virginia where two data center campuses will be powered by a conventional power plant and a fuel cell-powered natural gas facility. Using natural CO2 emissions, this greenhouse will boost agricultural production on 100 acres. A collaboration with West Virginia University's agriculture department will facilitate the integration of the greenhouse into its practice of enhancing photosynthetic efficiency and water management. It will create diverse employment opportunities, transform West Virginia into a major vegetable exporter, and mark a major advancement in AI technology by using CNT chips exclusively for the AI data center.</p>`
//     },
//     communication: {
//         tit: 'Quantum Communication',
//         img: 'communication.webp',
//         cont: `<p>Quantum security is absolute, based on fundamental physical laws. By leveraging entangled particles such as photons, quantum communication offers unprecedented security. BB84 and other quantum key distribution protocols use the no-cloning theorem to safeguard keys even if qubits are intercepted in the process of creating shared secret keys. Implementing quantum communication infrastructure requires specialized hardware, precise environmental control, and cryogenic temperatures, posing significant technical challenges.</p>
//         <p>The advent of carbon semiconductors is ushering in an era when emulated quantum communication is accessible for everyday use, offering robust security features comparable to traditional quantum communication. Metacognitive AI (MAI) algorithms, such as Tapestry Exchange and Genetic Computing, have been developed by Teklium to emulate quantum communications. The Tapestry Exchange mirrors the quantum key distribution model, enabling the establishment of private keys over public channels without sharing secrets, while the Genetic Computing model manages the secure access to data using quantum entanglement principles.</p>
//         <p>By late 2024, Teklium plans to release emulated quantum communication software, which will be integrated into a variety of secure communication tools and services. A quantum communication emulated core will be incorporated into Teklium's CNT chips developed with Nantero, boosting performance and security and enabling the transformation of the internet.</p>`
//     },
//     spooling: {
//         tit: 'Quantum Spooling',
//         img: 'spooling.webp',
//         cont: `<p>Quantum Spooling makes sure only one device can read a network packet, regardless of how many copies there are. As an example, when User A sends data to User B, Quantum Spooling encapsulates the data in a quantum packet. Once a device reads one quantum packet, all the others become invalid. Emulated Quantum Communication (EQC) encrypts each packet uniquely, so eavesdropping isn't possible. The system alerts both sender and receiver if a packet is intercepted, keeping its integrity and making hacking virtually impossible.</p>
//         <p>By using quantum uncertainty and entanglement, quantum spooling has led to the development of Quantum Gate, a security system that replaces firewalls. The Quantum Gate reduces network latency by up to 90% by blocking packets without proper identification, resulting in faster and more secure network operations. Teklium plans to launch the EQC One platform within a year, letting users download the full package of EQC services, including Quantum Spooling and Quantum Gate, and inviting developers to create apps using the EQC SDK.</p>`
//     },
//     carbon: {
//         tit: 'Reusable Carbon Semiconductors',
//         img: 'carbon.webp',
//         cont: /*html*/`<strong class="sky">Today's Challenge</strong>
//         <p>Industrialization, economics, science, and education heavily rely on artificial intelligence (AI) and semiconductor technology. Yet, the computing power of artificial intelligence doubles every three months, exceeding Moore's Law by far. AI also consumes a substantial amount of electricity, enormous computing power, and vast storage. </p>
//         <p>Today's silicon-based AI chips struggle to keep up with rapidly evolving AI algorithms. These chips fall short of performance density, power consumption, and storage capacity. With increasing transistor numbers, semiconductor functionality and computing power increase. Modern chips contain over 50 billion transistors, but as components shrink, they face physical limits. Semiconductor development focuses on increasing transistor density, speed, and power efficiency. Stacking multiple silicon chips in a single package is difficult and costly due to heat dissipation issues and high failure rates caused by silicon's limitations.</p>
//         <p>There is also a significant environmental impact associated with silicon semiconductor manufacturing, consuming up to 100 megawatt-hours of power per hour and two to four million gallons of ultrapure water daily. Semiconductor manufacturing contributes to 31% of global greenhouse gas emissions, not to mention the tremendous amount of energy, water, and chemicals used in the production process, which results in air and water pollution and the depletion of natural resources. Mitigating these impacts requires sustainable practices and renewable energy investments.</p>
//         <p>Typically, silicon chips last between 10-15 years, which requires frequent replacements. Laptops have an average upgrade cycle of three to five years, while smartphones have an average upgrade cycle of 3.6 years, resulting in substantial electronic waste. An estimated 151 million mobile phones are discarded annually in the US, contributing to heavy metals in landfills because of low recycling rates, concerns about data security, and limited access to recycling facilities.</p>
//         <br>
//         <style>
//         .sky {
//             color:red
//         }
//         </style>
//         <strong class="sky">A World of Opportunity</strong>
//         <p>The Reusable Chip represents a pivotal development in mitigating environmental impacts associated with silicon-based semiconductors. By repurposing this chip multiple times, it reduces production volumes and enhances chip value. Removing chips from obsolete devices, reprogramming them with updated functionality, and integrating them into new computers enables users to upgrade their devices rather than buy new ones.</p>
//         <p>Chips made of carbon nanotubes have shown sub-nanometer PPAC performance and have a lifespan of 100 years, making them the ideal platform for reusable chips. With CSCC technology and a programmable architecture, Reusable Chips allow users to select and program netlists from various chip design firms. Featuring programmable logic cells interconnected by a switching network, these chips simplify programming and facilitate repeated programming.</p>
//         <p>As a result of Teklium's CSCC technology, which operates ten times faster and consumes only 10% of the power of a high-end GPU, the CNT technology has the potential to surpass current semiconductor benchmarks, creating a sought-after solution for AI processing power and reliability issues.</p>
//         <br>
//         <strong class="sky">INCLUDE STATS & CITATIONS</strong>
//         <ul>
//             <li>R&D Investment<p>The research and development investment for the 3 nm process reaches $4-5 billion.</p></li>
//             <li>Production Line Costs<p>Building a 3-nanometer process production line with a monthly production capacity of 40,000 wafers costs between $15 and $20 billion.</p></li>
//             <li>Chip Design Costs<p>According to International Business Strategies, the average cost of designing a 28 nm chip is $40 million, a 7 nm chip costs $217 million, a 5 nm chip costs $416 million, and a 3 nm chip design will cost up to $590 million.</p></li>
//         </ul>`
//     },
//     internet: {
//         tit: 'The Super Internet',
//         img: 'internet.webp',
//         cont: `<strong class="sky">History of the Internet</strong>
//         <p>Over four decades ago, the Internet emerged from ARPANET (Advanced Research Projects Agency Network), a project initiated and funded by the U.S. Department of Defense. Initially, ARPANET's developers aimed to create a network connecting a few million users at most, never anticipating that billions would eventually use the platform. ARPANET introduced two pivotal concepts: the network packet and the network protocol.</p>
//         <p>When people connect to the Internet, they do so either through Wi-Fi or cellular networks. While Wi-Fi routers must link to an Internet source like a broadband modem, cellular networks provide Internet service through cell towers or base stations. Despite the Internet's half-century-old architecture, which has never been updated, users continually desire faster and more reliable connections. Technological advancements over the past 50 years have not fully addressed these demands, prompting the development of the Super Internet. This innovative approach fundamentally addresses the most pressing Internet issues: privacy, security, and speed.</p>
//         <br>
//         <strong class="sky">The Emergence of the Super Internet</strong>
//         <p>With the advent of 5G wireless technology, a new solution merged Wi-Fi and cellular networks into one device. This hybrid device combines a 5G modem with a Wi-Fi router, leading to the development of wireless microcells. Microcells, which are low-power cellular base stations covering limited areas, are designed for crowded locations like malls, hotels, and transportation hubs. They use small antennas with a limited coverage radius, consuming significantly less power compared to base stations. This new small cell service model integrates microcells into streetlights and replaces rooftop base stations, reducing wireless pollution and energy costs.</p>
//         <p>Now another milestone is in the making: Teklium has successfully completed the structural design of a new Internet – the Super Internet. The first stage of the Super Internet platform is set to launch within a year and will feature Teklium's Cell Structured Computer Chip technology, which enables real-time Internet services. We have also achieved significant breakthroughs with Quantum Spooling and Atomic Routing, transforming the Super Internet from a concept to a practical solution. Quantum Spooling ensures secure network packets using Emulated Quantum Communication. The technologies will be offered soon, providing users and developers new, efficient, and secure ways to access and utilize the Internet.</p>
//         <br>
//         <strong class="sky">Atomic Routing</strong>
//         <p>A million IP-address based traffic routing mechanism was introduced by the initial internet developers without even considering billions of users. Due to increased size, traffic is slow, and routers are not secure. A compromised IP address or domain name can allow hackers to impersonate devices or hijack websites.</p>
//         <p>Atomic Routing incorporates an identity layer with a content access layer onto IP addresses for sophisticated addressing and routing in the Internet. This mechanism directs traffic on the Internet in a more efficient and secure manner based on the nature of the connection. There are three things to check when connecting to the internet: the user, the device, and the account. Meta-AI creates security criteria based on graphical responses that are generated collaboratively with users' involvement in pattern recognition. Accounts may be serviced through the user's web-browser, app or both depending on what he/she chose when authorizing the account. Quantum keys are generated based on device IDs.</p>
//         <p>By identifying content by its location (path) and name, Atomic Routing allows access to content without the need for IP addresses. In addition to Internet Protocol (IP) addressing, atomic routing supports direct radio ID connections between mobile devices over cellular networks without the need for Internet routers.</p>
//         <p>Following the implementation of EQC One, Meta-AI Run platform will be released with innovations such as Meta-AI-based identification systems and content access systems. Atomic Routing's complete package will be downloaded by users for testing performance and security.</p>`
//     },
// }
</script>

<style scoped lang="less">


ul {
    padding-left: 1rem;

    li {
        margin-bottom: 1.2rem;

        &:last-child {
            margin-bottom: 0;
        }
        p {
            color: #999;
            margin: 0;
        }
    }
}
</style>