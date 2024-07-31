<template>
  <div class="admin-page mt-20" v-if="isAdmin">
    <v-admins @setActiveComponent="setActiveComponent">
      <component :is="activeComponent" />
    </v-admins>
  </div>
  <div class="no-access" v-else>
    <p>You do not have access to this page.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VAdmins from "../components/admins/vAdmins.vue";
import VAdminsAddProduct from "../components/admins/vAdminsAddProduct.vue";
import VAdminsEditProduct from "../components/admins/vAdminsEditProduct.vue";
import VAdminsUsers from "../components/admins/vAdminsUsers.vue";

export default {
  components: { VAdmins, VAdminsAddProduct, VAdminsEditProduct, VAdminsUsers },
  data() {
    return {
      activeComponent: "VAdminsAddProduct",
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "user"]),
    isAdmin() {
      return this.isAuthenticated && this.user && this.user.role === "admin";
    },
  },
  methods: {
    setActiveComponent(component) {
      this.activeComponent = component;
    },
  },
  created() {
    if (!this.isAdmin) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
.admin-page {
  padding: 2rem;
  background-color: #f5f5f5;
}

.no-access {
  text-align: center;
  margin-top: 5rem;
  color: #ff0000;
  font-size: 1.5rem;
}
</style>
