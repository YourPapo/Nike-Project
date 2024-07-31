<template>
  <div class="product">
    <div class="product-card">
      <img :src="product.src" :alt="product.name" class="product-card__image" />
      <div class="product-card__info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="product-card__info-price">${{ product.price }}</p>
        <p class="product-card__info-categories">
          Categories: {{ product.categories.join(", ") }}
        </p>
        <button class="product-card__button" @click="addToCart(product)">
          Add to Cart
        </button>
      </div>
    </div>
    <v-modal-basket
      :product="selectedProduct"
      :visible="isModalVisible"
      @close="isModalVisible = false"
    />
  </div>
</template>

<script>
import VModalBasket from "./vModalBasket.vue";

export default {
  components: {
    VModalBasket,
  },
  props: {
    product: { type: Object, required: true },
  },
  data() {
    return {
      isModalVisible: false,
      selectedProduct: {},
    };
  },
  methods: {
    addToCart(product) {
      const user = this.$store.getters.user;
      if (user && user.id) {
        this.$store.dispatch("addProductToCart", {
          product,
          userId: user.id,
        });
        this.selectedProduct = product;
        this.isModalVisible = true;
      } else {
        this.$router.push({ name: "Auth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  margin: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  &__image {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
    object-position: bottom;
  }

  &__info {
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-title {
      font-size: 1.5rem;
      font-weight: bolder;
      margin-bottom: 10px;
    }

    &-price {
      color: green;
      font-weight: bold;
    }

    &-categories {
      font-size: 0.8rem;
      color: #666;
      padding: 10px 0;
    }
  }

  &__button {
    padding: 10px;
    background-color: #242328;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4b4a4f;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }
}

@media (max-width: 768px) {
  .product-card {
    margin: 10px;
  }

  .product-card__info {
    padding: 8px;

    &-title {
      font-size: 1.3rem;
    }

    &-price {
      font-size: 1rem;
    }

    &-categories {
      font-size: 0.7rem;
      padding: 8px 0;
    }
  }

  .product-card__button {
    padding: 8px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .product-card__info {
    padding: 5px;

    &-title {
      font-size: 1.1rem;
    }

    &-price {
      font-size: 0.9rem;
    }

    &-categories {
      font-size: 0.6rem;
      padding: 6px 0;
    }
  }

  .product-card__button {
    padding: 5px;
    font-size: 0.8rem;
  }
}
</style>
