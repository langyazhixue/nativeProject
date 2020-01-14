import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import * as reactNav from 'react-navigation';
import RootTabNavigator from './containers/App';
import {RootInitNavigator} from './containers/App';

const switchNavigator = createSwitchNavigator(
  {
    Init: RootInitNavigator,
    Main: RootTabNavigator,
  },
  {
    initialRouteName: 'Init',
    // defaultNavigationOptions 用于屏幕的默认导航选项
    resetOnBlur: true, //  - 切换离开屏幕时，重置所有嵌套导航器的状态， 默认为true。
    backBehavior: 'initialRoute', // initialRoute 返回初始选项卡，order返回上一个选项卡，history返回上次访问标签或none。
  },
);
export default class App extends Component {
  //  配置导航栏显示内容
  render() {
    console.log(reactNav);
    const RootTabs = createAppContainer(switchNavigator);
    return <RootTabs />;
  }
}
