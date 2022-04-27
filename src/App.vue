<template>

  <NavBar />
  <router-view/>
  <Footer />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
export default defineComponent({
  
  components: {
    NavBar,
    Footer
  }
});
</script>

<style lang="scss">
[cloak] {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

</style>
