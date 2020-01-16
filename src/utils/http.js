/*
 ** http 封装
 */
import axios from 'axios';
const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 15 * 1000;
axiosInstance.defaults.baseURL = 'http://m.app.haosou.com';
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);
const httpInstance = {
  handleResponse(instance, options = {}) {
    const {slient} = options;
    return new Promise((resolve, reject) => {
      instance
        .then(response => {
          const responseData = response.data;
          resolve(responseData);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  get(url, options) {
    return this.handleResponse(axiosInstance.get(url, options), options);
  },
  post(url, data, options) {
    return this.handleResponse(axiosInstance.post(url, data, options), options);
  },
  put(url, data, options) {
    return this.handleResponse(axiosInstance.put(url, data, options), options);
  },
  delete(url, options) {
    return this.handleResponse(axiosInstance.delete(url, options), options);
  },
};

export default httpInstance;
