<template>
  <view class="pg-cart">
    <cart-item
      v-for="(item, index) in cartList"
      :key="index"
      :cartItem="item"
      @decrease="decrease"
      @increase="increase"
    ></cart-item>
  </view>
</template>

<script lang="ts">
import { useStore } from "@/store";
import cartItem from "@/components/cart/cart-item.vue";
import { ADD_CART, SUBSTRATE_CART } from "@/store/mutation-types";

const cartList = [
  {
    id: 13,
    imgUrl:
      "https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg",
    title: "他们幸福",
    quality: "九五品",
    price: 12,
    cartCount: 2,
  },
  {
    id: 24,
    imgUrl:
      "https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg",
    title: "他们幸福",
    quality: "九五品",
    price: 13,
    cartCount: 2,
  },
  {
    id: 45,
    imgUrl:
      "https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg",
    title: "他们幸福",
    quality: "九五品",
    price: 16,
    cartCount: 2,
  },
];

export default {
  name: "cart",
  components: {
    cartItem,
  },
  setup() {
    const store = useStore();

    const decrease = (id) => {
      console.log("substrate_cart", id);
      store.commit(SUBSTRATE_CART, {
        id,
      });
    };

    const increase = (id) => {
      console.log("addCart", id);
      store.commit(ADD_CART, {
        id,
        cartCount: 1,
      });
    };

    return {
      cartList,
      decrease,
      increase,
    };
  },
};
</script>

<style lang="less">
.pg-cart {
  height: 100vh;
  background-color: #f3f3f3;
}
</style>
