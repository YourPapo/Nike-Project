<template>
  <div class="products">
    <v-products :products="products" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VProducts from "../components/products/vProducts.vue";

export default {
  components: {
    VProducts,
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.products {
  margin-top: 40px;
  min-height: 100dvb;
}
</style>
