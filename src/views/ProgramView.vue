<template>
    <div class="program">
        <div class="details-container">
            <h1 class="title mb-5">Opening Hours</h1>
            <p class="hours">Mon - Fri: 9am - 5pm</p>
            <p class="hours">Sat: 9am - 12pm by request</p>
            <p class="hours mb-5">Sun: Closed</p>
            <a href="mailto:simdelaware@gmail.com">
                <button type="button" class="btn  mt-5 btn-lg">Get in touch</button>
            </a>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'MassageWebsiteProgramView',

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
    .program {
        height: 80.1vh;
        font-family: 'Roboto', sans-serif;
    }

    .program::after {
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        background-image: url('../assets/programBackgraound.png');
        background-repeat: no-repeat;
        background-size: cover;
        }

    .details-container {
        padding-top: 21vh;
        text-align: center;
        color: #fff;

        .title {
            font-weight: 700;
        }

        .hours {
            font-size: 1.7rem;
            font-weight: 600;
        }

        button {
            color: #fff;
            background-color: #00d700;
            border-radius: 5px;
            border: none;
            transition: background-color 0.25s ease-out 100ms;
        }

        button:hover {
            background-color: rgb(0 215 0 / 60%);
        }

        button:active {
            color: #fff;
        }
    }
</style>