// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class StorageUtil {
  static setData(keyName, keyData) {
    let promise = new Promise((reslove, reject) => {
      AsyncStorage.setItem(keyName, keyData, error => {
        if (error) {
          return reslove({
            code: 0,
            message: '存储失败',
          });
        } else {
          return reslove({
            code: 1,
            message: '存储成功',
          });
        }
      });
    });
    return promise;
  }

  static deleteData(keyName) {
    let promise = new Promise((reslove, reject) => {
      AsyncStorage.removeItem(keyName, error => {
        if (error) {
          return reslove({
            code: 0,
            message: '删除失败',
          });
        } else {
          return reslove({
            code: 1,
            message: '删除成功',
          });
        }
      });
    });
    return promise;
  }

  static getData(keyName) {
    let promise = new Promise((resolve, reject) => {
      AsyncStorage.getItem(keyName, (error, result) => {
        if (error) {
          return resolve({
            code: 0,
            message: '获取失败',
          });
        } else {
          return resolve({
            code: 1,
            message: '获取成功',
            data: result,
          });
        }
      });
    });
    return promise;
  }
}
