<template>
  <form
    class="form__content max-w-md mx-auto rounded-lg px-20 py-20"
    @submit.prevent="handleSubmit"
  >
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="email"
        name="floating_email"
        id="floating_email"
        v-model="localEmail"
        class="inp block py-2.5 px-0 w-full text-sm text-stone-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 0 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Email address
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="password"
        name="floating_password"
        id="floating_password"
        v-model="localPassword"
        class="inp block py-2.5 px-0 w-full text-sm text-stone-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_password"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Password
      </label>
    </div>
    <button
      type="submit"
      class="btn text-white bg-stone-500 hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-stone-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      {{ btnText }}
    </button>
  </form>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    btnText: {
      type: String,
      default: "Enter",
    },
  },
  data() {
    return {
      localEmail: this.email,
      localPassword: this.password,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("formSubmit", {
        email: this.localEmail,
        password: this.localPassword,
      });
      this.localEmail = "";
      this.localPassword = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.inp {
  font-size: 20px;
  font-weight: 700;
  font-family: Cyrge;
}

.form__content {
  background-image: url("/images/form.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.btn {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
