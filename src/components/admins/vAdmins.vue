<template>
  <div class="admin-container" v-if="isAuthenticated && isAdmin">
    <v-admins-header @setActiveComponent="setActiveComponent" />
    <div>
      <slot />
    </div>
    <div class="animate-flip-down">
      <v-product-list />
    </div>
  </div>
  <div v-else>
    <p class="text-red-700">You do not have access to this page!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VAdminsHeader from "./vAdminsHeader.vue";
import VProductList from "./vProductList.vue";

export default {
  name: "AdminPage",
  components: { VAdminsHeader, VProductList },
  computed: {
    ...mapGetters(["isAuthenticated", "user"]),
    isAdmin() {
      return this.user && this.user.role === "admin";
    },
  },
  methods: {
    setActiveComponent(component) {
      this.$emit("setActiveComponent", component);
    },
  },
  created() {
    if (!this.isAuthenticated || !this.isAdmin) {
      this.$router.push("/auth");
    }
  },
};
</script>

<style scoped>
.admin-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
