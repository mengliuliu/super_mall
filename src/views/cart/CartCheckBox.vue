<template>
  <div class="cart-check-box">
    <span
      class="iconfont"
      :class="{
        'icon-xuanzekuangmoren': !checked,
        'icon-xuanzekuangxuanzhong': checked
      }"
    >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
.cart-check-box {
  span {
    font-size: 26px;
  }
}
</style>
