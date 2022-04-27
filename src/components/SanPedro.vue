<template>
  <div class="container">
    <div class="row">
      <template v-for="(im, index) in img" :key="index">
        <div
          class="col"
          :style="{ 'background-image': 'url(' + im + ')' }"
        ></div>
      </template>
    </div>
  </div>
  
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sanpedro",
  props: {
    img: [String],
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin: 3rem auto;
}
.row {
  gap: 3px;
}
.col {
  gap: 3px;
  p {
    background-color: rgba(0, 0, 0, 0.477);
    color: white;
  }
  text-decoration: none;
  height: 350px;
  min-width: 350px;
  // width: 45%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>