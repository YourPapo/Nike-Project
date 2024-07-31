<template>
  <div class="help-page mt-16">
    <nav class="sticky-nav" :class="{ 'nav-hidden': isNavHidden }">
      <ul>
        <li v-for="section in sections" :key="section.id">
          <a
            :href="`#${section.id}`"
            @click.prevent="handleNavigation(section.id)"
          >
            {{ section.title }}
          </a>
        </li>
      </ul>
    </nav>
    <div class="help-content">
      <v-help-block
        v-for="section in sections"
        :key="section.id"
        :id="section.id"
        :title="section.title"
        :text="section.text"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VHelpBlock from "../components/UI/vHelpBlock.vue";

export default {
  components: { VHelpBlock },
  data() {
    return {
      lastScrollY: 0,
      isNavHidden: false,
    };
  },
  computed: {
    ...mapGetters(["getSections"]),
    sections() {
      return this.getSections;
    },
  },
  methods: {
    handleNavigation(targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        targetElement.classList.add("animate-shake", "animate-delay-[800ms]");
        setTimeout(() => {
          targetElement.classList.remove(
            "animate-shake",
            "animate-delay-[800ms]"
          );
        }, 2000);
      }
    },
    handleScroll() {
      if (window.scrollY > this.lastScrollY) {
        this.isNavHidden = true;
      } else {
        this.isNavHidden = false;
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

<style lang="scss" scoped>
.help-page {
  font-family: "Arial, sans-serif";
  color: #333;

  .sticky-nav {
    position: sticky;
    top: 50px;
    background-color: #111;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    &.nav-hidden {
      transform: translateY(-100%);
    }

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin: 0;
      padding: 10px;

      li {
        a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
          padding: 10px;
          border-radius: 5px;
          background-color: #222;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #444;
          }
        }
      }
    }
  }

  .help-content {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .animated-toggle {
    animation: fadeIn 1s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
