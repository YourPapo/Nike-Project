<template>
  <div class="main">
    <div class="main-container">
      <v-video-player videoSrc="/videos/Nike-Commercial.mp4" />
    </div>
    <div class="section">
      <v-advertising-block
        title="Play at your peak"
        descr="From 5.20-5.24, shop fresh kick, adventure essentials, and the best of summer style-with exclusive rewards for Nike Members."
      />
    </div>
    <div class="main-container">
      <v-image-gallery :data="firstBlock" />
    </div>
    <div class="section">
      <v-advertising-block
        title="Nike Commercial"
        descr="From 5.20-5.24, shop fresh kick, adventure essentials, and the best of summer style-with exclusive rewards for Nike Members."
      />
    </div>
    <div class="main-container">
      <v-image-gallery :data="secondBlock" />
    </div>
    <div class="bottom-content">
      <div>
        <h2>Nike Membership</h2>
        <div class="main-container">
          <v-image-gallery :data="thirdBlock" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VAdvertisingBlock from "../UI/vAdvertisingBlock.vue";
import vImageGallery from "../UI/vImageGallery.vue";
import VVideoPlayer from "../UI/vVideoPlayer.vue";

export default {
  name: "Home",
  components: { VVideoPlayer, VAdvertisingBlock, vImageGallery },
  data() {
    return {
      firstBlock: [
        {
          src: "/images/nike-promo-september-2018.jpg",
          content: {
            title: "Make Your Move",
            descr: "Fitness Essential",
            buttonText: "Shop",
          },
        },
        {
          src: "/images/nike-just-do-it.jpg",
          content: {
            title: "Nike Trail's GR11 Pack",
            descr: "Featuring the Zegama 2",
            buttonText: "Shop",
          },
        },
        {
          src: "/images/official-nike-promo-codes-coupons-2023.jpg",
          content: {
            title: "Brooks Koepks's Picks",
            descr: "AF1s, Golf Shoes & More",
            buttonText: "Shop",
          },
        },
        {
          src: "images/air_Jordan.jpg",
          content: {
            title: "Air Jordan 11 Retro Low OG",
            descr: "Latest From Jordan",
            buttonText: "Shop",
          },
        },
      ],
      secondBlock: [
        {
          src: "images/Desktop_Generic_hp.jpg",
        },
      ],
      thirdBlock: [
        {
          src: "images/official-nike-promo-discount-code.png",
          content: {
            title: "Sports & Wellness Apps",
            descr: "Movement Where You're At",
            buttonText: "Move",
          },
        },
        {
          src: "images/nike-just-do-its.jpg",
          content: {
            title: "Member Product",
            descr: "Your Exclusive Acces",
            buttonText: "Shop",
          },
        },
        {
          src: "images/official-nike-promo-discount-codes.png",
          content: {
            title: "Nike By You",
            descr: "Your Customization Service",
            buttonText: "Customize",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-container {
    width: 100%;
  }

  .section {
    max-width: 768px;
    display: flex;
    flex-direction: column;
  }

  .bottom-content {
    width: 100%;
    padding: 20px 40px;

    h2 {
      font-family: Raydis;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
}
</style>
