<template>
<h1>Projects</h1>
    <Grid :img="img" :img2="img2" :img3="img3" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Grid from '@/components/ProjectGrid.vue';
const Img: string = require('@/assets/san-pedro/imagen-principal.jpg')
const Img2: string = require('@/assets/san-vicente/RENDER-1.png')
const Img3: string = require('@/assets/vivienda-unifamiliar/RENDER-EXTERIOR-2.jpg')
export default defineComponent({
  name: "project",
  components: {
      Grid
  },
  data(){
      return {
          img: Img,
          img2: Img2,
          img3: Img3
      }
  }
});
</script>