<template>
  <div>
    <v-header-desktop v-if="!isMobileOrTablet" />
    <v-header-mobile v-else />
  </div>
</template>

<script>
import vHeaderDesktop from "./vHeaderDesktop.vue";
import vHeaderMobile from "./vHeaderMobile.vue";

export default {
  components: {
    vHeaderDesktop,
    vHeaderMobile,
  },
  data() {
    return {
      isMobileOrTablet: false,
    };
  },
  mounted() {
    this.checkDeviceType();
    window.addEventListener("resize", this.checkDeviceType);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDeviceType);
  },
  methods: {
    checkDeviceType() {
      this.isMobileOrTablet = window.innerWidth <= 1024;
    },
  },
};
</script>
