<template> 

    <div class="container-div">
        <h1>Hotel Boutique</h1>
    </div>
    <div class="container-div select"><label for="view">Select the view of the images</label>
<Select v-model="view" /></div>
    <SanPedro v-show="view === 'Gallery'" :img="{img, img2, img3, img4, img5}" />
     <SPCarousel v-show="view === 'Carousel'" :img="{img2, img3, img4, img5}" :img2="img" />
     <Description/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SanPedro from '@/components/SanPedro.vue';
import SPCarousel from '@/components/SanPedroCarousel.vue';
import Description from '@/components/DescriptionSP.vue';
import Select from '@/components/SelectView.vue';
const Img: string = require('@/assets/san-pedro/imagen-principal.jpg')
const Img2: string = require('@/assets/san-pedro/EDITADO1.jpg')
const Img3: string = require('@/assets/san-pedro/EDITADO2.jpg')
const Img4: string = require('@/assets/san-pedro/EDITADO3.jpg')
const Img5: string = require('@/assets/san-pedro/EDITADO4.jpg')
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