<template>
    <view class="co-options-activity">
        <view class="activity-items">
            <view class="activity-item" v-for="(item, index) in iconActivityList" :key="index">
                <view class="activity-info">
                    <view>{{item.title}}</view>
                    <view>{{item.subtitle}}</view>
                </view>
                <image  class="activity-img" :src="item.imgUrl"/>
            </view>
        </view>
    </view>
</template>

<script lang="ts">
import updateIcon from "@/assets/options/update.png";
import rankIcon from "@/assets/options/rank.png";
import newIcon from "@/assets/options/new.png";
import collectIcon from "@/assets/options/collect.png";

const iconActivityList = [
    {
        imgUrl: updateIcon,
        title: "今日上新",
        subtitle: "发现新上好书",
    },
    {
        imgUrl: rankIcon,
        title: "书店排行榜",
        subtitle: "发现口碑好店",
    },
    {
        imgUrl: newIcon,
        title: "新书频道",
        subtitle: "发现孔网新书",
    },
    {
        imgUrl: collectIcon,
        title: "藏书单",
        subtitle: "为你推荐好书",
    }
]


export default {
    name: "optionsActivity",
    setup() {
        return {
            iconActivityList,
        }
    }
}
</script>

<style lang="less">
.co-options-activity{
    box-sizing: border-box;
    padding: 0 20px;
    margin: 20px 0;
    overflow: hidden;
    .activity-items {
        width: 95vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 auto;
        .activity-item {
            width: 49%;
            padding-top: 20px;
            margin-bottom: 15px;
            background: #fafafa;
            border-radius: 20px;
            .activity-info {
                float: left;
                height: 60px;
                line-height: 60px;
                padding-left: 20px;
                :first-child {
                  font-size: 32px;
                  font-weight: bold;
                }
                :last-child {
                    font-size: 24px;
                    color: #999;
                    overflow: hidden;
                }
            }
            .activity-img {
                float: right;
                width: 116px;
                height: 116px;        
            }
        }
    }
}
</style>