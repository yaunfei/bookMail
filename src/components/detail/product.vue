<template>
    <view class="co-product">
        <view class="product-title">{{data.title}}</view>
        <view class="product-desc">{{data.desc}}</view>
        <view class="product-info clearfix">
            <view class="product-price">
                <text style="font-size: 16px">￥</text>
                <text style="font-size: 22px">{{data.price}}</text>
            </view>
            <view class="product-cover quality">{{data.cover}}</view>
        </view>
        <view class="product-cns">{{data.cns}}</view>
    </view>
</template>

<script lang="ts">
const data = {
    title: "旧五代史（精装，全三册）1976一版一印，品相如图。",
    desc: "受第一册品相拖累，三册仅卖两册的价。",
    price: "600",
    cover: "八品",
    cns: "仅1件",
}

export default {
    name: "product",
    setup() {
        return {
            data
        }
    }
}
</script>

<style lang="less">
.co-product {
    box-sizing: border-box;
    padding: 20px;
    .product-title {
        font-size: 32px;
        font-weight: 600;
        line-height: 50px;
    }
    .product-desc {
        font-size: 24px;
        line-height: 60px;
        color:#856d49;
    }
    .product-info {
        line-height: 80px;
        .product-price {
            float: left;
            color: #9e100e;
        }
        .product-cover {
            float: right;
            margin-top: 20px;
        }
    }
    .product-cns {
        font-size: 28px;
        color: #9e100e;
    }
}
</style>