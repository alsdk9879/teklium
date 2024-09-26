<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title Revolutionary Technologies
        p.yellow Innovations That Matter
    img.bgi(src="/assets/img/tech_bg.png")

section.white
    br
    .inner
        .cardWrap 
            router-link.card(v-for="tech in techs" :to="'/tech/' + tech.tit.replaceAll(' ', '-')")
                .image
                    img(:src="'/assets/img/' + tech.img")

                br

                h2 {{ tech.tit }}
                
                p {{ tech.desc }}

                hr

                div(style="text-align:right")
                    button.lineButton Read More >

br
br
</template>

<script setup>
let techs = [
    {
        img: "aicity.webp",
        tit: "AI City",
        link: "ai",
        desc: "Visual Link has announced a groundbreaking project centered around the use of carbon semiconductors and their advanced functionalities, such as Reusable Chip, Memory-Mapped CPU, Content-Aware Memory, and Emulated Quantum Communication. This innovative project, called AI City, features a state-of-the-art datacenter campus that supports groundbreaking AI applications using cutting-edge U.S. technologies. A special group called the West Virginia Datacenter Group oversees the project. As part of the initial phase, the West Virginia State government has approved the deployment of a robust fiber optic network across the state that will connect directly to the world's primary Internet peering point. By connecting the datacenter campus and extending to every county in West Virginia, this network will enhance broadband accessibility and reduce backhaul bandwidth costs."
    },
    {
        img: "chip.webp",
        tit: "Chip Subscription Business",
        link: "chip",
        desc: "Due to its ability to generate consistent and recurring revenue, the subscription business model has gained widespread adoption across various industries, allowing for better revenue forecasting and streamlined planning. Subscriptions facilitate upselling and cross-selling by encouraging ongoing relationships with customers and promoting loyalty. It offers convenience, personalized experiences, and added value for both businesses and consumers, resulting in a trillion-dollar subscription economy."
    },
    {
        img: "memory.webp",
        tit: "Content Aware Memory",
        link: "memory",
        desc: "The first semiconductor memory chips were produced by Texas Instruments in the early 1960s, followed by Intel's introduction of SRAM and DRAM chips in 1969 and 1970. Since their adoption, the fundamental memory architecture has remained largely unchanged. In today's computing environment, however, massive memory demands, such as machine learning, require many millions of addresses, consuming a lot of CPU processing power."
    }
    ,
    {
        img: "cpu.webp",
        tit: "Memory Mapped CPU",
        link: "cpu",
        desc: "An average CPU consists of three primary functional components: a memory management unit (MMU), a control unit, and an arithmetic logic unit (ALU). When loading programs or retrieving data, the MMU manages memory access across internal cache, memory chips, and storage devices. By decoding instructions, managing data flow, and coordinating component interactions, the control unit oversees instruction execution"
    }
    ,
    {
        img: "communication.webp",
        tit: "Quantum Communication",
        link: "communication",
        desc: "Quantum security is absolute, based on fundamental physical laws. By leveraging entangled particles such as photons, quantum communication offers unprecedented security. BB84 and other quantum key distribution protocols use the no-cloning theorem to safeguard keys even if qubits are intercepted in the process of creating shared secret keys. Implementing quantum communication infrastructure requires specialized hardware, precise environmental control, and cryogenic temperatures, posing significant technical challenges."
    }
    ,
    {
        img: "spooling.webp",
        tit: "Quantum Spooling",
        link: "spooling",
        desc: "Quantum Spooling makes sure only one device can read a network packet, regardless of how many copies there are. As an example, when User A sends data to User B, Quantum Spooling encapsulates the data in a quantum packet. Once a device reads one quantum packet, all the others become invalid. Emulated Quantum Communication (EQC) encrypts each packet uniquely, so eavesdropping isn't possible. The system alerts both sender and receiver if a packet is intercepted, keeping its integrity and making hacking virtually impossible."
    }
    ,
    {
        img: "carbon.webp",
        tit: "Reusable Carbon Semiconductors",
        link: "carbon",
        desc: "Industrialization, economics, science, and education heavily rely on artificial intelligence (AI) and semiconductor technology. Yet, the computing power of artificial intelligence doubles every three months, exceeding Moore's Law by far. AI also consumes a substantial amount of electricity, enormous computing power, and vast storage. "
    }
    ,
    {
        img: "internet.webp",
        tit: "The Super Internet",
        link: "internet",
        desc: "Over four decades ago, the Internet emerged from ARPANET (Advanced Research Projects Agency Network), a project initiated and funded by the U.S. Department of Defense. Initially, ARPANET's developers aimed to create a network connecting a few million users at most, never anticipating that billions would eventually use the platform. ARPANET introduced two pivotal concepts: the network packet and the network protocol."
    }
]
</script>

<style scoped lang="less">
.card {
    width: 45%;
    min-width: 320px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 36px 32px -22px rgba(0,0,0,0.1);
    border-radius: 16px;
    padding: 1rem;
    text-decoration: none;
    color: #000;

    h2 {
        margin: 0;
        margin-bottom: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .image {
        width: 100%;
        height: 400px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    p {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
    }

    img {
        width: 100%;
    }

    hr {
        background: rgba(0, 0, 0, 0.15);
        height: 1px;
        border: 0;
        margin: 1rem 0;
    }

    ul {
        padding-left: 1rem;

        li {
            margin-bottom: 1.2rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>