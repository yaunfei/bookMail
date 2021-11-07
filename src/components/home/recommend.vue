<template>
  <view class="co-recom">
    <view
      class="recom-item"
      v-for="(item, index) in recommend"
      :key="index"
      @tap="getDetail"
    >
      <view style="text-align: center">
        <image class="recom-img" :src="item.imgUrl" />
      </view>
      <view class="recom-title">{{ item.title }}</view>
      <view class="recom-info clearfix">
        <view>{{ item.phase }}</view>
        <view>{{ item.address }}</view>
      </view>
      <view class="recom-price">
        <text style="font-size: 12px">￥</text>
        <text style="font-size: 18px">{{ item.price }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";

export default {
  name: "recommend",
  props: {
    recommend: {
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
.co-recom {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(#fff, #f8f8f8 5.42rem, #f8f8f8); // 背景颜色渐变
  .recom-item {
    width: 45%;
    margin: 10px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 10px;
    .recom-img {
      width: 200px;
      height: 200px;
    }
    .recom-title {
      font-size: 32px;
    }
    .recom-info {
      font-size: 28px;
      padding: 30px 20px 10px;
      // color: #999;
      :first-child {
        float: left;
        width: 75px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        background: #fafafa;
        border-radius: 10px;
      }
      :last-child {
        float: right;
      }
    }
    .recom-price {
      color: red;
    }
    .recom-img,
    .recom-title,
    .recom-price {
      padding: 10px 20px;
    }
  }
}
</style>
