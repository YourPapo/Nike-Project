<template>
  <div>
    <header class="products-header" :class="{ 'header-hidden': isHidden }">
      <h1 class="category-title" v-if="categories.length">
        Products for {{ categories.join(", ") }}
      </h1>
      <h1 class="category-title" v-else>See our products</h1>
      <button class="filter-button" @click="toggleFilter">Search</button>
      <select class="sort-select" v-model="sortOrder">
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
    </header>
    <v-filter-pannel
      :isOpen="isFilterOpen"
      :products="products"
      @search-update="handleSearchUpdate"
      @category-update="handleCategoryUpdate"
    />
    <div class="content" :style="{ marginLeft: contentMargin + 'px' }">
      <div class="products-list">
        <div
          class="product-card"
          v-for="product in sortedAndFilteredProducts"
          :key="product.id"
        >
          <v-product-card :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VFilterPannel from "../UI/vFilterPannel.vue";
import VProductCard from "../UI/vProductCard.vue";
import "./ProductList.scss";

export default {
  components: {
    VProductCard,
    VFilterPannel,
  },
  data() {
    return {
      categories: [],
      sortOrder: "newest",
      isFilterOpen: false,
      contentMargin: 0,
      searchQuery: "",
      selectedCategory: "",
      isHidden: false,
      lastScrollY: 0,
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.updateCategories();
  },
  watch: {
    "$route.query.category": {
      immediate: true,
      handler() {
        this.updateCategories();
      },
    },
  },
  methods: {
    updateCategories() {
      const categoryQuery = this.$route.query.category || "";
      this.categories = categoryQuery.split(":").filter((cat) => cat);
      if (this.categories.length > 0) {
        this.selectedCategory = this.categories[0];
      } else {
        this.selectedCategory = "";
      }
    },
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
      this.handleFilterToggle(this.isFilterOpen);
    },
    handleFilterToggle(isOpen) {
      this.contentMargin = isOpen ? 300 : 0;
    },
    handleSearchUpdate(query) {
      this.searchQuery = query;
    },
    handleCategoryUpdate(category) {
      this.selectedCategory = category;
    },
    handleScroll() {
      if (window.scrollY > this.lastScrollY) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
      this.lastScrollY = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    sortedAndFilteredProducts() {
      let result = this.products;
      if (this.selectedCategory) {
        result = result.filter((product) =>
          product.categories.includes(this.selectedCategory)
        );
      }
      if (this.searchQuery) {
        result = result.filter((product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      if (this.sortOrder === "price-low-high") {
        result = result.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === "price-high-low") {
        result = result.sort((a, b) => b.price - a.price);
      } else if (this.sortOrder === "newest") {
        result = result.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return result;
    },
  },
};
</script>
