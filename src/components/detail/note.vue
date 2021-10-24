<template>
  <view class="co-note">
    <view class="note-item" v-for="(item, index) in data" :key="index">
      <view class="note-title">{{ item.title }}</view>
      <view class="note-text">{{ item.text }}</view>
    </view>
  </view>
</template>

<script lang="ts">
const data = [
  {
    title: "作者",
    text: "薛居正 等",
  },
  {
    title: "出版社",
    text: "中华书局",
  },
  {
    title: "出版时间",
    text: "1976-06",
  },
  {
    title: "版次",
    text: "1",
  },
  {
    title: "印刷时间",
    text: "1976-06",
  },
  {
    title: "印次",
    text: "1",
  },
  {
    title: "装帧",
    text: "精装",
  },
  {
    title: "开本",
    text: "大32开",
  },
  {
    title: "货号",
    text: "2",
  },
  {
    title: "上书时间",
    text: "2021-08-10",
  },
];

export default {
  name: "note",
  setup() {
    return {
      data,
    };
  },
};
</script>

<style lang="less">
.co-note {
  box-sizing: border-box;
  font-size: 28px;
  height: 550px;
  padding: 20px;
  .note-item {
    height: 50px;
    line-height: 50px;
    .note-title {
      float: left;
      width: 20%;
      text-align: left;
      color: #c7c7c7;
    }
    .note-text {
      float: left;
      width: 80%;
    }
  }
}
</style>
