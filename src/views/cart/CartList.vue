<template>
  <div class="cart-list">
    <cart-List-Item
      v-for="(item, index) in productList"
      :key="index"
      :product="item"
    ></cart-List-Item>
  </div>
</template>

<script>
import CartListItem from "@/views/cart/CartListItem";
export default {
  props: {
    productList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    CartListItem
  },
  created() {
    console.log(this.productList);
  }
};
</script>

<style lang="less" scoped>
.cart-list {
}
</style>
