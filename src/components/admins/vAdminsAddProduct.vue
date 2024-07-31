<template>
  <div
    class="add-product animate-fade-left animate-duration-350 animate-delay-300"
  >
    <h2>Add new product</h2>
    <v-product-form @submit="addProducts" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VProductForm from "./vProductForm.vue";

export default {
  components: {
    VProductForm,
  },
  methods: {
    ...mapActions(["addProduct"]),
    addProducts(product) {
      console.log(product);
      this.addProduct(product);
    },
  },
};
</script>

<style scoped>
.add-product {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0 0 10px 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.add-product h2 {
  font-family: raydis;
  margin-bottom: 1.5rem;
  color: #111;
}
</style>
