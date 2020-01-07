import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home/index';
import {defaultNavigationOptions} from '../../globalSetting';
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '首页',
      },
    },
  },
  {
    // 默认的导航栏信息在这里配置
    initialRouteName: 'Home',
    defaultNavigationOptions: {...defaultNavigationOptions},
    mode: 'card', // 页面切换模式， 左右是card(相当于IOS中的push效果)，上下相当于modal(相当于IOS中的modal效果)
  },
);

export default HomeNavigator;
