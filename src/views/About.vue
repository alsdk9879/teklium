<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title Jason Ho, CEO
        p.green A leading expert in semiconductor technology, #[br]specializing in Integrated Circuit (IC) Design with a focus #[br]on real-time AI technologies.
    img.bgi(src="@/assets/img/i.png")
    
    br
    br

section.white 
    br
    br
    br

    .inner
        .wrap
            .image 
                img(src="@/assets/img/internet.webp")
            .content
                h1 Introduction
                strong.sky Jason Ho has transformed the semiconductor and energy industries with his pioneering inventions. #[br]His technologies have been adopted by leading global companies such as Toyota, Nissan, and Intel, and his work continues to shape the future of technology.
                p He holds a Master’s degree in Electrical Engineering from Pennsylvania State University and a Bachelor of Science from National Chiao Tung University, Taiwan. Jason has contributed to numerous groundbreaking projects, including the F-35 Fighter Jet. With over 400 international patents in computer chip design, optical devices, computer security systems, and neural networks, he has made significant impacts across various technological fields.

section.white
    br
    br
    br

    .inner 
        h1 Career

        .cardWrap 
            .card
                h2 Teklium Inc.
                strong.sky Founder & CEO

                hr

                ul
                    li Cell Structured Computer Chip
                        p A reusable chip technology featuring unique architecture for auto-detection and correction of runtime errors.
                    li Near Frictionless Mechanical Battery
                        p An environmentally friendly energy storage solution utilizing flywheel angular momentum.
                    li Pathium Display Technology (PDT)
                        p A technology for displaying holographic videos without the need for 3D glasses.
            //- .card
                h2 Mai Logic
                strong.sky CEO

                hr

                p Raised over $10 million in partnership with IBM and Motorola, introducing several multi-million gate ICs.
            .card
                h2 Revatron Co., Ltd
                strong.sky Chief Technology Officer (CTO)

                hr

                ul
                    li Direct Object-Oriented Reality (DOORs) System
                        p A real-time AI solution focusing on machine learning and 3D reality modeling.
                    li Pathium Display Technology (PDT)
                        p A technology for holographic video display without 3D glasses.
            .card
                h2 Harada International Law Firm
                strong.sky Consultant

                hr

                p Focused on innovative solutions and international cooperation to advance Japan’s semiconductor industry.

    br
    br

section.white 
    br
    br
    br
    br

    .inner
        .wrap(style="align-items:unset")
            .content 
                h1 Key Technological Innovations
                p His impressive career is marked by many trailblazing inventions that have been adopted by major corporations throughout the world. Some examples are:
            .image 
                ul.innovate
                    li.sky Tapestry Exchange (TE)
                        p An AI-based cryptographic system for creating secure private keys for communications.
                    li.sky NetDMA
                        p A network service solution that enhances peer-to-peer communications with advanced error recovery and encryption.
                    li.sky Super Internet Technology
                        p A low-latency communication technology designed to enhance 5G networks.
    br
    br
    br

</template>

<script setup>

</script>

<style scoped lang="less">
.card {
    width: 45%;
    min-width: 320px;
    border: 1px solid #e6eaf2;
    box-shadow: 0 36px 32px -22px #e6eaf2;
    border-radius: 16px;
    padding: 1rem;

    h2 {
        margin: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0;
        color: #999;
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
.innovate {
    padding-left: 1rem;

    li {
        margin-bottom: 1rem;
        font-weight: bold;

        p {
            margin: 0;
            color: #999;
            font-weight: normal;
        }
    }
}
</style>