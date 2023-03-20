<template>
    <div class="box">
        <div class="img-container p-1 m-2">
            <img  :src="require('@/assets/' + imageName + '')" :alt="imageName">
        </div>
        <div class="box-title m-2 mb-3">
            <p>
                {{ title }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MassageWebsiteCard',
    props:["imageName", "title"],

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

<style lang="scss">
    .card {
        margin-bottom: 20px;
    }

    .img-container {
        width: 390px;
        height: 260px;
        // padding: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.15);

        img {
            width: 100%;
            object-fit: contain;
        }
        
    }

    .box-title {
        width: 390px;
        color: #0088d5;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
        text-align: center;
        height: 80px;

        p {
            font-size: 30px;
            font-weight: bold;  
            margin: 0;
        }
    }
</style>