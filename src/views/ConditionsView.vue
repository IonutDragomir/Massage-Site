<template>
    <div class="main">
        <h1 class="mb-5">
            Conditions
        </h1>
        <div class="card-container">
            <Card v-for="(card, key) in data" :imageName="card.imageName" :title="card.title" :key="key"/>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'MassageWebsiteConditionsView',
    components: {
        Card
    },
    data() {
        return {
            data: [
                {
                    imageName: "condition1.png",
                    title: "Thoracic Outlet Syndrome"
                },
                {
                    imageName: "condition2.png",
                    title: "Whiplash"
                },
                {
                    imageName: "condition3.png",
                    title: "Repetitive Motion Injuries"
                },
                {
                    imageName: "condition4.png",
                    title: "Frozen Shoulder"
                },
                {
                    imageName: "condition5.png",
                    title: "Knee & Hip Injuries"
                },
                {
                    imageName: "condition6.png",
                    title: "Plantar Fasciitis"
                },
                {
                    imageName: "condition7.png",
                    title: "Numbness and Tingling"
                },
                {
                    imageName: "condition8.png",
                    title: "Back & Neck Pain"
                },
                {
                    imageName: "condition9.png",
                    title: "Carpal Tunnel"
                },
                {
                    imageName: "condition10.png",
                    title: "Headaches"
                }
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.main {
    font-family: 'Roboto', sans-serif;
}

h1 {
    color: #0088d5;
    text-align: center;
    padding-top: 15vh;
    font-weight: bold;
    font-size: 50px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    row-gap: 30px;
}
</style>