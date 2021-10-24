<template>
  <view class="co-options-classfiy">
    <view class="classfiy-items">
      <view
        class="classfiy-item"
        v-for="(item, index) in iconClassfiyList"
        :key="index"
      >
        <image class="classfiy-img" :src="item.imgUrl" />
        <view class="classfiy-title">{{ item.title }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import oldIcon from "@/assets/options/old.png";
import wornIcon from "@/assets/options/worn.png";
import markIcon from "@/assets/options/mark.png";
import palyIcon from "@/assets/options/play.png";
import classfiyIcon from "@/assets/options/classfiy.png";

const iconClassfiyList = [
  {
    imgUrl: oldIcon,
    title: "线装古籍",
  },
  {
    imgUrl: wornIcon,
    title: "民国旧书",
  },
  {
    imgUrl: markIcon,
    title: "名人墨迹",
  },
  {
    imgUrl: palyIcon,
    title: "古玩杂物",
  },
  {
    imgUrl: classfiyIcon,
    title: "全部分类",
  },
];

export default {
  name: "optionsClassfiy",
  setup() {
    return {
      iconClassfiyList,
    };
  },
};
</script>

<style lang="less">
.co-options-classfiy {
  box-sizing: border-box;
  padding: 0 20px;
  margin: 35px 0;
  overflow: hidden;
  .classfiy-items {
    display: flex;
    flex-wrap: wrap;
    .classfiy-item {
      width: 20%;
      text-align: center;
      .classfiy-img {
        width: 96px;
        height: 96px;
      }
      .classfiy-title {
        font-size: 24px;
        height: 30px;
        line-height: 30px;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
