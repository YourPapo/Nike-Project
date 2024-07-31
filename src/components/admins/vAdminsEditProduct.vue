<template>
  <div class="edit-product">
    <h2>Редактировать продукт</h2>
    <v-product-form
      :initialProduct="editableProduct"
      @submit="updateProduct"
    ></v-product-form>

    <div class="search-wrapper">
      <input v-model="searchInp" type="text" placeholder="Search..." />
    </div>

    <div class="card-container">
      <div v-for="product in filteredProducts" :key="product.id" class="card">
        <div class="edit__item">
          <p class="edit__item-name">{{ product.name }}</p>
          <p class="edit__item-price">Price: {{ product.price }}$</p>
          <p class="edit__item-categoty">
            Categories: {{ product.categories.join(", ") }}
          </p>
        </div>
        <div class="btn-container">
          <button class="edit" @click="editProduct(product)">Edit</button>
          <button class="delete" @click="deleteProduct(product.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./styles/AdminsEdit.scss";
import { mapGetters, mapActions } from "vuex";
import VProductForm from "./vProductForm.vue";

export default {
  components: {
    VProductForm,
  },
  data() {
    return {
      editableProduct: null,
      searchInp: "",
    };
  },
  computed: {
    ...mapGetters(["productData"]),
    filteredProducts() {
      if (this.searchInp) {
        return this.productData.filter(
          (product) =>
            product.name &&
            product.name.toLowerCase().includes(this.searchInp.toLowerCase())
        );
      }
      return this.productData;
    },
  },
  methods: {
    ...mapActions([
      "fetchProducts",
      "deleteProduct",
      "addProduct",
      "updateProduct",
    ]),
    editProduct(product) {
      this.editableProduct = { ...product };
    },
    deleteProduct(productId) {
      this.$store.dispatch("deleteProduct", productId);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
