<template>
    <view class="co-top-bar">
        <view class="bar-info">
            <view class="bar-item" v-for="(item, index) in dataList" 
                :key="index"
                @tap="$emit('tabClick', index)">
                {{item}}
                <view v-if="index === tabIndex" class="active-item"></view>
            </view>
        </view>
    </view>
</template>

<script lang="ts">

const dataList = [
    "商品",
    "评价",
    "详情",
]

export default {
    name: "topBar",
    props: {
        tabIndex: {
            type: Number,
            default: 0
        }
    },
    setup() {

        return {
            dataList,
        }
    }

}
</script>

<style lang="less">
.co-top-bar {
    position: fixed;
    z-index: 20;
    font-size: 32rpx;
    height: 80rpx;
    line-height: 80rpx;
    .bar-info {
        display: flex;
        background: #fff;
        .bar-item {
            width: 34vw;
            text-align: center;
            font-size: 28px;
        }
        .active-item {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 9px;
            background-color: #f01d24;
            border-radius: 5px;
        }
    }
    
}
</style>