<template>
  <view class="co-horizontal-item">
    <view
      class="book-item"
      v-for="(item, index) in horizontalItem"
      :key="index"
      @tap="getDetail"
    >
      <image class="book-img" :src="item.imgUrl" />
      <view class="book-title">{{ item.title }}</view>
      <view class="book-author">{{ item.author }}</view>
      <view class="book-price">
        <text style="font-size: 12px">￥</text>
        <text style="font-size: 16px">{{ item.price }}</text>
        <text style="font-size: 12px">起</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";

export default {
  name: "horizontalItem",
  props: {
    horizontalItem: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  setup() {
    const getDetail = () => {
      Taro.navigateTo({
        url: "/pages/detail/detail",
      });
    };

    return {
      getDetail,
    };
  },
};
</script>

<style lang="less">
.co-horizontal-item {
  box-sizing: border-box;
  display: flex;
  margin: 20px 0 40px 0;
  overflow: scroll;
  .book-item {
    .book-img {
      width: 230px;
      height: 230px;
    }
    .book-title {
      width: 200px;
      font-size: 32px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .book-author {
      font-size: 24px;
      color: #999;
    }
    .book-price {
      color: #9e100e;
    }
    .book-title,
    .book-author,
    .book-price {
      height: 45px;
      line-height: 45px;
      margin-left: 30px;
    }
  }
}
</style>
