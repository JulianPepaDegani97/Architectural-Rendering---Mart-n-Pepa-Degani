<template> 

    <div class="container-div">
        <h1>Hotel Boutique</h1>
    </div>
    <div class="container-div select"><label for="view">Select the view of the images</label>
<Select v-model="view" /></div>
    <SanPedro v-show="view === 'Gallery'" :img="{img, img2, img3, img4, img5, img6}" />
     <SPCarousel v-show="view === 'Carousel'" :img="{img2, img3, img4, img5, img6}" :img2="img" />
     <Description/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SanPedro from '@/components/Unifamiliar.vue';
import SPCarousel from '@/components/UnifamiliarCarousel.vue';
import Description from '@/components/DescriptionVU.vue';
import Select from '@/components/SelectView.vue';
const Img: string = require('@/assets/vivienda-unifamiliar/cortes-y-vistas.jpg')
const Img2: string = require('@/assets/vivienda-unifamiliar/plantas.jpg')
const Img3: string = require('@/assets/vivienda-unifamiliar/render-exterior1.jpg')
const Img4: string = require('@/assets/vivienda-unifamiliar/RENDER-EXTERIOR-2.jpg')
const Img5: string = require('@/assets/vivienda-unifamiliar/RENDER-PATIO.jpg')
const Img6: string = require('@/assets/vivienda-unifamiliar/render-patio-2.jpg')
export default defineComponent({
  name: "contact",
  components: {
      SanPedro,
      SPCarousel,
      Description,
      Select
  },
  data(){
      return {
          img: Img,
          img2: Img2,
          img3: Img3,
          img4: Img4,
          img5: Img5,
          img6: Img6,
          view: 'Gallery'
      }
  }

});
</script>

<style lang="scss" >
    .container-div {
        display: flex;
        justify-content: left;
        //margin-left: 0;
    }
</style>