<template>
  <view class="co-recom">
    <view
      class="recom-item"
      v-for="(item, index) in recom"
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
const recom = [
  {
    imgUrl:
      "https://www.kfzimg.com/sw/kfz-cos/kfzimg/1862627/777d8277ce729ddf_n.jpg",
    title: "大唐西域记 1函5册",
    phase: "全新",
    address: "北京",
    price: "200",
  },
  {
    imgUrl: "https://www.kfzimg.com/sw/kfzimg/1586/0131eafcee6d4bddbf_n.jpg",
    title: "大唐西域记 1函5册",
    phase: "全新",
    address: "北京",
    price: "200",
  },
  {
    imgUrl: "https://www.kfzimg.com/sw/kfzimg/2496/0204c4255ab0dec3f0_n.jpg",
    title: "大唐西域记 1函5册",
    phase: "全新",
    address: "北京",
    price: "200",
  },
  {
    imgUrl:
      "https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg ",
    title: "大唐西域记 1函5册",
    phase: "全新",
    address: "北京",
    price: "200",
  },
];
export default {
  name: "recommend",
  setup() {
    const getDetail = () => {
      Taro.navigateTo({
        url: "/pages/detail/detail",
      });
    };
    return {
      recom,
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
