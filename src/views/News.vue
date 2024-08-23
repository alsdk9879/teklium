<template lang="pug">
section.dark(style="padding-top: 12rem")
    .inner
        h1(style="font-size: 3.5rem; margin-bottom:0") News & Insight
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
            .card 
                .image 이미지
                .content 
                    .date.sky 2024.01.01
                    h2 Reusable Carbon Chip Announcement
                    p Discover the benefits of our new chip technology and the environmental advantages it brings, alongside our strategic partnership with Mark Bayliss and Rick Ridgley.
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
            .card 
                .image 이미지
                .content 
                    .date.sky 2024.01.01
                    h2 Emulated Quantum Communication
                    p Explore the groundbreaking research and applications of quantum communication technology, highlighted in Mark Bayliss’s upcoming white paper.
                .button Read More >

    br
    br
    br
    br
</template>

<script setup>

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

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 20px 0 rgba(5, 19, 55, .1);
    }
    .image {
        width: 100%;
        height: 300px;
        background-color: #999;
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