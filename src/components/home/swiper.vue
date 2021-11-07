<template>
  <swiper
    class="co-swiper"
    indicator-color="#999"
    indicator-active-color="#333"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item v-for="(item, index) in swiperImg" :key="index">
      <image class="swiper-img" :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script lang="ts">

export default {
  name: "swiper",
  props: {
    swiperImg: {
      type: Array,
      default: () => {[]}
    }
  },
  setup() {
    return {
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
