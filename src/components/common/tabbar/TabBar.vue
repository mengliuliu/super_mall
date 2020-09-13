<template>
  <div class="tabbar">
    <div
      class="tabbar_item"
      :class="[currentIndex === index ? 'active' : '']"
      v-for="(item, index) in tabBarInfo"
      :key="item.icon"
      @click="tabBarClick(index, item.path)"
    >
      <span class="item_icon iconfont" :class="item.icon"></span>
      <span class="item_name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabBarInfo: [
        { name: "首页", icon: "icon-home", path: "home" },
        { name: "分类", icon: "icon-menu", path: "category" },
        { name: "购物车", icon: "icon-cart", path: "cart" },
        { name: "我的", icon: "icon-nickname", path: "profile" }
      ],
      //   当前被点击的索引
      currentIndex: 0
    };
  },
  methods: {
    tabBarClick(index, path) {
      this.currentIndex = index;
      //   编程式导航跳转
      this.$router.push(path);
      console.log(path);
    }
  }
};
</script>

<style lang="less" scoped>
.active {
  color: var(--color-high-text);
}
.tabbar {
  display: flex;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  .tabbar_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .item_icon {
      font-size: 30px;
    }
    .item_name {
      margin-top: 10px;
    }
  }
}
</style>
