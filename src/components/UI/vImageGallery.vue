<template>
  <div :class="['item-container', `item-${data.length}`]">
    <div
      class="item-wrapper"
      v-for="(item, index) in data"
      :key="index"
      :style="{ backgroundImage: `url(${item.src})` }"
    >
      <div v-if="item.content" class="content">
        <h2>{{ item.content.title }}</h2>
        <p>{{ item.content.descr }}</p>
        <button @click="handleNavigate">
          {{ item.content.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleNavigate() {
      this.$router.push({ name: "Products" });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-container {
  display: grid;
  width: 100%;

  &.item-1 {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 65vh;
  }

  &.item-2 {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 65vh;
  }

  &.item-3 {
    grid-template-columns: 1fr 1fr 1fr;
    height: 80vh;
    gap: 15px;
  }

  &.item-4 {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  }

  @media (max-width: 1200px) {
    &.item-3 {
      grid-template-columns: 1fr 1fr;
      height: auto;
    }

    &.item-4 {
      grid-template-columns: 1fr;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    &.item-2 {
      grid-template-columns: 1fr;
      height: auto;
    }

    &.item-3 {
      grid-template-columns: 1fr;
      height: auto;
    }

    &.item-4 {
      grid-template-columns: 1fr;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    &.item-1,
    &.item-2,
    &.item-3,
    &.item-4 {
      height: auto;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
}

.item-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  justify-content: start;
  align-items: end;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: white;
  text-align: center;

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 35%;
  max-width: 80%;
  width: 100%;
  min-height: 30%;
  padding: 10px;
  background-color: #2423289e;
  border-radius: 10px;

  h2 {
    font-size: 14px;
    font-family: sans-serif;
    padding: 5px 0;
  }

  p {
    font-family: Raydis;
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: white;
  color: #989898;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
}

button:hover {
  background-color: #3c3b43;
}
</style>
