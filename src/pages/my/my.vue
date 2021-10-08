<template>
    <view class="pg-my">
        <view class="my-header">
            <image class="header-img" src="https://user.kongfz.com/data/member_pic/1897/8521897.jpg" />
            <text>登录、注册</text>
        </view>
        <view class="my-order clearfix">
            <sub-title
                :titleFontSize=15
                :titleFontWeight=300
                :operaFontSize=12
                :marginFlag=false>
                <template v-slot:mainTitle>
                    我的订单
                </template>
                <template v-slot:operation>
                    查看全部
                </template>
            </sub-title>
            <view class="order-item">
                <view>待付款</view>
                <view>待发货</view>
                <view>待收货</view>
                <view>待评价</view>
                <view>待确认</view>
                <view>退货退款</view>
                <view>成功完成</view>
            </view>
        </view>
        <view class="my-info">
            <view>资金账户</view>
            <view>收货地址</view>
        </view>
    </view>
</template>

<script lang="ts">
import subTitle from "@/components/common/sub-title.vue";

export default {
    name: "my",
    components: {
        subTitle,
    },
    setup() {
        const handle = () => {
            console.log(123)
        }
        return {
            handle
        }
    }

}
</script>

<style lang="less">
.pg-my {
    margin: 0 20px;
    background:#f3f3f3 ;
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
            padding: 0 20px;
        }
    }
}
</style>