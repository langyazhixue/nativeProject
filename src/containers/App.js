import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeNavigator from '../pages/Home';
import CompanyNavigator from '../pages/Company';
import MyNavigator from '../pages/My';
import MessageNavigator from '../pages/Message';
import StudyNavigator from '../pages/Study';
const RootTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: '首页',
      },
    },
    Company: {
      screen: CompanyNavigator,
      navigationOptions: {
        title: '公司',
      },
    },
    Message: {
      screen: MessageNavigator,
      navigationOptions: {
        title: '消息',
      },
    },

    MyNavigator: {
      screen: MyNavigator,
      navigationOptions: {
        title: '我的',
      },
    },
    StudyNavigator: {
      screen: MyNavigator,
      navigationOptions: {
        title: '学习',
      },
    },
  },
  {
    initialRouteName: 'Home',
    // initialRouteKey: 'homeKey',
    // initialRouteParams: 'jxx',
    // disableKeyboardHandling: true, // 如果为true 则导航到新屏幕时键盘不不会⾃自动关闭
    // defaultNavigationOptions: {},
  },
);

export default RootTabNavigator;
