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

export default class MessageScreen extends React.Component {
  hanlderClick = () => {
    console.log(this.props);
    // 自带navigation
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      myTitle: 'Detail',
    });
  };
  static navigationOptions = {
    title: 'message',
    headerBackTitle: 'home',
  };
  componentDidMount() {
    console.log('home componentDidMount');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Message</Text>
        {/* <Button title="跳到详情页面" onPress={this.hanlderClick} /> */}
      </View>
    );
  }
}
