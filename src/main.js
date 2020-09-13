import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
// or with options 也可以直接在这里设置参数
Vue.use(VueLazyload, {
  loading: require("./assets/img/common/placeholder.png") //图片加载的路径
});

// 引入vant组件库
import { Swipe, SwipeItem, Lazyload, Toast } from "vant";
import "vant/lib/index.css";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Toast);

Vue.config.productionTip = false;

// 把总线放到Vue的原型对象上，供所有Vue实例对象使用
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
