<template>
  <div class="goods-list-item" @click="ItemClick">
    <img :src="goodsListItem.show.img" alt="" @load="imageLoad" />
    <div class="info">
      <p class="title">{{ goodsListItem.title }}</p>
      <p class="num">
        <span class="price">{{ goodsListItem.price }}</span>
        <span class="iconfont icon-shoucang"></span>
        <span class="collect">{{ goodsListItem.cfav }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    // 处理item的点击事件，进行路由跳转，并且传递参数
    ItemClick() {
      this.$router.push("/detail" + this.goodsListItem.iid);
      // console.log(1);
    }
  }
};
</script>

<style lang="less" scoped>
.goods-list-item {
  width: 48%;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .info {
    .title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      padding: 3px 2px;
    }
    .num {
      padding-bottom: 5px;
      .price {
        color: var(--color-tint);
        margin-right: 10px;
      }
      .collect {
      }
    }
  }
}
</style>
