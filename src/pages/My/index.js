import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home/index';
import {defaultNavigatiionOptions} from '../../globalSetting';

const MyNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: '我的',
      },
    },
  },
  {
    // 默认的导航栏信息在这里配置
    initialRouteName: 'Home',
    defaultNavigationOptions: {...defaultNavigatiionOptions},
  },
);
export default MyNavigator;
