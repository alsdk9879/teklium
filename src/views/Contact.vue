<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1(style="font-size: 3.5rem; margin-bottom:0") Contact Teklium
        p.green We want to hear from you
    img.bgi(src="@/assets/img/cu.png")
    
    br
    br

section.white 
    br
    br
    br

    .inner
        h1(style="text-align:center; margin-top:0 ") Connect with our team 
        form
            label Name
            input(type="text" placeholder="Your name")
            
            br
            
            label Email
            input(type="email" placeholder="Your email")
            
            br
            
            label Phone number
            input(placeholder="Your phone number")

            br

            label Content
            textarea(placeholder="Your message" style="min-height: 150px")

            br
            br

            div(style="text-align:center")
                button.fullButton(type="submit") Send Message

    br
    br
    br

</template>

<script setup>

</script>

<style scoped lang="less">
form {
    label {
        color: #061741;
    }
    input, textarea {
        display: block;
        width: 100%;
        color: #33475b;
        background-color: #f5f8fa;
        border: 1px solid #cbd6e2;
        padding: 0.5rem;
        border-radius: 8px;
        font-family: "Raleway", sans-serif;
    }
    textarea {
        resize: vertical;
    }
}
</style>