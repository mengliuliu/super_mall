<template>
  <div class="tab-page">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="[index === currentIndex ? 'active page' : 'page']"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      // 通过自定义事件，像父组件传递点击的 tab 栏的索引
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  color: var(--color-tint);
  span {
    border-bottom: 3px solid var(--color-tint);
  }
}

.tab-page {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  background-color: #fff;
  .page {
    flex: 1;
    span {
      padding: 0 8px 8px;
    }
  }
}
</style>
