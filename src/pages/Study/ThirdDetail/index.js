import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default class ThirdDetailScreen extends React.Component {
  // 在这里配置每个页面的头部信息
  static navigationOptions = props => {
    console.log(props);
    const {navigation} = props;
    const {
      state: {params},
    } = navigation;
    console.log(params);
    return {
      title: params.myTitle,
    };
  };
  _goBack = () => {
    this.props.navigation.goBack();
  };
  navigate = () => {
    // navigation.navigate() 如果栈中已经有这个页面了，是不会进入新页面的
    this.props.navigation.push('Third');
  };
  _popToPop = () => {
    this.props.navigation.popToTop();
  };
  render() {
    return (
      <View>
        <Text>333详情页</Text>
        <Button title="强制本页跳转" onPress={this.navigate} />
        <Button title="回退到上一个页面" onPress={this._goBack} />
        <Button title="回到占顶" onPress={this._popToPop} />
      </View>
    );
  }
}
