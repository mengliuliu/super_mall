<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar class="tab-bar"></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
export default {
  name: "app",
  components: {
    TabBar
  }
};
</script>

<style lang="less" scoped>
/* 引入字体图标样式和基础样式 */
@import url("~@/assets/css/base.css");
@import url("~@/assets/css/iconfont.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 65px;
}
.tab-bar {
  z-index: 9;
  background-color: #fff;
}
</style>
