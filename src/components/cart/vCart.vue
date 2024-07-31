<template>
  <div class="cart-container">
    <div class="cart-content">
      <div v-if="showAdBanner" class="ad-banner">
        <p>
          Free Shipping for Members.
          <a href="#" class="underline">Join us</a> or
          <a href="#" class="underline">Sign-in</a>
        </p>
      </div>
      <div v-if="showDiscountBanner" class="discount-banner">
        <p>
          Bring the Heat | Up to 50% Off.
          <span>Use code CHILL25 to save an extra 25% off select styles.</span>
        </p>
        <button @click="closeDiscountBanner">×</button>
      </div>
      <div class="main-cart">
        <h2>Bag</h2>
        <p v-if="!this.isAuthenticated">Please create your account or login!</p>
        <ul>
          <vCartItem
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            @decrease="decreaseQuantity"
            @increase="increaseQuantity"
            @remove="removeItem"
          />
        </ul>
      </div>
    </div>
    <div class="checkout-summary">
      <h2>Summary</h2>
      <div class="summary-info">
        <div class="info-item">
          <p class="label">Subtotal</p>
          <p class="value">{{ cartTotal }}$</p>
        </div>
        <div class="info-item">
          <p class="label">Estimated Shipping & Handling</p>
          <p class="value">8$</p>
        </div>
        <div class="total">
          <p>Total</p>
          <p v-if="cartTotal > 0">{{ cartTotal }}$</p>
          <p v-else>Your cart is empty</p>
        </div>
        <div class="checkout-button">
          <button
            class="checkout"
            @click="this.$router.push({ name: 'Checkout' })"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./styles/Cart.scss";
import vCartItem from "./vCartItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    vCartItem,
  },
  data() {
    return {
      showAdBanner: true,
      showDiscountBanner: true,
    };
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "isAuthenticated"]),
  },
  methods: {
    ...mapActions([
      "fetchCart",
      "addProductToCart",
      "removeProductFromCart",
      "updateProductQuantity",
    ]),
    removeItem(productId) {
      const userId = this.$store.state.users.user.id;
      this.removeProductFromCart({ productId, userId });
      this.fetchCart(userId);
    },
    increaseQuantity(item) {
      const userId = this.$store.state.users.user.id;
      this.updateProductQuantity({
        productId: item.id,
        quantity: item.quantity + 1,
        userId,
      });
      this.fetchCart(userId);
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        const userId = this.$store.state.users.user.id;
        this.updateProductQuantity({
          productId: item.id,
          quantity: item.quantity - 1,
          userId,
        });
        this.fetchCart(userId);
      }
    },
    closeDiscountBanner() {
      this.showDiscountBanner = false;
    },
  },
  mounted() {
    const userId = this.$store.state.users.user.id;
    this.fetchCart(userId);
  },
};
</script>
