<template>
  <section class="consult-section">
    <h2>Ask for a budget</h2>
    <form class="row g-3">
      <div class="mb-3 row">
        <label for="full-name" class="col-sm-2"
          >Full name:<span class="required">*</span></label
        >
        <div class="col-sm-10">
          <input
            v-model="fullName"
            type="text"
            autofocus
            required
            class="form-control"
            id="full-name"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="email" class="col-sm-2"
          >Email:<span class="required">*</span></label
        >
        <div class="col-sm-10">
          <input
            type="email"
            v-model="email"
            required
            class="form-control"
            id="email"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="country" class="col-sm-2"
          >Country:<span class="required">*</span></label
        >
        <div class="col-sm-10">
          <select id="country" class="form-select" v-model="dial_code">
            <option :value="country.dial_code" v-for="(country, index) in countries.data" :key="index">
              {{ country.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="mb-3 row">
        <label for="phone" class="col-sm-2"
          >Phone number:<span class="required">*</span></label
        >
        <div class="col-sm-10">
          <input style="width: 20%;" type="text" :value="dial_code" disabled>
          <input
            type="text"
            v-model="phone"
            required
            class="form-control"
            id="phone"
           
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="description" class="col-sm-2"
          >Description:<span class="required">*</span></label
        >
        <div class="col-sm-10">
          <textarea
            v-model="textarea"
            name="description"
            class="form-control"
            id="description"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
      </div>

      <div class="mb-3 row">
        <label for="file" class="col-sm-2">Upload a file (optional):</label>
        <div class="col-sm-10">
          <input type="file" id="file" />
        </div>
      </div>

      <button class="btn btn-primary" @click="submit()" type="submit">
        Submit
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";
import swal from "sweetalert";


export default defineComponent({
  name: "form",
  props: {
    countries: {},
  },
  components: {
    Modal,
  },
  data() {
    return {
      fullName: "",
      email: "",
      phone: "",
      textarea: "",
      dial_code: ""
    };
  },
  created(){
    this.dial()
  },
  methods: {
    dial(){
      


    },
    submit() {
      if (this.fullName && this.email && this.phone && this.textarea) {
        swal({
          title: "Sent successfully",
          text: "Our team will get in touch with you soon!",
          icon: "success",
        });
      }
    },
  },
});
</script>


<style lang="scss" scoped>
.consult-section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  h2 {
    display: block;
    width: 100%;
    text-align: center;
  }
}

form {
  min-width: 350px;
  width: 50%;
  padding: 0;
  margin: auto;
  .mb-3 {
    padding-right: 0;
  }
  .col-sm-10 {
    display: flex;
    justify-content: flex-start;
    padding: 0;
  }
  input {
    margin-left: 0;
    padding: 0;
  }
  .required {
    color: red;
  }
}

label {
  text-align: left;
  padding: 0;
}
</style>



