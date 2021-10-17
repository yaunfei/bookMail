<template>
  <view class="pg-cart">
      <cart-item></cart-item>
  </view>
</template>

<script lang="ts">
import cartItem from "@/components/cart/cart-item.vue";

export default {
    name: "cart",
    components: {
        cartItem,
    }
}
</script>

<style lang="less">
.pg-cart {
    height: 100vh;
    background-color: #f3f3f3;
}
</style>