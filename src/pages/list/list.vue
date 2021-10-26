<template>
  <view class="pg-list">
    <scroll-view>
      <view>
        <list-item></list-item>
      </view>
    </scroll-view>
    
  </view>
</template>

<script lang="ts">
import listItem from "@/components/list/list-item.vue";

export default {
  name: "list",
  components: {
    listItem,
  }
};
</script>

<style lang="less"></style>
