<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div
      class="goods"
      v-for="(group, index) in detailInfo.detailImage"
      :key="index"
    >
      <p class="desc">
        {{ group.desc }}
      </p>
      <p class="title">{{ group.key }}</p>

      <div class="img" v-for="(item, indey) in group.list" :key="indey">
        <img :src="item" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    }
  }
};
</script>

<style lang="less" scoped>
.detail-goods-info {
  border-top: 5px solid #eee;
  .goods {
    .desc {
      text-align: left;
      padding: 5px;
    }
    .title {
      color: var(--color-tint);
      font-size: 18px;
      text-align: left;
      padding: 10px;
    }
    .img {
      img {
        width: 100%;
      }
    }
  }
}
</style>
