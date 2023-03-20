<template>
  <div class="about">
    
    <div class="container">
      
      <div class=" col-md-5 me-5 description-container">
        <h1>About Myself</h1>
        <p class="name">Steve Wainaina</p>
        <p class="description">I've been a licensed Massage Therapist for over 10 years, focusing on helping patients recover and relieve pain
        from auto accidents and worker's compensation claims. I work closely with several physician's to ensure my
        patients experience a clear and transparent treatment plan according to their doctor's prescription and
        recommendations.
      </p>
      <p class="description">I take a collaborative approach with insurance adjusters, physicians, and attorney's to ensure my patients
        receive the appropriate care, by completing a thorough intake consultation.</p>
      <p class="description">
        I also practice therapeutic massage, focusing on various modalities, including Swedish Massage, Deep Tissue, and
        Reflexology. </p>
      </div>
      <div class="col-md-4 ms-5 img-container">
        <img  src="../assets/myPhoto.png" alt="My picture">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MassageWebsiteAboutView',

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

.container {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding-top: 21vh;
}

  .about {
    height: 80.1vh;
  }

  h1 {
    color: #0088d5;
    font-size: 50px;
    font-weight: bold;
  }

  

  .description-container {
    display: inline-block;
    text-align: justify;
    .name {
      color: #00d700;
      font-size: 20px;
      font-weight: 600;
    }

    .description {
      width: 30vw;
      line-height: 28px;
    }
  }

  .img-container {
    border-radius: 30px;
    height: 335px;
    width: 18vw;
    margin-top: 8vh;

    img {
      object-fit: unset;
      border-radius: 30px;
      height: 335px;
    }
  }
</style>