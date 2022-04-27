<template>
  <div class="contenedor" :style="{ 'background-image': 'url(' + img + ')' }">
    <div class="contenedor-texto">
      <h1>Architectural Renderings | Martín Pepa Degani</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    img: String,
    img2: String,
    img3: String,
    img4: String,
  },
});
</script>


<style scoped lang="scss">
.contenedor {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  .contenedor-texto {
    width: 100%;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.503);
    color: white;
    padding: 1rem;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.503);

    h1 {
      font-size: 30px;
    }

  }
}
</style>
