<template>
  <div class="home">
    <!-- 导航条 -->
    <div class="home_nav">
      <nav-bar>
        <template v-slot:middle>
          购物街
        </template>
      </nav-bar>
    </div>

    <!-- tab标签页 -->
    <!-- <tab-page
      class="tab-page"
      ref="tabPage"
      :titles="typeList"
      @tabClick="tabClick"
    ></tab-page> -->

    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scrollPage="scrollPage"
      :pull-up-load="true"
      @pullingUpLoad="pullingUpLoad"
    >
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link"><img v-lazy="item.image"/></a>
        </van-swipe-item>
      </van-swipe>

      <!-- 推荐 -->
      <recommend :recommendList="recommends"></recommend>

      <!-- 流行 -->
      <popular class="popular"></popular>

      <!-- tab标签页 -->
      <tab-page
        class="tab-page"
        ref="tabPage"
        :titles="typeList"
        @tabClick="tabClick"
      ></tab-page>

      <!-- tab标签页的内容 -->
      <goods-list :goodsList="showGoodsType"></goods-list>
    </scroll>

    <!-- 一键回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import Recommend from "@/views/home/Recommend";
import Popular from "@/views/home/Popular";

import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import TabPage from "@/components/content/TabPage";
import BackTop from "@/components/content/BackTop";
import GoodsList from "@/components/content/home/GoodsList";

import {
  getHomeMultiData,
  getHomeMultiData2,
  getHomeGoods
} from "@/network/home";

import { debounce } from "@/common/utils";

export default {
  components: {
    NavBar,
    Recommend,
    Popular,
    TabPage,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // result: null
      banners: [], // 轮播图数据
      recommends: [], // 推荐数据

      typeList: ["流行", "新款", "精选"], // tab栏的分类列表
      currentType: "pop", // tab栏被点击的类型

      goods: {
        new: {
          page: 0,
          list: []
        },
        pop: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },

      // 控制backTop图标的显示与隐藏
      isShow: false
      // tab标签页距离顶部的距离
      // tabPageToTop: 651,
      // 标签页是否显示
      // tabPageIsShow: false
    };
  },
  created() {
    // 发送请求，得到轮播图和推荐数据
    this.getHomeMultiDataIsMed();

    // 发送请求，得到商品分类列表数据
    this.getHomeGoodsIsMed("pop");
    this.getHomeGoodsIsMed("sell");
    this.getHomeGoodsIsMed("new");
  },
  mounted() {
    // 拿到scroll组件，并且使用组件中的bs的on方法，监听滚动，从而判断时候显示backTop
    // this.$refs.scroll.bs.on("scroll", function(position) {
    //   console.log(position);
    // });

    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("homeItemImageLoad", () => {
      refresh();
    });

    // 2. tab标签页的位置
    // setTimeout(() => {
    //   console.log(this.$refs.tabPage.$el.offsetTop);
    // }, 10000);
  },
  computed: {
    showGoodsType() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    // 事件处理函数
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 回到顶部图标被点击
    backTopClick() {
      this.$refs.scroll.scrollToPosition(0, 0);
    },
    // 处理子组件触发的scrollPage事件
    scrollPage(position) {
      // 1. 控制 一键回到顶部 图标是否显示
      if (-position.y > 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }

      // 2. 控制 标签页 的显示与隐藏
      // if (-position.y > this.tabPageToTop) {
      //   this.tabPageIsShow = !this.tabPageIsShow;
      // }
    },
    // 处理上拉加载更多
    pullingUpLoad() {
      // 调用请求home页商品数据的方法，传入当前的商品类型
      // console.log(this.currentType);
      this.getHomeGoodsIsMed(this.currentType);
      // 完成了上拉加载更多
      this.$refs.scroll.finishPullUp();
    },
    //

    // 接口调用函数
    async getHomeMultiDataIsMed() {
      const res = await getHomeMultiData();
      // this.result = res.data.data;
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      // console.log(this.result);
    },
    async getHomeGoodsIsMed(type) {
      // 计算请求的页码值
      const page = this.goods[type].page + 1;
      // console.log("异步前");
      const res = await getHomeGoods(type, page);
      // console.log("异步后");

      this.goods[type].list.push(...res.data.data.list);
      this.goods[type].page += 1;

      // console.log(res);
    }
  }
};
</script>

<style lang="less" scoped>
.scroll {
  height: calc(100vh - 107px);
  // height: 300px;
  // background-color: #e41919;

  // position: absolute;
  // top: 44px;
  // left: 0;
  // right: 0;
  overflow: hidden;
  // overflow-y: scroll;
}

.home {
  padding-top: 44px;
  background-color: #fff;
  .home_nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    // margin-top: 44px;
  }
  .van-swipe {
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }
  .popular {
    position: relative;
    left: 3px;
    // width: 100%;
  }
  .tab-page {
    position: sticky;
    top: 44px;
    // z-index: 9;
    // background-color: #fff;
  }
}
</style>
