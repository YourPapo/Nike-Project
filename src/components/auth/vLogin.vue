<template>
  <div>
    <v-form @formSubmit="handleLogin" btnText="Login" />
    <div v-if="authError" class="text-red-500">{{ authError }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VForm from "../UI/vForm.vue";

export default {
  components: { VForm },
  computed: {
    ...mapGetters(["authError"]),
  },
  methods: {
    ...mapActions(["login"]),
    async handleLogin(credentials) {
      try {
        await this.login(credentials);
        if (this.$store.getters.isAuthenticated) {
          this.$router.push({ name: "Products" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
