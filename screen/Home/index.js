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

export default class HomeScreen extends React.Component {
  hanlderClick = () => {
    console.log(this.props);
    // 自带navigation
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      myTitle: 'Detail',
    });
  };
  static navigationOptions = {
    title: '首页',
    headerBackTitle: 'home',
  };
  componentDidMount() {
    console.log('home componentDidMount');
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#cfcfcf'}}>
        <View>
          <Text>首页</Text>
          <Button title="跳到详情页面" onPress={this.hanlderClick} />
        </View>
      </SafeAreaView>
    );
  }
}
