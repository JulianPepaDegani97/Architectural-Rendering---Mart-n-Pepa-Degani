<template>
  <section>
    

    <div class="div-text">
      <h3>
        Creation of digital and paper architectural plans, in any of its stages.
      </h3>
    </div>
    <div class="div-img">
      <img :src="img3" alt="Foto de diseño" />
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "section2",
  props: {
    img3: String,
  },
});
</script>