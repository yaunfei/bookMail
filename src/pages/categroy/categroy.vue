<template>
  <view class="pg-category">
    <scroll-view class="left-item" :scroll-y="true">
      <view
        class="item"
        v-for="(item, index) in itemList"
        :key="index"
        @tap="
          clickIndex = index;
          changeContent(item.categoryId);
        "
      >
        <text :class="{ active: index === clickIndex }">{{
          item.categoryTitle
        }}</text>
      </view>
    </scroll-view>
    <scroll-view class="right-content" :scroll-y="true">
      <view class="content-info">
        <view
          class="content-item"
          v-for="(item, index) in contents"
          :key="index"
          @tap="goList"
        >
          {{ item.itemTitle }}
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts">
import { onMounted, reactive, ref, toRefs } from "vue";
import Taro from "@tarojs/taro";

const itemList = [
  {
    categoryId: 1,
    categoryTitle: "教材",
  },
  {
    categoryId: 2,
    categoryTitle: "文艺",
  },
  {
    categoryId: 3,
    categoryTitle: "童书",
  },
  {
    categoryId: 4,
    categoryTitle: "生活",
  },
  {
    categoryId: 5,
    categoryTitle: "人文社科",
  },
  {
    categoryId: 6,
    categoryTitle: "青春小说",
  },
];

const contentList = [
  {
    categoryId: 1,
    arr: [
      {
        itemId: 1,
        itemTitle: "心理学",
      },
      {
        itemId: 2,
        itemTitle: "社会科学",
      },
      {
        itemId: 3,
        itemTitle: "法律",
      },
      {
        itemId: 4,
        itemTitle: "文化",
      },
      {
        itemId: 5,
        itemTitle: "古籍",
      },
      {
        itemId: 6,
        itemTitle: "历史",
      },
    ],
  },
  {
    categoryId: 2,
    arr: [
      {
        itemId: 1,
        itemTitle: "心理2",
      },
      {
        itemId: 2,
        itemTitle: "社会科2",
      },
      {
        itemId: 3,
        itemTitle: "法律2",
      },
      {
        itemId: 4,
        itemTitle: "文化2",
      },
      {
        itemId: 5,
        itemTitle: "古籍2",
      },
      {
        itemId: 6,
        itemTitle: "历史2",
      },
      {
        itemId: 7,
        itemTitle: "心理2",
      },
      {
        itemId: 8,
        itemTitle: "社会科2",
      },
      {
        itemId: 9,
        itemTitle: "法律2",
      },
    ],
  },
];

export default {
  name: "category",
  setup() {
    const clickIndex = ref(0);
    const state = reactive({
      contents: [] as Array<any>,
    });

    onMounted(() => {
      changeContent();
    });

    const changeContent = (categoryId = 1) => {
      let findObj: any = contentList.find((item, index) => {
        return item.categoryId === categoryId;
      });
      findObj ? (state.contents = [...findObj.arr]) : (state.contents = []);
    };

    const goList = () => {
      Taro.navigateTo({
        url: "/pages/list/list",
      });
    };

    return {
      ...toRefs(state),
      itemList,
      contentList,
      clickIndex,
      changeContent,
      goList,
    };
  },
};
</script>

<style lang="less">
@import "@/common/styles/variables.less";

.pg-category {
  display: flex;
  .left-item {
    width: @categoryLeftWidth;
    height: @categoryLeftHeight;
    background-color: #f8f8f8;
    .item {
      position: relative;
      height: 80px;
      line-height: 80px;
      text-align: center;
      :first-child {
        font-size: 32px;
        display: inline-block;
        width: @categoryLeftWidth;
      }
    }
  }
  .right-content {
    width: @categoryRightWidth;
    height: @categoryRightHeight;
    .content-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .content-item {
        width: 155px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin: 15px 10px 0;
        border: 6px solid #ddd;
        border-radius: 42px;
      }
    }
  }
}

.active {
  font-size: 36px;
  color: #9e100e;
  background-color: #fff;
  &::before {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    width: 8rpx;
    height: 36rpx;
    background-color: #9e100e;
  }
}
</style>
