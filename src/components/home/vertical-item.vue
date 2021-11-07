<template>
  <view class="co-vertical-item">
    <view
      class="book-item"
      v-for="(item, index) in verticalItem"
      :key="index"
      @tap="getDetail"
    >
      <image class="book-img" :src="item.imgUrl" />
      <view class="book-info">
        <view>{{ item.title }}</view>
        <view>{{ item.author }}</view>
        <view>{{ item.desc }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";

export default {
  name: "verticalItem",
  props: {
    verticalItem: {
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
.co-vertical-item {
  box-sizing: border-box;
  padding: 0 20px;
  margin: 20px 0 40px 0;
  .book-item {
    display: flex;
    flex-wrap: nowrap;
    flex: 1;
    margin: 30px 0;
    .book-img {
      width: 600px;
      height: 280px;
    }
    .book-info {
      height: 300px;
      padding: 30px;
      :nth-child(1) {
        font-size: 35px;
        font-weight: bold;
        height: 30px;
        line-height: 30px;
      }
      :nth-child(2) {
        font-size: 26px;
        line-height: 40px;
        padding: 30px 0;
      }
      :nth-child(3) {
        font-size: 24px;
        line-height: 34px;
        color: #999;
      }
    }
  }
}
</style>
