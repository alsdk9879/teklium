<template lang="pug">
section.dark(style="padding-top: 12rem")
    .inner
        h1.title News & Insight
        p.green Stay updated with the latest developments at Teklium
    
    br
    br

section.white
    br
    br
    br
    
    .inner 
        h1(style="text-align:center") Press Releases

        .cardWrap 
            router-link.card(v-for="r in releases" :to="'/news/' + r.tit.replaceAll(' ', '-').toLowerCase()")
                .image
                    img(:src="'/src/assets/img/' + r.img")
                .content 
                    .date.sky {{ r.date }}
                    h2 {{ r.tit }}
                    p {{ r.cont }}
                .button Read More >

    br
    br

section.white
    br
    br
    br

    .inner
        h1(style="text-align:center") White Papers

        .cardWrap 
            router-link.card(v-for="p in papers" :to="'/news/' + p.tit.replaceAll(' ', '-').toLowerCase()")
                .image 
                    img(:src="'/src/assets/img/' + p.img")
                .content 
                    .date.sky {{ p.date }}
                    h2 {{ p.tit }}
                    p {{ p.cont }}
                .button Read More >

    br
    br
    br
    br
</template>

<script setup>
let releases = [
    {
        img: "carbon.webp",
        tit: "Reusable Carbon Chip Announcement",
        cont: "Discover the benefits of our new chip technology and the environmental advantages it brings, alongside our strategic partnership with Mark Bayliss and Rick Ridgley.",
        date: "2024.01.01"
    }
]

let papers = [
    {
        img: "communication.webp",
        tit: "Emulated Quantum Communication",
        cont: "Discover the benefits of our new chip technology and the environmental advantages it brings, alongside our strategic partnership with Mark Bayliss and Rick Ridgley.",
        date: "2024.01.01"
    }
]
</script>

<style scoped lang="less">
.card {
    display: flex;
    flex-wrap: wrap;
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

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .1);
    }
    .image {
        width: 100%;
        height: 300px;
        background-color: #999;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    .content {
        flex-grow: 1;
    }
    p {
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
}
</style>