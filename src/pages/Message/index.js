import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home/index';
import {defaultNavigationOptions} from '../../globalSetting';
const MessageNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: '消息',
      },
    },
  },
  {
    // 默认的导航栏信息在这里配置
    initialRouteName: 'Home',
    defaultNavigationOptions: {...defaultNavigationOptions},
    mode: 'card',
  },
);

export default MessageNavigator;
