import React from 'react';
import {layoutStyles} from '../../../styles/layout';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export default class MyScreen extends React.Component {
  // hanlderClick = () => {
  //   console.log(this.props);
  //   // 自带navigation
  //   const {navigation} = this.props;
  //   navigation.navigate('Detail', {
  //     myTitle: 'Detail',
  //   });
  // };
  static navigationOptions = {
    title: 'my',
  };
  componentDidMount() {
    console.log('home componentDidMount');
  }
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>公司</Text>
        </View>
      </SafeAreaView>
    );
  }
}

