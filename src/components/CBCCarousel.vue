<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="img2" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" v-for="(im, index) in img" :key="index">
      <img :src="im" class="d-block w-100" alt="...">
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sanpedro",
  props: {
    img: [String],
    img2: String
  },
});
</script>
<style lang="scss" scoped>
  .carousel-item {
    max-height:800px;
  }
</style>