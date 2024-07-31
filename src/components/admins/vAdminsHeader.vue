<template>
  <div class="admin-header animate-duration-350 animate-fade-right">
    <button @click="setComponent('VAdminsAddProduct')">Add Product</button>
    <button @click="setComponent('VAdminsEditProduct')">Edit Product</button>
    <button @click="setComponent('VAdminsUsers')">Show Users</button>
  </div>
</template>

<script>
export default {
  methods: {
    setComponent(component) {
      this.$emit("setActiveComponent", component);
    },
  },
};
</script>

<style scoped lang="scss">
.admin-header {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #242328;
  border-radius: 10px 10px 0 0;
  color: #fff;

  & button {
    font-family: raydis;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
      background-color: #333;
    }
  }
}
</style>
