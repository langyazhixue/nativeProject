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
