<template>
  <div class="modal animate-fade" v-if="visible">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Added to Bag</h2>
      <div class="product-details">
        <img :src="product.src" :alt="product.name" class="product-image" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>${{ product.price }}</p>
        </div>
      </div>
      <div class="modal-actions">
        <button class="view-bag" @click="viewBag">
          View Bag ({{ cartItemCount }})
        </button>
        <button
          class="checkout"
          @click="this.$router.push({ name: 'Checkout' })"
        >
          Checkout
        </button>
      </div>
      <p class="modal-footer">
        Members get free shipping on orders $50+. Join Us or Sign-in.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    visible: Boolean,
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItems.length;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    viewBag() {
      this.$router.push({ name: "Cart" });
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.product-details {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.product-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.view-bag,
.checkout {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-bag {
  background-color: white;
  border: 1px solid black;
}

.checkout {
  background-color: black;
  color: white;
}

.modal-footer {
  font-size: 0.9rem;
  text-align: center;
}
</style>
