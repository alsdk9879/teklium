<template lang="pug">
section.dark.img(style="padding-top: 12rem;")
    .inner
        h1.title Contact Teklium
        p.green We want to hear from you
    img.bgi(src="/assets/img/contact_bg.png")

section.white 
    .inner(style="max-width:600px")
        h1(style="text-align:center; margin-top:0 ") Connect with our team 
        form#form(@submit.prevent="sendEmail")
            label Name
            input(name='name' type="text" placeholder="Your name" required)
            
            br
            
            label Email
            input(name='email' type="email" placeholder="your@email.com" required)
            
            br
            
            label Subject
            input(name='subject' placeholder="Your subject" required)

            br

            label Message
            textarea(name='message' placeholder="Your message" style="min-height: 150px" required)

            br
            br

            div(style="text-align:center")
                button.fullButton(type="submit") Send Message

</template>

<script setup>
import { skapi } from '@/main'

let sendEmail = (e) => {
    skapi.sendInquiry(e).then(r => {
        alert('send Email!');
        document.getElementById('form').reset();
    })
}
</script>

<style scoped lang="less">
form {
    label {
        color: #061741;
        display: block;
        margin-bottom: .375rem;
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