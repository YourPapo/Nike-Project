<template>
  <header class="header-mobile animate-fade-down">
    <div class="header-content">
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <span class="user-email" v-if="isAuthenticated">{{
        user.email
      }}</span>
      <div class="burger-menu" @click="toggleMenu">
        <img src="/icons/burger-menu.svg" alt="Menu" />
      </div>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu animate-fade-down">
      <nav>
        <ul>
          <li @click="closeMenu">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li @click="toggleDropdown">
            <router-link to="#">All products</router-link>
          </li>

          <li v-if="user && user.role === 'admin'" @click="closeMenu">
            <router-link :to="{ name: 'Admin' }">Admin Pannel</router-link>
          </li>
          <li @click="closeMenu"><a href="#">Help</a></li>
        </ul>
      </nav>
      <div class="user-pannel">
        <span @click="checkUser" class="cart">
          <img src="/icons/cart.svg" alt="Cart" />
        </span>
        <router-link :to="{ name: 'Auth' }" class="user" @click="closeMenu">
          <img src="/icons/user.svg" alt="Users" />
        </router-link>
        <div @click="handleLogout" class="logout" v-if="isAuthenticated">
          <img src="/icons/logout.svg" alt="Logout" />
        </div>
      </div>
      <v-dropdown-menu
        :items="getServices"
        :isVisible="isDropdownVisible"
        @close="closeMenu"
      />
    </div>
  </header>
</template>

<script>
import "./style/HeaderMobile.scss";
import vDropdownMenu from "../UI/vDropdownMenu.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeaderMobile",
  components: {
    vDropdownMenu,
  },
  data() {
    return {
      isMenuOpen: false,
      isDropdownVisible: false,
    };
  },
  computed: {
    ...mapGetters(["getServices", "user", "isAuthenticated"]),
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) {
        this.isDropdownVisible = false;
      }
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.isDropdownVisible = false;
    },
    checkUser() {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push({ name: "Auth" });
      } else {
        this.$router.push({ name: "Cart" });
      }
      this.closeMenu();
    },
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
      this.closeMenu();
    },
  },
};
</script>
