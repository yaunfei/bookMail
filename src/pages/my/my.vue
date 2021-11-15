<template>
  <view class="pg-my">
    <view class="my-main">
      <view class="my-header">
        <image
          class="header-img"
          src="https://user.kongfz.com/data/member_pic/1897/8521897.jpg"
        />
        <text @tap="handle">登录、注册</text>
        <button open-type="getUserInfo" @getuserinfo="onGetUserInfo">登录、注册</button>
      </view>
      <view class="my-order">
        <sub-title
          :titleFontSize="15"
          :titleFontWeight="300"
          :operaFontSize="12"
          :marginFlag="false"
        >
          <template v-slot:mainTitle> 我的订单 </template>
          <template v-slot:operation> 查看全部 </template>
        </sub-title>
        <view
          style="height: 2px; border-bottom: 1px solid rgb(246 236 236)"
        ></view>
        <view class="order-item">
          <view
            v-for="(item, index) in orderItem"
            :key="index"
            class="item-info"
          >
            <image class="order-img" :src="item.imgUrl" />
            <view>{{ item.desc }}</view>
          </view>
        </view>
      </view>
      <view class="my-info">
        <view class="price">
          <view>资金账户</view>
          <view>￥ 3.00</view>
        </view>
        <view class="local">
          <image :src="localIcon" />
          <text>收货地址</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import subTitle from "@/components/common/sub-title.vue";
import payIcon from "@/assets/order/pay.png";
import goodsIcon from "@/assets/order/goods.png";
import deliverIcon from "@/assets/order/deliver.png";
import commentIcon from "@/assets/order/comment.png";
import refundIcon from "@/assets/order/refund.png";
import localIcon from "@/assets/order/location.png";
import { useStore } from "@/store";
import request from "@/service/request";

const orderItem = [
  {
    imgUrl: payIcon,
    desc: "待发货",
  },
  {
    imgUrl: goodsIcon,
    desc: "待收货",
  },
  {
    imgUrl: deliverIcon,
    desc: "待评价",
  },
  {
    imgUrl: commentIcon,
    desc: "待确认",
  },
  {
    imgUrl: refundIcon,
    desc: "退货退款",
  },
];

export default {
  name: "my",
  components: {
    subTitle,
  },
  setup() {
    const handle = async () => {
      try {
        const res = await request.login("login", {});
        const {openid, appid, unionid} = res;
        console.log("123", openid);
        console.log("123", appid);
        console.log("123", unionid);
      } catch (e) {
        console.log(e);
      }
    };
    const onGetUserInfo = (e) => {
      console.log('12')
      console.log(e.detail);
    }
    // const store = useStore();
    // console.log("---", store.state.cartCount);
    return {
      handle,
      localIcon,
      orderItem,
      onGetUserInfo,
    };
  },
};
</script>

<style lang="less">
.pg-my {
  height: 100vh;
  background: #f3f3f3;
  .my-main {
    margin: 0 20px;
    .my-header {
      padding: 60px 0 20px;
      .header-img {
        width: 142px;
        height: 142px;
        vertical-align: middle;
        margin-right: 20px;
        border-radius: 50%;
      }
    }
    .my-order {
      background: #fff;
      padding: 20px;
      box-shadow: 0 2px 5px 0 hsl(0deg 0% 60% / 10%);
      border-radius: 20px;
      .order-item {
        display: flex;
        margin: 30px 0;
        .item-info {
          width: 20%;
          text-align: center;
          .order-img {
            width: 60px;
            height: 60px;
          }
          :last-child {
            font-size: 26px;
          }
        }
        &:before {
          content: "";
          width: 2%;
          height: 20rpx;
          border-top: 1px solid rgb(246 236 236);
        }
      }
    }
    .my-info {
      display: flex;
      height: 120px;
      padding: 20px;
      margin-top: 20px;
      background-color: #fff;
      border-radius: 20px;
      .price,
      .local {
        width: 50%;
        line-height: 50px;
        text-align: center;
      }
      .price {
        :first-child {
          height: 60px;
          line-height: 60px;
        }
        :last-child {
          color: #9e100e;
        }
      }
      .local {
        border-left: 2px solid rgb(246 236 236);
        :first-child {
          width: 60px;
          height: 60px;
          vertical-align: middle;
        }
        :last-child {
          display: block;
        }
      }
    }
  }
}
</style>
