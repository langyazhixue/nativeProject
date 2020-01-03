import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './screen/Home/index';
import MyScreen from './screen/My/index';
import MessageScreen from './screen/Message/index';
import DetailScreen from './screen/Home/Detail/index';
import ThirdDetailScreen from './screen/Home/ThirdDetail/index';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
// 创建stack
const homeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
    ThirdDetail: {
      screen: ThirdDetailScreen,
    },
  },
  {
    // 默认的导航栏信息在这里配置
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'green',
        color: 'red',
      },
      gestureResponseDistance: 100,
      // gesturesEnabled: false,
    },
  },
);

const RootTabNavigator = createBottomTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions: {
      title: '首页1',
    },
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      title: 'Message1',
    },
  },
  My: {
    screen: MyScreen,
    navigationOptions: {
      title: 'My1',
    },
  },
});
export default class App extends Component {
  //  配置导航栏显示内容

  render() {
    // const RootStack = createAppContainer(stack);
    // return <RootStack />;
    const RootTabs = createAppContainer(RootTabNavigator);
    return <RootTabs />;
  }
}
