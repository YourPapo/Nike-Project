<template>
  <header class="header-desktop" :class="{ 'header-hidden': isHidden }">
    <div class="header-content">
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <div class="menu">
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li @mouseover="showDropdown" @mouseleave="hideDropdown">
              <router-link :to="{ name: 'Products' }">All products</router-link>
              <v-dropdown-menu
                :items="getServices"
                :is-visible="isDropdownVisible"
                @mouseover="showDropdown"
                @mouseleave="hideDropdown"
              />
            </li>
            <li>
              <router-link
                v-if="user && user.role === 'admin'"
                :to="{ name: 'Admin' }"
                >Admin Pannel</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Help' }">Help</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="user-panel">
        <span class="user-panel__email" v-if="isAuthenticated">{{
          user.email
        }}</span>
        <span @click="checkUser" class="cart animate-shake animate-delay-500">
          <img src="/icons/cart.svg" alt="Cart" />
        </span>
        <router-link
          :to="{ name: 'Auth' }"
          class="user animate-shake animate-delay-500"
        >
          <img src="/icons/user.svg" alt="Users" />
        </router-link>
      </div>
      <div
        @click="handleLogout"
        class="logout animate-shake animate-delay-500"
        v-if="isAuthenticated"
      >
        <img src="/icons/logout.svg" alt="Logout" />
      </div>
    </div>
  </header>
</template>

<script>
import VDropdownMenu from "../UI/vDropdownMenu.vue";
import { mapGetters } from "vuex";

export default {
  name: "HeaderDesktop",
  components: {
    VDropdownMenu,
  },
  data() {
    return {
      isDropdownVisible: false,
      isHidden: false,
      lastScrollY: 0,
    };
  },
  computed: {
    ...mapGetters(["getServices", "user", "isAuthenticated"]),
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    checkUser() {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push({ name: "Auth" });
      } else {
        this.$router.push({ name: "Cart" });
      }
    },
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    },
    handleScroll() {
      if (window.scrollY > this.lastScrollY) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
      this.lastScrollY = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
.header-desktop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &.header-hidden {
    transform: translateY(-100%);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;
  }

  .logo {
    img {
      height: 50px;
    }
  }

  .menu {
    flex-grow: 1;
    display: flex;
    justify-content: center;

    nav {
      ul {
        display: flex;
        gap: 20px;

        li {
          font-size: 20px;

          a {
            font-family: raydis;
            &:hover {
              color: #7c7c8e;
            }
          }
        }
      }
    }
  }

  .user-panel {
    display: flex;
    align-items: center;
    gap: 10px;

    &__email {
      font-family: raydis;
    }

    span {
      margin-right: 10px;
    }

    a,
    .cart {
      &:hover {
        cursor: pointer;
        border-radius: 50%;
        background: #e4e4e4;
      }

      img {
        height: 40px;
        width: 40px;
        padding: 5px;
      }
    }
  }

  .logout {
    width: 40px;
    height: 40px;
    padding: 5px;

    &:hover {
      cursor: pointer;
      border-radius: 50%;
      background: #e4e4e4;
    }
  }
}
</style>
