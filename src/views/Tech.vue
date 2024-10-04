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
        img: "aicity.jpg",
        tit: "AI City",
        link: "ai",
        desc: "Visual Link has announced a groundbreaking project leveraging advanced functionalities of carbon semiconductors, including the Reusable Chip, Memory-Mapped CPU, Content-Aware Memory, and Emulated Quantum Communication. Named AI City, this innovative project features a state-of-the-art data center campus supporting cutting-edge AI applications using U.S. technologies. The West Virginia Datacenter Group oversees the project."
    },
    {
        img: "chip.jpg",
        tit: "Chip Subscription Business",
        link: "chip",
        desc: "The subscription business model has gained widespread adoption across various industries due to its ability to generate consistent and recurring revenue, allowing for better revenue forecasting and streamlined planning."
    },
    {
        img: "memory.jpg",
        tit: "Content Aware Memory",
        link: "memory",
        desc: "The semiconductor memory chip was pioneered by Texas Instruments in the early 1960s, followed by Intel's introduction of SRAM and DRAM chips in 1969 and 1970. Since their inception, the foundational architecture of memory has seen minimal evolution."
    }
    ,
    {
        img: "cpu.jpg",
        tit: "Memory Mapped CPU",
        link: "cpu",
        desc: "A typical CPU comprises three core functional components: a memory management unit (MMU), a control unit, and an arithmetic logic unit (ALU). The MMU oversees memory access across internal cache, memory chips, and storage devices when loading programs or retrieving data."
    }
    ,
    {
        img: "quantum.jpg",
        tit: "Quantum Communication",
        link: "communication",
        desc: "Quantum communication offers unparalleled security by leveraging fundamental physical laws, particularly through the use of entangled particles like photons. Protocols such as BB84 exploit the no-cloning theorem to safeguard cryptographic keys, ensuring security even if intercepted during key distribution."
    }
    ,
    {
        img: "carbon.jpg",
        tit: "Reusable Carbon Semiconductors",
        link: "carbon",
        desc: "ndustrialization, economics, science, and education are increasingly reliant on artificial intelligence (AI) and semiconductor technology. However, the computational capabilities of AI are advancing at a pace that far exceeds Moore's Law, doubling every three months."
    }
    ,
    {
        img: "internet.jpg",
        tit: "The Super Internet",
        link: "internet",
        desc: "Over forty years ago, the Internet emerged from ARPANET (Advanced Research Projects Agency Network), a project funded by the U.S. Department of Defense. Initially intended to connect a few million users, ARPANET introduced foundational concepts like network packets and protocols. Today, billions of users rely on the Internet, which has seen minimal architectural updates despite ongoing demands for faster and more reliable connectivity."
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