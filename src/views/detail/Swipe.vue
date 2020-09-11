<template>
  <div class="swipe">
    <van-swipe :autoplay="2000" class="swipe-wrap">
      <van-swipe-item v-for="(item, index) in topImages" :key="index">
        <img v-lazy="item" @load="imgLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgLoad() {
      // 轮播图中的图片加载完毕利用中央事件总线触发imgLoad事件
      if (this.flag) {
        this.$emit("imgLoad");
        this.flag = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.swipe {
  .swipe-wrap {
    height: 300px;
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
