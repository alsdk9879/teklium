<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title About Us
        p.yellow Meet the people designing the future at Teklium.
    img.bgi(src="/assets/img/about_bg.png")

section.white 
    .inner(style="max-width:900px; text-align:center")
        h1 Teklium is the Global Leader
        strong(style="color:#999") We are dedicated to driving innovation and advancements in aerospace, mechanical engineering, energy, artificial intelligence, and semiconductor technology.

br
br
br

section.white 
    .inner
        .wrap
            .image(style="max-width:250px;min-width:unset") 
                img(src="/assets/img/profile.jpg")
            .content
                //- .tit(style="display:flex; align-items:flex-end; ")
                    img(src="/assets/img/jasonho.jpeg" style="width: 100px; margin-right: 1rem")
                h1(style="margin-top: 0;") Jason Ho, CEO
                strong He is a recognized leader in semiconductor technology, specializes in Integrated Circuit (IC) Design with an emphasis on real-time AI technologies.
                p(style="margin-bottom: 0; color:#999") Holding a master’s degree in electrical engineering from Pennsylvania State University and a Bachelor of Science from National Chiao Tung University, Taiwan, Jason has significantly contributed to pioneering projects such as the F-35 Fighter Jet. He has developed advanced AI solutions for government projects and holds over 400 international patents in computer chip design, optic devices, computer security systems, and neural networks.

section.white
    .inner 
        h1 Career

        .cardWrap 
            .card
                h2 Teklium Inc.
                p Founder & CEO

                hr

                p Jason introduced innovations like the reusable Cell Structured Computer Chip and near-frictionless mechanical batteries, revolutionizing the semiconductor and energy industries. His inventions have been adopted by leading companies, including Toyota, Nissan, and Intel. While serving as CEO of Mai Logic, Jason partnered strategically with IBM and Motorola, raising over $10 million and introducing several multi-million gate ICs.

            .card
                h2 Revatron Co., Ltd
                p Chief Technology Officer (CTO)

                hr

                p Jason invented the Direct Object-Oriented Reality (DOORs) system technology, a real-time AI solution for machine learning and 3D reality modeling. In 2010, he developed Pathium Display Technology (PDT), a solution for displaying holographic videos on flat panel displays without 3D glasses.
            .card
                h2 Harada International Law Firm
                p Consultant

                hr

                p focusing on innovative solutions and international cooperation to advance Japan’s semiconductor industry. His strategic insights address technology-driven environmental challenges and market forces, leading to applications like mechanical batteries and reusable chips.
            //- .card
                h2 Advanced Projects
                p &nbsp;

                hr

                p Successfully developed and delivered dozens of AI solutions for various government related projects, including the F-35 Fighter Jet Project.
                p Served as lead designer of the custom computer chip control and image display systems for F-35 Fighter.

section.white 
    .inner
        h1 Technological Innovations

        br
        
        ul.innovate
            li Cell Structured Computer Chip
                p A reusable chip with a unique architecture for auto-detection and correction of runtime errors.
            li Near Frictionless Mechanical Battery
                p An environmentally friendly energy storage solution using flywheel angular momentum.
            li Tapestry Exchange (TE)
                p An AI-based cryptograph system that creates secure private keys for communications.
            li Pathium Display Technology
                p A holographic video display system that operates without the need for 3D glasses.
            li Direct Object-Oriented Reality (DOORs) System
                p A real-time AI solution focusing on 3D reality modeling and machine learning.
            li Super Internet Technology
                p A low-latency communication technology that enhances 5G networks.

section.white 
    .inner
        h1(style="text-align:center") Partners
        .cardWrap
            .card(style="width: 45%")
                h2 Baksa Gimm
                hr
                p Founder of broadway Inc., Expert in network API's and internet technologies.
            
            .card(style="width: 45%")
                h2 Mark Bayliss
                hr
                p President Visual link, Member of FCC technical advisory council.

section.white 
    .inner(style="text-align:center")
        h1 Alliance
        .linkWrap 
            a.link(href="https://www.skapi.com/" target="_blank")
                img(src="/assets/img/skapi.png" style="transform: translateY(2px)")
            a.link(href="https://www.rhfocus.com/index" target="_blank")
                img(src="/assets/img/focusgroup.png")
            .link
                img(src="/assets/img/revatron.png")

br
br
</template>

<script setup>

</script>

<style scoped lang="less">
.card {
    // width: 45%;
    min-width: 320px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 36px 32px -22px rgba(0,0,0,0.1);
    border-radius: 16px;
    padding: 1rem;

    h2 {
        margin: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0;
        color: #999;
        font-weight: 300;
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
            font-weight: bold;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
.innovate {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-left: 1rem;

    li {
        width: 45%;
        min-width: 300px;
        margin-bottom: 1rem;
        font-weight: bold;
        flex-grow: 1;

        p {
            margin: 0;
            color: #999;
            font-weight: normal;
        }
    }
}
.linkWrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1.2rem;
        height: 70px;
        border-radius: 24px;
        box-shadow: inset 0 0px 10px 0 rgba(0, 0, 0, .07);
        transition: all .3s;
        overflow:hidden;
        flex: 1;
    }
    a {
        &:hover {
            box-shadow: inset 0 3px 12px 0px rgba(0, 0, 0, .17);
        }
    }
    img {
        height: 2.2rem;
    }
}

@media (max-width: 991px) {
    .linkWrap {
        .link {
            width: calc(50% - 1rem);
            flex: auto;
        }
    }
}
@media (max-width: 600px) {
    .linkWrap {
        .link {
            width: 100%;
        }
    }
}
</style>