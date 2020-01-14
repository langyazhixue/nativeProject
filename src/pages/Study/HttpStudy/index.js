import React from 'react';
import {layoutStyles} from '../../../styles/layout';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Button,
  Text,
} from 'react-native';

import http from '../../../utils/http';

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

  componentDidMount() {
    // this._getData();
  }

  _getData() {
    http
      .get('index/getData', {
        params: {
          type: 1,
          page: 1,
        },
      })
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View style={styles.container}>
          <View>
            <Text>网络加载</Text>
            <Button title="获取数据" onPress={this._getData} />
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
