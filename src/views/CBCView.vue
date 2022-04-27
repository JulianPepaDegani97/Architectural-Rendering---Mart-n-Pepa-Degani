<template>
    <div class="container-div">
        <h1>Hotel San Vicente</h1>
    </div>
    <div class="container-div"><label for="view">Select the view of the images</label>
<Select v-model="view" /></div>
    <CBC v-show="view === 'Gallery'" :img="{img, img2, img3, img4, img5, img6, img7, img8, img9, img10}" />
    <CBCCarousel v-show="view === 'Carousel'" :img="{img2, img3, img4, img5, img6, img7, img8, img9, img10}" :img2="img"  />
    <Description />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CBC from '@/components/CBC.vue';
import CBCCarousel from '@/components/CBCCarousel.vue';
import Select from '@/components/SelectView.vue';
import Description from '@/components/DescriptionSV.vue'
const Img: string = require('@/assets/san-vicente/outter.jpg')
const Img2: string = require('@/assets/san-vicente/RENDER-1.png')
const Img3: string = require('@/assets/san-vicente/RENDER-2.png')
const Img4: string = require('@/assets/san-vicente/RENDER-3.png')
const Img5: string = require('@/assets/san-vicente/RENDER-4.png')
const Img6: string = require('@/assets/san-vicente/RENDER-5.png')
const Img7: string = require('@/assets/san-vicente/RENDER-6.png')
const Img8: string = require('@/assets/san-vicente/RENDER-7.png')
const Img9: string = require('@/assets/san-vicente/RENDER-8.png')
const Img10: string = require('@/assets/san-vicente/RENDER.png')
export default defineComponent({
  name: "contact",
  components: {
      CBC,
      CBCCarousel,
      Select,
      Description
  },
  data(){
      return {
          img: Img,
          img2: Img2,
          img3: Img3,
          img4: Img4,
          img5: Img5,
          img6: Img6,
          img7: Img7,
          img8: Img8,
          img9: Img9,
          img10: Img10,
          view: "Gallery"
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