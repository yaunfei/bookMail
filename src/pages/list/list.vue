<template>
  <view class="pg-list">
    <view class="top-bar">
      <text>综合</text>
      <text>价格</text>
      <text>销量</text>
    </view>
    <scroll-view style="padding-top: 6vh;">
      <view v-for="(item, index) in list" :key="index">
        <list-item
          :itemInfo="item"
          @tap="getDetail"
          @addCart="addCart"
        ></list-item>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { useStore } from "@/store";
import { ADD_CART } from "@/store/mutation-types";
import listItem from "@/components/list/list-item.vue";

const list = [
  {
    id: 34,
    imgItemImg:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/8770/87706466f375e0cc015f4eb633f8e3b1_0_2_140_140.jpg",
    title: "法学导论 第二版",
    subTitle: "卓泽渊 著",
    price: "8.30",
  },
  {
    id: 45,
    imgItemImg:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/8770/87706466f375e0cc015f4eb633f8e3b1_0_2_140_140.jpg",
    title: "法学导论 第二版",
    subTitle: "卓泽渊 著",
    price: "8.30",
  },
  {
    id: 89,
    imgItemImg:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/8770/87706466f375e0cc015f4eb633f8e3b1_0_2_140_140.jpg",
    title: "法学导论 第二版",
    subTitle: "卓泽渊 著",
    price: "8.30",
  },
  {
    id: 32,
    imgItemImg:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/8770/87706466f375e0cc015f4eb633f8e3b1_0_2_140_140.jpg",
    title: "法学导论 第二版",
    subTitle: "卓泽渊 著",
    price: "8.30",
  },
  {
    id: 12,
    imgItemImg:
      "https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/2/8770/87706466f375e0cc015f4eb633f8e3b1_0_2_140_140.jpg",
    title: "法学导论 第二版",
    subTitle: "卓泽渊 著",
    price: "8.30",
  },
];

export default {
  name: "list",
  components: {
    listItem,
  },
  setup() {
    const store = useStore();

    const getDetail = () => {
      Taro.navigateTo({
        url: "/pages/detail/detail",
      });
    };

    const addCart = (id) => {
      store.commit(ADD_CART, {
        id,
        cartCount: 1,
      });
    };
    return {
      list,
      getDetail,
      addCart,
    };
  },
};
</script>

<style lang="less">
.pg-list {
  .top-bar {
    position: fixed;
    display: flex;
    justify-content: space-around;
    height: 6vh;
    width: 100vw;
    z-index: 20;
    background-color: #fff;
  }
}
</style>
