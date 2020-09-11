<template>
  <div class="goods-list-item" @click="ItemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
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
  computed: {
    showImage() {
      return this.goodsListItem.image || this.goodsListItem.show.img;
    }
  },
  methods: {
    imageLoad() {
      // 针对不同的路径，触发不同的事件，在不同的组件中监听事件，在调用对应组件中的scroll中的refresh
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailItemImageLoad");
      }
    },
    // 处理item的点击事件，进行路由跳转，并且传递参数
    ItemClick() {
      // 动态路由匹配
      // this.$router.push("/detail" + this.goodsListItem.iid);
      // 传递查询参数
      // 对首页和详情页的商品id进行包装
      const iid = this.goodsListItem.iid
        ? this.goodsListItem.iid
        : this.goodsListItem.item_id;
      console.log(iid);
      this.$router.push({
        path: "detail",
        query: {
          iid
        }
      });
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
