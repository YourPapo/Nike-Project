<template>
  <div
    class="product-form animate-fade-up animate-duration-350 animate-delay-[600ms]"
  >
    <form @submit.prevent.stop="submitForm" class="form">
      <div class="form-group">
        <label for="name" class="label">Product name:</label>
        <input
          type="text"
          v-model="product.name"
          id="name"
          class="input"
          required
        />
      </div>

      <div class="form-group">
        <label for="price" class="label">Product price:</label>
        <input
          type="number"
          v-model="product.price"
          id="price"
          class="input"
          required
        />
      </div>

      <div class="form-group">
        <label for="description" class="label">Product description:</label>
        <textarea
          v-model="product.description"
          id="description"
          class="textarea"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="category" class="label">Product categories:</label>
        <input
          type="text"
          v-model="product.categories"
          id="category"
          class="input"
          required
        />
      </div>

      <button type="submit" class="button">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["initialProduct"],
  data() {
    return {
      product: this.getDefaultProduct(),
      isSubmitting: false,
    };
  },
  watch: {
    initialProduct: {
      handler(newProduct) {
        if (newProduct && newProduct.categories) {
          this.product = {
            ...newProduct,
            categories: Array.isArray(newProduct.categories)
              ? newProduct.categories.join(", ")
              : "",
          };
        } else {
          this.product = this.getDefaultProduct();
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getDefaultProduct() {
      return {
        name: "",
        description: "",
        price: 0,
        categories: [],
        date: "",
        src: "",
      };
    },
    submitForm() {
      if (this.isSubmitting) return;

      const productToSubmit = {
        ...this.product,
        categories: this.product.categories.split(",").map((cat) => cat.trim()),
      };

      this.isSubmitting = true;
      this.$emit("submit", productToSubmit);

      this.resetForm();

      setTimeout(() => {
        this.isSubmitting = false;
      }, 1000);
    },
    resetForm() {
      this.product = this.getDefaultProduct();
    },
  },
};
</script>

<style scoped lang="scss">
.product-form {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form-group {
      display: flex;
      flex-direction: column;

      .label {
        font-size: 0.875rem;
        font-weight: 500;
        color: #4a5568;
      }

      .input,
      .textarea {
        margin-top: 0.25rem;
        width: 100%;
        border-radius: 0.375rem;
        border: 1px solid #d1d5db;
        padding: 0.5rem;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        transition: 0.3s ease-in-out;
        &:focus {
          border-color: #0e0f1b;
          outline: none;
          box-shadow: 0 0 0 3px rgba(12, 16, 49, 0.5);
        }
      }

      .textarea {
        resize: vertical;
      }
    }

    .button {
      font-family: raydis;
      width: 100%;
      padding: 0.5rem 1rem;
      background-color: #242328;
      color: #fff;
      border-radius: 0.375rem;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #1a202c;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(60, 64, 72, 0.5);
      }
    }
  }
}
</style>
