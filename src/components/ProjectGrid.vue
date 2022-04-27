<template>
  <div class="contenedor">
    <div class="row row-cols-3">
      <router-link to="/sanpedro" class="col project1" :style="{'background-image': 'url('+img+')'}"><p>Hotel Boutique - San Pedro, Buenos Aires</p></router-link>
      <router-link to="/cbc" class="col" :style="{'background-image': 'url('+img2+')'}"><p>CBC Sede San Vicente</p></router-link>
      <router-link to="/vivienda-unifamiliar" class="col" :style="{'background-image': 'url('+img3+')'}"><p>Vivienda Unifamiliar</p></router-link>
     
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "grid",
  props: {
      img: String,
      img2: String,
      img3: String
  }
});
</script>

<style lang="scss" scoped>
router-link {
    text-decoration: none;
    

}
.contenedor {
    width: 100%;
    display: flex;
    justify-content: center;
    .row {
        
        width: 100%;
    gap: 1.5rem;
    margin: auto;
  .col {
    p {
        background-color: rgba(0, 0, 0, 0.477);
        color: white;
    }
    text-decoration: none;
    height: 350px;
    min-width: 350px;
    width: 45%;
    margin-left: 1.5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  
}
}
</style>