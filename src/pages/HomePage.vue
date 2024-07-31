<template>
  <div class="home__page animate-fade">
    <v-home />
  </div>
</template>

<script>
import VHome from "../components/home/vHome.vue";

export default {
  components: {
    VHome,
  },
};
</script>

<style lang="scss" scoped>
.home__page {
  margin-top: 60px;
}
</style>
