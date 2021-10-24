<template>
  <swiper
    class="co-swiper"
    indicator-color="#999"
    indicator-active-color="#333"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item v-for="(item, index) in swiperData" :key="index">
      <image class="swiper-img" :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script lang="ts">
const swiperData = [
  "https://img0.kfzimg.com/operation/58/00/58005e06ae65a7c1c8ad6431aadd0f9e.jpeg",
  "https://img0.kfzimg.com/operation/45/1b/451bd1c7876344d0da2acb8054c17e43.jpg",
  "https://img0.kfzimg.com/operation/3b/5b/3b5baf6345aed9040a353d00200cf137.jpg",
  "https://img0.kfzimg.com/operation/45/1b/451bd1c7876344d0da2acb8054c17e43.jpg",
  "https://img0.kfzimg.com/operation/cc/b6/ccb6424a32d06d812e02b2a5236fa827.jpg",
];

export default {
  name: "swiper",
  setup() {
    return {
      swiperData,
    };
  },
};
</script>

<style lang="less">
.co-swiper {
  box-sizing: border-box;
  height: 350px;
  .swiper-img {
    height: 350px;
    width: 100vw;
  }
}
</style>
