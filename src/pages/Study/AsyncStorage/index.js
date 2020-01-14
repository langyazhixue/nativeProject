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

import StorageUtil from '../../../utils/StorageUtil';
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

  _setData = () => {
    StorageUtil.setData('key1', 'test').then(result => {
      Alert.alert(result);
    });
  };
  _getData = () => {
    StorageUtil.getData('key1').then(result => {
      Alert.alert(result);
    });
  };

  _deleteData = () => {
    StorageUtil.deleteData('key1').then(result => {
      Alert.alert(result);
    });
  };
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View style={styles.container}>
          <View>
            <Text>数据缓存</Text>
            <Button title="存储数据" onPress={this._setData} />
            <Button title="获取数据" onPress={this._getData} />
            <Button title="删除数据" onPress={this._deleteData} />
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
