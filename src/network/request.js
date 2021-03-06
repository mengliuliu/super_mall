import axios from "axios";

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 1000
  });
  // 2. axios的拦截
  // 2.1 请求拦截器// 添加请求拦截器
  instance.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么
      return config;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 2.2 响应拦截器
  // 添加响应拦截器
  instance.interceptors.response.use(
    function(response) {
      // 对响应数据做点什么
      return response;
    },
    function(error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );

  // 3. 发生真正的网络请求
  return instance(config);
}

export function request2(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 1000
  });
  // 3. 发生真正的网络请求
  return instance(config);
}

