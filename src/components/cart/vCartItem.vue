<template>
  <li class="cart-item">
    <div class="cart-item-container">
      <div class="cart-item-image">
        <img :src="item.src" alt="Product image" />
      </div>
      <div class="cart-item-info">
        <h3 class="cart-item-title">{{ item.name }}</h3>
        <p class="cart-item-description">{{ item.description }}</p>
        <p class="cart-item-price">{{ item.price }}$</p>
        <div class="quantity-control">
          <button @click="decreaseQuantity(item)" class="quantity-button">
            -
          </button>
          <p class="quantity">{{ item.quantity }}</p>
          <button @click="increaseQuantity(item)" class="quantity-button">
            +
          </button>
        </div>
      </div>
      <button @click="removeItem(item.id)" class="remove-button">
        Удалить
      </button>
    </div>
  </li>
</template>

<script>
import "./styles/CartItem.scss";
export default {
  props: {
    item: Object,
  },
  methods: {
    decreaseQuantity(item) {
      this.$emit("decrease", item);
    },
    increaseQuantity(item) {
      this.$emit("increase", item);
    },
    removeItem(itemId) {
      this.$emit("remove", itemId);
    },
  },
};
</script>
