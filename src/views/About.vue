<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title About Us
        p.green Meet the people designing the future at Teklium.
    img.bgi(src="/assets/img/about_bg.png")
    
    br
    br

section.white 
    br
    br
    br

    .inner(style="max-width:900px; text-align:center")
        h1 Teklium is the Global Leader
        strong.sky in AI, semiconductor technology, and sustainable energy solutions, pioneering advanced carbon semiconductors to drive performance, efficiency, and industry transformation.

    br
    br
    br

section.white 
    br
    br
    br

    .inner
        .wrap
            //- .image(style="height:500px") 
                img(src="/assets/img/internet.webp")
            .content
                .tit(style="display:flex; align-items:center;")
                    img(src="/assets/img/teklium.png" style="width: 50px; margin-right: 1rem")
                    h1 Jason Ho, CEO
                strong.sky He has transformed the semiconductor and energy industries with his pioneering inventions. #[br]His technologies have been adopted by leading global companies such as Toyota, Nissan, and Intel, and his work continues to shape the future of technology.
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
            .card
                h2 Advanced Projects
                strong.sky &nbsp;

                hr

                p Successfully developed and delivered dozens of AI solutions for various government related projects, including the F-35 Fighter Jet Project.
                p Served as lead designer of the custom computer chip control and image display systems for F-35 Fighter.

    br
    br
    br

section.white 
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

section.white 
    br
    br
    br

    .inner
        h1(style="text-align:center") Our team
        .linkWrap 
            //- .link
                .image
                    img(src="/assets/img/internet.webp")
                .content
                    h2 Jason Ho
                    strong.sky CEO
                .button Read More >

            a.link(href="https://www.skapi.com/" target="_blank")
                .image
                    img(src="/assets/img/skapi_symbol.png" style="width:35px")
                .content 
                    h2 Skapi 
                    strong.sky Partner
                .button Click >
            
            a.link(href="https://www.linkedin.com/in/mark-bayliss-3b45777?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank") 
                .image 
                    img(src="/assets/img/person.png" style="width:40px")
                .content 
                    h2 Mark Bayliss
                    strong.sky Strategic Partner
                .button Click > 

    br
    br
    br


section.white 
    br
    br
    br

    .inner(style="text-align:center")
        h1 Partner
        .imgWrap 
            .image
                img(src="/assets/img/skapi.png" style="transform: translateY(2px)")
            .image
                img(src="/assets/img/focusgroup.png")
            .image    
                img(src="/assets/img/nantero.svg" style="filter: brightness(0); height: 1.5rem")
            .image
                img(src="/assets/img/revatron.png")

    br
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

.linkWrap {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.link {
    position: relative;
    flex-grow: 1;
    display: flex;
    align-items: center;
    // flex-wrap: wrap;
    gap: 1rem;
    width: 32%;
    min-width: 320px;
    padding: 1rem;
    box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .05);
    transform: translateY(0px);
    transition: all 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: #000;
    border-radius: 1rem;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .1);
    }
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #eee;
        overflow: hidden;

        img {
            object-fit: cover;
        }
    }
    .content {
        flex-grow: 1;

        h2 {
            margin: 0;
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
    .button {
        flex: none;
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

.imgWrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1.2rem;
        height: 70px;
        border-radius: 24px;
        box-shadow: inset 0 0px 10px 0 rgba(5, 19, 55, .07);
        overflow:hidden;
        flex: 1;
    }
    img {
        height: 2.2rem;
    }
}

@media (max-width: 991px) {
    .imgWrap {
        .image {
            width: calc(50% - 1rem);
            flex: auto;
        }
    }
}
@media (max-width: 600px) {
    .imgWrap {
        .image {
            width: 100%;
        }
    }
}
</style>