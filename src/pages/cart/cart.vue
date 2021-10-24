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
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

// #region
// const cartList = [
//   {
//     id: 13,
//     imgUrl:
//       "https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg",
//     title: "他们幸福",
//     quality: "九五品",
//     price: 12,
//     cartCount: 2,
//   },
//   {
//     id: 24,
//     imgUrl:
//       "https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg",
//     title: "他们幸福",
//     quality: "九五品",
//     price: 13,
//     cartCount: 2,
//   },
//   {
//     id: 45,
//     imgUrl:
//       "https://www.kfzimg.com/sw/kfz-cos/kfzimg/abadbcfb/704ca01a6cd94977_n.jpg",
//     title: "他们幸福",
//     quality: "九五品",
//     price: 16,
//     cartCount: 2,
//   },
// ];
// #endregion

export default {
  name: "cart",
  components: {
    cartItem,
  },
  setup() {
    const store = useStore();

    const state = reactive({
      cartList: [] as any,
    });

    onMounted(() => {
      state.cartList = store.state.cartList;
      console.log(state.cartList);
    });

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
      ...toRefs(state), // 转为普通对象, 这个对象的数据有响应式
      decrease,
      increase,
      state,
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
