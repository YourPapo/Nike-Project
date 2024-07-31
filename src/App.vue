<template>
  <div>
    <v-header />
    <router-view />
    <v-footer />
    <v-scroll-to-top />
  </div>
</template>

<script>
import VFooter from "./components/footer/vFooter.vue";
import VHeader from "./components/header/vHeader.vue";
import VScrollToTop from "./components/UI/vScrollToTop.vue";
export default {
  name: "app",
  components: { VFooter, VHeader, VScrollToTop },
};
</script>

<style lang="scss" scoped></style>
