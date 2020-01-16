import StorageUtil from './StorageUtil';
export default class offLineStorageUtil {
  static setData(url, data, callback) {
    if (!data || !url) {
      return;
    }
    return StorageUtil.setData(url, JSON.stringify(this.wrapData(data)));
  }
  static wrapData(data) {
    return {
      data,
      timestamp: new Date().getTime(),
    };
  }
  static getData(url) {
    return StorageUtil.getData(url);
  }
  static deleteData(url) {
    return StorageUtil.deleteData(url);
  }
  static checkTimeStampValid(targetTimestamp) {
    const currentTimestamp = new Date().getTime();
    if (currentTimestamp - targetTimestamp > 4 * 60 * 60 * 1000) {
      return false;
    } else {
      return true;
    }
  }
}
