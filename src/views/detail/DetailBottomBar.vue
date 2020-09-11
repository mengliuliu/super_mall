<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div class="service">
        <span class="iconfont icon-kefu"></span>
        <span>客服</span>
      </div>
      <div class="shop">
        <span class="iconfont icon-dianpu"></span>
        <span>店铺</span>
      </div>
      <div class="collect">
        <span class="iconfont icon-shoucang1"></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="add" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style lang="less" scoped>
.detail-bottom-bar {
  position: relative;
  z-index: 10;
  background-color: red;
  height: 49px;

  .left {
    width: 50%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    line-height: 100%;
    font-size: 16px;
    .service,
    .shop,
    .collect {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: 600;
    }
  }
  .right {
    width: 50%;
    height: 100%;
    background-color: blue;
    display: flex;
    line-height: 49px;
    font-size: 18px;
    .add {
      width: 55%;
      height: 100%;
      background-color: rgb(255, 221, 14);
    }
    .buy {
      width: 45%;
      height: 100%;
      background-color: rgb(255, 120, 154);
    }
  }
}
</style>
