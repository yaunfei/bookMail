<template>
  <view class="co-detail-swiper">
    <swiper
      class="swiper-item"
      indicator-color="#999"
      indicator-active-color="#333"
      :circular="true"
      :autoplay="true"
      @change="handleChange"
    >
      <swiper-item v-for="(item, index) in swiperData" :key="index">
        <image class="swiper-img" :src="item" alt="" />
      </swiper-item>
    </swiper>
    <view class="pagination"> {{ curr }} / {{ swiperData.length }} </view>
  </view>
</template>

<script lang="ts">
import { ref } from "vue";

const swiperData = [
  "https://www.kfzimg.com/sw/kfz-cos/kfzimg/ccedfaab/bf44b470ac2ea779_b.jpg",
  "https://www.kfzimg.com/sw/kfz-cos/kfzimg/ddcbffcf/179906e18938f757_b.jpg",
  "https://www.kfzimg.com/sw/kfz-cos/kfzimg/eeaabdac/494e1ece37d1cde1_b.jpg",
  "https://www.kfzimg.com/sw/kfz-cos/kfzimg/acbdeffd/4b85b48b61708b87_b.jpg",
  "https://www.kfzimg.com/sw/kfz-cos/kfzimg/bbbcbcdf/d50083498378463d_b.jpg",
];

export default {
  name: "detailSwiper",
  setup() {
    const curr = ref(1);

    const handleChange = (e) => {
      curr.value = e.detail.current;
    };
    return {
      curr,
      swiperData,
      handleChange,
    };
  },
};
</script>

<style lang="less">
.co-detail-swiper {
  box-sizing: border-box;
  position: relative;
  .swiper-item {
    height: 828px;
    .swiper-img {
      height: 828px;
      width: 100vw;
    }
  }
  .pagination {
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 26px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background: #000;
    opacity: 0.5;
    border-radius: 10px;
  }
}
</style>
