<template>
  <view class="co-list-item">
    <image class="img-item" :src="itemInfo?.imgItemImg"></image>
    <view class="item-info">
      <view class="title">{{ itemInfo?.title }}</view>
      <view class="sub-title">{{ itemInfo?.subTitle }}</view>
      <view class="buttom-info">
        <text class="price">￥{{ itemInfo?.price }}</text>
        <!--  .stop 阻止单击事件继续传播  -->
        <image class="img-cart" :src="cartIcon" @tap.stop="$emit('addCart', itemInfo.id)"></image>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import cartIcon from "@/assets/tabBar/cart.png";

export default {
  name: "list-item",
  props: {
    itemInfo: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    return {
      cartIcon,
    };
  },
};
</script>

<style lang="less">
.co-list-item {
  display: flex;
  flex-wrap: nowrap;
  height: 260px;
  background-color: #fff;
  margin: 10px;
  box-shadow: 5px 4px 10px #ecdddd;
  border-radius: 20px;
  .img-item {
    width: 200px;
    height: 220px;
    margin: 20px;
  }
  .item-info {
    width: calc(100vw - 280px);
    height: 220px;
    margin: 20px 40px 20px 20px;
    .title {
      font-size: 32px;
      font-weight: 500;
      height: 50px;
      line-height: 50px;
    }
    .sub-title {
      font-size: 26px;
      color: #9b9b9b;
      height: 30px;
      line-height: 30px;
      margin-top: 10px;
    }
    .buttom-info {
      margin-top: 60px;
      .price {
        float: left;
        font-size: 32px;
        color: red;
      }
      .img-cart {
        float: right;
        width: 50px;
        height: 50px;
        padding: 6px;
        border-radius: 50%;
        background-color: #eaeaea;
      }
    }
  }
}
</style>
