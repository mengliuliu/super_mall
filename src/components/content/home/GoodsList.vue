<template>
  <div class="good-list">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goodsListItem="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/home/GoodsListItem";

export default {
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style lang="less" scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
