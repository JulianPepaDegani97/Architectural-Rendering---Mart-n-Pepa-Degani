<template>
  <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
    <router-link class="router text-white" to="/">Home</router-link>
    <router-link class="router text-white" to="/projects">Projects</router-link>
    <router-link class="router text-white" to="/about">About</router-link>
    <router-link class="router text-white" to="/contact">Contact</router-link>
  </nav>
</template>



<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "navbar",
});
</script>

<style lang="scss">
// bg-danger bg-gradient
$navbar: radial-gradient(rgb(128, 38, 38), rgb(116, 13, 13));
.navbar {
  background: $navbar;

  padding: 1.5rem 0;
  .router {
    color: white !important;
    margin-right: 2.5rem;
    text-decoration: none;
  }
}
@media (max-width: 780px) {
  .navbar {
    display: flex;
    flex-direction: column;

    .router {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
