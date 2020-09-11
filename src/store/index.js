import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

// 1. 安装Vuex
Vue.use(Vuex);

// 2. 创建一个 Store 对象
const state = {
  productList: []
};

const store = new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions
});

// 3. 导出 store 对象
export default store;
