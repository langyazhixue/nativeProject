import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home/index';
import {defaultNavigationOptions} from '../../globalSetting';
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      // path(可选)， 用来设置支持schema跳转时使⽤用，具体使⽤会在下⽂文的有关 Schema 章节中讲到
      navigationOptions: {
        title: '首页',
      },
    },
  },
  {
    // 默认的导航栏信息在这里配置
    initialRouteName: 'Home',
    // initialRouteKey: 'homeKey',
    // initialRouteParams: 'jxx',
    // disableKeyboardHandling: true, // 如果为true 则导航到新屏幕时键盘不会自动关闭
    defaultNavigationOptions: {...defaultNavigationOptions},
    mode: 'card', // 页面切换模式， 左右是card(相当于IOS中的push效果)，上下相当于modal(相当于IOS中的modal效果)
  },
);

export default HomeNavigator;
