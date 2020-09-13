<template>
  <div class="cart-bottom-bar">
    <div class="checkAll">
      <cart-check-box
        :checked="isSelectedAll"
        @click.native="clickSelectedAll"
      ></cart-check-box>
      <span>全选</span>
    </div>
    <div class="right">
      <div class="total-price">
        <span>合计：￥{{ totalPrice }}</span>
        <span></span>
      </div>
      <div class="calculator">
        <span>去计算({{ calculatorCount }})</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBox from "@/views/cart/CartCheckBox";

export default {
  components: {
    CartCheckBox
  },
  methods: {
    // 当点击全选按钮时
    clickSelectedAll() {
      // 取到全选按钮点击后的状态
      const flag = !this.isSelectedAll;
      this.$store.commit("changeAllState", flag);
    }
  },
  computed: {
    totalPrice() {
      return this.$store.state.productList
        .filter(item => item.checked)
        .reduce((pre, next) => {
          return pre + next.count * next.price;
        }, 0);
    },
    calculatorCount() {
      return this.$store.state.productList
        .filter(item => item.checked)
        .reduce((pre, next) => {
          return pre + next.count;
        }, 0);
    },
    // 控制是否选中全部
    isSelectedAll() {
      // 如果数组为空，则直接返回false
      if (this.$store.state.productList.length === 0) return false;
      return this.$store.state.productList.every(item => item.checked);
    }
  }
};
</script>

<style lang="less" scoped>
.cart-bottom-bar {
  background-color: rgb(238, 238, 238);
  height: 35px;
  display: flex;
  .checkAll {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .right {
    flex: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .total-price {
      padding-left: 20px;
    }
    .calculator {
      height: 35px;
      line-height: 35px;
      width: 30%;
      // font-size: 12px;
      background-color: var(--color-tint);
    }
  }
}
</style>
