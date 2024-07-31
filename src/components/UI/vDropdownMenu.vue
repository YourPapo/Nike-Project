<template>
  <div class="dropdown" :class="{ 'dropdown--visible': isVisible }">
    <div class="dropdown__container">
      <div
        v-for="(section, index) in items"
        :key="index"
        class="dropdown-section"
      >
        <h3 @click="handleClick">
          <router-link
            :to="{
              name: 'Products',
              query: { category: section.title.toLowerCase() },
            }"
          >
            {{ section.title }}
          </router-link>
        </h3>
        <ul>
          <li
            v-for="item in section.items"
            :key="item.name"
            @click="handleClick"
          >
            <router-link
              :to="{
                name: 'Products',
                query: {
                  category: `${section.title.toLowerCase()}:${item.category.toLowerCase()}`,
                },
              }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    items: {
      type: Array,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  background-color: white;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  flex-wrap: wrap;
  z-index: 999;

  &__container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &--visible {
    display: flex;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &-section {
    margin-right: 20px;
    margin-bottom: 20px;

    h3 {
      margin: 0;
      padding: 10px 15px;
      font-family: soledago;
      border-bottom: 1px solid #ddd;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        a {
          padding: 10px 15px;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          font-size: 18px;
          display: block;
        }
      }

      li:hover > a {
        color: rgb(117, 117, 117);
      }
    }
  }
}
</style>
