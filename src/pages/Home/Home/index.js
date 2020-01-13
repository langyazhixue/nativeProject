import React, {Component} from 'react';
import {layoutStyles} from '../../../styles/layout';
import {SafeAreaView, View, Text, Button} from 'react-native';

export default class HomePage extends Component {
  hanlderClick = () => {
    console.log(this.props);
    // 自带navigation
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      myTitle: 'Home详情页面',
    });
  };
  static navigationOptions = {
    title: '首页',
    // headerBackTitle: null,
  };
  componentDidMount() {
    console.log('home componentDidMount');
  }
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View>
          <Text>首页</Text>
          <Button title="跳到详情页面" onPress={this.hanlderClick} />
        </View>
      </SafeAreaView>
    );
  }
}
