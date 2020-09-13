<template>
  <div class="cart">
    <!-- 导航条 -->
    <nav-bar class="nav-bar">
      <template v-slot:middle>购物车({{ getCartLength }})</template>
    </nav-bar>

    <!-- 商品列表 -->
    <scroll class="wrapper" ref="scroll">
      <cart-list :productList="productList"></cart-list>
    </scroll>

    <!-- 商品汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import CartList from "@/views/cart/CartList";
import CartBottomBar from "@/views/cart/CartBottomBar";

import Scroll from "@/components/common/scroll/Scroll";

import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["productList"]),
    ...mapGetters(["getCartLength"])
  },
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  activated() {
    // 每次购物车组件被激活时，调用better-scoll对象的refresh函数
    this.$refs.scroll.refresh();
  }
};
</script>

<style lang="less" scoped>
.cart {
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .wrapper {
    height: calc(100vh - 44px - 63px - 35px);
    overflow: hidden;
    // background-color: red;
  }
}
</style>
