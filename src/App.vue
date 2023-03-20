<template>
  <div id="app">
    <Header />
    
    <Transition name="fade">
      <router-view />
    </Transition>

    <!-- <Transition name="footer-fade">
      <Footer />
    </Transition> -->

    <Footer />
    
    
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'MassageWebsiteApp',
  components: {
    Header,
    Footer
  },

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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  }

  .fade-enter-active {
    transition-delay: 0.5s;
  }

  .fade-enter {
    opacity: 0;
    transform: translateY(-100px);
  }

  .fade-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }

  .fade-leave {
    opacity: 1;
    transform: translateY(0px);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }


  // footer trransition
  .footer-fade-enter-active, .footer-fade-leave-active {
    // transition: opacity 0.5s ease-in-out, transform 0.5s ease;
    transition: opacity 1s ease-in-out;
  }

  .footer-fade-enter-active {
    transition-delay: 1s;
  }

  .footer-fade-enter {
    opacity: 0;
    // transform: translateY(-100px);
  }

  .footer-fade-enter-to {
    opacity: 1;
    // transform: translateY(0px);
  }

  .footer-fade-leave {
    opacity: 1;
    // transform: translateY(0px);
  }

  .footer-fade-leave-to {
    opacity: 0;
    // transform: translateY(-100px);
  }


</style>
