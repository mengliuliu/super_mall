<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.navbar {
  height: 44px;
  line-height: 44px;
  display: flex;

//   background-color: var(--color-tint);
//   color: white;
  .left {
    width: 60px;
    // background-color: red;
  }
  .middle {
    flex: 1;
  }
  .right {
    width: 60px;
    // background-color: red;
  }
}
</style>
