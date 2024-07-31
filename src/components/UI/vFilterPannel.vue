<template>
  <div :class="['filter-panel', { 'filter-panel--open': isOpen }]">
    <div class="filter-content">
      <div class="search-pannel">
        <h1 class="title">Enter name of product</h1>
        <input
          class="inp"
          type="text"
          v-model="searchQuery"
          @input="sendSearchQuery"
          placeholder="Search products..."
        />
      </div>
      <div class="categories">
        <button
          v-for="category in uniqueCategories"
          :key="category"
          @click="selectCategory(category)"
          :class="{ selected: category === selectedCategory }"
          class="category-btn"
        >
          {{ category }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isOpen", "products"],
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      uniqueCategories: [],
    };
  },
  watch: {
    products: {
      handler(newProducts) {
        const categories = new Set();
        newProducts.forEach((product) => {
          if (product.categories) {
            product.categories.forEach((category) => categories.add(category));
          }
        });
        this.uniqueCategories = Array.from(categories);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    sendSearchQuery() {
      this.$emit("search-update", this.searchQuery);
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.$emit("category-update", category);
    },
  },
};
</script>

<style scoped lang="scss">
.filter-panel {
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0px 15px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }

  .search-pannel {
    background: #fafafa;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

    .title {
      font-size: 18px;
      text-align: center;
      margin-bottom: 3px;
    }
  }

  .categories {
    margin-top: 20px;
  }

  .category-btn {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    background: #f0f0f0;
    cursor: pointer;
    text-align: left;
    transition: 0.3s;
    box-shadow: rgb(205, 208, 210) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

    &:hover {
      background: #c7c7c7c0;
    }
  }

  .selected {
    box-shadow: none;
    background: #242328;
    color: white;
  }
}

.filter-panel--open {
  transform: translateX(0);
}

.filter-content {
  margin-top: 140px;
}
</style>
