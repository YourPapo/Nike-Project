<template>
  <div class="cart-item">
    <img :src="item.src" alt="Product Image" />
    <div class="details">
      <p class="name">{{ item.name }}</p>
      <p>Qty: {{ item.quantity }}</p>
      <div class="price-info">
        <p class="price">{{ item.price }}$</p>
        <p class="price-total">
          Total: {{ (item.quantity * item.price).toFixed(2) }}$
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 80px;
    height: auto;
    margin-right: 1rem;
  }

  .details {
    & .name {
      font-family: Raydis;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      &.price {
        color: rgb(29, 178, 84);

        &-total {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
