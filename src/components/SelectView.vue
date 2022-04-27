<template>
  <select name="view" id="view" v-model="view">
    <template v-if="view === 'Carousel'">
      <option value="Gallery" selected>Gallery</option>
    </template>
    <template v-else>
      <option value="Carousel">Carousel</option>
    </template>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "select",
});
</script>

<style lang="scss" scoped>
$navbar: radial-gradient(rgb(128, 38, 38), rgb(116, 13, 13));
#view {
    margin-left: 0;
  color: white;
  background: $navbar;
  option {
    background: $navbar;
    color: black;
  }
}
</style>