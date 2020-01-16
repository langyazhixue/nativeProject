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

import offLineRequest from '../../../utils/offLineRequest';
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
  // 测试离线缓存接口

  // .get('index/getData', {
  //   params: {
  //     type: 1,
  //     page: 1,
  //   },
  // })

  _test() {
    const url = 'index/getData';
    const method = 'get';
    const options = {
      type: 1,
      page: 1,
    };
    offLineRequest
      .getData(url, method, options, true)
      .then(res => {
        console.log(res);;
      })
      .catch(error => {
        console.log(error);;
      });;
  }
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View style={styles.container}>
          <View>
            <Text>离线缓存数据Demo</Text>
            <Button title="测试离线缓存" onPress={this._test} />
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
