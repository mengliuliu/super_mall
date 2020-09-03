import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 引入vant组件库
import { Swipe, SwipeItem, Lazyload } from "vant";
import "vant/lib/index.css";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.config.productionTip = false;

// 把总线放到Vue的原型对象上，供所有Vue实例对象使用
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
