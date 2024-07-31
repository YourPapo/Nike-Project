<template>
  <div class="checkout-container animate-fade">
    <div class="delivery-options">
      <h2>Delivery Options</h2>
      <div class="delivery-methods animate-fade-right">
        <button
          :class="{ active: deliveryMethod === 'ship' }"
          @click="setDeliveryMethod('ship')"
        >
          <i class="fas fa-truck"></i> Ship
        </button>
        <button
          :class="{ active: deliveryMethod === 'pickup' }"
          @click="setDeliveryMethod('pickup')"
        >
          <i class="fas fa-map-marker-alt"></i> Pick Up
        </button>
      </div>
      <div class="address-types animate-fade-right">
        <button
          :class="{ active: addressType === 'home' }"
          @click="setAddressType('home')"
        >
          Home/Office
        </button>
        <button
          :class="{ active: addressType === 'apo' }"
          @click="setAddressType('apo')"
        >
          APO/FPO
        </button>
      </div>
      <v-delivery-form
        class="animate-fade-up animate-delay-200"
        :firstName="firstName"
        :lastName="lastName"
        :address="address"
        :email="email"
        :phoneNumber="phoneNumber"
        @update:firstName="firstName = $event"
        @update:lastName="lastName = $event"
        @update:address="address = $event"
        @update:email="email = $event"
        @update:phoneNumber="phoneNumber = $event"
        @save-and-continue="saveAndContinue"
      />
    </div>
    <div class="bag-summary">
      <div class="animate-flip-down animate-delay-200">
        <h2>In Your Bag</h2>
        <div class="summary-details">
          <p>
            Subtotal <span>{{ cartTotal }}$</span>
          </p>
          <p>Estimated Shipping <span>$8.00</span></p>
          <p>Estimated Tax <span>$0.00</span></p>
          <p>
            Total <span>{{ cartTotal }}$</span>
          </p>
        </div>
        <div class="delivery-date">
          Arrives by <strong>'{{ deliveryDate }}'</strong>
        </div>
      </div>
      <div class="product-summary animate-flip-up animate-delay-[400ms]">
        <VCheckoutItem v-for="item in cartItems" :key="item.id" :item="item" />
      </div>
    </div>
    <v-checkout-modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h2>Order Confirmation</h2>
      </template>
      <template v-slot:body>
        <p>
          Thank you for your order,
          <strong>{{ firstName }} {{ lastName }}</strong
          >!
        </p>
        <p>
          We have sent a confirmation email to <strong>{{ email }}</strong
          >.
        </p>
        <p>
          Your order will be shipped to <strong>{{ address }}</strong
          >.
        </p>
      </template>
      <template v-slot:footer>
        <button class="close" @click="showModal = false">Close</button>
      </template>
    </v-checkout-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VCheckoutItem from "./vCheckoutItem.vue";
import VCheckoutModal from "./vCheckoutModal.vue";
import VDeliveryForm from "./vDeliveryForm.vue";

export default {
  components: {
    VCheckoutItem,
    VCheckoutModal,
    VDeliveryForm,
  },
  data() {
    return {
      deliveryMethod: "ship",
      addressType: "home",
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNumber: "",
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal"]),
    deliveryDate() {
      const today = new Date();
      const deliveryDate = new Date(today.setDate(today.getDate() + 5));
      return deliveryDate.toDateString();
    },
  },
  methods: {
    ...mapActions(["fetchCart"]),
    setDeliveryMethod(method) {
      this.deliveryMethod = method;
    },
    setAddressType(type) {
      this.addressType = type;
    },
    saveAndContinue() {
      this.showModal = true;
    },
  },
  async mounted() {
    const userId = this.$store.state.users.user.id;
    await this.fetchCart(userId);
  },
};
</script>

<style lang="scss" scoped>
.checkout-container {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  padding: 32px;
  flex-wrap: wrap;
  .delivery-options {
    width: 60%;

    & h2 {
      font-family: raydis;
      font-size: 20px;
    }

    .delivery-methods {
      display: flex;
      button {
        flex: 1;
        padding: 16px;
        margin-right: 7px;
        &.active {
          border: 1px solid #000;
          border-radius: 3px;
        }
        i {
          margin-right: 7px;
        }
      }
    }
    .address-types {
      display: flex;
      margin-top: 1rem;
      button {
        flex: 1;
        padding: 7px;
        margin-right: 7px;
        &.active {
          border: 1px solid #000;
          border-radius: 3px;
        }
      }
    }
  }

  .close {
    background: #242328;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    transition: 0.3s;

    &:hover {
      background: #a8a8a8;
    }
  }

  .bag-summary {
    width: 35%;

    & h2 {
      margin-top: 20px;
      font-family: raydis;
      font-size: 20px;
    }

    .summary-details {
      p {
        display: flex;
        justify-content: space-between;
        span {
          font-weight: bold;
        }
      }
    }
    .delivery-date {
      margin-top: 15px;
      strong {
        font-weight: bold;
      }
    }
    .product-summary {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    .delivery-options {
      width: 100%;
    }
    .bag-summary {
      width: 100%;
    }
  }
}
</style>
