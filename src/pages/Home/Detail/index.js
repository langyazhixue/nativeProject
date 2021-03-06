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

export default class DetailScreen extends React.Component {
  // 在这里配置每个页面的头部信息
  static navigationOptions = props => {
    console.log(props);
    const {navigation} = props;
    const {
      state: {params},
    } = navigation;
    return {
      title: params.headerTitle,
      headerBackTitle: params.headerTitle,
      // headerRight: (
      //   <Button
      //     title="third"
      //     onPress={() => {
      //       navigation.navigate('ThirdDetail', {
      //         myTitle: '第三详情页',
      //       });
      //     }}
      //   />
      // ),
    };
  };
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View>
          <Text>详情页面</Text>
        </View>
      </SafeAreaView>
    );
  }
}
