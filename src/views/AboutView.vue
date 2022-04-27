<template>
  <About :img="img" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from '@/components/About.vue';
const Img: string = require('@/assets/martin.jpeg')
export default defineComponent({
  name: "about",
  props: {},
  components: {
    About
  },
  data() {
    return {
      img: Img
    }
  }
});
</script>
