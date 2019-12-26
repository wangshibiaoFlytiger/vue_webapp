/**
 * 用于访问movie后台api的axios实例
 */

//引入axios
import axios from "axios";

let axiosInstance = axios.create();
// axios默认配置
axiosInstance.defaults.timeout = 10000;
// baseUrl定义在html页面
axiosInstance.defaults.baseURL = "http://172.16.10.195:8080";

// 请求拦截
axiosInstance.interceptors.request.use(
  config => {
    // 给请求头加键值对
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  error => {
    // 错误信息
    return Promise.reject(error.response);
  }
);

// 响应拦截
axiosInstance.interceptors.response.use(
  response => {
    if (response.data.code == 0) {
      // 异常请求要做的事
    } else {
      // 正常请求要做的事
      return response;
    }
  },
  error => {
    // 返回接口返回的错误信息
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
