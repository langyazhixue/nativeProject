import React from 'react';
import {layoutStyles} from '../../../styles/layout';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Button,
  Text,
  Alert,
} from 'react-native';

import offLineStorageUtil from '../../../utils/offLineStorageUtil';
export default class NavigationOptionsStudyScreen extends React.Component {
  // 静态属性配置 导航页面的属性
  static navigationOptions = props => {
    const {navigation} = props;
    const {
      state: {params},
    } = navigation;
    return {
      headerTitle: params.headerTitle,
    };
  };
  // getData(url) {
  //   return new Promise((resolve, reject) => {
  //   //   this.fetchLocalData(url)
  //   //     .then(wrapdata => {
  //   //       if (
  //   //         wrapdata &&
  //   //         offLineStorageUtil.checkTimestampValid.checkTimestampValid(
  //   //           wrapdata.timestamp,
  //   //         )
  //   //       ) {
  //   //         resolve(wrapdata);
  //   //       } else {
  //   //         this.fetchNetData(url)
  //   //           .then(data => {
  //   //             //给数据打个时间戳
  //   //             resolve(this._wrapData(data));
  //   //           })
  //   //           .catch(e => {
  //   //             reject(e);
  //   //           });
  //   //       }
  //   //     })
  //   //     .catch(error => {
  //   //       console.log(error);
  //   //     });
  //   // });
  // }
  fetchLocalData(url) {}
  fetchNetData(url) {}
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View style={styles.container}>
          <View>
            <Text>离线缓存数据Demo</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
