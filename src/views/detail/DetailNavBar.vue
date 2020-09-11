<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template v-slot:left
        ><div class="left">
          <img
            src="@/assets/img/common/back.svg"
            alt=""
            @click="imgClick"
          /></div
      ></template>
      <template v-slot:middle>
        <div class="middle">
          <span
            v-for="(item, index) in middleList"
            :key="index"
            class="title"
            :class="{ active: index === currentIndex }"
            @click="titleClick(index)"
            >{{ item }}</span
          >
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  data() {
    return {
      middleList: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    // 监听图片的点击事件
    imgClick() {
      // 回到上一个历史记录
      this.$router.back();
    },
    // 监听标题的点击事件
    titleClick(index) {
      // 切换标题
      this.currentIndex = index;
      // 触发自定义事件并传递索引，让父组件监听
      this.$emit("titleClick", index);
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="less" scoped>
.detail-nav-bar {
  .left {
    // line-height: 44px;
    // display: flex;
    // flex-flow: column;
    padding-top: 8px;
    img {
    }
  }
  .middle {
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    .title {
      // flex: 1;
    }
  }
}

.active {
  color: var(--color-tint);
}
</style>
