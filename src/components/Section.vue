<template>
  <section>
    <div class="div-img">
      <img :src="img2" alt="Foto de diseño" />
    </div>

    <div class="div-text">
     <h3>
         Architectural representations with 3D and 2D models, in photorealistic renderings.
      </h3>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "section",
  props: {
    img2: String,
  },
});
</script>

<style lang="scss">
section {
  width: 100%;
  padding: 0;
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
  .div-img {
    width: 40%;
    min-width: 350px;
   
    img {
      width: 100%;
    }
  }
  .div-text {
    max-width: 650px;
    text-align: left;
    
    h3 {
      padding: 1rem;
      
     
    }
  }
}
</style>