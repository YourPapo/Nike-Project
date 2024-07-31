<template>
  <div class="weekly-ad">
    <h2>{{ title }}</h2>
    <p>{{ descr }}</p>
  </div>
</template>

<script>
export default {
  name: "Advertising",
  props: {
    title: { type: String },
    descr: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.weekly-ad {
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 60px;
    font-family: raydis;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    font-size: 24px;
    text-align: center;
    padding: 15px 0;
  }
}
</style>
