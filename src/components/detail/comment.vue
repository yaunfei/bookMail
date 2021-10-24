<template>
  <view class="co-comment">
    <view class="comment-owner clearfix">
      <image class="comment-img" :src="ownerData.ownerImg" />
      <text class="coment-name">{{ ownerData.ownerName }}</text>
    </view>
    <view class="comment-txt">{{ ownerData.text }}</view>
    <view class="comment-list-img">
      <image
        class="list-img"
        v-for="(imgItem, index) in ownerData.list"
        :key="index"
        :src="imgItem"
      />
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: "comment",
  props: {
    ownerData: {
      type: Object,
      defluat: () => {},
    },
  },
  setup() {
    return {
      // userdata
    };
  },
};
</script>

<style lang="less">
.co-comment {
  box-sizing: border-box;
  margin-top: 40px;
  .comment-owner {
    .comment-img {
      float: left;
      width: 66px;
      height: 66px;
      border-radius: 50%;
    }
    .coment-name {
      display: inline-block;
      height: 70px;
      line-height: 70px;
      color: #999;
      margin-left: 18rpx;
    }
  }
  .comment-txt {
    font-size: 28px;
    word-break: break-word;
    margin: 20rpx 0;
  }
  .comment-list-img {
    display: flex;
    flex-wrap: wrap;
    .list-img {
      width: 22%;
      height: 176px;
      border-radius: 10rpx;
      margin: 10rpx;
    }
  }
}
</style>
