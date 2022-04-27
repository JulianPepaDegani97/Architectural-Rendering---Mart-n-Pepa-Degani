<template>
    <main>
        <h1>Contact me</h1>
        <Links />
        <Form :countries="data" />
        
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Form from '@/components/Form.vue';
import Links from '@/components/Links.vue';
import {mapActions, mapMutations, mapState} from 'vuex';
export default defineComponent({
  name: "contact",
  components: {
      Form,
      Links
  },
  created(){
    this.getData()
  },
  computed : {
    ...mapState(['data'])
  },

  methods :{
    ...mapMutations(['fillData']),
      ...mapActions(['getData'])
  }
});
</script>