<template>
  <div>
    <v-form @formSubmit="handleRegister" />
    <div v-if="authError" class="text-red-500">{{ authError }}</div>
  </div>
</template>

<script>
import VForm from "../UI/vForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    VForm,
  },
  computed: {
    ...mapGetters(["authError"]),
  },
  methods: {
    ...mapActions(["register"]),
    async handleRegister(credentials) {
      try {
        const newCredentials = { ...credentials, role: "user" };
        await this.register(newCredentials);
        if (this.$store.getters.isAuthenticated) {
          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
