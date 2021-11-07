<template>
  <view class="pg-home">
    <!-- 轮播图 -->
    <home-swiper :swiperImg="swiperImg"></home-swiper>
    <!-- 选项卡 -->
    <option-classfiy></option-classfiy>
    <option-activity></option-activity>
    <view style="height: 15px; background: #f3f3f3"></view>
    <!-- 好书推荐 -->
    <sub-title>
      <template v-slot:mainTitle> 好书推荐 </template>
      <template v-slot:operation> 更多 </template>
    </sub-title>
    <view style="overflow: hidden">
      <horizontal-item :horizontalItem="horizontalItem"></horizontal-item>
    </view>
    <view style="height: 15px; background: #f3f3f3"></view>
    <!-- 新书 -->
    <sub-title>
      <template v-slot:mainTitle> 新书推荐 </template>
      <template v-slot:operation> 更多 </template>
    </sub-title>
    <view style="overflow: hidden">
      <vertical-item :verticalItem="verticalItem"></vertical-item>
    </view>
    <view style="height: 15px; background: #f3f3f3"></view>
    <!-- 猜你喜欢 -->
    <view class="recomm">猜你喜欢</view>
    <recommend :recommend="recommend"></recommend>
  </view>
</template>

<script lang="ts">
import homeSwiper from "@/components/home/swiper.vue";
import optionClassfiy from "@/components/home/options-classfiy.vue";
import optionActivity from "@/components/home/options-activity.vue";
import horizontalItem from "@/components/home/horizontal-item.vue";
import verticalItem from "@/components/home/vertical-item.vue";
import recommend from "@/components/home/recommend.vue";
import subTitle from "@/components/common/sub-title.vue";
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import cloud from "@/service/cloud";
import Taro from "@tarojs/taro";

export default {
  name: "home",
  components: {
    homeSwiper,
    optionClassfiy,
    optionActivity,
    horizontalItem,
    verticalItem,
    recommend,
    subTitle,
  },
  setup() {
    const state = reactive({
      swiperImg: [],
      horizontalItem: {},
      verticalItem: {},
      recommend: {},
    });

    onMounted(async () => {
      try {
        Taro.cloud.callFunction({
          name: "getListItem",
          data: {
            
          },
        }).then(res => {
          console.log("res", res);
        })
        // const res = await cloud.getHomeInfo("home_result");
        const res = await cloud.getHomeInfo("home_result");
        if (res.errMsg === "collection.get:ok") {
          state.swiperImg = res.data[0]?.swiper_img;
          state.horizontalItem = res.data[0]?.horizontal_item;
          state.verticalItem = res.data[0]?.vertical_item;
          state.recommend = res.data[0]?.recommend;
        } else {
          console.log("getHomeInfo-接口返回错误");
        }
      } catch (e) {
        console.log("getHomeInfo-接口请求错误", e);
      }
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less">
.pg-home {
  .recomm {
    font-size: 40px;
    font-weight: 600;
    padding: 0 20px;
    margin: 20px 0;
  }
}
</style>
