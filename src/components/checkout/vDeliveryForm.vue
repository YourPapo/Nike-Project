<template>
  <div>
    <form @submit.prevent="saveAndContinue">
      <input
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)"
        placeholder="First Name*"
        required
      />
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:lastName', $event.target.value)"
        placeholder="Last Name*"
        required
      />
      <input
        type="text"
        :value="address"
        @input="$emit('update:address', $event.target.value)"
        placeholder="Start typing address"
        required
      />
      <input
        type="email"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
        placeholder="Email*"
        required
      />
      <input
        type="tel"
        :value="phoneNumber"
        @input="$emit('update:phoneNumber', $event.target.value)"
        placeholder="Phone Number*"
        required
      />
      <button type="submit" class="save-continue">Save & Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String,
    address: String,
    email: String,
    phoneNumber: String,
  },
  methods: {
    saveAndContinue() {
      this.$emit("save-and-continue");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-wrap: wrap;
  input {
    width: 48%;
    margin: 1% 1%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .save-continue {
    font-family: raydis;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #242328;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  .save-continue:hover {
    background-color: #16151a;
    transform: scale(1.005);
  }
}
</style>
