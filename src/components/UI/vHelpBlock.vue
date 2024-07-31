<template>
  <section :id="id" class="help-block">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.help-block {
  padding: 40px;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  h2 {
    margin-top: 0;
    font-size: 1.5em;
    color: #111;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #ccc;
      margin: 10px 0;
    }
  }

  p {
    margin: 10px 0;
    font-size: 1.1em;
    line-height: 1.6;
  }
}
</style>
