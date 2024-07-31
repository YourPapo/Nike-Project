<template>
  <div class="product-list">
    <h2>All Products</h2>
    <div class="product">
      <div
        class="product-card"
        v-for="product in productData"
        :key="product.id"
      >
        <div class="product-card-inner">
          <div class="product-card-front">
            <img :src="product.src" :alt="product.name" />
            <div class="product-info">
              <h3 class="title-name">{{ product.name }}</h3>
            </div>
          </div>
          <div class="product-card-back">
            <div class="product-card-back__info">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p class="category">
                Categories: {{ product.categories.join(" ,") }}
              </p>
              <p class="price">{{ product.price }} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./styles/ProductList.scss";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["productData"]),
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  created() {
    this.fetchProducts();
  },
};
</script>
