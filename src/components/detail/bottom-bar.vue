<template>
  <view class="co-bottom-bar">
    <view class="item-warp">
      <view class="item-icon" v-for="(item, index) in IconList" :key="index">
        <image class="item-img" :src="item.iconUrl" mode="aspectFit" />
        <view>{{ item.title }}</view>
      </view>
      <view class="item-info">
        <text class="item-text item-text-left" @tap="$emit('addCart')"
          >加入购物车</text
        >
        <text class="item-text item-text-right" @tap="$emit('buy')"
          >立即购买</text
        >
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import storeIcon from "@/assets/bottomBar/store.png";
import favoritesIcon from "@/assets/bottomBar/favorites.png";
import cartIcon from "@/assets/bottomBar/cart.png";

const IconList = [
  {
    iconUrl: storeIcon,
    title: "首页",
  },
  {
    iconUrl: favoritesIcon,
    title: "收藏",
  },
  {
    iconUrl: cartIcon,
    title: "购物车",
  },
];

export default {
  name: "bottomBar",
  setup() {
    return {
      IconList,
    };
  },
};
</script>

<style lang="less">
.co-bottom-bar {
  position: fixed;
  bottom: 0;
  .item-warp {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100vw;
    height: 12vh;
    text-align: center;
    background-color: #fff;
    .item-icon {
      flex-basis: 100px;
      font-size: 26px;
      color: #8a8a8a;
      margin: 0 auto;
      .item-img {
        width: 45px;
        height: 45px;
      }
    }
    .item-info {
      flex: 1;
      .item-text {
        display: inline-block;
        color: #fff;
        width: 210px;
        height: 80px;
        line-height: 80px;
      }
      .item-text-left {
        background-color: orange;
        border-top-left-radius: 36px;
        border-bottom-left-radius: 36px;
      }
      .item-text-right {
        background-color: #ff536f;
        border-top-right-radius: 36px;
        border-bottom-right-radius: 36px;
      }
    }
  }
}
</style>
