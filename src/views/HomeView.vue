<template>
  <v-main class="home">
    
    <HelloWorld  :img="img" :img2="img2" :img4="img4" />
    <Section :img2="img2" />
    <Section2 :img3="img3" />
  </v-main>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
//const Img: string = require('@/assets/design8.jpg')
const Img: string = require('@/assets/san-pedro/imagen-principal.jpg')
const Img2: string = require('@/assets/design3.jpg')
const Img3: string = require('@/assets/design5.jpg')
const Img4: string = require('@/assets/san-vicente/outter.jpg')

import HelloWorld from '@/components/HelloWorld.vue';
import Section from '@/components/Section.vue';
import Section2 from '@/components/Section2.vue';


export default defineComponent({
  
  name: 'HomeView',
  components: {
    HelloWorld,
    Section,
    Section2
  },
  data(){
    return {
      img: Img,
      img2: Img2,
      img3: Img3,
      img4: Img4
    }
  }
});
</script>
