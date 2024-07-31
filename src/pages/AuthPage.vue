<template>
  <div
    class="mx-auto min-h-screen flex flex-col items-center justify-center bg-[#eaeaeab7]"
  >
    <div class="auth-page container flex flex-col content-center items-center">
      <div v-if="!showLogin">
        <p class="mt-4 text-[#242328] cursor-pointer">Create a new account!</p>
        <v-auth />
        <p class="mt-4 text-[#242328] cursor-pointer" @click="toggleView">
          Already have an account?
          <span class="text-stone-500 font-bold">Login...</span>
        </p>
      </div>
      <div v-else>
        <p class="mt-4 text-[#242328] cursor-pointer">Enter your account!</p>
        <v-login />
        <p class="mt-4 text-[#242328] cursor-pointer" @click="toggleView">
          Doesn't have an account?
          <span class="text-stone-500 font-bold">Registrate now...</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VAuth from "../components/auth/vAuth.vue";
import VLogin from "../components/auth/vLogin.vue";

export default {
  components: {
    VAuth,
    VLogin,
  },
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {
    toggleView() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>

<style scoped>
.auth-page {
  font-family: raydis;
}
</style>
