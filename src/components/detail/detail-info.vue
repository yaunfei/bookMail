<template>
  <view class="co-detail-info">
    <view class="detail-info-desc">{{ detailData.desc }}</view>
    <view class="detail-info-subdesc">{{ detailData.subdesc }}</view>
    <view v-for="(itemUrl, index) in detailData.list" :key="index">
      <image class="detail-info-img" :src="itemUrl" />
    </view>
  </view>
</template>

<script lang="ts">
const detailData = {
  desc: "品相描述：八品",
  subdesc:
    "第二、三两册八五品，第一册惜被食用油所染，殃及三、五页，具体详见书影。均无圈划，非馆藏。",
  list: [
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/ccedfaab/bf44b470ac2ea779_b.jpg",
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/ddcbffcf/179906e18938f757_b.jpg",
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/eeaabdac/494e1ece37d1cde1_b.jpg",
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/acbdeffd/4b85b48b61708b87_b.jpg",
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/decebbaa/33ac607a13909ef0_b.jpg",
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/eaddeafc/89cffd65e27a05d4_b.jpg",
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/ececcbfe/cfcc1ed889cbed79_b.jpg",
    "https://www.kfzimg.com/sw/kfz-cos/kfzimg/dafeddda/3a1b59ba9a1d98eb_b.jpg",
  ],
};

export default {
  name: "detailInfo",
  setup() {
    return {
      detailData,
    };
  },
};
</script>

<style lang="less">
.co-detail-info {
  box-sizing: border-box;
  .detail-info-desc {
    color: #262626;
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0;
  }
  .detail-info-subdesc {
    font-size: 24px;
    color: #666;
    height: 90px;
    line-height: 45px;
    margin-bottom: 20px;
  }
  .detail-info-desc,
  .detail-info-subdesc {
    padding: 0 20px;
  }
  .detail-info-img {
    width: 100vw;
    height: 700px;
    margin-bottom: 0;
  }
}
</style>
