import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import * as reactNav from 'react-navigation';
import RootTabNavigator from './containers/App';
export default class App extends Component {
  //  配置导航栏显示内容
  render() {
    console.log(reactNav);
    const RootTabs = createAppContainer(RootTabNavigator);
    return <RootTabs />;
  }
}
