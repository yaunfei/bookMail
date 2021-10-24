<template>
  <view class="co-vertical-item">
    <view
      class="book-item"
      v-for="(item, index) in itemData"
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
const itemData = [
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/8770/87706466f375e0cc015f4eb633f8e3b1_0_2_140_140.jpg",
    title: "上学记（增订版）",
    author: "文靖、何兆武  著 / 人民文学出版社 / 2016-03 / 平装",
    desc: "《上学记》是著名学者何兆武先生的个人口述史。何先生生于1921年，在北平读小学和中学，在西南联大读大",
  },
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/982d/982db43c877e1d32a26eac2ed6ec9f7f_0_2_140_140.jpg",
    title: "暂坐",
    author: "贾平凹  著 / 作家出版社 / 2020-9 / 精装",
    desc: "《暂坐》是著名作家贾平凹的长篇小说，以西安城为背景，讲述了一群独立奋斗的都市女性在心灵上相互依偎的故",
  },
  {
    imgUrl:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/isbn/2/91d8/91d8eaa83031acab080f62886e2fafec_0_2_140_140.jpg",
    title: "活着",
    author: "余华  著 / 作家出版社 / 2012-08 / 平装",
    desc: "《活着（新版）》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫",
  },
];

export default {
  name: "verticalItem",
  setup() {
    const getDetail = () => {
      Taro.navigateTo({
        url: "/pages/detail/detail",
      });
    };
    return {
      itemData,
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
