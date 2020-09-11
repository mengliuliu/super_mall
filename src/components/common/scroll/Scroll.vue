<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
// 注册插件
BScroll.use(Pullup);
BScroll.use(MouseWheel);

export default {
  data() {
    return {
      bs: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.bs = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      mouseWheel: true
    });
    console.log(this.bs);

    // 监听 better-scroll 的滚动事件
    if (this.probeType === 2 || this.probeType === 3) {
      this.bs.on("scroll", position => {
        // console.log(position);
        // 发送事件并传递位置对象
        this.$emit("scrollPage", position);
      });
    }

    // 监听 better-scroll 的上拉事件
    if (this.pullUpLoad) {
      this.bs.on("pullingUp", () => {
        this.$emit("pullingUpLoad");
      });
    }
  },
  methods: {
    // 使页面回到指定位置
    scrollToPosition(x, y) {
      this.bs && this.bs.scrollTo(x, y);
      // console.log("backTop被点击了");
    },
    refresh() {
      this.bs && this.bs.refresh();
    },
    // 完成上拉加载更多
    finishPullUp() {
      this.bs && this.bs.finishPullUp();
    }
  }
};
</script>

<style lang="less" scoped></style>
