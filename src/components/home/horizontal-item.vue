<template>
  <view class="co-horizontal-item">
    <view
      class="book-item"
      v-for="(item, index) in configData"
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

const configData = [
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/078a/078ada81875eb31693292218590021f7_0_2_140_140.jpg",
    title: "燕园师恩录",
    author: "王景琳",
    price: "29.24",
  },
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/eb02/eb022200796d117439c45a6df843170e_0_2_140_140.jpg",
    title: "别样英风：旗籍作家武侠小说创作中的侠义精神",
    author: "张书杰",
    price: "45.59",
  },
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/94d5/94d5ed71bd8e352cb3e3b3d4b1132041_0_2_140_140.jpg",
    title: "诗仙李白之谜（周勋初文集）",
    author: "周勋初",
    price: "32",
  },
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/b8db/b8db30ba2e1378c90ae85fc208e5d9f0_0_2_140_140.jpg",
    title:
      "我的灵魂骑在纸背上（三毛生前未发表文字初次出版，30周年纪念重磅上市）",
    author: "三毛",
    price: "31.65",
  },
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/d8df/d8dfe2b68339c0350e8a720952153993_0_2_140_140.jpg",
    title: "宋代外交史",
    author: "陶晋生",
    price: "39.6",
  },
];

export default {
  name: "horizontalItem",
  setup() {
    const getDetail = () => {
      Taro.navigateTo({
        url: "/pages/detail/detail",
      });
    };

    return {
      configData,
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
