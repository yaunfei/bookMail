<template>
  <view class="pg-detail">
    <scroll-view
      :scroll-y="true"
      style="height: 99vh"
      @scroll="handleScroll"
      :scroll-into-view="localId"
    >
      <!-- topBar -->
      <detail-top-bar
        :class="{ topbar: topbarShow }"
        :tabIndex="tabIndex"
        @tabClick="detailTabClick"
      ></detail-top-bar>
      <!-- 轮播图 -->
      <detail-swiper id="detailSwiper"></detail-swiper>
      <!-- 产品信息 -->
      <detail-product></detail-product>
      <view style="height: 15px; background: #f3f3f3"></view>
      <!-- 地址信息 -->
      <detail-address></detail-address>
      <view style="height: 15px; background: #f3f3f3"></view>
      <!-- 作者信息 -->
      <detail-note></detail-note>
      <view style="height: 15px; background: #f3f3f3"></view>
      <!-- 评价 -->
      <view id="commentInfo" class="comment-info">
        <view class="comment-mess clearfix">
          <view>评论(4115)</view>
          <view></view>
          <view>99.83%好评</view>
        </view>
        <view v-for="(item, index) in ownerList" :key="index">
          <detail-comment :ownerData="item"></detail-comment>
        </view>
      </view>
      <view style="height: 15px; background: #f3f3f3"></view>
      <!-- 详情 -->
      <view id="detailInfo" class="detail-info">
        <detail-info></detail-info>
      </view>
      <!-- bottomTop -->
      <detail-bottom-bar @addCart="addCart" @buy="buy"></detail-bottom-bar>
    </scroll-view>
  </view>
</template>

<script lang="ts">
import { ref, onMounted, computed } from "vue";
import Taro from "@tarojs/taro";
import { useStore } from "@/store";
import { ADD_CART } from "@/store/mutation-types";
import detailSwiper from "@/components/detail/swiper.vue";
import detailProduct from "@/components/detail/product.vue";
import detailAddress from "@/components/detail/address.vue";
import detailNote from "@/components/detail/note.vue";
import detailComment from "@/components/detail/comment.vue";
import detailInfo from "@/components/detail/detail-info.vue";
import detailTopBar from "@/components/detail/top-bar.vue";
import detailBottomBar from "@/components/detail/bottom-bar.vue";

const ownerList = [
  {
    ownerImg: "https://user.kongfz.com/data/member_pic/4310/10114310.jpg",
    ownerName: "y***9",
    text: "非常好的卖家，书籍包装好发货快，老板人很好，非常好的一次购书体验！",
    list: [
      "https://www.kfzimg.com/sw/xinyu/3156/0392a9400beb4fd5c6_n.jpg",
      "https://www.kfzimg.com/sw/xinyu/1113/0392a9401fc6ac77dc_n.jpg",
      "https://www.kfzimg.com/sw/xinyu/1113/0392a93ff73496643c_n.jpg",
      "https://www.kfzimg.com/sw/xinyu/1113/0392a93fe34bc0109f_n.jpg",
      "https://www.kfzimg.com/sw/xinyu/3156/0392a9400beb4fd5c6_n.jpg",
      "https://www.kfzimg.com/sw/xinyu/1113/0392a9401fc6ac77dc_n.jpg",
      "https://www.kfzimg.com/sw/xinyu/1113/0392a93ff73496643c_n.jpg",
      "https://www.kfzimg.com/sw/xinyu/1113/0392a93fe34bc0109f_n.jpg",
    ],
  },
];

export default {
  name: "detail",
  components: {
    detailSwiper,
    detailProduct,
    detailAddress,
    detailNote,
    detailComment,
    detailInfo,
    detailTopBar,
    detailBottomBar,
  },
  setup() {
    const tabIndex = ref(0);
    const topbarShow = ref(true);
    const localId = ref("detailSwiper");
    const store = useStore();

    onMounted(() => {});

    const detailCount = computed(() => {
      return store.state.cartList.cartCount;
    });

    // srcol滚动时回调
    const handleScroll = (e) => {
      const query = Taro.createSelectorQuery();
      query.select(".comment-info").boundingClientRect();
      query.exec((res) => {
        let top = res[0].top;
        switch (true) {
          case top < -200:
            tabIndex.value = 2;
            topbarShow.value = false;
            break;
          case top > -200 && top < 100:
            tabIndex.value = 1;
            topbarShow.value = false;
            break;
          case top >= 100 && top < 470:
            tabIndex.value = 0;
            topbarShow.value = false;
            break;
          case top >= 470:
            tabIndex.value = 0;
            topbarShow.value = true;
            break;
        }
      });
    };

    // 点击tab时触发
    const detailTabClick = (index) => {
      tabIndex.value = index;
      console.log(index);
      switch (index) {
        case 0:
          localId.value = "detailSwiper";
          break;
        case 1:
          localId.value = "commentInfo";
          break;
        case 2:
          localId.value = "detailInfo";
          break;
      }
    };

    // 加入购物车
    const addCart = () => {
      console.log("addCart");
      store.commit(ADD_CART, {
        id: 1,
        cartCount: 1 ,
      });
    };

    // 立即购买
    const buy = () => {
      console.log("buy");
      store.commit(ADD_CART, {
        id: 12,
        cartCount: 100 ,
      });
    };

    return {
      tabIndex,
      localId,
      topbarShow,
      ownerList,
      handleScroll,
      detailTabClick,
      addCart,
      buy,
    };
  },
};
</script>

<style lang="less">
.pg-detail {
  .topbar {
    visibility: hidden;
  }
  .comment-info {
    padding: 20px;
    .comment-mess {
      font-size: 30px;
      height: 60px;
      line-height: 60px;
      :nth-child(1) {
        float: left;
      }
      :nth-child(2) {
        float: right;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAixJREFUWAntl8lKw0AYx+1yU+r+Cp7EXVwQEbFq1TcQvXR7pm43X0HEqhV3cTnoayiKWj21qb+vNFICLTGZ6UEzMHyTTDLzy/9bkrS1ec1TwFPAU+B/K+BT+fjpdDrHenN+v38rFovdqFjbr2KRujXmKpXKQLlczqdSqam6846HSgEDgcAmJK/0Tno+k8lMOyar3agUMBqN3uHeMGsLZMgwjP1cLjfjBlIpoIDE4/F7zJLP53vBhnD3PrE5K3NOmtIkqQfIZrOjKHhITPYA+4GyERLnov4aO2NtgLI5yo0AeMiwl16kR5LJ5DnWdtMKKBTE4HCpVDpiWIVEyTXC4MwuofIYtG5M4jwAtcj5Z3oHiu7h/nnrdY2OtStobkzJGSImRck+YvITu55IJE7M+UZWu4Lmxrj1kfEicE+o2M54F+gFc76RbZmCJgDuHUTJApD9nPuib5A4x+a81QatJ3QfUxdFlKowqFlhbDTbM9BsUvWcxCHKFVi3Goe1jD5ttk/LYlDKjbhW4OhF1JPC3RROwFuioBTsWgb/FGwy2FbB1h6D5isPMRy98rQqyDfhGGA/72PGq5SbS6ztpq3MkBDjuPUAkm76ezAYXOWtcmWbrHahFhdb4cjWFeCufwsn1yvPYrJ1glIiXzBV5bDLuNURnAAqdTHZOsmaeQC7sG/8Aiy7/XlS7eIdE446FwbuVlRw01QDngBjALdNnXMN5+bBvHs9BTwFPAX+igLfYyjKWDQm9w0AAAAASUVORK5CYII=)
          no-repeat 50%;
        width: 55px;
        height: 55px;
        background-size: 100%;
      }
      :nth-child(3) {
        float: right;
        color: #9e100e;
      }
      &:after {
        content: "";
        height: 10px;
        border-bottom: 1px solid rgb(246 236 236);
      }
    }
  }
}
</style>