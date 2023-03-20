<template>
    <div class="testimonials-container">
        <h1 class="mb-5">
            Customer Reviews
        </h1>
        <div class="reviews-container mt-5">
            <div class="review p-3">
                <p class="message">I came in for medical massage in a lot of pain. Steve was careful to understand my injury
                    and together we came up with a treatment plan that worked for me!</p>
                <p class="author">Steve Dexter</p>
            </div>
            <div class="review p-3">
                <p class="message">This is your Testimonial quote. Use this space to share reviews about your business and
                    services. Give site visitors confidence about your expertise and professionalism!</p>
                <p class="author">Robbie White</p>
            </div>
            <div class="review p-3">
                <p class="message">This is your Testimonial quote. Use this space to share reviews about your business and
                    services. Give site visitors confidence about your expertise and professionalism!</p>
                <p class="author">Riley Jones</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MassageWebsiteTestimonialsView',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.testimonials-container {
    font-family: 'Roboto', sans-serif;
    height: 80.1vh;
}

h1 {
    color: #0088d5;
    text-align: center;
    padding-top: 21vh;
    font-weight: bold;
    font-size: 50px;
    padding-bottom: 30px;
}

.reviews-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    justify-content: space-between;
}

.review {
    background-color: #0088d5;
    width: 30%;
    color: #fff;
    font-size: 19px;
    line-height: 28px;
    height: 24vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .message {
        text-align: center;
        width: 70%;
    }

    .author {
        color: #00d700;
        font-weight: bold;
        font-size: 22px;
    }
}

</style>