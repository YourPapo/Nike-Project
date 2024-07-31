<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-container">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.modal-header {
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
}

.modal-body {
  margin-bottom: 16px;
  font-size: 18px;
}

.modal-footer {
  display: flex;
  justify-content: center;
}

.highlight {
  font-weight: bold;
  color: #000;
}
</style>
