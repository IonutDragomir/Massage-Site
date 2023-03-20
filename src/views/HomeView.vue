<template>
  <div>
    <div class="home">

      <h1 class="title">Sports & Injury Massage of DE</h1>
      <h3>Treatment for Auto and Worker's Compensation Injury Recovery</h3>
      <p class="description mb-5">Sports & Injury Massage of DE specializes in the treatment of soft tissue injuries
        related to personal, auto, and
        work accidents. Medical massage is a treatment modality that can relieve pain, increase range of motion, and
        improve
        quality of life. We work in collaboration with physicians, chiropractors, physical and occupational therapists,
        health care providers, and insurers to create an effective treatment plan.</p>
        <a href="#intro">
          <button type="button" class="btn  mt-5 btn-lg">Learn more</button>
        </a>
      

    </div>
      <div class="intro" id="intro">
      <h2 class="intro-title">Treatments & Techniques</h2>
      <p class="intro-description">We use a variety of massage techniques to reduce inflamed muscles, strengthen
        overstretched muscles, lengthen the shortened muscles, and break down scar tissue. In conjunction with referring
        doctors, patients will experience a focused and detailed treatment plan to isolate and manipulate the affected
        areas. These techniques promote better circulation and increased range of motion to restore muscle balance.
      </p>
    </div>

    <div class="carousel-container pb-2">
      <carousel 
        :per-page="1" 
        :mouse-drag="true" 
        autoplay
        :loop="true" 
        :navigation-enabled="false"
        paginationActiveColor="#2a63ab"  
        class="carousel"
        paginationPosition="top-overlay"
        easing="ease-in-out"
        >
        <slide>
          <div class="row slider-container">
            <div class="col-md-6 sllider-description">
              <h3 class="slider-title">Trigger Point Therapy</h3>
              <p>Consists of rubbing and pressing on trigger points to relieve tension and knots.</p>
            </div>
            <div class="col-md-6 slider-img">
              <img src="../assets/carousel1.png" alt="Slide 1">
            </div>
          </div>
        </slide>
        <slide>
          <div class="row slider-container">
            <div class="col-md-6 sllider-description">
              <h3 class="slider-title">Deep Tissue Massage</h3>
              <p>Deep Tissue Massage is a healing technique based on the principle of free and uninterrupted
                energy flow and helps activate the natural healing processes in each patient's body as well as to restore
                their physical and emotional well-being. As a certified Massage Therapist, I help patients reduce their
                stress and anxiety, among other ailments.</p>
            </div>
            <div class="col-md-6 slider-img">
              <img src="../assets/carousel2.png" alt="Slide 2">
            </div>
          </div>
        </slide>
        <slide>
          <div class="row slider-container">
            <div class="col-md-6 sllider-description">
              <h3 class="slider-title">Reflexology</h3>
              <p>With my Reflexology therapy, patients claim to feel relaxed and renewed after each session.
                I’m trained in a variety of techniques, so I tailor your session to work on your specific goals and needs.
                I love showing my patients how just a few treatments can make an enormous difference to their health.</p>
            </div>
            <div class="col-md-6 slider-img">
              <img src="../assets/carousel3.png" alt="Slide 3">
            </div>
          </div>
        </slide>
        <slide>
          <div class="row slider-container">
            <div class="col-md-6 sllider-description">
              <h3 class="slider-title ps-2">Positional Release Technique</h3>
              <p>Very specialized technique focusing on treating protective muscle spasm in the body. This
                technique involves finding a tender point in the patient's body (muscles, ligaments, tendons, and joints)
                and then moving the patient's body or body part away from the restricted motion barrier and towards the
                position of greatest comfort.</p>
            </div>
            <div class="col-md-6 slider-img">
              <img src="../assets/carousel4.png" alt="Slide 4">
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "HomeView",
  components: {
    Carousel,
    Slide
  }
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  // height: 800px;
  height: 100vh;
  background-color: #074f57;
  color: ghostwhite;
  margin-top: 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  position: relative;
  isolation: isolate;

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

.home::after {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: url('../assets/massage-home-background.jpg');
  opacity: .80;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  color: #fff;
  padding: 15vh 0 10vh 0;
  font-size: 100px;
  font-weight: bold;
  display: inline-block;
  width: 45%;

}

h3 {
  font-weight: bold;
  margin-bottom: 100px;
  font-size: 35px;
}

.description {
  text-align: center;
  // width: 90%;
  margin: 10px auto;
  font-size: 21px;
  width: 55%;
  line-height: 43px;
}



.intro {
  .intro-title {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    color: #0088d5;
    font-family: 'Roboto', sans-serif;
    margin-top: 70px;
  }

 
}

.intro-description {
    margin: 30px auto;
    padding: 30px 0 50px 0;
    text-align: center;
    font-size: 21px;
    width: 55%;
    line-height: 43px;
  }

.carousel-container {
  background-color: #0088d5;
  height: 485px;
}

.slider-container {
  background-color: #0088d5;
  height: 485px;

  .sllider-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    padding-left: 350px;

    .slider-title {
      font-size: 35px;
    }

    p {
      font-size: 19px;
      text-align: start;
    }
  }

  .slider-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110%;

    img {
      height: 75%;
      border-radius: 10px;
    }
  }


}
</style>
