import axios from 'axios'
import { Toast } from "vant";

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_HOST_URL, 
  timeout: 60000, // 请求超时时间
})

const service = axios.create({
    baseURL: import.meta.env.VITE_HOST_URL,
    timeout: 5000

});
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        if (error.response.status === 500) {
            Toast('服务出错了，请稍后再试');
            return
        }
        if (error.response.status === 401) {
            
            return;
        }
        if (error.response.status === 400) {
            Toast(error.response.data.title);
        }
        return Promise.reject();
    }
);

export default service;
