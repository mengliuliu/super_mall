<template>
  <div class="detail">
    <!-- 导航条 -->
    <detail-nav-bar
      class="nav-bar"
      @titleClick="titleClick"
      ref="detailNavBar"
    ></detail-nav-bar>

    <!-- 滚动条 -->
    <scroll class="scroll" :probeType="3" ref="scroll" @scrollPage="scrollPage">
      <!-- 轮播图 -->
      <swipe :topImages="topImages" @imgLoad="imgLoad"></swipe>

      <!-- 商品基础信息 -->
      <detail-base-info :base="base"></detail-base-info>

      <!-- 店家详细信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>

      <!-- 商品详细信息 -->
      <detail-goods-info
        :detailInfo="detailInfo"
        @imgLoad="imgLoad2"
      ></detail-goods-info>

      <!-- 商品参数信息 -->
      <detail-param-info :paramInfo="paramInfo" ref="param">
      </detail-param-info>

      <!-- 商品评论信息 -->
      <detail-comment-info
        :commentInfo="commentInfo"
        @imgLoad="imgLoad2"
        ref="comment"
      ></detail-comment-info>

      <!-- 推荐信息 -->
      <goods-list :goodsList="recommendInfo" ref="recommend"></goods-list>
    </scroll>

    <!-- 底部栏 -->
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

    <!-- 一键回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/DetailNavBar";
import DetailBaseInfo from "@/views/detail/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/DetailBottomBar";
import Swipe from "@/views/detail/Swipe";

import BackTop from "@/components/content/BackTop";
import GoodsList from "@/components/content/home/GoodsList";

import Scroll from "@/components/common/scroll/Scroll";

import { debounce } from "@/common/utils";

import { mapActions } from "vuex";

import {
  getDetail,
  getRecommend,
  GoodsBaseInfo,
  Shop,
  GoodsParam
} from "@/network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: 0,
      // 轮播图数据
      topImages: [],
      // 商品的基础信息
      base: {},
      // 店家的基础信息
      shop: {},
      // 商品的详细信息
      detailInfo: {},
      // 商品的参数信息
      paramInfo: {},
      // 商品的评论信息
      commentInfo: {},
      // 推荐信息
      recommendInfo: [],
      // 存储主题距离顶部的位置
      themeTopY: [],
      // 得到距离的函数
      getThemeTopY: null,
      // 记录当前页面处于滚动条的位置
      currentIndex: 0,
      // 控制backTop图标的显示与隐藏
      isShow: false
    };
  },
  async created() {
    console.log("created");
    // 1. 获取并保存 iid
    this.iid = this.$route.query.iid;
    // 2. 获取轮播图数据并保存
    let res = await getDetail(this.iid);
    // console.log(res);
    this.topImages = res.data.result.itemInfo.topImages;
    const data = res.data.result;
    console.log(data);

    // 3. 整合商品的基础信息数据
    this.base = new GoodsBaseInfo(
      data.itemInfo,
      data.columns,
      data.shopInfo.services
    );

    // 4. 整合店家的基础信息数据
    this.shop = new Shop(data.shopInfo);

    // 5. 整合商品的详细信息
    this.detailInfo = data.detailInfo;
    // console.log(this.detailInfo);

    // 6. 整合商品的参数信息
    this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
    console.log(this.paramInfo);

    // 7. 整合商品的评论信息
    this.commentInfo = data.rate.list[0];

    // 8. 获取推荐数据
    res = await getRecommend();
    this.recommendInfo = res.data.data.list;
    console.log(res);

    // 9. 给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
      console.log(this.themeTopY);
    }, 200);
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("detailItemImageLoad", () => {
      refresh();
      this.getThemeTopY && this.getThemeTopY();
    });
  },
  components: {
    DetailNavBar,
    Swipe,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  methods: {
    ...mapActions(["addProduct"]),
    // imgLoad是子组件（swipe）触发的事件
    imgLoad() {
      // 监听轮播图中的图片触发的imgLoad事件
      // 轮播图中不用防抖，因为轮播图只会触发一次imgLoad事件，在Swipe组件中进行判断了
      this.$refs.scroll.refresh();
    },
    // 监听商品详细信息中图片的加载完成
    imgLoad2() {
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      refresh();

      this.getThemeTopY && this.getThemeTopY();
    },
    // 导航条自定义的标题点击事件
    titleClick(index) {
      console.log(index);
      console.log(this.themeTopY[index]);
      this.$refs.scroll.scrollToPosition(0, -this.themeTopY[index] + 44);
    },
    // scroll中的内容滚动时触发该事件
    scrollPage(position) {
      // 1. 联动效果的实现
      console.log(position);
      const positionY = -position.y;
      const length = this.themeTopY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY > this.themeTopY[i] &&
          positionY <= this.themeTopY[i + 1]
        ) {
          // 此时将当前nav的索引传递给nav-bar组件
          this.$refs.detailNavBar.currentIndex = i;
          this.currentIndex = i;
        }
      }

      // 2. 控制 一键回到顶部 图标是否显示
      if (-position.y > 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    // 回到顶部图标被点击
    backTopClick() {
      this.$refs.scroll.scrollToPosition(0, 0);
    },
    // 点击购物车时触发的事件
    addToCart() {
      // 1. 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.base.title;
      product.desc = this.base.desc;
      product.price = this.base.realPrice;
      product.iid = this.iid;
      console.log(product);

      // 2. 将商品添加到购物车中
      // this.$store.dispatch("addProduct", product);
      // 调用Actions中映射过来的方法
      this.addProduct(product).then((res) => {
        console.log(res);

        // 3. 显示提示内容
        this.$toast(res);
        // Toast(res);
      });
      // console.log("addToCart");

      // 3. 使用编程式导航，跳转到购物车页面
      // this.$router.push("/cart");
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  background-color: white;
  z-index: 9;
  .nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .scroll {
    height: calc(100vh - 44px - 49px);
  }
}
</style>
