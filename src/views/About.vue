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
                strong He has transformed the semiconductor and energy industries with his pioneering inventions. #[br]His technologies have been adopted by leading global companies such as Toyota, Nissan, and Intel, and his work continues to shape the future of technology.
                p(style="margin-bottom: 0; color:#999") He holds a Master’s degree in Electrical Engineering from Pennsylvania State University and a Bachelor of Science from National Chiao Tung University, Taiwan. Jason has contributed to numerous groundbreaking projects, including the F-35 Fighter Jet. With over 400 international patents in computer chip design, optical devices, computer security systems, and neural networks, he has made significant impacts across various technological fields.

section.white
    .inner 
        h1 Career

        .cardWrap 
            .card
                h2 Teklium Inc.
                p Founder & CEO

                hr

                ul
                    li Cell Structured Computer Chip
                        p A reusable chip technology featuring unique architecture for auto-detection and correction of runtime errors.
                    li Near Frictionless Mechanical Battery
                        p An environmentally friendly energy storage solution utilizing flywheel angular momentum.
                    li Pathium Display Technology (PDT)
                        p A technology for displaying holographic videos without the need for 3D glasses.
            .card
                h2 Revatron Co., Ltd
                p Chief Technology Officer (CTO)

                hr

                ul
                    li Direct Object-Oriented Reality (DOORs) System
                        p A real-time AI solution focusing on machine learning and 3D reality modeling.
                    li Pathium Display Technology (PDT)
                        p A technology for holographic video display without 3D glasses.
            .card
                h2 Harada International Law Firm
                p Consultant

                hr

                p Focused on innovative solutions and international cooperation to advance Japan’s semiconductor industry.
            .card
                h2 Advanced Projects
                p &nbsp;

                hr

                p Successfully developed and delivered dozens of AI solutions for various government related projects, including the F-35 Fighter Jet Project.
                p Served as lead designer of the custom computer chip control and image display systems for F-35 Fighter.

section.white 
    .inner
        .wrap(style="align-items:unset")
            .content 
                h1 Key Technological Innovations
                p His impressive career is marked by many trailblazing inventions that have been adopted by major corporations throughout the world. Some examples are:
            .image 
                ul.innovate
                    li Tapestry Exchange (TE)
                        p An AI-based cryptographic system for creating secure private keys for communications.
                    li NetDMA
                        p A network service solution that enhances peer-to-peer communications with advanced error recovery and encryption.
                    li Super Internet Technology
                        p A low-latency communication technology designed to enhance 5G networks.

section.white 
    .inner
        h1(style="text-align:center") Partners
        .cardWrap
            .card
                h2 Baksa Gimm
                hr
                p Founder of broadway Inc., Expert in network API's and internet technologies.
            
            .card
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
    width: 45%;
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