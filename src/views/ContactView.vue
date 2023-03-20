<template>
    <div class="contact container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.187870387283!2d-75.73100498392847!3d39.690479679456274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7abf789fe59d1%3A0xcc9c37c8bfdc24b2!2sTurn%20on%20Elm%20Street%20for%20parking%2C%20412%20Capitol%20Tr%2C%20Newark%2C%20DE%2019711%2C%20Statele%20Unite%20ale%20Americii!5e0!3m2!1sro!2sro!4v1679326599366!5m2!1sro!2sro"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="details ms-5">
            <h1 class="mb-5">Contact Us</h1>
            <p class="mt-5 mb-5">For more information about Sports & Injury Massage of DE, pricing, and our 3 locations, please fill out your information below or give us a call.</p>
            <p class="mt-5 mb-2">412 Capitol Trail Newark, DE 19711</p>
            <p class="mb-5">101 West Park Place, Middletown, DE 19709</p>
            <p class="mt-5 mb-2">simdelaware@gmail.com</p>
            <p>Phone: 302-357-2626</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MassageWebsiteContactView'
};
</script>

<style lang="scss" scoped>
.contact {
    height: 80.1vh;
    padding-top: 21vh;
    font-family: 'Roboto', sans-serif;
    display: flex;
}

.details{
    width: 50%;

    h1 {
        color: #0088d5;
        font-size: 2.8rem;
        font-weight: bold;
    }

    p {
        font-size: 1.25rem
    }
}
</style>