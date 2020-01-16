import http from './http';
import offLineStorageUtil from './offLineStorageUtil';
export default class OffLineRequest {
  static getData(url, method = 'post', options = {}, needLocalStorage = false) {
    return new Promise((resolve, reject) => {
      this.fetchLocalData(
        url,
        method,
        options,
        needLocalStorage,
        resolve,
        reject,
      );
    });
  }
  static fetchLocalData(
    url,
    method,
    options,
    needLocalStorage,
    resolve,
    reject,
  ) {
    offLineStorageUtil.getData(url).then(result => {
      if (result.code === 1 && result.data) {
        let wrapdata = result.data;
        wrapdata = JSON.parse(wrapdata);
        if (
          wrapdata.timestamp &&
          offLineStorageUtil.checkTimeStampValid(wrapdata.timestamp)
        ) {
          return resolve(wrapdata.data);
        } else {
          return this.fetchNetData(
            url,
            method,
            options,
            needLocalStorage,
            resolve,
            reject,
          );
        }
      } else {
        return this.fetchNetData(
          url,
          method,
          options,
          needLocalStorage,
          resolve,
          reject,
        );
      }
    });
  }
  static getRequest(url, method, options) {
    if (method === 'get') {
      return http.get(url, {
        params: options,
      });
    } else {
      return http[method](url, options);
    }
  }
  static setData(url, data) {
    offLineStorageUtil.setData(url, data);
  }

  static fetchNetData(url, method, options, needLocalStorage, resolve, reject) {
    // 写一个通用方法
    this.getRequest(url, method, options)
      .then(res => {
        // 存储到本地
        if (needLocalStorage) {
          this.setData(url, res);
        }
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  }
}
