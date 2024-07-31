<template>
  <div class="video-container">
    <video
      :src="videoSrc"
      autoplay
      muted
      loop
      playsinline
      class="background-video"
    ></video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 50dvh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
